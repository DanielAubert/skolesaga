#!/usr/bin/env python3
"""rett-tegnskade.py [bok …] [--skriv] — gjenoppretter ø, å og æ i lærebøkene.

Bøker skrevet i februar 2026 fikk norske tegn skrevet som oe/aa/ae: eleven leser
«eldre paa sykehjem» og «for aa studere». Skaden ligger i lesersynlige felt.

Dette er IKKE søk-og-erstatt. Fire ting ser like ut, men skal ikke røres:

  1. Kode      ```-gjerder og `inline-kode` — «maal» kan være et variabelnavn
  2. Matte     $…$ og $$…$$ — «aa» kan være en indeks
  3. Stier     src/href/id-felt — «paa» kan stå i et filnavn
  4. Egennavn  Aasen, Haakon, Aalesund, Baard, Gaarder, Maaloy, Braathen

Ordlista er kuratert: bare former som IKKE finnes som norsk eller engelsk ord.
«videoer», «naboer», «kontoer», «logoer», «voksne» er ekte ord og står ikke her.

Tørrkjøring som standard. `--skriv` skriver.
"""
import glob
import json
import os
import re
import sys
import collections

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CH = os.path.join(ROOT, "src/lib/data/chapters")

# Ordformer som utvetydig er skadet. Nøkkel = skadet, verdi = riktig.
# Bøyningsformer dekkes av suffiks-regelen under der det er trygt.
MAP = {
    # å
    "aa": "å", "paa": "på", "naar": "når", "faar": "får", "gaar": "går",
    "staar": "står", "slaar": "slår", "maa": "må", "maatte": "måtte",
    "forstaa": "forstå", "forstaar": "forstår", "forstaatt": "forstått",
    "oppstaa": "oppstå", "oppstaar": "oppstår", "bestaa": "bestå",
    "bestaar": "består", "gaatt": "gått", "faatt": "fått", "staatt": "stått",
    "maal": "mål", "maalet": "målet", "maalene": "målene", "maaling": "måling",
    "maalinger": "målinger", "maalt": "målt", "maate": "måte",
    "maaten": "måten", "maater": "måter", "maatene": "måtene",
    "aar": "år", "aaret": "året", "aarene": "årene", "aarsak": "årsak",
    "aarsaker": "årsaker", "aarsaken": "årsaken", "smaa": "små",
    "graad": "grad", "graden": "graden", "blaa": "blå", "graa": "grå",
    "haand": "hånd", "haanden": "hånden", "haap": "håp", "haaper": "håper",
    "aapen": "åpen", "aapent": "åpent", "aapne": "åpne", "aapner": "åpner",
    "aapning": "åpning", "paavirke": "påvirke", "paavirker": "påvirker",
    "paavirkes": "påvirkes", "paavirkning": "påvirkning", "paalitelig": "pålitelig",
    "paastand": "påstand", "paastander": "påstander", "paastaar": "påstår",
    "ifoelge": "ifølge", "tilstaa": "tilstå", "utstaa": "utstå",
    # ø
    "gjoer": "gjør", "gjoere": "gjøre", "gjoerer": "gjører", "gjoert": "gjort",
    "foer": "før", "foerst": "først", "foerste": "første", "boer": "bør",
    "hoey": "høy", "hoeye": "høye", "hoeyere": "høyere", "hoeyest": "høyest",
    "hoeyde": "høyde", "hoeyden": "høyden", "loes": "løs", "loese": "løse",
    "loeser": "løser", "loesning": "løsning", "loesninger": "løsninger",
    "stoerre": "større", "stoerst": "størst", "stoerste": "største",
    "stoerrelse": "størrelse", "soek": "søk", "soeke": "søke", "soeker": "søker",
    "oeke": "øke", "oeker": "øker", "oekning": "økning", "oekt": "økt",
    "oeye": "øye", "oeyet": "øyet", "oeynene": "øynene", "oensker": "ønsker",
    "oenske": "ønske", "roed": "rød", "roedt": "rødt", "groenn": "grønn",
    "groenne": "grønne", "foele": "føle", "foeler": "føler", "foelelse": "følelse",
    "foelelser": "følelser", "foelge": "følge", "foelger": "følger",
    "foelgende": "følgende", "boelge": "bølge", "boelger": "bølger",
    "noedvendig": "nødvendig", "noedt": "nødt", "moete": "møte", "moeter": "møter",
    "moette": "møtte", "foede": "føde", "foedt": "født", "doer": "dør",
    "hoere": "høre", "hoerer": "hører", "hoert": "hørt", "tilhoerer": "tilhører",
    "utfoere": "utføre", "utfoerer": "utfører", "utfoert": "utført",
    "gjennomfoere": "gjennomføre", "gjennomfoeres": "gjennomføres",
    "innfoere": "innføre", "innfoert": "innført", "beroere": "berøre",
    "behoever": "behøver", "stoette": "støtte", "stoetter": "støtter",
    "oedelegge": "ødelegge", "toemme": "tømme", "spoer": "spør",
    "spoersmaal": "spørsmål", "spoerre": "spørre", "undersoeke": "undersøke",
    "undersoekelse": "undersøkelse", "undersoekelser": "undersøkelser",
    "forsoek": "forsøk", "forsoeke": "forsøke", "forsoeker": "forsøker",
    "trenger": "trenger",   # no-op vakt: hindrer utilsiktet suffiksregel
    # æ
    "vaere": "være", "vaert": "vært", "laere": "lære", "laerer": "lærer",
    "laering": "læring", "laert": "lært", "naer": "nær", "naermere": "nærmere",
    "naermest": "nærmest", "naerhet": "nærhet", "vaerelse": "værelse",
    "praeges": "preges", "traer": "trær", "aere": "ære",
    "naere": "nære", "naerme": "nærme", "naermer": "nærmer",
    "saa": "så", "ogsaa": "også", "aatferd": "atferd",
    "sjoelv": "sjølv", "sjoelve": "sjølve",       # nynorsk
    "foerer": "fører", "foert": "ført", "foerte": "førte",
    "loeser": "løser", "loest": "løst", "moeter": "møter",
    "oekonomi": "økonomi", "oekonomisk": "økonomisk",
    "miljoe": "miljø", "miljoeet": "miljøet",
}
del MAP["trenger"]

