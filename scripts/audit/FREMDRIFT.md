# FREMDRIFT — auditverktøy (22.10.2026)

- [x] kartlagt eksisterende skript (mek_skann, maal_bmnn, maal_prosa, katex_sjekk, sveip_bm_nn, kap.py, aeoa_sjekk)
- [x] felles.py
- [x] maskin.py + katex_port.cjs + aeoa.py (justert mot 1T/2P for falske positive)
- [x] regn.py + test_regn.py (FP-justert mot 1T/2P/R1/R2; mutasjonstest 72–86 %)
- [x] utdrag.py (−73 % tokens mot rå filer; --bare-endret −97 %)
- [x] hukommelse.py (ledger per bok, fillås, fra-audit) — ende-til-ende-testet mot test-ledger i scratchpad
- [x] kjor-audit.sh + OPPDRAG-MAL.md + oppdrag.py + test_maskin.py (selvtest 24/24 porter)
- [x] README.md
- [x] kjøring 1T/2P: kjoringer/*-1t-2p-endelig (ekte ledger er fortsatt tom — ingen blokker er merket godkjent)
