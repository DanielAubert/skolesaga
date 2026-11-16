"""Teller oppgaver i kapittelfilene (samme definisjon som kapittelvisningen etter rettingen)
og sammenligner med exerciseCount i metadata. Sekvensielle flervalgsquizer telles per spørsmål."""
import json,re,glob,os,sys,collections
R=os.path.expanduser('~/eksamenssett/Skolesaga')
CH=R+'/src/lib/data/chapters'
def ex_of(b):
    return b.get('exercise') if isinstance(b,dict) and b.get('type')=='exercise' else None
def units(e):
    q=e.get('questions')
    if e.get('type')=='multiple-choice' and isinstance(q,list) and q: return len(q)
    return 1
def count(d):
    exs=list(d.get('exercises') or [])
    for b in d.get('content') or []:
        e=ex_of(b)
        if e: exs.append(e)
        if isinstance(b,dict) and b.get('type')=='collapsible':
            for ib in b.get('content') or []:
                e=ex_of(ib)
                if e: exs.append(e)
    exs=[e for e in exs if e]
    return sum(units(e) for e in exs), len(exs)
def main():
    meta={}
    for f in glob.glob(R+'/src/lib/data/textbook-courses*.ts'):
        t=open(f).read()
        for m in re.finditer(r"\bid:\s*'([^']+)'",t):
            nxt=re.search(r"\bid:\s*'",t[m.end():])
            seg=t[m.end(): m.end()+(nxt.start() if nxt else len(t))]
            c=re.search(r"exerciseCount:\s*(\d+)",seg)
            l=re.search(r"linkedChapterId:\s*'([^']+)'",seg)
            if c: meta[m.group(1)]=(int(c.group(1)), l.group(1) if l else None, os.path.basename(f))
    rows=[]
    for cid,(n,linked,f) in meta.items():
        for v,path in (('vanlig',f'{CH}/{cid}.json'),('narrativ',f'{CH}/{linked}.json' if linked else None)):
            if not path or not os.path.exists(path): continue
            try: d=json.load(open(path))
            except Exception as e: rows.append((f,cid,v,n,'JSONFEIL','')); continue
            u,k=count(d)
            rows.append((f,cid,v,n,u,k))
    out=sys.argv[1] if __name__=="__main__" and len(sys.argv)>1 else None
    avvik=[r for r in rows if r[4]!=r[3]]
    print('kapitler i metadata:',len(meta),'filer telt:',len(rows),'avvik:',len(avvik))
    print('avvik vanlig:',sum(1 for r in avvik if r[2]=='vanlig'),'narrativ:',sum(1 for r in avvik if r[2]=='narrativ'))
    print('avvik der faktisk=0:',sum(1 for r in avvik if r[4]==0))
    if out:
        with open(out,'w') as fh:
            fh.write('fil\tkapittel\tversjon\tmetadata\tfaktisk(enheter)\tblokker\n')
            for r in avvik: fh.write('\t'.join(map(str,r))+'\n')
    for r in rows:
        if r[1]=='naturfag-6-2-3': print(r)

if __name__=="__main__":
    main()
