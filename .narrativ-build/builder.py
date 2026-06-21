import json, os, sys

CHAP_DIR = "/Users/danielandreasaubert/eksamenssett/Skolesaga/src/lib/data/chapters"

def build(cid, description, est_minutes, blocks):
    """blocks: list of ('text', md) or ('quiz', task, [questions])
    question = (task, [(text, is_correct), ...], solution)
    """
    src = json.load(open(os.path.join(CHAP_DIR, f"{cid}.json")))
    content = []
    quiz_n = 0
    sec_n = 0
    for b in blocks:
        if b[0] == 'intro':
            content.append({"id": f"{cid}-n-intro", "type": "text", "content": b[1]})
        elif b[0] == 'summary':
            content.append({"id": f"{cid}-n-summary", "type": "text", "content": b[1]})
        elif b[0] == 'text':
            sec_n += 1
            content.append({"id": f"{cid}-n-section{sec_n}", "type": "text", "content": b[1]})
        elif b[0] == 'quiz':
            quiz_n += 1
            task, questions = b[1], b[2]
            qlist = []
            for qi, q in enumerate(questions):
                qtask, opts, sol = q
                options = []
                for oi, (otext, corr) in enumerate(opts):
                    options.append({"id": chr(97+oi), "text": otext, "isCorrect": bool(corr)})
                ncorr = sum(1 for o in options if o["isCorrect"])
                assert ncorr == 1, f"{cid} quiz{quiz_n} q{qi}: {ncorr} correct"
                qlist.append({"id": f"{cid}-n-quiz{quiz_n}-q{qi}", "task": qtask, "options": options, "solution": sol})
            content.append({"id": f"{cid}-n-quiz{quiz_n}", "type": "exercise", "exercise": {
                "id": f"{cid}-n-quiz{quiz_n}", "number": f"Quiz {quiz_n}", "type": "multiple-choice",
                "task": task, "options": [{"id": "a", "text": "placeholder", "isCorrect": True}],
                "solution": "", "questions": qlist}})
    out = {
        "id": f"{cid}-narrativ", "courseId": src["courseId"], "chapterNumber": src["chapterNumber"],
        "title": src["title"], "subtitle": "Narrativ versjon", "description": description,
        "estimatedMinutes": est_minutes, "competenceGoals": src["competenceGoals"],
        "linkedChapterId": cid, "content": content, "exercises": []
    }
    path = os.path.join(CHAP_DIR, f"{cid}-narrativ.json")
    with open(path, "w", encoding="utf-8") as f:
        json.dump(out, f, ensure_ascii=False, separators=(',', ':'))
    # validate $ balance
    s = json.dumps(out, ensure_ascii=False)
    assert s.count('$') % 2 == 0, f"{cid}: unbalanced $"
    nq = sum(1 for c in content if c['type'] == 'exercise')
    nquestions = sum(len(c['exercise']['questions']) for c in content if c['type'] == 'exercise')
    print(f"OK {cid}: {len(content)} blocks, {nq} quizzes, {nquestions} questions -> {path}")
    return nq, nquestions
