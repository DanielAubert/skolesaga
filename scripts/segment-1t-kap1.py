#!/usr/bin/env python3
"""
Segmenter master-lydfilene for 1T kapittel 1.1 og 1.2.

Steg:
1. Estimer markør-tidspunkter fra tekstposisjon i kildeteksten
2. Kjør silencedetect for presise kuttpunkter
3. Splitt i segmenter (del1, del2, ..., del6)
"""

import os
import re
import subprocess

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
AUDIO_DIR = os.path.join(SCRIPT_DIR, '..', 'public', 'audio', '1t')
MASTER_DIR = os.path.join(AUDIO_DIR, '_master')
MD_PATH = os.path.join(SCRIPT_DIR, '..', 'docs', '1t-uttaletest-kap1-2.md')


def get_silences(filepath):
    """Kjør silencedetect og returner liste med (start, end, duration)."""
    result = subprocess.run(
        ['ffmpeg', '-i', filepath, '-af', 'silencedetect=noise=-30dB:d=0.3', '-f', 'null', '-'],
        capture_output=True, text=True
    )
    silences = []
    current_start = 0
    for line in result.stderr.split('\n'):
        m_start = re.search(r'silence_start: ([\d.]+)', line)
        m_end = re.search(r'silence_end: ([\d.]+) \| silence_duration: ([\d.]+)', line)
        if m_start:
            current_start = float(m_start.group(1))
        if m_end:
            silences.append((current_start, float(m_end.group(1)), float(m_end.group(2))))
    return silences


def get_duration(filepath):
    """Hent varighet i sekunder."""
    result = subprocess.run(
        ['ffprobe', '-v', 'error', '-show_entries', 'format=duration',
         '-of', 'default=noprint_wrappers=1:nokey=1', filepath],
        capture_output=True, text=True
    )
    return float(result.stdout.strip())


def extract_chapter_text(md_content, chapter_header, next_chapter_header):
    """Ekstraher kapitteltekst fra markdown."""
    start_idx = md_content.index(chapter_header)
    if next_chapter_header:
        end_idx = md_content.index(next_chapter_header, start_idx + len(chapter_header))
    else:
        end_idx = len(md_content)
    return md_content[start_idx + len(chapter_header):end_idx].strip()


def estimate_marker_timestamps(chapter_text, total_duration):
    """Estimer tidspunkter for 'Slutt på del N' basert på tekstposisjon."""
    markers = []
    for m in re.finditer(r'Slutt på del (\d+)\.', chapter_text):
        char_pos = m.start()
        marker_num = int(m.group(1))
        # Estimer tidspunkt basert på relativ posisjon i teksten
        estimated_time = (char_pos / len(chapter_text)) * total_duration
        markers.append({
            'num': marker_num,
            'char_pos': char_pos,
            'estimated_time': estimated_time,
        })
        print(f'    Markør {marker_num}: tegnpos {char_pos}/{len(chapter_text)} → estimert ~{estimated_time:.1f}s')
    return markers


def find_precise_cuts(silences, markers, total_duration):
    """Finn presise kuttpunkter ved å bruke stillhetsdata nær estimerte tidspunkter."""
    cuts = []

    for marker in markers:
        est = marker['estimated_time']
        # Søk i et ±20s vindu rundt estimert tidspunkt
        window = 20.0
        candidates = [(s, e, d) for s, e, d in silences
                      if s >= est - window and s <= est + window and d >= 0.5]

        if not candidates:
            # Fallback: bruk alle stillheter i vinduet
            candidates = [(s, e, d) for s, e, d in silences
                          if s >= est - window and s <= est + window]

        if candidates:
            # Velg den lengste stillheten (seksjonspause > setningspause)
            best = max(candidates, key=lambda x: x[2])
            seg_end = best[0] + 0.3   # silence_start + 0.3s
            seg_start = best[1] - 0.2  # silence_end - 0.2s
        else:
            print(f'    ADVARSEL: Ingen stillhet funnet nær markør {marker["num"]} (~{est:.1f}s)')
            seg_end = est - 1.0
            seg_start = est + 2.0

        cuts.append({
            'marker_num': marker['num'],
            'seg_end': round(seg_end, 3),
            'seg_start': round(seg_start, 3),
            'silence_duration': round(best[2], 2) if candidates else 0,
        })
        print(f'    Markør {marker["num"]}: seg_end={seg_end:.2f}s, seg_start={seg_start:.2f}s '
              f'(stillhet: {best[2]:.2f}s)' if candidates else
              f'    Markør {marker["num"]}: FALLBACK seg_end={seg_end:.2f}s, seg_start={seg_start:.2f}s')

    return cuts


