// Breddetilpasning i nettleseren for Skolesagas lærebokinnhold (22.10.2026; kopi av tilpassBredde i eksamenssett
// src/components/vgs-kapitler/oppgave-tekst.tsx). Daniels hardregel: aldri horisontal scroll på mobil — formler,
// tabeller og kode krympes eller skaleres ned, aldri rulles eller klippes. Rendret sjekk 22.10 fant sidescroll på 54 av
// 188 kapittelsider i 1T/2P ved 390 px (brede tabeller og lange formelblokker).
import {
  FORMEL_GULV_PX,
  KODE_GULV_PX,
  SKALERINGSEGENSKAPER,
  TABELL_GULV_PX,
  forBred,
  krympFont,
  skalaForBredde,
  skaleringsstil,
} from "./tilpass-bredde";

// Nullstiller en tidligere skalering som helhet (data-fit-skala), så elementet måles i naturlig størrelse.
function nullstillSkala(el: HTMLElement) {
  if (el.dataset.fitSkala === undefined) return;
  for (const e of SKALERINGSEGENSKAPER) el.style.removeProperty(e);
  delete el.dataset.fitSkala;
}

// Sikring (10.10.2026): holder ikke skriftgulvet, skaleres elementet ned som helhet så det får plass — uten klipping
// og uten sidescroll. Bredden måles på nytt etter at skriften er krympet.
function skalerSomHelhet(el: HTMLElement, plass: number, stotterZoom: boolean) {
  const r = el.getBoundingClientRect();
  const bredde = Math.max(r.width, el.scrollWidth);
  const skala = skalaForBredde(bredde, plass);
  if (skala >= 1) return;
  const stil = skaleringsstil(skala, bredde, r.height, stotterZoom, getComputedStyle(el).display === "inline");
  for (const [k, v] of Object.entries(stil)) el.style.setProperty(k, v);
  el.dataset.fitSkala = skala.toFixed(3);
}

