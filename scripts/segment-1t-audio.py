#!/usr/bin/env python3
"""
Universelt segmenteringsskript for 1T-kapitler.

Bruk:
    python3 scripts/segment-1t-audio.py docs/1t-uttaletest-kap1.4-1.9.md

Steg per kapittel:
1. Estimer markør-tidspunkter fra tekstposisjon i kildeteksten
2. Kjør silencedetect for presise kuttpunkter
3. Splitt i segmenter (del1, del2, ..., delN)
"""

import os
import re
import subprocess
import sys

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
AUDIO_DIR = os.path.join(SCRIPT_DIR, '..', 'public', 'audio', '1t')
MASTER_DIR = os.path.join(AUDIO_DIR, '_master')


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


def estimate_marker_timestamps(chapter_text, total_duration):
    """Estimer tidspunkter for 'Slutt pa/på del N' basert på tekstposisjon."""
    markers = []
    for m in re.finditer(r'Slutt p(?:a|å|aa) del (\d+)\.', chapter_text):
        char_pos = m.start()
        marker_num = int(m.group(1))
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
        window = 20.0
        candidates = [(s, e, d) for s, e, d in silences
                      if s >= est - window and s <= est + window and d >= 0.5]

        if not candidates:
            candidates = [(s, e, d) for s, e, d in silences
                          if s >= est - window and s <= est + window]

        best = None
        if candidates:
            best = max(candidates, key=lambda x: x[2])
            seg_end = best[0] + 0.3
            seg_start = best[1] - 0.2
        else:
            print(f'    ADVARSEL: Ingen stillhet funnet nær markør {marker["num"]} (~{est:.1f}s)')
            seg_end = est - 1.0
            seg_start = est + 2.0

        cuts.append({
            'marker_num': marker['num'],
            'seg_end': round(seg_end, 3),
            'seg_start': round(seg_start, 3),
            'silence_duration': round(best[2], 2) if best else 0,
        })
        if best:
            print(f'    Markør {marker["num"]}: seg_end={seg_end:.2f}s, seg_start={seg_start:.2f}s '
                  f'(stillhet: {best[2]:.2f}s)')
        else:
            print(f'    Markør {marker["num"]}: FALLBACK seg_end={seg_end:.2f}s, seg_start={seg_start:.2f}s')

    return cuts


def split_audio(master_path, cuts, total_duration, file_prefix):
    """Splitt master-filen i segmenter."""
    num_segments = len(cuts)
    segments = []

    for i in range(num_segments):
        start = 0 if i == 0 else cuts[i - 1]['seg_start']
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
        return None

    # Sjekk om segmenter allerede finnes
    existing = [f for f in os.listdir(AUDIO_DIR)
                if f.startswith(f'{file_prefix}-narrativ-del') and f.endswith('.mp3')]
    if existing:
        print(f'  HOPPER OVER — {len(existing)} segmenter finnes allerede')
        return existing

    total_duration = get_duration(master_path)
    print(f'  Master: {total_duration / 60:.1f} min ({total_duration:.1f}s)')

    print('\n  Estimerte markør-tidspunkter:')
    markers = estimate_marker_timestamps(chapter_text, total_duration)
    print(f'  Fant {len(markers)} markører')

    if len(markers) == 0:
        print('  Kan ikke segmentere uten markører. Avbryter.')
        return None

    print('\n  Silencedetect:')
    silences = get_silences(master_path)
    print(f'  Fant {len(silences)} stillhetsperioder')

    long_silences = [(s, e, d) for s, e, d in silences if d >= 1.0]
    print(f'  Lange stillheter (>1s): {len(long_silences)}')

    print('\n  Presise kuttpunkter:')
    cuts = find_precise_cuts(silences, markers, total_duration)

    print(f'\n  Splitter i {len(cuts)} segmenter:')
    segments = split_audio(master_path, cuts, total_duration, file_prefix)

    print(f'\n  Ferdig! {len(segments)} segmenter lagret.')
    return segments


def parse_chapters(md_content):
    """Parse alle kapitler fra en docs-fil."""
    chapters = []
    pattern = r'^## Kapittel (\d+)\.(\d+):\s*(.+)$'
    matches = list(re.finditer(pattern, md_content, re.MULTILINE))

    for i, m in enumerate(matches):
        start = m.end()
        end = matches[i + 1].start() if i + 1 < len(matches) else len(md_content)
        text = md_content[start:end].strip()
        # Fjern markdown headers og separatorer
        text = re.sub(r'^#{1,6}\s+.*$', '', text, flags=re.MULTILINE)
        text = re.sub(r'---\s*$', '', text, flags=re.MULTILINE)
        text = text.strip()

        chapters.append({
            'title': f'Kapittel {m.group(1)}.{m.group(2)}: {m.group(3)}',
            'prefix': f'1t-{m.group(1)}-{m.group(2)}',
            'text': text,
        })

    return chapters


def main():
    if len(sys.argv) < 2:
        print('Bruk: python3 scripts/segment-1t-audio.py <docs-fil>')
        print('Eksempel: python3 scripts/segment-1t-audio.py docs/1t-uttaletest-kap1.4-1.9.md')
        sys.exit(1)

    docs_file = sys.argv[1]
    md_path = os.path.join(SCRIPT_DIR, '..', docs_file)
    if not os.path.exists(md_path):
        print(f'Filen finnes ikke: {md_path}')
        sys.exit(1)

    with open(md_path, 'r') as f:
        md_content = f.read()

    chapters = parse_chapters(md_content)

    print(f'=== Segmentering fra {docs_file} ===')
    print(f'Fant {len(chapters)} kapitler:')
    for ch in chapters:
        print(f'  {ch["prefix"]}: {ch["title"]}')

    results = []
    for ch in chapters:
        segs = process_chapter(ch['title'], ch['prefix'], ch['text'])
        if segs:
            results.append(ch['prefix'])

    print(f'\n{"=" * 60}')
    print(f'FERDIG: {len(results)}/{len(chapters)} kapitler segmentert')
    print(f'{"=" * 60}')


if __name__ == '__main__':
    main()
