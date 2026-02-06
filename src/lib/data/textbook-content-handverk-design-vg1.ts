/**
 * Håndverk, design og produktutvikling VG1 - Tekstbokinnhold
 *
 * Aggregatorfil som samler alle kapitler fra del1-del8
 * Dekker LK20 læreplan for Håndverk, design og produktutvikling på VG1
 */

import { HANDVERK_DESIGN_VG1_DEL1_CHAPTERS } from './textbook-content-handverk-design-vg1-del1';
import { HANDVERK_DESIGN_VG1_DEL2_CHAPTERS } from './textbook-content-handverk-design-vg1-del2';
import { HANDVERK_DESIGN_VG1_DEL3_CHAPTERS } from './textbook-content-handverk-design-vg1-del3';
import { HANDVERK_DESIGN_VG1_DEL4_CHAPTERS } from './textbook-content-handverk-design-vg1-del4';
import { HANDVERK_DESIGN_VG1_DEL5_CHAPTERS } from './textbook-content-handverk-design-vg1-del5';
import { HANDVERK_DESIGN_VG1_DEL6_CHAPTERS } from './textbook-content-handverk-design-vg1-del6';
import { HANDVERK_DESIGN_VG1_DEL7_CHAPTERS } from './textbook-content-handverk-design-vg1-del7';
import { HANDVERK_DESIGN_VG1_DEL8_CHAPTERS } from './textbook-content-handverk-design-vg1-del8';

// Re-eksporter individuelle kapitler for direkte import
export * from './textbook-content-handverk-design-vg1-del1';
export * from './textbook-content-handverk-design-vg1-del2';
export * from './textbook-content-handverk-design-vg1-del3';
export * from './textbook-content-handverk-design-vg1-del4';
export * from './textbook-content-handverk-design-vg1-del5';
export * from './textbook-content-handverk-design-vg1-del6';
export * from './textbook-content-handverk-design-vg1-del7';
export * from './textbook-content-handverk-design-vg1-del8';

/**
 * Alle kapitler for Håndverk, design og produktutvikling VG1
 *
 * Del 1: Design og visuelt uttrykk (kap 1.1-1.7)
 *   - Grunnleggende designprinsipper
 *   - Form, funksjon og estetikk
 *   - Fargelære og symbolikk
 *   - Komposisjon i to og tre dimensjoner
 *   - Skisseteknikk og idéutvikling
 *   - Arbeidstegninger og teknisk tegning
 *   - Stilhistorie og designtradisjoner
 *
 * Del 2: Materialer (kap 2.1-2.7)
 *   - Materialegenskaper og bruksområder
 *   - Harde materialer: tre, metall og stein
 *   - Myke materialer: tekstil, skinn og lær
 *   - Plastiske materialer: leire, gips og plast
 *   - Bærekraftig materialbruk og ressursforvaltning
 *   - Sanking og innhenting av naturmaterialer
 *   - Materialvalg og teknikktilpasning
 *
 * Del 3: Tradisjoner og kulturarv (kap 3.1-3.7)
 *   - Norske håndverkstradisjoner
 *   - Samisk duodji og urfolkshåndverk
 *   - Tradisjonelle teknikker i harde materialer
 *   - Tradisjonelle teknikker i myke materialer
 *   - Tradisjonelle målemetoder og mønsterkonstruksjon
 *   - Kulturarv som inspirasjon til nyskaping
 *   - Håndverk som politisk og kulturelt uttrykk
 *
 * Del 4: Digital teknologi (kap 4.1-4.6)
 *   - Introduksjon til digitale designverktøy
 *   - 3D-modellering og visualisering
 *   - Laserkutting og CNC-fresing
 *   - 3D-printing og hurtig prototyping
 *   - Digital dokumentasjon og presentasjon
 *   - Kombinasjon av digitale og manuelle teknikker
 *
 * Del 5: Tekstil (kap 5.1-5.6)
 *   - Tekstilfibre og stoffkvaliteter
 *   - Grunnleggende søm og syteknikker
 *   - Mønsterkonstruksjon og tilpasning
 *   - Farging og trykk på tekstil
 *   - Veving og fletteverkteknikker
 *   - Tekstildesign og produktutvikling
 *
 * Del 6: Keramikk, tre og metall (kap 6.1-6.7)
 *   - Keramikk: forming og dreiing
 *   - Glasering og brenning av keramikk
 *   - Trearbeid: grunnleggende teknikker
 *   - Treskjæring og dekorativ trebearbeiding
 *   - Metallarbeid: grunnleggende teknikker
 *   - Smiing og varmebearbeiding
 *   - Overflatebehandling og etterbehandling
 *
 * Del 7: Produktutvikling (kap 7.1-7.8)
 *   - Designprosessen fra idé til produkt
 *   - Brukerundersøkelser og behovsanalyse
 *   - Prototyping og modellbygging
 *   - Kostnadsberegning og priskalkulasjon
 *   - Presentasjon av ideer og produkter
 *   - Fagterminologi og visuell kommunikasjon
 *   - Kvalitetssikring og evaluering
 *   - Samarbeid og prosjektstyring
 *
 * Del 8: Bærekraft og arbeidsliv (kap 8.1-8.7)
 *   - Bærekraftig produksjon og materialvalg
 *   - Gjenbruk, reparasjon og vedlikehold
 *   - Helse, miljø og sikkerhet i verkstedet
 *   - Vedlikehold av maskiner og verktøy
 *   - Håndverksfagene og arbeidslivet
 *   - Lokale håndverksfag og regionale tradisjoner
 *   - Trender, innovasjon og entreprenørskap
 */
export const TEXTBOOK_CONTENT_HANDVERK_DESIGN_VG1_PART1 = [
  // Del 1: Design og visuelt uttrykk (7 kapitler)
  ...HANDVERK_DESIGN_VG1_DEL1_CHAPTERS,

  // Del 2: Materialer (7 kapitler)
  ...HANDVERK_DESIGN_VG1_DEL2_CHAPTERS,

  // Del 3: Tradisjoner og kulturarv (7 kapitler)
  ...HANDVERK_DESIGN_VG1_DEL3_CHAPTERS,

  // Del 4: Digital teknologi (6 kapitler)
  ...HANDVERK_DESIGN_VG1_DEL4_CHAPTERS,

  // Del 5: Tekstil (6 kapitler)
  ...HANDVERK_DESIGN_VG1_DEL5_CHAPTERS,

  // Del 6: Keramikk, tre og metall (7 kapitler)
  ...HANDVERK_DESIGN_VG1_DEL6_CHAPTERS,

  // Del 7: Produktutvikling (8 kapitler)
  ...HANDVERK_DESIGN_VG1_DEL7_CHAPTERS,

  // Del 8: Bærekraft og arbeidsliv (7 kapitler)
  ...HANDVERK_DESIGN_VG1_DEL8_CHAPTERS,
];