# Identitetsoppføringer (k == v) er alltid feil: de endrer ingenting, men
# telles som rettinger og gjør at tørrkjøringen aldri rapporterer null.
# «graden»: «graden» slapp inn i den håndskrevne lista og ga 284 spøkelses-
# treff i 33 bøker.
for _k in [k for k, v in MAP.items() if k == v.lower()]:
    del MAP[_k]

EGENNAVN = re.compile(
    r"\b(Aasen|Aalesund|Aarhus|Aaron|Haakon|Baard|Gaarder|Braathen|Maaloy|"
    r"Aas|Aamodt|Naas|Skaar|Blaafjell|Graabein|Isaac|Aaberg)\b")

# Felt som ALDRI skal endres (stier, id-er, tekniske verdier).
TEKNISKE = {"src", "id", "href", "url", "courseId", "chapterId", "linkedChapterId",
            "materialId", "youtubeId", "image", "icon", "type", "slug"}

KODEGJERDE = re.compile(r"```[\s\S]*?```")
INLINEKODE = re.compile(r"`[^`\n]+`")
MATTE = re.compile(r"\$\$[\s\S]*?\$\$|\$[^$\n]+?\$")
URL = re.compile(r"(?:https?://|/)[\w./\-]+")

# Gammel rettskriving brukte «aa» for «å» (før 1917) — i sitater fra
# Kongsspegelen o.l. er «paa», «aar», «fraa» PERIODEKORREKT og skal stå.
# «oe» og «ae» har derimot ALDRI vært norsk ortografi; de er alltid skade.
ARKAISK = re.compile(r"\b(kallast|hev|um|Folki|fjelli|verdi|daa|sidan|mognar|"
                     r"kann|driva|vedtaka|so)\b")

# Den kuraterte MAP-en over dekker de vanligste formene. Resten kommer fra
# docs/tegnskade/ordliste.json, bygget FRA korpuset og validert MOT det:
# en form regnes som skadet bare hvis den rettede formen finnes minst 10x
# oftere i korpuset ellers. Former som oftest har stor forbokstav er utelatt
# (egennavn: Vesaas, Caesar). Det luker ut «kommandoer»->«kommandør»,
# «broer»->«brør» og «noe»->«nø», som alle ville vært ødeleggende.
# Listene er MÅLFORMSDELTE. Samme skadede form kan ha ulik fasit:
# «aatferd» er «atferd» på bokmål og «åtferd» på nynorsk. En felles liste
# ville byttet målform på 784 steder i nynorskutgavene.
def _last(navn):
    sti = os.path.join(ROOT, "docs/tegnskade", navn)
    return json.load(open(sti, encoding="utf-8")) if os.path.exists(sti) else {}


MAP_BM = dict(MAP)
MAP_NN = dict(MAP)
for _k, _v in _last("ordliste-bokmal.json").items():
    MAP_BM.setdefault(_k, _v)
for _k, _v in _last("ordliste-nynorsk.json").items():
    MAP_NN.setdefault(_k, _v)
MAP = MAP_BM   # standard; rett() velger riktig liste via `nynorsk`-flagget

