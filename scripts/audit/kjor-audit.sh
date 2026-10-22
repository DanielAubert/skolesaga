#!/bin/bash
# Kjør hele den maskinelle delen av en audit og lag en mappe klar for en modellauditor.
# Bruk: scripts/audit/kjor-audit.sh [--bare-endret] [--narrativ] [--navn NAVN] [--staving=auto|lokal|node|korpus|av] <prefiks|id …>
#   eks.: scripts/audit/kjor-audit.sh 1t 2p
#         scripts/audit/kjor-audit.sh --bare-endret --navn runde3 1t-3
# Resultat: scripts/audit/kjoringer/<dato-tid>-<navn>/ med maskin.json/.txt, maskin-funn.tsv, regn.json/.txt,
#           utdrag/<id>.txt + <id>.manifest.json og OPPDRAG-MODELL.md. Alt lokalt; ingen skriving i kapitlene.
set -euo pipefail
DIR="$(cd "$(dirname "$0")" && pwd)"
BARE=""; NARR=""; NAVN=""; STAV="--staving=auto"; MAAL=()
while [ $# -gt 0 ]; do
  case "$1" in
    --bare-endret) BARE="--bare-endret" ;;
    --narrativ) NARR="--narrativ" ;;
    --navn) NAVN="$2"; shift ;;
    --staving=*) STAV="$1" ;;
    -h|--help) sed -n '2,7p' "$0"; exit 0 ;;
    *) MAAL+=("$1") ;;
  esac
  shift
done
[ ${#MAAL[@]} -gt 0 ] || { sed -n '2,7p' "$0"; exit 1; }
[ -n "$NAVN" ] || NAVN="$(echo "${MAAL[*]}" | tr ' ' '_' | cut -c1-40)"
UT="$DIR/kjoringer/$(date +%Y%m%d-%H%M)-$NAVN${BARE:+-endret}"
mkdir -p "$UT/utdrag"
echo "→ $UT"
python3 "$DIR/maskin.py" "${MAAL[@]}" $NARR $STAV --ut "$UT/maskin.json" --tsv "$UT/maskin-funn.tsv" | tee "$UT/maskin.txt" | tail -3
python3 "$DIR/regn.py" "${MAAL[@]}" --ut "$UT/regn.json" --vis 60 > "$UT/regn.txt"; head -3 "$UT/regn.txt"
python3 "$DIR/utdrag.py" "${MAAL[@]}" $BARE --maskin "$UT/maskin.json" --regn "$UT/regn.json" --utmappe "$UT/utdrag"
python3 "$DIR/oppdrag.py" "$UT"
echo "Neste: gi modellauditoren $UT/OPPDRAG-MODELL.md. Etterpå: python3 $DIR/hukommelse.py fra-audit $UT --runde <navn> --hvem <agent>"
