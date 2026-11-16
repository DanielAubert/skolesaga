"""Setter exerciseCount i textbook-courses*.ts lik talt antall i den vanlige kapittelfila (bare der fila finnes)."""
import json,re,glob,os,sys
sys.path.insert(0,os.path.dirname(__file__))
R=os.path.expanduser('~/eksamenssett/Skolesaga'); CH=R+'/src/lib/data/chapters'
from tell_oppgaver import count  # noqa
tot=0
for f in sorted(glob.glob(R+'/src/lib/data/textbook-courses*.ts')):
    t=open(f).read(); ids=list(re.finditer(r"\bid:\s*'([^']+)'",t)); edits=[]
    for i,m in enumerate(ids):
        end=ids[i+1].start() if i+1<len(ids) else len(t)
        c=re.compile(r"exerciseCount:\s*(\d+)").search(t,m.end(),end)
        p=f'{CH}/{m.group(1)}.json'
        if not c or not os.path.exists(p): continue
        try: n,_=count(json.load(open(p)))
        except Exception: continue
        if n!=int(c.group(1)): edits.append((c.start(1),c.end(1),str(n)))
    for s,e,v in reversed(edits): t=t[:s]+v+t[e:]
    if edits: open(f,'w').write(t); print(os.path.basename(f),len(edits)); tot+=len(edits)
print('totalt',tot)
