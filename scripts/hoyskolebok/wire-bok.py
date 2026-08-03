#!/usr/bin/env python3
"""
Fase 5-wiring for en høyskolebok (generisk). Kjøres NÅR alle kapittelfiler finnes.

Bruk: python3 scripts/hoyskolebok/wire-bok.py <emne>

Forutsetter:
- docs/hoyskole-boker/<emne>/SKJELETT.md i v3-format:
  `#### Kapittel <del>.<nr>: Tittel` + bullet `**id:** \`<emne>-<del>-<nr>\` ·
  **number:** <del>.<nr> · **estimatedMinutes:** M · **prerequisites:** ...`
  og del-overskrifter `### Del N — Tittel` (eller DEL N).
- docs/hoyskole-boker/<emne>/BOKCONFIG.json:
  { "title": "EMNEKODE Fagnavn", "description": "...", "icon": "📈",
    "institusjon": "uio", "prøvedeler": [1,2,...] (deler som får -prove-kapittel),
    "sectionNames": {"0": "...", ...} (valgfri — ellers fra del-overskriftene) }
- Kapittelfiler i src/lib/data/chapters/<emne>-*.json (inkl. <emne>-<d>-prove.json
  for hver del i prøvedeler), quiz i src/lib/data/quiz-staging/<emne>-*.quiz.json.

Gjør: TextbookCourse i textbook-courses-hoyskole.ts (append) + wiring i
textbook-courses.ts, _registry.json, quiz-data-<emne>.ts + quiz-data.ts,
institusjoner.ts. Idempotent (hopper over det som alt er wiret).
Etter kjøring: slett quiz-staging/<emne>-* (mellomprodukt) før commit.
"""
import json, os, re, sys

REPO = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
CH = os.path.join(REPO, "src/lib/data/chapters")

emne = sys.argv[1]
DOCS = os.path.join(REPO, "docs/hoyskole-boker", emne)
sk = open(os.path.join(DOCS, "SKJELETT.md"), encoding="utf-8").read()
cfg = json.load(open(os.path.join(DOCS, "BOKCONFIG.json")))

# --- Parse skjelett (v3) ---
del_titles = {m.group(1): m.group(2).strip() for m in
              re.finditer(r"^###+ +DEL (\d+)\s*[—–:-]+\s*([^(\n*]+)", sk, re.M | re.I)}
del_titles.update(cfg.get("sectionNames", {}))

chapters = []
for m in re.finditer(rf"^#### Kapittel (\d+\.\d+):\s*(.+)$", sk, re.M):
    num, title = m.group(1), m.group(2).strip()
    tail = sk[m.end():m.end() + 2500]
    im = re.search(rf"\*\*id:\*\* `({emne}-\d+-\d+)`", tail)
    if not im:
        print(f"ADVARSEL: fant ikke id for kapittel {num}"); continue
    mm = re.search(r"\*\*estimatedMinutes:\*\* (\d+)", tail)
    pm = re.search(r"\*\*prerequisites:\*\* ([^\n]+)", tail)
    # Skjelettene skriver bade «**description:**» og «**Description:**».
    # Den case-sensitive varianten ga tomme beskrivelser i fire live boker
    # (psy1010, fil1001, exphil03, stv1100 — 114 kapitler til sammen),
    # fordi kursmetadataens description da ble tom streng.
    # Beskrivelsen går ofte over FLERE linjer i skjelettet. «(.+)» stanser ved
    # linjeskift, og ga 53 kursmetadata-beskrivelser som slutter midt i
    # setningen — «… som viser hvordan», «… performativitet, og» — synlig for
    # leseren i kapitteloversikten. Fortsettelseslinjer er innrykket og starter
    # ikke et nytt «- **felt:**».
    dm = re.search(
        r"\*\*description:\*\*[ \t]*(.+(?:\n(?![ \t]*[-*][ \t]*\*\*)(?![ \t]*$)"
        r"(?![ \t]*#)[ \t]*\S.*)*)", tail, re.I)
    desc = " ".join(dm.group(1).split()) if dm else ""
    # Kontrakten (§2) sier at kapittel-JSONs eget description-felt er den
    # AUTORITATIVE kilden. Skjelettet råtner når et kapittel skrives om —
    # inter1000-6-7 fikk en tredje oppgave uten at skjelettet fulgte med.
    kp = os.path.join(CH, im.group(1) + ".json")
    if os.path.exists(kp):
        try:
            kd = (json.load(open(kp, encoding="utf-8")).get("description") or "").strip()
        except Exception:
            kd = ""
        if kd and " ".join(kd.split()) != desc:
            if desc:
                print(f"  merk: {im.group(1)} — description i kapittelfila avviker "
                      f"fra skjelettet; bruker kapittelfila (autoritativ)")
            desc = " ".join(kd.split())
    chapters.append({
        "id": im.group(1), "number": num, "title": title,
        "desc": desc,
        "min": int(mm.group(1)) if mm else 50,
        "prereq": re.findall(rf"`({emne}-\d+-\d+)`", pm.group(1)) if pm else [],
    })
