#!/usr/bin/env bash
# Genererer forsidebilder for høyskolefagene fra scripts/prompts-fag.json.
#
# Metode og regler: docs/BILDEPROMPT-METODE.md
#
# Kjør:  bash scripts/lag-fagbilder.sh            # alle som mangler
#        bash scripts/lag-fagbilder.sh in2010     # ett bestemt fag
#        FORCE=1 bash scripts/lag-fagbilder.sh    # regenerer også de som finnes
#
# PNG-masteren beholdes i MASTER-mappa. Gemini lagrer IKKE det den genererer
# (/files og /cachedContents er tomme), så slettes masteren finnes bildet ikke
# lenger noe sted. Det skjedde 30. juli 2026 og tvang en oppskalering.
set -euo pipefail
cd "$(dirname "$0")/.."

PROMPTER=scripts/prompts-fag.json
MASTER=${MASTER:-.bildemastere/fag}
UT=public/images/subjects
mkdir -p "$MASTER" "$UT"

[ -f "$PROMPTER" ] || { echo "Fant ikke $PROMPTER"; exit 1; }

VALGT="${1:-}"
mapfile -t SLUGS < <(python3 -c "
import json,sys
d=json.load(open('$PROMPTER',encoding='utf-8'))
valgt='$VALGT'
for b in d['bilder']:
    if not valgt or b['slug']==valgt: print(b['slug'])
")

echo "${#SLUGS[@]} fag i kø"
for slug in "${SLUGS[@]}"; do
  if [ -f "$UT/$slug.webp" ] && [ -z "${FORCE:-}" ]; then
    echo "  $slug — finnes, hoppet over"
    continue
  fi
  python3 -c "
import json
d=json.load(open('$PROMPTER',encoding='utf-8'))
print(next(b['prompt'] for b in d['bilder'] if b['slug']=='$slug'))" > /tmp/fagprompt.txt

  echo "  $slug — genererer…"
  npx tsx scripts/generate-cover-image.ts \
    --prompt "$(cat /tmp/fagprompt.txt)" \
    --output "$MASTER/$slug.png" \
    --aspect-ratio 21:9 --size 4K 2>&1 | grep -E "Lagret|Feil" | sed 's/^/     /'

  # Én fil på 2400 px dekker både kort og hero: kortet og heroet bruker
  # next/image, og Supabase Storage ligger i remotePatterns, så Next lager
  # mindre varianter selv. Heroet er maks 1200 CSS-px → 2400 px gir 2x.
  node -e "
    const sharp=require('sharp'), fs=require('fs');
    (async()=>{
      await sharp('$MASTER/$slug.png').resize({width:2400}).webp({quality:84}).toFile('$UT/$slug.webp');
      const m=await sharp('$UT/$slug.webp').metadata();
      console.log('     '+m.width+'×'+m.height+'  '+(fs.statSync('$UT/$slug.webp').size/1024).toFixed(0)+' kB');
    })()"
  sleep 2
done

echo
echo "Laster opp til Supabase Storage (uten dette gir /images 400 for leseren)…"
npx tsx scripts/upload-media-storage.ts 2>&1 | tail -2