def split_audio(master_path, cuts, total_duration, file_prefix):
    """Splitt master-filen i segmenter."""
    num_segments = len(cuts)  # Én segment per markør
    segments = []

    for i in range(num_segments):
        # Start: etter forrige markør (eller 0 for første)
        if i == 0:
            start = 0
        else:
            start = cuts[i - 1]['seg_start']

        # Slutt: før denne markøren
        end = cuts[i]['seg_end']

        out_path = os.path.join(AUDIO_DIR, f'{file_prefix}-narrativ-del{i + 1}.mp3')
        cmd = f'ffmpeg -y -i "{master_path}" -ss {start:.3f} -to {end:.3f} -c copy "{out_path}"'
        subprocess.run(cmd, shell=True, capture_output=True)

        seg_duration = end - start
        print(f'  Del {i + 1}: {start:.2f}–{end:.2f}s ({seg_duration:.1f}s) → {os.path.basename(out_path)}')
        segments.append(out_path)

    return segments


def process_chapter(chapter_name, file_prefix, chapter_text):
    """Prosesser ett kapittel."""
    print(f'\n{"=" * 60}')
    print(f'{chapter_name}')
    print(f'{"=" * 60}')

    master_path = os.path.join(MASTER_DIR, f'{file_prefix}-narrativ-full-master.mp3')
    if not os.path.exists(master_path):
        print(f'  FEIL: Master-fil mangler: {master_path}')
        return

    total_duration = get_duration(master_path)
    print(f'  Master: {total_duration / 60:.1f} min ({total_duration:.1f}s)')

    # Estimer markør-tidspunkter fra tekstposisjon
    print('\n  Estimerte markør-tidspunkter:')
    markers = estimate_marker_timestamps(chapter_text, total_duration)
    print(f'  Fant {len(markers)} markører')

    if len(markers) == 0:
        print('  Kan ikke segmentere uten markører. Avbryter.')
        return

    # Finn presise kuttpunkter med silencedetect
    print('\n  Silencedetect:')
    silences = get_silences(master_path)
    print(f'  Fant {len(silences)} stillhetsperioder')

    # Filtrer: vis lange stillheter for debugging
    long_silences = [(s, e, d) for s, e, d in silences if d >= 1.0]
    print(f'  Lange stillheter (>1s): {len(long_silences)}')
    for s, e, d in long_silences:
        print(f'    {s:.2f}–{e:.2f}s ({d:.2f}s)')

    print('\n  Presise kuttpunkter:')
    cuts = find_precise_cuts(silences, markers, total_duration)

    # Splitt
    print(f'\n  Splitter i {len(cuts)} segmenter:')
    segments = split_audio(master_path, cuts, total_duration, file_prefix)

    print(f'\n  Ferdig! {len(segments)} segmenter lagret.')
    return segments


def main():
    print('=== Segmentering: 1T Kapittel 1.1 og 1.2 ===')

    # Les kildetekst
    with open(MD_PATH, 'r') as f:
        md_content = f.read()

    ch11_text = extract_chapter_text(md_content,
        '## Kapittel 1.1: Fortegn og regnerekkefølge',
        '## Kapittel 1.2:')

    ch12_text = extract_chapter_text(md_content,
        '## Kapittel 1.2: Potenser med heltallseksponenter',
        '## Kapittel 1.4:')

    process_chapter('Kapittel 1.1: Fortegn og regnerekkefølge', '1t-1-1', ch11_text)
    process_chapter('Kapittel 1.2: Potenser med heltallseksponenter', '1t-1-2', ch12_text)

    print('\n=== Ferdig! ===')
    print('Oppdater kapitlene i textbook-content-1t-narrativ-kap1.ts med audio-blokker.')


if __name__ == '__main__':
    main()