assert chapters, "Ingen kapitler parset — sjekk at skjelettet følger v3-formatet"
print(f"Parset {len(chapters)} kapitler fra skjelettet")

# --- Prøvekapitler etter hver del ---
full, by_del = [], {}
for c in chapters:
    by_del.setdefault(c["id"].split("-")[-2], []).append(c)
for d in sorted(by_del, key=int):
    full.extend(by_del[d])
    if int(d) in cfg.get("prøvedeler", []):
        dt = del_titles.get(d, f"Del {d}").strip()
        full.append({"id": f"{emne}-{d}-prove", "number": f"{d}.P",
                     "title": f"Prøver til del {d}: {dt}",
                     "desc": f"Fire prøver som dekker del {d} ({dt.lower()}) på eksamensnivå, med fullstendige løsninger skrevet av oss.",
                     "min": 120, "prereq": [by_del[d][-1]["id"]]})

# --- Verifiser filer + tell oppgaver ---
def count_ex(bs):
    n = 0
    for b in bs:
        if b.get("type") == "exercise":
            n += max(1, len((b.get("exercise") or {}).get("subTasks") or []))
        elif b.get("type") == "collapsible":
            n += count_ex(b.get("content", []))
    return n

missing, invalid = [], []
for c in full:
    p = os.path.join(CH, c["id"] + ".json")
    if not os.path.exists(p): missing.append(c["id"]); continue
    try:
        d = json.load(open(p))
        c["exerciseCount"] = count_ex(d.get("content", []))
        c["goals"] = d.get("competenceGoals", [])[:4]
    except Exception as e:
        invalid.append((c["id"], str(e)))
if missing or invalid:
    print("MANGLER:", missing); print("UGYLDIG:", invalid); sys.exit(1)

def ts(s): return "'" + s.replace("\\", "\\\\").replace("'", "\\'") + "'"
def topics(title):
    parts = [w.strip().strip("«»") for seg in re.split(r"[—:]", title)
             for w in re.split(r",| og ", seg) if len(w.strip()) > 2]
    return parts[:5]

const = "COURSE_" + re.sub(r"[^A-Z0-9]", "_", emne.upper())

# --- textbook-courses-hoyskole.ts (append) ---
hoy = os.path.join(REPO, "src/lib/data/textbook-courses-hoyskole.ts")
src = open(hoy).read()
if const not in src:
    L = ["", f"export const {const}: TextbookCourse = {{",
         f"  id: {ts(emne)},", f"  title: {ts(cfg['title'])},",
         "  level: 'Høyskole',", f"  description: {ts(cfg['description'])},",
         "  curriculum: 'LK20',", f"  icon: {ts(cfg.get('icon', '📘'))},",
         "  sectionNames: {"]
    for d in sorted(del_titles, key=int):
        L.append(f"    '{d}': {ts(del_titles[d].strip())},")
    L += ["  },", "  chapters: ["]
    for c in full:
        L.append("    {")
        L.append(f"      id: {ts(c['id'])},")
        L.append(f"      number: {ts(c['number'])},")
        L.append(f"      title: {ts(c['title'])},")
        L.append(f"      description: {ts(c['desc'])},")
        L.append(f"      estimatedMinutes: {c['min']},")
        L.append(f"      exerciseCount: {c['exerciseCount']},")
        L.append(f"      topics: [{', '.join(ts(t) for t in topics(c['title']))}],")
        if c["prereq"]:
            L.append(f"      prerequisites: [{', '.join(ts(p) for p in c['prereq'])}],")
        if c.get("goals"):
            L.append(f"      competenceGoals: [{', '.join(ts(g) for g in c['goals'])}],")
        L.append("    },")
    L += ["  ],", "};", ""]
    open(hoy, "a").write("\n".join(L))
    print(f"Appendet {const} ({len(full)} kapitler)")

