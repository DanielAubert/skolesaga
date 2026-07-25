#!/usr/bin/env python3
"""figur-vurdering.py [--bruk] — les dommer fra gjennomgangen og sett dem ut i live.

Gjennomgangen registreres i docs/figur-review/vurderinger.json:

    {
      "1t-1-1-fig-tallinje-negative-tall": {"status": "ok"},
      "2p-5-4-fig-bat":  {"status": "avvist", "merknad": "viser feil svar"},
      "r1-2-3-fig-graf": {"status": "endre",  "merknad": "aksene mangler enhet"}
    }

  ok      figuren blir stående — ingen handling
  avvist  bildeblokken FJERNES fra både bokmål og nynorsk (SVG-fila beholdes)
  endre   blir stående, men listes ut som arbeid som gjenstår

Uten flagg er kjøringen en TØRRKJØRING som bare rapporterer. `--bruk` skriver.

Hvorfor i repoet og ikke i databasen: klienten har et godkjenningslag
(`illustration-approval-context.tsx`) som kaller `/api/admin/illustration-feedback`,
men den ruta finnes ikke — kallet feiler, og alt vises uansett. Databasen deles
dessuten med eksamenssett.no, så en ny tabell er ikke et lite grep. Dommer i
repoet er sporbare i git og krever ingen migrasjon.
"""
import json
import os
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CH = os.path.join(ROOT, "src/lib/data/chapters")
DOMMER = os.path.join(ROOT, "docs/figur-review/vurderinger.json")
GYLDIGE = {"ok", "avvist", "endre"}


def alle_figurer():
    """{blokk-id: [(filsti, indeks), …]} for bokmål og nynorsk."""
    treff = {}
    for mappe in (CH, os.path.join(CH, "nn")):
        if not os.path.isdir(mappe):
            continue
        for navn in sorted(os.listdir(mappe)):
            if not navn.endswith(".json") or navn.startswith("_"):
                continue
            sti = os.path.join(mappe, navn)
            try:
                d = json.load(open(sti, encoding="utf-8"))
            except Exception:
                continue
            for i, b in enumerate(d.get("content", []) or []):
                if isinstance(b, dict) and b.get("type") == "image":
                    treff.setdefault(b.get("id"), []).append((sti, i))
    return treff


def fjern(sti, blokk_id):
    """Fjerner én bildeblokk og bevarer det kompakte filformatet."""
    orig = open(sti, encoding="utf-8").read()
    d = json.loads(orig)
    if json.dumps(d, ensure_ascii=False, separators=(",", ":")) != orig:
        return f"HOPPET OVER {os.path.basename(sti)}: uventet filformat, skriver ikke"
    før = len(d["content"])
    d["content"] = [b for b in d["content"]
                    if not (isinstance(b, dict) and b.get("type") == "image" and b.get("id") == blokk_id)]
    if len(d["content"]) == før:
        return f"fant ikke {blokk_id} i {os.path.basename(sti)}"
    ny = json.dumps(d, ensure_ascii=False, separators=(",", ":"))
    json.loads(ny)
    open(sti, "w", encoding="utf-8").write(ny)
    return None


def main():
    bruk = "--bruk" in sys.argv
    if not os.path.exists(DOMMER):
        sys.exit(f"fant ingen dommer i {os.path.relpath(DOMMER, ROOT)} — "
                 "kjør figur-kontaktark.py og fyll ut fila først")
    dommer = json.load(open(DOMMER, encoding="utf-8"))
    figurer = alle_figurer()

    ukjent = [k for k in dommer if k not in figurer]
    ugyldig = [k for k, v in dommer.items() if (v or {}).get("status") not in GYLDIGE]
    if ukjent:
        print(f"ADVARSEL: {len(ukjent)} dommer peker på figurer som ikke finnes: {ukjent[:5]}")
    if ugyldig:
        sys.exit(f"FEIL: ugyldig status på {ugyldig[:5]} — bruk {sorted(GYLDIGE)}")

    avvist = [k for k, v in dommer.items() if v["status"] == "avvist" and k in figurer]
    endre = [(k, v.get("merknad", "")) for k, v in dommer.items() if v["status"] == "endre"]
    ok = [k for k, v in dommer.items() if v["status"] == "ok"]
    uvurdert = [k for k in figurer if k not in dommer]

    print(f"figurer totalt: {len(figurer)}")
    print(f"  ok:        {len(ok)}")
    print(f"  avvist:    {len(avvist)}")
    print(f"  endre:     {len(endre)}")
    print(f"  uvurdert:  {len(uvurdert)}")

    if endre:
        print("\nKrever endring:")
        for k, m in endre:
            print(f"  {k}: {m}")

    if not avvist:
        print("\nIngen avviste figurer å fjerne." if bruk else "\n[TØRRKJØRING]")
        return

    print(f"\n{'FJERNER' if bruk else 'VILLE FJERNET'} {len(avvist)} figurer:")
    for k in avvist:
        steder = figurer[k]
        print(f"  {k}  ({len(steder)} steder: {', '.join(os.path.basename(s) for s, _ in steder)})")
        if bruk:
            for sti, _ in steder:
                feil = fjern(sti, k)
                if feil:
                    print(f"     {feil}")
    if not bruk:
        print("\n[TØRRKJØRING] — kjør med --bruk for å skrive.")


if __name__ == "__main__":
    main()
