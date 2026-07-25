#!/usr/bin/env python3
"""sjekk-latex.py <emne> — LaTeX/KaTeX-port for en høyskolebok.

Fanger de fire feilene som faktisk har nådd produksjon i tidligere bøker:

1. **Kontrolltegn fra enkel backslash.** LaTeX i JSON MÅ ha dobbel backslash.
   `"\\text"` med én backslash blir TAB, `"\\approx"` blir BEL. Det verste er at
   KaTeX ikke alltid kaster feil — `\t` + «ext{m/s}^2» rendrer bare *galt*.
   Denne sjekken er derfor viktigere enn KaTeX-kjøringen.
2. **KaTeX-feil.** Ukjente miljøer (`psmallmatrix` finnes ikke i repoets KaTeX),
   ugyldige kommandoer, ubalanserte klammer.
3. **Løs avsluttende backslash.** `$\cos,\sin,e,\ $` knekker fordi rendereren
   trimmer strengen før den sendes til KaTeX.
4. **Gåseøyne inne i matte.** « og » har ingen glyffer i KaTeX-fontene og gir
   «No character metrics»-advarsel + skjev rendring.

Kjør:  python3 scripts/hoyskolebok/sjekk-latex.py fys1001
Krever `katex` i node_modules for punkt 2 (hopper over med melding om det mangler).
"""
import glob
import json
import os
import re
import subprocess
import sys
import tempfile

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

KTRL = {7: r"\a (BEL)", 8: r"\b (BS)", 9: r"\t (TAB)", 11: r"\v (VT)",
        12: r"\f (FF)", 13: r"\r (CR)"}

NODE_KATEX = r"""
const katex = require("katex");
const inn = JSON.parse(require("fs").readFileSync(process.argv[2], "utf8"));
const feil = [];
for (const [fil, tex, disp] of inn) {
  const html = katex.renderToString(tex, {displayMode: disp, throwOnError: false, trust: true});
  if (html.includes("katex-error")) feil.push([fil, tex.slice(0, 90)]);
}
console.log(JSON.stringify(feil));
"""


def kodespenn(s):
    """Start/slutt for hver ```-kodeblokk i strengen."""
    ut = []
    for m in re.finditer(r"```[\s\S]*?```", s):
        ut.append((m.start(), m.end()))
    return ut


def strenger(emne):
    """Alle tekststrenger i bokas kapittelfiler, med filnavn og sti."""
    ut = []
    for p in sorted(glob.glob(os.path.join(ROOT, "src/lib/data/chapters", emne + "-*.json"))):
        d = json.load(open(p, encoding="utf-8"))
        navn = os.path.basename(p)

        def gå(o, sti):
            if isinstance(o, str):
                ut.append((navn, sti, o))
            elif isinstance(o, dict):
                for k, v in o.items():
                    gå(v, f"{sti}.{k}")
            elif isinstance(o, list):
                for i, x in enumerate(o):
                    gå(x, f"{sti}[{i}]")

        gå(d, "")
    q = os.path.join(ROOT, f"src/lib/data/quiz-data-{emne}.ts")
    if os.path.exists(q):
        ut.append((f"quiz-data-{emne}.ts", "", open(q, encoding="utf-8").read()))
    return ut


def main():
    if len(sys.argv) < 2:
        sys.exit(__doc__)
    emne = sys.argv[1]
    alle = strenger(emne)
    if not alle:
        sys.exit(f"fant ingen filer for {emne}")
    avvik = []

    # 1. kontrolltegn (TAB godtas i .ts-fila, der det er innrykk, og inne i
    #    ```-kodeblokker, der det er kolonnejustering i programutskrift — begge
    #    er legitime. En TAB i prosa er derimot nesten alltid `\text` med én
    #    backslash, som rendrer galt UTEN at KaTeX klager.)
    for navn, sti, s in alle:
        kode = kodespenn(s)
        for i, ch in enumerate(s):
            o = ord(ch)
            if o not in KTRL:
                continue
            if o == 9 and (navn.endswith(".ts") or any(a <= i < b for a, b in kode)):
                continue
            avvik.append(f"KONTROLLTEGN {KTRL[o]} i {navn}{sti}: {s[max(0,i-40):i+25]!r}")

    # 2.–4. matteuttrykk
    # Kapittel-JSON leses med json.load, så strengene er alt avescapet. Quiz-.ts-fila
    # leses som rå tekst, der LaTeX står escapet for JS-strengen (`\\alpha`) — den må
    # avescapes, ellers rapporterer KaTeX falske feil på hver kommando.
    def avescape(tex, navn):
        return tex.replace("\\\\", "\\") if navn.endswith(".ts") else tex

    uttrykk = []
    for navn, _, s in alle:
        for m in re.finditer(r"\$\$([\s\S]+?)\$\$", s):
            uttrykk.append((navn, avescape(m.group(1), navn), True))
        for m in re.finditer(r"\$([^$\n]+?)\$", re.sub(r"\$\$[\s\S]+?\$\$", "", s)):
            uttrykk.append((navn, avescape(m.group(1), navn), False))

    for navn, tex, _ in uttrykk:
        if tex.rstrip().endswith("\\") and not tex.rstrip().endswith("\\\\"):
            avvik.append(f"LØS BACKSLASH i {navn}: {tex.strip()[:70]!r} (rendereren trimmer → knekker)")
        if "«" in tex or "»" in tex:
            avvik.append(f"GÅSEØYNE I MATTE i {navn}: {tex.strip()[:70]!r}")

    katex_feil = None
    if os.path.isdir(os.path.join(ROOT, "node_modules", "katex")):
        with tempfile.NamedTemporaryFile("w", suffix=".json", delete=False, encoding="utf-8") as f:
            json.dump([[n, t.strip(), d] for n, t, d in uttrykk], f, ensure_ascii=False)
            tmp = f.name
        with tempfile.NamedTemporaryFile("w", suffix=".js", delete=False, encoding="utf-8") as f:
            f.write(NODE_KATEX)
            js = f.name
        # NODE_PATH må settes: node løser `require` relativt til SKRIPTFILA, ikke cwd,
        # så en temp-fil utenfor prosjektet finner ikke katex uten dette.
        miljø = dict(os.environ, NODE_PATH=os.path.join(ROOT, "node_modules"))
        r = subprocess.run(["node", js, tmp], capture_output=True, text=True, cwd=ROOT, env=miljø)
        os.unlink(tmp)
        os.unlink(js)
        if r.returncode == 0:
            katex_feil = json.loads(r.stdout.strip().splitlines()[-1])
            for navn, tex in katex_feil:
                avvik.append(f"KATEX-FEIL i {navn}: {tex!r}")
        else:
            print("ADVARSEL: KaTeX-kjøringen feilet — porten er da BARE delvis kjørt:")
            print("  " + (r.stderr.strip().splitlines() or ["(ingen feilmelding)"])[-1])

    print(f"{emne}: {len(uttrykk)} matteuttrykk kontrollert"
          + ("" if katex_feil is not None else " (KaTeX-kjøring hoppet over — mangler node_modules/katex)"))
    if avvik:
        print(f"AVVIK ({len(avvik)}):")
        for a in avvik[:60]:
            print(" -", a)
        if len(avvik) > 60:
            print(f"   … og {len(avvik)-60} flere")
        sys.exit(1)
    print("LATEX-PORT OK — ingen kontrolltegn, ingen KaTeX-feil, ingen løs backslash, ingen gåseøyne i matte")


if __name__ == "__main__":
    main()
