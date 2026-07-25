#!/usr/bin/env python3
"""figur-kontaktark.py <bok> [bok …] — visuell gjennomgangsside for figurer.

Lager én selvstendig HTML-fil per bok der hver figur vises sammen med alt en
vurdering trenger: bildeteksten (begge målformer), alt-teksten, etikettene i
selve SVG-en, og hvilke blokker figuren står mellom.

Hvorfor: figurfeil er visuelle. Et manifest fanger at bildeteksten sier noe
annet enn etikettene, men ikke at aksene er byttet om, at en kurve krysser feil
sted, eller at figuren er stygg. Det må ses.

SVG-en bygges inn direkte i sida, så fila virker uten nett og uten server.

Bruk:  python3 scripts/figur-kontaktark.py 1t 1p 2p
Ut:    docs/figur-review/<bok>.html   (åpnes i nettleser)
"""
import glob
import html
import json
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CH = os.path.join(ROOT, "src/lib/data/chapters")
UT = os.path.join(ROOT, "docs/figur-review")
SVG_TEKST = re.compile(r">([^<>]{1,60})<")

STIL = """
:root{color-scheme:light dark}
body{font:15px/1.55 -apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;margin:0;
     background:#faf9f7;color:#1a1a1a}
@media (prefers-color-scheme:dark){body{background:#16161a;color:#e8e6e3}
  .kort{background:#1f1f24;border-color:#33333a}.meta{color:#a8a5a0}
  .fig{background:#fff;border-color:#33333a}}
header{position:sticky;top:0;background:inherit;padding:18px 24px;border-bottom:1px solid #ddd;z-index:2}
h1{margin:0;font-size:20px}
.sum{color:#666;font-size:13px;margin-top:4px}
main{padding:24px;display:grid;gap:22px;max-width:1100px;margin:0 auto}
.kort{background:#fff;border:1px solid #e2e0dc;border-radius:10px;padding:18px;
      display:grid;grid-template-columns:minmax(280px,440px) 1fr;gap:20px}
@media (max-width:860px){.kort{grid-template-columns:1fr}}
.fig{background:#fff;border:1px solid #eee;border-radius:6px;padding:8px;overflow:hidden}
.fig svg{width:100%;height:auto;display:block}
.id{font:12px ui-monospace,SFMono-Regular,Menlo,monospace;color:#8a8580}
h2{margin:0 0 2px;font-size:15px}
.meta{color:#666;font-size:13px;margin:0 0 10px}
dl{margin:0;display:grid;grid-template-columns:max-content 1fr;gap:4px 12px;font-size:13.5px}
dt{color:#8a8580;font-weight:600;white-space:nowrap}
dd{margin:0}
.etiketter{font:12.5px ui-monospace,Menlo,monospace;color:#555;
           background:#f4f2ee;border-radius:5px;padding:6px 8px}
@media (prefers-color-scheme:dark){.etiketter{background:#26262c;color:#bdb9b3}}
.plass{font-size:12.5px;color:#777;border-left:2px solid #ddd;padding-left:9px;margin-top:9px}
.varsel{color:#b3261e;font-weight:600}
"""


def etiketter(sti):
    if not os.path.exists(sti):
        return []
    with open(sti, encoding="utf-8", errors="replace") as f:
        raa = f.read()
    return list(dict.fromkeys(t.strip() for t in SVG_TEKST.findall(raa) if t.strip()))


def svg_inline(sti):
    """SVG-en uten XML-deklarasjon, klar til innbygging."""
    if not os.path.exists(sti):
        return '<p class="varsel">FILA FINNES IKKE</p>'
    with open(sti, encoding="utf-8", errors="replace") as f:
        s = f.read()
    return re.sub(r"^\s*<\?xml[^>]*\?>\s*", "", s)


def kort(b):
    if not isinstance(b, dict):
        return "—"
    t = b.get("type")
    if b.get("title"):
        return f"{t}: {b['title']}"
    if t == "exercise":
        return f"exercise: {(b.get('exercise') or {}).get('task','')[:60]}"
    c = b.get("content")
    return f"{t}: {c[:60]}" if isinstance(c, str) else str(t)


def bygg(bok):
    rader = []
    for p in sorted(glob.glob(os.path.join(CH, f"{bok}-*.json"))):
        d = json.load(open(p, encoding="utf-8"))
        if d.get("courseId") != bok:
            continue
        innhold = d.get("content", []) or []
        nn_sti = os.path.join(CH, "nn", os.path.basename(p))
        nn = {}
        if os.path.exists(nn_sti):
            nn = {b.get("id"): b for b in json.load(open(nn_sti, encoding="utf-8")).get("content", [])
                  if isinstance(b, dict)}
        for i, b in enumerate(innhold):
            if not isinstance(b, dict) or b.get("type") != "image":
                continue
            fil = os.path.join(ROOT, "public" + b.get("src", ""))
            rader.append({
                "id": b.get("id"), "kap": d.get("id"), "nr": d.get("chapterNumber"),
                "tittel": d.get("title"), "src": b.get("src"),
                "caption": b.get("caption") or "", "alt": b.get("alt") or "",
                "nn": (nn.get(b.get("id")) or {}).get("caption") or "",
                "etiketter": etiketter(fil), "svg": svg_inline(fil),
                "etter": kort(innhold[i - 1]) if i else "(første blokk)",
                "foran": kort(innhold[i + 1]) if i + 1 < len(innhold) else "(siste blokk)",
                "mangler_nn": b.get("id") not in nn,
            })

    e = html.escape
    kort_html = []
    for r in rader:
        adv = '<p class="varsel">Mangler i nynorskutgaven</p>' if r["mangler_nn"] else ""
        kort_html.append(f"""<article class="kort">
 <div class="fig">{r['svg']}</div>
 <div>
  <h2>{e(str(r['nr']))} {e(r['tittel'] or '')}</h2>
  <p class="meta"><span class="id">{e(r['id'])}</span><br><span class="id">{e(r['src'])}</span></p>
  {adv}
  <dl>
   <dt>Bildetekst</dt><dd>{e(r['caption'])}</dd>
   <dt>Nynorsk</dt><dd>{e(r['nn'])}</dd>
   <dt>Alt-tekst</dt><dd>{e(r['alt'])}</dd>
  </dl>
  <p class="etiketter">{e(' · '.join(r['etiketter']) or '(ingen tekst i figuren)')}</p>
  <p class="plass">Står etter — {e(r['etter'])}<br>Står foran — {e(r['foran'])}</p>
 </div>
</article>""")

    return f"""<!doctype html><html lang="no"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Figurgjennomgang {e(bok)}</title><style>{STIL}</style></head><body>
<header><h1>Figurgjennomgang — {e(bok)}</h1>
<p class="sum">{len(rader)} figurer. Sammenlign bildeteksten med det figuren faktisk viser,
og vurder om plasseringen stemmer med teksten den står mellom.</p></header>
<main>{''.join(kort_html)}</main></body></html>"""


def main():
    if len(sys.argv) < 2:
        sys.exit(__doc__)
    os.makedirs(UT, exist_ok=True)
    for bok in sys.argv[1:]:
        h = bygg(bok)
        sti = os.path.join(UT, f"{bok}.html")
        with open(sti, "w", encoding="utf-8") as f:
            f.write(h)
        print(f"  {os.path.relpath(sti, ROOT)}  ({h.count('<article')} figurer, {len(h)//1024} KB)")


if __name__ == "__main__":
    main()