# MÅ bygges ETTER at ordlista er lastet — ellers slipper auto-formene
# («fraa», «aar») forbi den arkaiske vakten.
AA_FORMER = {k for k, v in list(MAP_BM.items()) + list(MAP_NN.items()) if "å" in v}

ORD_BM = re.compile(r"\b(" + "|".join(sorted(MAP_BM, key=len, reverse=True)) + r")\b", re.I)
ORD_NN = re.compile(r"\b(" + "|".join(sorted(MAP_NN, key=len, reverse=True)) + r")\b", re.I)
MULIG = re.compile(r"aa|oe|ae|AA|OE|AE|Aa|Oe|Ae", re.I)  # rask forhåndsfilter


def _vernet(s):
    """Bytearray der 1 = tegnet ligger i et vernet område.

    Bygges i ETT pass per regex. Den opprinnelige versjonen bygde strengen på
    nytt per treff, som blir kvadratisk på lange kapitler.
    """
    v = bytearray(len(s))
    for rx in (KODEGJERDE, INLINEKODE, MATTE, URL, EGENNAVN):
        for t in rx.finditer(s):
            v[t.start():t.end()] = b"\x01" * (t.end() - t.start())
    return v


def _riktig_kasus(skadet, riktig):
    if skadet.isupper():
        return riktig.upper()
    if skadet[0].isupper():
        return riktig[0].upper() + riktig[1:]
    return riktig


def rett(s, nynorsk=False):
    """Returnerer (ny streng, {form: antall})."""
    if not MULIG.search(s):
        return s, collections.Counter()      # ingen aa/oe/ae i det hele tatt
    ordbok, rx = (MAP_NN, ORD_NN) if nynorsk else (MAP_BM, ORD_BM)
    vernet = _vernet(s)
    arkaisk = len(set(ARKAISK.findall(s))) >= 3
    ut = list(s)
    tell = collections.Counter()
    for m in rx.finditer(s):
        if any(vernet[m.start():m.end()]):
            continue                     # kode, matte, sti eller egennavn
        skadet = m.group(0)
        if arkaisk and skadet.lower() in AA_FORMER:
            continue                     # periodekorrekt gammel rettskriving
        riktig = _riktig_kasus(skadet, ordbok[skadet.lower()])
        ut[m.start():m.end()] = list(riktig) + [""] * (len(skadet) - len(riktig))
        tell[skadet.lower()] += 1
    return "".join(ut), tell


def gaa(node, tell, nokkel=None, nynorsk=False):
    """Går gjennom JSON og retter alle tekstfelt som ikke er tekniske."""
    if isinstance(node, str):
        if nokkel in TEKNISKE:
            return node
        ny, t = rett(node, nynorsk)
        tell.update(t)
        return ny
    if isinstance(node, dict):
        return {k: gaa(v, tell, k, nynorsk) for k, v in node.items()}
    if isinstance(node, list):
        return [gaa(v, tell, None, nynorsk) for v in node]
    return node


def main():
    skriv = "--skriv" in sys.argv
    boker = set(a for a in sys.argv[1:] if not a.startswith("--"))
    total = collections.Counter()
    per_bok = collections.Counter()
    endret = []

    for mappe in ("", "nn/"):
        for p in sorted(glob.glob(os.path.join(CH, mappe, "*.json"))):
            if os.path.basename(p).startswith("_"):
                continue
            raa = open(p, encoding="utf-8").read()
            try:
                d = json.loads(raa)
            except Exception:
                continue
            bok = d.get("courseId") or "?"
            if boker and bok not in boker:
                continue
            tell = collections.Counter()
            ny = gaa(d, tell, nynorsk=(mappe == "nn/"))
            if not tell:
                continue
            kompakt = json.dumps(d, ensure_ascii=False, separators=(",", ":")) == raa
            tekst = json.dumps(ny, ensure_ascii=False,
                               separators=(",", ":") if kompakt else None)
            if not kompakt:
                tekst = json.dumps(ny, ensure_ascii=False)
            json.loads(tekst)
            if skriv:
                open(p, "w", encoding="utf-8").write(tekst)
            total.update(tell)
            per_bok[bok] += sum(tell.values())
            endret.append(os.path.relpath(p, ROOT))

    print(f"{sum(total.values())} rettinger i {len(endret)} filer, {len(per_bok)} bøker"
          + ("  [SKREVET]" if skriv else "  [TØRRKJØRING]"))
    print("\nper bok:")
    for b, n in per_bok.most_common(15):
        print(f"  {b:24s} {n}")
    print("\nvanligste former:")
    for f, n in total.most_common(15):
        print(f"  {f:16s} -> {(MAP_BM.get(f) or MAP_NN.get(f, '?')):14s} {n}")


if __name__ == "__main__":
    main()
