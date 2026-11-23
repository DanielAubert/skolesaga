'use client';

import { useEffect } from 'react';

/**
 * Nynorsk rammetekst i kapittelvisningen (/nn/…).
 *
 * Kapittelinnhaldet er omsett, men knappar og etikettar i dei delte komponentane (oppgåver, løysingar, hint,
 * framgang, feilmelding) er hardkoda på bokmål. Same mønster som det nordsamiske overlegget i `sme-review.tsx`:
 * byter ut heile tekstnodar som er NØYAKTIG ein av strengane under (med valfri teljar «(2)»), berre inne i
 * hovudinnhaldet, aldri i input/textarea og aldri i formlar (.katex). Kapitteltekst vert aldri treft, for han er
 * alt nynorsk og ein tekstnode i brødteksten er aldri berre «Løsning» o.l. Orda er slått opp i Nynorskordboka.
 *
 * Runde 2 av klassekapitla (23.11.2026): 27 % av elevane les på nynorsk, og «Din fremgang i kapitlet»,
 * «Vis løsning», «oppgaver» stod på bokmål rundt nynorsk tekst.
 */
const ORD: Record<string, string> = {
  'Vis løsning': 'Vis løysing',
  'Skjul løsning': 'Skjul løysing',
  'Løsning': 'Løysing',
  'Løsning:': 'Løysing:',
  'Løsningsforslag': 'Løysingsforslag',
  'Se videoløsning': 'Sjå videoløysing',
  'Vis oppgaver': 'Vis oppgåver',
  'Skjul oppgaver': 'Skjul oppgåver',
  'Vis repetisjonsoppgaver': 'Vis repetisjonsoppgåver',
  'Skjul repetisjonsoppgaver': 'Skjul repetisjonsoppgåver',
  'Repetisjonsoppgaver': 'Repetisjonsoppgåver',
  'Oppgave': 'Oppgåve',
  'Oppgaver': 'Oppgåver',
  'oppgaver': 'oppgåver',
  'deloppgaver': 'deloppgåver',
  'Andre deloppgaver:': 'Andre deloppgåver:',
  'Din fremgang': 'Framgangen din',
  'Forrige': 'Førre',
  'Meld feil eller forbedring': 'Meld feil eller forbetring',
  'Du har svart riktig på alle deloppgavene.': 'Du har svart rett på alle deloppgåvene.',
  'Løs oppgaven': 'Løys oppgåva',
  'Løs oppgave': 'Løys oppgåva',
  'Tegn løsning': 'Teikn løysing',
  'Tegning': 'Teikning',
  'Last opp bilde': 'Last opp bilete',
};

export function NynorskUiOverlegg({ aktiv }: { aktiv: boolean }) {
  useEffect(() => {
    if (!aktiv) return;
    const rot = document.getElementById('main-content');
    if (!rot) return;
    // Byttede noder huskes, så bokmål kommer tilbake når eleven bytter målform uten ny sidelasting
    const byttet: Array<[Text, string, string]> = [];
    const sett = (node: Text, ny: string) => {
      const gml = node.nodeValue ?? '';
      node.nodeValue = ny;
      byttet.push([node, gml, ny]);
    };
    const fiks = (node: Text) => {
      const t = node.nodeValue ?? '';
      const nøkkel = t.trim();
      if (!nøkkel) return;
      const p = node.parentElement;
      if (!p || p.closest('input,textarea,.katex,[contenteditable="true"]')) return;
      if (ORD[nøkkel]) {
        sett(node, t.replace(nøkkel, ORD[nøkkel]));
        return;
      }
      const m = nøkkel.match(/^(.*?)(\s*\(\d+\))$/);
      if (m && ORD[m[1]]) sett(node, t.replace(nøkkel, ORD[m[1]] + m[2]));
    };
    const fiksTre = (r: Node) => {
      const w = document.createTreeWalker(r, NodeFilter.SHOW_TEXT);
      const noder: Text[] = [];
      let n: Node | null;
      while ((n = w.nextNode())) noder.push(n as Text);
      noder.forEach(fiks);
    };
    fiksTre(rot);
    const obs = new MutationObserver((endringar) => {
      for (const e of endringar) {
        if (e.type === 'characterData' && e.target.nodeType === 3) fiks(e.target as Text);
        e.addedNodes.forEach((nd) => {
          if (nd.nodeType === 1) fiksTre(nd);
          else if (nd.nodeType === 3) fiks(nd as Text);
        });
      }
    });
    obs.observe(rot, { childList: true, subtree: true, characterData: true });
    return () => {
      obs.disconnect();
      for (const [node, gml, ny] of byttet) if (node.isConnected && node.nodeValue === ny) node.nodeValue = gml;
    };
  }, [aktiv]);
  return null;
}
