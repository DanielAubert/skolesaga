// Ren regning bak breddetilpasningen (kopi fra eksamenssett src/lib/visning/tilpass-bredde.ts, 22.10.2026; brukt av tilpass-bredde-dom.ts).
// Daniels hardregel: aldri horisontal scroll på mobil — formler, tabeller og kode krympes eller brytes, aldri rulles
// eller klippes. Trinnene: (1) krymp skriften ned til et gulv, (2) holder ikke gulvet, skaleres hele elementet ned
// som helhet (CSS zoom der nettleseren støtter det, ellers transform med reservert plass), så det får plass uten
// klipping. Alt som allerede får plass, røres ikke.

/** Formler krympes med font-size ned til dette gulvet før de skaleres som helhet (10.10.2026). */
export const FORMEL_GULV_PX = 8;
/** Kode i oppgavetekst krymper ned til 9 px (som kodeblokkene i tilHtml); under det brytes linjene. */
export const KODE_GULV_PX = 9;
/** Tabeller uten zoom-støtte krymper skriften ned til 6 px før de skaleres som helhet. */
export const TABELL_GULV_PX = 6;
/** Margin mot spaltekanten, som før: et element regnes som for bredt når det er bredere enn plass − 2. */
export const SLINGRING_PX = 2;
/** Elementet krympes til plass − 4, så avrunding ikke gir én piksel overløp. */
export const LUFT_PX = 4;

export function forBred(bredde: number, plass: number): boolean {
  return bredde > plass - SLINGRING_PX;
}

/** Ny skriftstørrelse som får elementet til å passe, aldri under gulvet. naadGulv = gulvet holdt ikke. */
export function krympFont(naaFont: number, bredde: number, plass: number, gulv: number): { font: number; naadGulv: boolean } {
  const onsket = (naaFont * (plass - LUFT_PX)) / bredde;
  return onsket < gulv ? { font: gulv, naadGulv: true } : { font: onsket, naadGulv: false };
}

/** Skalafaktor for å skalere et element som helhet inn i plassen (1 = uendret). Aldri over 1, aldri 0. */
export function skalaForBredde(bredde: number, plass: number): number {
  if (!(bredde > 0) || !forBred(bredde, plass)) return 1;
  return Math.max(0.05, Math.min(1, (plass - LUFT_PX) / bredde));
}

export type Skaleringsstil = Record<string, string>;

/**
 * CSS for å skalere et element som helhet. Med zoom endres layoutboksen selv. Uten zoom brukes transform, og plassen
 * elementet tar i flyten reserveres med negative marger (bredde og høyde · (1 − skala)), så det verken klippes eller
 * dytter siden sidelengs og teksten under ikke får et hull.
 */
export function skaleringsstil(
  skala: number,
  bredde: number,
  hoyde: number,
  stotterZoom: boolean,
  erInline = false,
): Skaleringsstil {
  const s = skala.toFixed(3);
  if (stotterZoom) return { zoom: s };
  return {
    // transform virker ikke på rene inline-bokser (inline .katex): de blir inline-block og får bredden reservert med
    // negativ høyremarg. Blokker (formelblokk, tabell) beholder display og bredde — en negativ høyremarg ville gjort
    // en blokk med auto-bredde BREDERE.
    ...(erInline
      ? { display: "inline-block", "margin-right": `${(-(bredde * (1 - skala))).toFixed(2)}px` }
      : {}),
    transform: `scale(${s})`,
    "transform-origin": "0 0",
    "margin-bottom": `${(-(hoyde * (1 - skala))).toFixed(2)}px`,
  };
}

/** Egenskapene skaleringsstil kan sette — nullstilles før ny måling. */
export const SKALERINGSEGENSKAPER = ["zoom", "display", "transform", "transform-origin", "margin-right", "margin-bottom"];
