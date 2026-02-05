#!/bin/bash
# Script to add oppsummering blocks to chapters

FILE="src/lib/data/textbook-content-helseoppvekst-vg1.ts"

# Create a Python script that will do all the insertions
python3 << 'PYTHON_SCRIPT'
import re

filepath = "src/lib/data/textbook-content-helseoppvekst-vg1.ts"

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Define all oppsummering blocks to add
# Format: (search_pattern, oppsummering_id, oppsummering_content)
blocks = [
    # Chapter 1-1
    (r"(id: 'helseoppvekst-vg1-1-1-example'[^}]+solution: `[^`]+`,\n    },\n  \],)",
     "helseoppvekst-vg1-1-1-oppsummering",
     """## Oppsummering

**Hovedpunkter:**
- Helse- og oppvekstsektoren omfatter helsetjenester, omsorgstjenester og tjenester for barn og unge
- Sektoren deles i primaerhelsetjenesten (kommunen) og spesialisthelsetjenesten (sykehus)
- Med fagbrev kan du bli helsefagarbeider, barne- og ungdomsarbeider eller portorfagarbeider

**Sentrale begreper:**
- Helse- og oppvekstsektoren: Arbeidslivet som omfatter helse-, omsorgs- og oppveksttjenester
- Primaerhelsetjenesten: Kommunale helsetjenester som fastlege og hjemmesykepleie
- Spesialisthelsetjenesten: Sykehus og spesialiserte helsetjenester
- Menneskeverd: Den iboende verdien alle mennesker har

**Tips for praksis:**
- Mot alle mennesker med respekt og verdighet
- Vaer bevisst egne holdninger og fordommer
- Reflekter over hvordan verdier pavirker handlingene dine"""),

    # Chapter 1-2
    (r"(id: 'helseoppvekst-vg1-1-2-example'[^}]+solution: `[^`]+`,\n    },\n  \],)",
     "helseoppvekst-vg1-1-2-oppsummering",
     """## Oppsummering

**Hovedpunkter:**
- Helse er mer enn fravar av sykdom - det inkluderer fysisk, psykisk og sosialt velvare
- Mange faktorer pavirker helse: arv, livsstil, sosiale forhold og miljo
- Forebygging fokuserer pa a hindre sykdom, helsefremmende arbeid styrker ressurser for god helse

**Sentrale begreper:**
- Helse: Fullstendig fysisk, psykisk og sosialt velvare (WHO)
- Helsedeterminanter: Faktorer som pavirker helsetilstanden
- Sosial ulikhet i helse: Systematiske helseforskjeller mellom sosiale grupper
- Primaerforebygging: Tiltak for a hindre sykdom hos friske

**Tips for praksis:**
- Se hele mennesket - kropp, psyke og sosiale forhold henger sammen
- Tenk helsefremmende - stott menneskers ressurser og muligheter
- Bidra til a utjevne sosiale forskjeller i helse"""),
]

# Check which chapters already have oppsummering
existing = re.findall(r"id: '(helseoppvekst-vg1-\d+-\d+-oppsummering)'", content)
print(f"Existing oppsummering blocks: {len(existing)}")

# Now add the missing ones using sed-style replacement
# This script will be used to verify pattern matching
for pattern, opp_id, opp_content in blocks:
    if opp_id in content:
        print(f"Skipping {opp_id} - already exists")
        continue

    match = re.search(pattern, content, re.DOTALL)
    if match:
        print(f"Found pattern for {opp_id}")
    else:
        print(f"Pattern NOT found for {opp_id}")

PYTHON_SCRIPT