// Formler, tabeller og kode bredere enn spalten KRYMPES så de får plass — de
// scroller aldri sidelengs og klippes aldri. KaTeX legger ut i em, så font-size skalerer både
// formel og boks; tabeller skaleres med zoom (font-size alene krymper ikke
// celler med fast bredde). Samme regel som løsningssidene (solution-content).
// Holder ikke gulvet (formler 8 px, kode 9 px, tabeller uten zoom 6 px), skaleres elementet som helhet (10.10.2026).
export function tilpassBredde(container: HTMLElement) {
  const spalte = container.clientWidth;
  if (spalte === 0) return;
  const stotterZoom = typeof CSS !== "undefined" && CSS.supports?.("zoom", "0.5");

  const plassFor = (el: HTMLElement) => {
    const forelder = el.parentElement?.closest<HTMLElement>("div, p, li, td, th");
    let plass = spalte;
    if (forelder && forelder.clientWidth > 0) {
      const fs = getComputedStyle(forelder);
      const innhold = forelder.clientWidth - (parseFloat(fs.paddingLeft) || 0) - (parseFloat(fs.paddingRight) || 0);
      if (innhold > 0) plass = Math.min(plass, innhold);
    }
    return plass;
  };

  container.querySelectorAll<HTMLElement>(".katex-display, .katex").forEach((el) => {
    // Indre .katex i en display-blokk måles via blokken
    if (el.classList.contains("katex") && el.parentElement?.classList.contains("katex-display")) return;
    nullstillSkala(el);
    if (el.dataset.fitDone === "1") {
      el.style.fontSize = "";
      delete el.dataset.fitDone;
    }
    const plass = plassFor(el);
    const bredde = Math.max(el.getBoundingClientRect().width, el.scrollWidth);
    if (!forBred(bredde, plass)) return;
    const naaFont = parseFloat(getComputedStyle(el).fontSize) || 16;
    const { font, naadGulv } = krympFont(naaFont, bredde, plass, FORMEL_GULV_PX);
    el.style.fontSize = `${font.toFixed(2)}px`;
    el.dataset.fitDone = "1";
    // Sikring: 8 px holdt ikke — hele formelen skaleres ned så den får plass (før: siden scrollet sidelengs).
    if (naadGulv) skalerSomHelhet(el, plass, stotterZoom);
  });

  // Kode i ferdig HTML (eksamensoppgavenes <pre><code> fra løsningsfila, uten pre-wrap): krymper til lengste linje
  // passer, ned til 9 px; under det brytes linjene (samme regel som kodeblokkene i tilHtml). Før (10.10.2026) sto en
  // 493 px bred kodeblokk i R1 V2026 oppg. 9 klippet inne i et kort med overflow:hidden på kapittelsiden R1
  // derivasjon, og en formel etter den ga siden 419 px sidescroll ved 360/390 px.
  container.querySelectorAll<HTMLElement>("pre").forEach((pre) => {
    if (pre.dataset.fitDone === "1") {
      pre.style.fontSize = "";
      pre.style.whiteSpace = "";
      pre.style.overflowWrap = "";
      delete pre.dataset.fitDone;
    }
    if (getComputedStyle(pre).whiteSpace.startsWith("pre-wrap") || pre.closest("table")) return;
    const plass = plassFor(pre);
    const bredde = Math.max(pre.getBoundingClientRect().width, pre.scrollWidth);
    if (!forBred(bredde, plass)) return;
    const naaFont = parseFloat(getComputedStyle(pre).fontSize) || 14;
    const { font, naadGulv } = krympFont(naaFont, bredde, plass, KODE_GULV_PX);
    pre.style.fontSize = `${font.toFixed(2)}px`;
    if (naadGulv) {
      pre.style.whiteSpace = "pre-wrap";
      pre.style.overflowWrap = "anywhere";
    }
    pre.dataset.fitDone = "1";
  });

  container.querySelectorAll<HTMLElement>("table").forEach((tab) => {
    // Tabeller brytes ALDRI inne i ord eller kode (10.10.2026: «Sva/r», «=GJENNOMSNITT(B2:B/8)» i muntlig øving).
    // Arvet overflow-wrap:anywhere (prose-klassene) og break-all på kodespenn lot nettleseren klemme kolonnene i
    // stedet for å la tabellen bli bred — da målte vi aldri noe overløp og zoomet aldri. Her nullstilles det før
    // målingen, så tabellen får sin naturlige bredde og krymper som helhet.
    tab.style.overflowWrap = "normal";
    tab.style.wordBreak = "normal";
    tab.querySelectorAll<HTMLElement>("code").forEach((c) => {
      c.style.whiteSpace = "nowrap";
      c.style.wordBreak = "normal";
      c.style.overflowWrap = "normal";
    });
    nullstillSkala(tab);
    if (tab.dataset.fitDone === "1") {
      tab.style.removeProperty("zoom");
      tab.style.fontSize = "";
      delete tab.dataset.fitDone;
    }
    const plass = plassFor(tab);
    const bredde = Math.max(tab.getBoundingClientRect().width, tab.scrollWidth);
    if (!forBred(bredde, plass)) return;
    tab.dataset.fitDone = "1";
    if (stotterZoom) {
      tab.style.setProperty("zoom", ((plass - 4) / bredde).toFixed(3));
      return;
    }
    const { font, naadGulv } = krympFont(parseFloat(getComputedStyle(tab).fontSize) || 16, bredde, plass, TABELL_GULV_PX);
    tab.style.fontSize = `${font.toFixed(2)}px`;
    // Sikring uten zoom: 6 px holdt ikke (celler med fast bredde) — tabellen skaleres som helhet med transform.
    if (naadGulv || forBred(Math.max(tab.getBoundingClientRect().width, tab.scrollWidth), plass)) skalerSomHelhet(tab, plass, false);
  });
}
