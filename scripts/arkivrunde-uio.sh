#!/bin/zsh
# Kjører hele kjeden probe → nedlasting for ett UiO-institutt av gangen.
#
# Hvorfor et skript og ikke en kommando per institutt: runden tar timer, og en
# økt som avbrytes midt i skal kunne tas opp igjen uten å gjøre om det som er
# gjort. Derfor hopper den over institutt som alt har en kildeliste, og
# nedlasteren hopper uansett over filer som alt ligger på disk.
#
# ⚠ REKKEFØLGEN ER IKKE ALFABETISK. Instituttene med flest studenter i første
# semester står først (se minnenotatet «1.-semester-prioritet»): blir natten
# for kort, er det de emnene bøkene trenger først som er hentet.
#
# Kjør:  zsh scripts/arkivrunde-uio.sh <arbeidsmappe>
set -u
ARB=${1:?bruk: arkivrunde-uio.sh <arbeidsmappe>}
MAAL=~/Desktop/Eksamner/_nedlastet-2026-07-30
SKRIPT=${0:A:h}
mkdir -p "$ARB"

# institutt-sti | navn i manifestet
INSTITUTT=(
  "matnat/ifi|UiO IFI"
  "matnat/math|UiO MATH"
  "matnat/fys|UiO FYS"
  "matnat/kjemi|UiO KJEMI"
  "matnat/ibv|UiO IBV"
  "sv/oekonomi|UiO ØKONOMI"
  "sv/iss|UiO ISS"
  "sv/statsvitenskap|UiO ISV"
  "sv/psykologi|UiO PSI"
  "sv/sai|UiO SAI"
  "jus/jus|UiO JUS"
  "jus/ikrs|UiO IKRS"
  "uv/iped|UiO IPED"
  "uv/ils|UiO ILS"
  "uv/isp|UiO ISP"
  "hf/imk|UiO IMK"
  "hf/imv|UiO IMV"
  "matnat/geofag|UiO GEOFAG"
  "matnat/astro|UiO ASTRO"
  "matnat/farmasi|UiO FARMASI"
  "matnat/its|UiO ITS"
  "matnat/sfe|UiO SFE"
  "matnat/natfag|UiO NATFAG"
  "matnat/mn|UiO MN"
  "teologi/tf|UiO TF"
  "sv/tik|UiO TIK"
  "sv/sv|UiO SV"
  "jus/afin|UiO AFIN"
  "jus/humanrights|UiO SMR"
  "uv/cemo|UiO CEMO"
  "uv/uv|UiO UV"
  "medisin/med|UiO MED"
  "medisin/helsefag|UiO HELSEFAG"
  "medisin/isv|UiO MED-ISV"
  "medisin/helseadm|UiO HELSEADM"
  "medisin/inthealth|UiO INTHEALTH"
  "medisin/nutri|UiO NUTRI"
  "medisin/folkehelsevitenskap-epidemiologi|UiO FOLKEHELSE"
  "odont/od|UiO OD"
  "odont/tannlege|UiO TANNLEGE"
  "odont/tannpleie|UiO TANNPLEIE"
  "odont/tannteknikk|UiO TANNTEKNIKK"
  "annet/skk|UiO SKK"
  "annet/sum|UiO SUM"
  "hf/ibsensenteret|UiO IBSEN"
)

for rad in $INSTITUTT; do
  sti=${rad%%|*}
  navn=${rad##*|}
  slug=${sti//\//-}
  kilder="$ARB/kilder-$slug.csv"
  logg="$ARB/logg-$slug.txt"

  if [[ -s "$kilder" ]]; then
    echo "== $sti: kildeliste finnes alt, hopper over prøvingen"
  else
    echo "== $sti: prøver hvert emne  ($(date '+%H:%M'))"
    python3 -u "$SKRIPT/probe-emnearkiv.py" "$sti" "$navn" > "$kilder.ny" 2> "$logg"
    mv "$kilder.ny" "$kilder"
    tail -1 "$logg"
  fi

  # Bare overskriftslinja = ingen arkiv funnet. Ikke start en nedlaster på det.
  if [[ $(wc -l < "$kilder") -le 1 ]]; then
    echo "   ingen arkivmapper — går videre"
    continue
  fi

  echo "   laster ned $(( $(wc -l < "$kilder") - 1 )) mapper  ($(date '+%H:%M'))"
  PAUSE=0.5 KILDER="$kilder" MAAL="$MAAL" MANIFEST="MANIFEST-$slug.csv" \
    python3 -u "$SKRIPT/last-ned-eksamener.py" > "$ARB/nedlasting-$slug.txt" 2>&1
  tail -2 "$ARB/nedlasting-$slug.txt" | head -1
done

echo "== HELE RUNDEN FERDIG  ($(date '+%H:%M'))"
