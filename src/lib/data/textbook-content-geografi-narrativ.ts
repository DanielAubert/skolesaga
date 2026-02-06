/**
 * Geografi VG1 - Narrative versjoner
 *
 * Aggregatorfil som samler alle narrative kapitler fra del1-del5
 * Optimalisert for lesing/lytting på mobil
 */

import { GEOGRAFI_NARRATIV_DEL1_CHAPTERS } from './textbook-content-geografi-narrativ-del1';
import { GEOGRAFI_NARRATIV_DEL2_CHAPTERS } from './textbook-content-geografi-narrativ-del2';
import { GEOGRAFI_NARRATIV_DEL3_CHAPTERS } from './textbook-content-geografi-narrativ-del3';
import { GEOGRAFI_NARRATIV_DEL4_CHAPTERS } from './textbook-content-geografi-narrativ-del4';
import { GEOGRAFI_NARRATIV_DEL5_CHAPTERS } from './textbook-content-geografi-narrativ-del5';

// Re-eksporter individuelle kapitler for direkte import
export * from './textbook-content-geografi-narrativ-del1';
export * from './textbook-content-geografi-narrativ-del2';
export * from './textbook-content-geografi-narrativ-del3';
export * from './textbook-content-geografi-narrativ-del4';
export * from './textbook-content-geografi-narrativ-del5';

/**
 * Alle narrative kapitler for Geografi VG1
 *
 * Del 1: Naturgeografi grunnlag (kap 1-5)
 *   - Kart, GIS og geografiske metoder
 *   - Jordens oppbygging og landformer
 *   - Vær, klima og klimasoner
 *   - Klimaendringer og konsekvenser
 *   - Befolkning og demografiske utfordringer
 *
 * Del 2: Samfunnsgeografi grunnlag (kap 6-10)
 *   - Urbanisering og byutvikling
 *   - Ressursforvaltning og bærekraft
 *   - Naturkatastrofer og sårbarhet
 *   - Norge - naturgrunnlag og ressurser
 *   - Global ulikhet og utvikling
 *
 * Del 3: Naturgeografi fordypning (kap 11-15)
 *   - Elver og vassdrag
 *   - Isbreer og istider
 *   - Kystlandskap
 *   - Vegetasjon og økosystemer
 *   - Jord og jordbruk
 *
 * Del 4: Samfunnsgeografi fordypning (kap 16-20)
 *   - Befolkning og demografi
 *   - Migrasjon
 *   - Byer og urbanisering
 *   - Naturressurser
 *   - Havressurser og fiskeri
 *
 * Del 5: Globalisering, geopolitikk og metode (kap 21-25)
 *   - Globalisering og handel
 *   - Utviklingsgeografi
 *   - Geopolitikk
 *   - Arktis og Antarktis
 *   - Geografisk metode - feltarbeid
 */
export const GEOGRAFI_NARRATIV_CHAPTERS = [
  // Del 1: Naturgeografi grunnlag (5 kapitler)
  ...GEOGRAFI_NARRATIV_DEL1_CHAPTERS,

  // Del 2: Samfunnsgeografi grunnlag (5 kapitler)
  ...GEOGRAFI_NARRATIV_DEL2_CHAPTERS,

  // Del 3: Naturgeografi fordypning (5 kapitler)
  ...GEOGRAFI_NARRATIV_DEL3_CHAPTERS,

  // Del 4: Samfunnsgeografi fordypning (5 kapitler)
  ...GEOGRAFI_NARRATIV_DEL4_CHAPTERS,

  // Del 5: Globalisering, geopolitikk og metode (5 kapitler)
  ...GEOGRAFI_NARRATIV_DEL5_CHAPTERS,
];