# --- textbook-courses.ts ---
tc = os.path.join(REPO, "src/lib/data/textbook-courses.ts")
src = open(tc).read()
if const not in src:
    m = re.search(r"import \{ ([^}]+) \} from './textbook-courses-hoyskole';", src)
    src = src.replace(m.group(0), f"import {{ {m.group(1)}, {const} }} from './textbook-courses-hoyskole';", 1)
    last = m.group(1).split(",")[-1].strip()
    src = src.replace(f"  {last},\n", f"  {last},\n  {const},\n", 1)
    assert src.count(const) == 2, "patch av textbook-courses.ts feilet"
    open(tc, "w").write(src)
    print("Patchet textbook-courses.ts")

# --- registry ---
regp = os.path.join(CH, "_registry.json")
reg = json.load(open(regp))
new = [c["id"] for c in full if c["id"] not in set(reg["chapterIds"])]
reg["chapterIds"].extend(new)
json.dump(reg, open(regp, "w"), ensure_ascii=False)
print(f"Registry: +{len(new)} (totalt {len(reg['chapterIds'])})")

# --- quiz ---
qdir = os.path.join(REPO, "src/lib/data/quiz-staging")
qmap, tot = {}, 0
if os.path.isdir(qdir):
    for f in sorted(os.listdir(qdir)):
        if f.endswith(".quiz.json") and f.startswith(emne + "-"):
            qs = json.load(open(os.path.join(qdir, f)))
            for q in qs: assert len(q["options"]) == 4, f"{f}: != 4 options"
            qmap[f[:-10]] = qs; tot += len(qs)
qvar = "quizData_" + re.sub(r"[^a-z0-9]", "", emne)
ql = ["import type { QuizQuestion } from './quiz-data';", "",
      f"const {qvar}: Record<string, QuizQuestion[]> = {{"]
for cid, qs in qmap.items():
    ql.append(f"  '{cid}': [")
    for q in qs:
        ql.append("    {")
        ql.append(f"      question: {json.dumps(q['question'], ensure_ascii=False)},")
        ql.append(f"      options: [{', '.join(json.dumps(o, ensure_ascii=False) for o in q['options'])}],")
        if q.get("explanation"):
            ql.append(f"      explanation: {json.dumps(q['explanation'], ensure_ascii=False)},")
        ql.append("    },")
    ql.append("  ],")
ql += ["};", "", f"export default {qvar};", ""]
open(os.path.join(REPO, f"src/lib/data/quiz-data-{emne}.ts"), "w").write("\n".join(ql))
print(f"quiz-data-{emne}.ts: {tot} spørsmål i {len(qmap)} kapitler")

qd = os.path.join(REPO, "src/lib/data/quiz-data.ts")
src = open(qd).read()
if qvar not in src:
    anchor = re.findall(r"import (quizData_\w+) from '\./quiz-data-[\w-]+';", src)[-1]
    aline = re.findall(rf"import {anchor} from '[^']+';", src)[0]
    src = src.replace(aline, f"{aline}\nimport {qvar} from './quiz-data-{emne}';", 1)
    src = src.replace(f"  ...{anchor},", f"  ...{anchor},\n  ...{qvar},", 1)
    assert src.count(qvar) == 2, "patch av quiz-data.ts feilet"
    open(qd, "w").write(src)
    print("Patchet quiz-data.ts")

# --- navigasjon ---
inst = os.path.join(REPO, "src/app/trinn/hoyere/institusjoner.ts")
src = open(inst).read()
if f"'{emne}'" not in src:
    slug = cfg["institusjon"]
    m = re.search(rf"slug: '{slug}',.*?subjects: \[\n", src, re.S)
    assert m, f"fant ikke institusjon '{slug}' i institusjoner.ts — legg til institusjonen først"
    entry = f"      {{ courseId: {ts(emne)}, name: {ts(cfg['title'])}, icon: {ts(cfg.get('icon', '📘'))}, color: 'from-slate-500 to-slate-700' }},\n"
    src = src[:m.end()] + entry + src[m.end():]
    open(inst, "w").write(src)
    print(f"Patchet institusjoner.ts ({slug})")

defs = sum(sum(1 for b in json.load(open(os.path.join(CH, c["id"] + ".json"))).get("content", [])
               if b.get("type") == "definition") for c in full)
print(f"Flashcard-grunnlag: {defs} definisjoner | WIRING OK")
print("HUSK: slett src/lib/data/quiz-staging/ før commit, og kjør sjekk-bok.py + npm run build")
