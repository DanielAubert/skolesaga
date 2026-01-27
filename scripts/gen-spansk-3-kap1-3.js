const fs = require('fs');
const path = require('path');
const outDir = path.join(__dirname, '..', 'src', 'lib', 'data');

// Helper: generate a standard subchapter with minimal boilerplate
function mkSub(n, title, subtitle, desc, goals, defTitle, defContent, intro, texts, examples, exercises, tip, note) {
  return { n, title, subtitle, desc, goals, defTitle, defContent, intro, texts, examples, exercises, tip, note };
}

function mkEx(diff, task, subs) {
  return { diff, task, subs: subs.map(s => ({ t: s[0], s: s[1] })) };
}

// ============================================================================
// SPANSK 3 CHAPTER 1: SUBJUNTIVO AVANZADO
// ============================================================================
const s3ch1 = {
  title: 'SUBJUNTIVO AVANZADO',
  subs: [
    mkSub('1.1', 'Subjuntivo con expresiones impersonales', 'Konjunktiv med upersonlige uttrykk',
      'Lær når konjunktiv brukes med upersonlige uttrykk som es necesario que, es importante que og es posible que.',
      ['bruke konjunktiv med upersonlige uttrykk', 'skille mellom indikativ og konjunktiv etter upersonlige uttrykk'],
      'Konjunktiv med upersonlige uttrykk',
      `**Upersonlige uttrykk** som uttrykker nødvendighet, følelser, mulighet eller vurdering krever **subjuntivo** i bisetningen.\n\n| Uttrykk | Betydning | Eksempel |\n|---------|-----------|----------|\n| Es necesario que | Det er nødvendig at | Es necesario que **estudies**. |\n| Es importante que | Det er viktig at | Es importante que **hables**. |\n| Es posible que | Det er mulig at | Es posible que **llueva**. |\n| Es probable que | Det er sannsynlig at | Es probable que **vengan**. |\n| Es mejor que | Det er best at | Es mejor que **te vayas**. |\n| Es una lástima que | Det er synd at | Es una lástima que no **puedas** venir. |\n\n**NB:** Uttrykk som konstaterer fakta bruker **indikativ**: *Es verdad que **tiene** razón.* *Es evidente que **sabe** mucho.*`,
      'Upersonlige uttrykk følges av konjunktiv når de uttrykker nødvendighet, vurdering, følelse eller usikkerhet. Uttrykk som konstaterer fakta bruker derimot indikativ.',
      ['## Uttrykk som krever konjunktiv\n\n**Nødvendighet:**\n- *Es necesario que estudies más.* (Det er nødvendig at du studerer mer.)\n- *Es preciso que llegues a tiempo.* (Det er nødig at du kommer i tide.)\n\n**Vurdering/følelse:**\n- *Es importante que aprendas esto.* (Det er viktig at du lærer dette.)\n- *Es una lástima que no vengas.* (Det er synd at du ikke kommer.)\n\n**Mulighet/usikkerhet:**\n- *Es posible que llueva mañana.* (Det er mulig at det regner i morgen.)\n- *Es probable que lleguen tarde.* (Det er sannsynlig at de kommer sent.)',
       '## Uttrykk som krever indikativ\n\n**Konstaterer fakta:**\n- *Es verdad que María **habla** bien.* (Det er sant at María snakker bra.)\n- *Es evidente que **saben** la respuesta.* (Det er tydelig at de kan svaret.)\n- *Es obvio que **tiene** razón.* (Det er opplagt at han har rett.)\n- *Es cierto que **vive** aquí.* (Det er sikkert at han bor her.)\n\n**Men i nektende form → konjunktiv:**\n- *No es verdad que María **hable** bien.* (Det er ikke sant at María snakker bra.)\n- *No es cierto que **viva** aquí.* (Det er ikke sikkert at han bor her.)'],
      [{ title: 'Konjunktiv etter nødvendighet', problem: 'Es necesario que tú (hablar) español.', solution: 'Es necesario que tú **hables** español. (Konjunktiv fordi \"es necesario que\" uttrykker nødvendighet.)' },
       { title: 'Indikativ etter fakta', problem: 'Es verdad que él (saber) mucho.', solution: 'Es verdad que él **sabe** mucho. (Indikativ fordi \"es verdad que\" konstaterer et faktum.)' }],
      [mkEx('lett', 'Fyll inn riktig form av verbet i konjunktiv:', [
        ['Es necesario que (nosotros/estudiar) ___ más.', 'estudiemos'],
        ['Es importante que (tú/llegar) ___ a tiempo.', 'llegues'],
        ['Es posible que (ellos/venir) ___ mañana.', 'vengan'],
        ['Es mejor que (usted/salir) ___ temprano.', 'salga']]),
       mkEx('lett', 'Velg konjunktiv eller indikativ:', [
        ['Es evidente que Juan (hablar) ___ bien.', 'habla (indikativ - konstaterer fakta)'],
        ['Es una lástima que no (poder/tú) ___ ir.', 'puedas (konjunktiv - følelse)'],
        ['Es cierto que ella (vivir) ___ en Madrid.', 'vive (indikativ - konstaterer fakta)'],
        ['Es probable que (llover) ___ esta noche.', 'llueva (konjunktiv - mulighet)']]),
       mkEx('medium', 'Fullfør setningene med konjunktiv eller indikativ:', [
        ['Es necesario que los alumnos (hacer) ___ los deberes.', 'hagan (konjunktiv - nødvendighet)'],
        ['No es verdad que yo (tener) ___ mucho dinero.', 'tenga (konjunktiv - nektet faktauttrykk)'],
        ['Es obvio que ella (ser) ___ inteligente.', 'es (indikativ - konstaterer fakta)'],
        ['Es importante que nosotros (saber) ___ la verdad.', 'sepamos (konjunktiv - vurdering)']]),
       mkEx('vanskelig', 'Oversett til spansk med riktig modus:', [
        ['Det er nødvendig at du snakker med læreren.', 'Es necesario que hables con el profesor.'],
        ['Det er sant at han jobber mye.', 'Es verdad que trabaja mucho.'],
        ['Det er synd at de ikke kan komme.', 'Es una lástima que no puedan venir.'],
        ['Det er ikke sikkert at hun bor her.', 'No es cierto que viva aquí.']])],
      '**Huskeregel:** Fakta = indikativ. Alt annet (vurdering, følelse, mulighet, nødvendighet) = konjunktiv. I nektende form bruker også fakta-uttrykk konjunktiv.',
      '**Oppsummering: Konjunktiv med upersonlige uttrykk**\n\n- Nødvendighet, vurdering, følelse, mulighet → konjunktiv\n- Konstaterer fakta (es verdad, es evidente) → indikativ\n- Nektende fakta-uttrykk (no es verdad que) → konjunktiv\n- Vanlige uttrykk: es necesario que, es importante que, es posible que'
    ),
    mkSub('1.2', 'Subjuntivo en oraciones de relativo', 'Konjunktiv i relativsetninger',
      'Lær å bruke konjunktiv i relativsetninger når antecedenten er ukjent eller ikke-eksisterende.',
      ['bruke konjunktiv i relativsetninger med ukjent antecedent', 'skille mellom indikativ og konjunktiv i relativsetninger'],
      'Konjunktiv i relativsetninger',
      `Konjunktiv brukes i relativsetninger når antecedenten (det substantivet som relativsetningen viser til) er **ukjent, ubestemt eller ikke-eksisterende**.\n\n| Kontekst | Modus | Eksempel |\n|----------|-------|----------|\n| Kjent antecedent | Indikativ | Tengo un amigo que **habla** español. |\n| Ukjent/søkt antecedent | Konjunktiv | Busco un amigo que **hable** español. |\n| Ikke-eksisterende | Konjunktiv | No hay nadie que **sepa** la respuesta. |\n\n**Nøkkelforskjell:** \"Jeg har en venn som snakker...\" (kjent) vs. \"Jeg leter etter en venn som snakker...\" (ukjent).`,
      'Når du snakker om noe eller noen du leter etter, ønsker deg eller ikke vet om eksisterer, bruker du konjunktiv i relativsetningen. Når antecedenten er kjent og konkret, bruker du indikativ.',
      ['## Kjent vs. ukjent antecedent\n\n**Indikativ - kjent:**\n- *Tengo un profesor que **explica** bien.* (Jeg har en lærer som forklarer godt.) → Konkret person.\n- *Conozco a alguien que **sabe** francés.* (Jeg kjenner noen som kan fransk.) → Konkret person.\n\n**Konjunktiv - ukjent:**\n- *Busco un profesor que **explique** bien.* (Jeg leter etter en lærer som forklarer godt.) → Vet ikke hvem.\n- *¿Conoces a alguien que **sepa** francés?* (Kjenner du noen som kan fransk?) → Spør om det finnes.\n- *Necesito algo que **sea** barato.* (Jeg trenger noe som er billig.) → Har ikke funnet det ennå.',
       '## Ikke-eksisterende antecedent\n\n**Konjunktiv med nektende setninger:**\n- *No hay nadie que **pueda** ayudarme.* (Det er ingen som kan hjelpe meg.)\n- *No conozco a nadie que **hable** chino.* (Jeg kjenner ingen som snakker kinesisk.)\n- *No existe ningún libro que **explique** esto.* (Det finnes ingen bok som forklarer dette.)\n- *No tengo nada que **decir**.* (Jeg har ingenting å si.)\n\n**Nøkkel:** *nadie, nada, ningún* + relativsetning → alltid konjunktiv.'],
      [{ title: 'Ukjent antecedent', problem: 'Busco una casa que (tener) jardín.', solution: 'Busco una casa que **tenga** jardín. (Konjunktiv fordi huset er ukjent – jeg leter etter det.)' },
       { title: 'Kjent antecedent', problem: 'Vivo en una casa que (tener) jardín.', solution: 'Vivo en una casa que **tiene** jardín. (Indikativ fordi huset er kjent – jeg bor allerede der.)' }],
      [mkEx('lett', 'Velg riktig verbform (indikativ eller konjunktiv):', [
        ['Tengo un amigo que (hablar) ___ español.', 'habla (indikativ - kjent person)'],
        ['Busco un amigo que (hablar) ___ español.', 'hable (konjunktiv - ukjent person)'],
        ['Conozco un restaurante que (servir) ___ tapas.', 'sirve (indikativ - kjent sted)'],
        ['¿Hay algún restaurante que (servir) ___ tapas?', 'sirva (konjunktiv - spør om det finnes)']]),
       mkEx('lett', 'Fyll inn riktig konjunktivform:', [
        ['No hay nadie que (poder) ___ ayudarme.', 'pueda'],
        ['Necesito algo que (ser) ___ barato.', 'sea'],
        ['Busco a alguien que (saber) ___ cocinar.', 'sepa'],
        ['No conozco a nadie que (vivir) ___ allí.', 'viva']]),
       mkEx('medium', 'Velg indikativ eller konjunktiv og forklar hvorfor:', [
        ['Tengo un coche que (funcionar) ___ bien.', 'funciona (indikativ - kjent, konkret bil)'],
        ['Quiero un coche que (funcionar) ___ bien.', 'funcione (konjunktiv - ønsker en bil, ukjent)'],
        ['No existe ningún estudiante que (saber) ___ todo.', 'sepa (konjunktiv - ikke-eksisterende)'],
        ['Hay un estudiante que (saber) ___ la respuesta.', 'sabe (indikativ - kjent person)']]),
       mkEx('vanskelig', 'Oversett til spansk med riktig modus:', [
        ['Jeg leter etter noen som snakker norsk.', 'Busco a alguien que hable noruego.'],
        ['Jeg kjenner noen som snakker norsk.', 'Conozco a alguien que habla noruego.'],
        ['Det finnes ingen som kan hjelpe meg.', 'No hay nadie que pueda ayudarme.'],
        ['Jeg trenger en bok som forklarer grammatikken.', 'Necesito un libro que explique la gramática.']])],
      '**Huskeregel:** Tengo (kjent) → indikativ. Busco/Necesito/Quiero (ukjent) → konjunktiv. No hay nadie/nada (ikke-eksisterende) → alltid konjunktiv.',
      '**Oppsummering: Konjunktiv i relativsetninger**\n\n- Kjent antecedent → indikativ (Tengo un amigo que habla...)\n- Ukjent/søkt antecedent → konjunktiv (Busco un amigo que hable...)\n- Ikke-eksisterende → konjunktiv (No hay nadie que sepa...)\n- Verb som utløser konjunktiv: buscar, necesitar, querer + ukjent antecedent'
    ),
    mkSub('1.3', 'Subjuntivo en oraciones temporales', 'Konjunktiv i tidssetninger',
      'Lær å bruke konjunktiv i tidssetninger med cuando, antes de que, después de que og hasta que.',
      ['bruke konjunktiv i tidssetninger som refererer til fremtiden', 'skille mellom konjunktiv og indikativ i tidssetninger'],
      'Konjunktiv i tidssetninger',
      `**Tidskonjunksjoner** kan kreve enten konjunktiv eller indikativ avhengig av om handlingen refererer til fremtiden eller fortiden.\n\n| Konjunksjon | Fremtid → Konjunktiv | Fortid → Indikativ |\n|-------------|---------------------|--------------------|\n| cuando | Cuando **llegue**, llamaré. | Cuando **llegó**, llamó. |\n| después de que | Después de que **termine**... | Después de que **terminó**... |\n| hasta que | Hasta que **venga**... | Hasta que **vino**... |\n| en cuanto | En cuanto **sepa**... | En cuanto **supo**... |\n\n**Unntak:** *Antes de que* krever **alltid** konjunktiv, uavhengig av tid.`,
      'Tidskonjunksjoner som cuando, después de que, hasta que og en cuanto krever konjunktiv når de refererer til fremtidige handlinger, men indikativ når de refererer til fortidige eller vanlige handlinger.',
      ['## Cuando + konjunktiv (fremtid)\n\n**Fremtid → konjunktiv:**\n- *Cuando **llegue** a casa, te llamaré.* (Når jeg kommer hjem, ringer jeg deg.) → Har ikke kommet ennå.\n- *Cuando **tenga** dinero, viajaré.* (Når jeg har penger, reiser jeg.) → Har ikke penger ennå.\n\n**Fortid → indikativ:**\n- *Cuando **llegué** a casa, te llamé.* (Da jeg kom hjem, ringte jeg deg.) → Allerede skjedd.\n\n**Vane → indikativ:**\n- *Cuando **llego** a casa, siempre como.* (Når jeg kommer hjem, spiser jeg alltid.) → Vanlig handling.',
       '## Antes de que - alltid konjunktiv\n\n*Antes de que* krever **alltid** konjunktiv, uansett tid:\n- *Antes de que **salgas**, cierra la puerta.* (Før du går, lukk døren.)\n- *Antes de que **llegara**, preparé la cena.* (Før han kom, laget jeg middag.)\n\n**Andre konjunksjoner:**\n- *Después de que **termine** la clase, iremos al cine.* (Etter timen, drar vi på kino.) → Fremtid.\n- *Hasta que no **aprendas**, no saldrás.* (Inntil du lærer, går du ikke.) → Fremtid.\n- *En cuanto **llegue**, empezamos.* (Så snart han kommer, begynner vi.) → Fremtid.'],
      [{ title: 'Cuando + fremtid', problem: 'Cuando yo (tener) tiempo, te visitaré.', solution: 'Cuando yo **tenga** tiempo, te visitaré. (Konjunktiv fordi cuando refererer til fremtiden.)' },
       { title: 'Antes de que', problem: 'Antes de que tú (salir), necesito hablar contigo.', solution: 'Antes de que tú **salgas**, necesito hablar contigo. (Antes de que krever alltid konjunktiv.)' }],
      [mkEx('lett', 'Fyll inn riktig konjunktivform (fremtidsreferanse):', [
        ['Cuando (yo/llegar) ___ a casa, cenaré.', 'llegue'],
        ['Antes de que (tú/salir) ___, llámame.', 'salgas'],
        ['Hasta que (nosotros/terminar) ___, no descansamos.', 'terminemos'],
        ['En cuanto (ellos/venir) ___, empezamos.', 'vengan']]),
       mkEx('lett', 'Velg konjunktiv eller indikativ:', [
        ['Cuando (yo/ser) ___ niño, jugaba mucho. (fortid)', 'era (indikativ - fortid)'],
        ['Cuando (tú/venir) ___ mañana, hablaremos. (fremtid)', 'vengas (konjunktiv - fremtid)'],
        ['Después de que (él/comer) ___ ayer, salió. (fortid)', 'comió (indikativ - fortid)'],
        ['Antes de que (ella/llegar) ___, limpiamos. (alltid)', 'llegue/llegara (konjunktiv - antes de que)']]),
       mkEx('medium', 'Fullfør setningene med riktig verbform:', [
        ['Cuando (nosotros/tener) ___ vacaciones, iremos a España.', 'tengamos (konjunktiv - fremtid)'],
        ['Siempre cuando (yo/llegar) ___ a casa, como. (vane)', 'llego (indikativ - vanlig handling)'],
        ['No saldré hasta que (dejar) ___ de llover.', 'deje (konjunktiv - fremtid)'],
        ['Después de que (tú/leer) ___ el libro, dámelo.', 'leas (konjunktiv - fremtid)']]),
       mkEx('vanskelig', 'Oversett til spansk med riktig modus:', [
        ['Når jeg er ferdig, ringer jeg deg.', 'Cuando termine, te llamaré.'],
        ['Før du drar, må du rydde rommet.', 'Antes de que te vayas, tienes que limpiar la habitación.'],
        ['Inntil du lærer det, øver du hver dag.', 'Hasta que lo aprendas, practicarás cada día.'],
        ['Da vi kom hjem, spiste vi middag. (fortid)', 'Cuando llegamos a casa, cenamos.']])],
      '**Huskeregel:** Cuando + fremtid = konjunktiv. Cuando + fortid/vane = indikativ. Antes de que = ALLTID konjunktiv.',
      '**Oppsummering: Konjunktiv i tidssetninger**\n\n- Fremtidig handling → konjunktiv (Cuando llegue...)\n- Fortid/vane → indikativ (Cuando llegué... / Cuando llego...)\n- Antes de que → alltid konjunktiv\n- Tidskonjunksjoner: cuando, después de que, hasta que, en cuanto, antes de que'
    ),
    mkSub('1.4', 'Subjuntivo vs. indicativo - diferencias avanzadas', 'Konjunktiv vs. indikativ - avanserte forskjeller',
      'Oppsummering av alle konjunktivutløsere og avanserte nyanser mellom konjunktiv og indikativ.',
      ['beherske avanserte forskjeller mellom konjunktiv og indikativ', 'unngå vanlige feil med konjunktiv'],
      'Avansert konjunktiv vs. indikativ',
      `**Fullstendig oversikt over konjunktivutløsere:**\n\n| Kategori | Utløser | Eksempel |\n|----------|---------|----------|\n| Ønske/vilje | querer que, desear que | Quiero que **vengas**. |\n| Følelse | alegrarse de que, temer que | Me alegro de que **estés** bien. |\n| Tvil/usikkerhet | dudar que, no creer que | Dudo que **sepa** la verdad. |\n| Upersonlige uttrykk | es necesario que | Es necesario que **estudies**. |\n| Formål | para que | Lo hago para que **aprendas**. |\n| Relativsetning (ukjent) | buscar algo que | Busco algo que **sea** bueno. |\n| Tidssetning (fremtid) | cuando + fremtid | Cuando **llegue**, llamaré. |\n| Nektelse av fakta | no es verdad que | No es verdad que **tenga** razón. |`,
      'Konjunktiv og indikativ er to moduser som uttrykker ulike holdninger. Indikativ konstaterer virkeligheten; konjunktiv uttrykker subjektive holdninger som ønske, tvil, følelser og usikkerhet.',
      ['## Vanlige feil\n\n**Feil 1: Creer que + konjunktiv**\n- ❌ *Creo que **venga** mañana.*\n- ✅ *Creo que **viene** mañana.* (Indikativ - tror = sikkert.)\n- ✅ *No creo que **venga** mañana.* (Konjunktiv - tvil.)\n\n**Feil 2: Cuando + futur**\n- ❌ *Cuando **llegaré**, te llamaré.*\n- ✅ *Cuando **llegue**, te llamaré.* (Konjunktiv, ikke futur.)\n\n**Feil 3: Samme subjekt**\n- ❌ *Quiero que yo **vaya**.*\n- ✅ *Quiero **ir**.* (Infinitiv når subjektene er like.)',
       '## Nyanser: creer/pensar\n\n**Bekreftende → indikativ:**\n- *Creo que **tiene** razón.* (Jeg tror han har rett.)\n- *Pienso que **es** verdad.* (Jeg tenker det er sant.)\n\n**Nektende → konjunktiv:**\n- *No creo que **tenga** razón.* (Jeg tror ikke han har rett.)\n- *No pienso que **sea** verdad.* (Jeg tenker ikke det er sant.)\n\n**Spørrende → konjunktiv (tvil):**\n- *¿Crees que **tenga** razón?* (Tror du han har rett? - tviler)\n- *¿Crees que **tiene** razón?* (Tror du han har rett? - nøytralt)'],
      [{ title: 'Creer que', problem: 'No creo que Juan (tener) razón.', solution: 'No creo que Juan **tenga** razón. (Konjunktiv fordi \"no creer que\" uttrykker tvil.)' },
       { title: 'Samme subjekt', problem: 'Quiero (ir/yo) al cine.', solution: 'Quiero **ir** al cine. (Infinitiv fordi subjektene er like – \"jeg\" i begge ledd.)' }],
      [mkEx('lett', 'Velg konjunktiv, indikativ eller infinitiv:', [
        ['Creo que ella (ser) ___ inteligente.', 'es (indikativ - creer que + bekreftende)'],
        ['No creo que él (tener) ___ razón.', 'tenga (konjunktiv - no creer que)'],
        ['Quiero (ir/yo) ___ a España.', 'ir (infinitiv - samme subjekt)'],
        ['Quiero que tú (ir) ___ a España.', 'vayas (konjunktiv - ulikt subjekt)']]),
       mkEx('lett', 'Identifiser feilen og rett den:', [
        ['Creo que venga mañana.', 'Creo que viene mañana. (Indikativ etter creer que.)'],
        ['Cuando llegaré, te llamo.', 'Cuando llegue, te llamaré. (Konjunktiv etter cuando + fremtid.)'],
        ['Quiero que yo vaya.', 'Quiero ir. (Infinitiv ved samme subjekt.)'],
        ['Es verdad que tenga razón.', 'Es verdad que tiene razón. (Indikativ etter es verdad que.)']]),
       mkEx('medium', 'Fyll inn riktig form og forklar valget:', [
        ['Dudo que María (venir) ___ a la fiesta.', 'venga (konjunktiv - dudar que uttrykker tvil)'],
        ['Es evidente que ellos (saber) ___ la respuesta.', 'saben (indikativ - es evidente que konstaterer)'],
        ['Me alegro de que tú (estar) ___ bien.', 'estés (konjunktiv - alegrarse de que uttrykker følelse)'],
        ['Lo hago para que todos (aprender) ___.', 'aprendan (konjunktiv - para que uttrykker formål)']]),
       mkEx('vanskelig', 'Oversett til spansk med riktig modus og forklar:', [
        ['Jeg tror han har rett.', 'Creo que tiene razón. (Indikativ - creer que bekreftende.)'],
        ['Jeg tror ikke han har rett.', 'No creo que tenga razón. (Konjunktiv - no creer que uttrykker tvil.)'],
        ['Jeg gjør det for at du skal lære.', 'Lo hago para que aprendas. (Konjunktiv - para que uttrykker formål.)'],
        ['Jeg vil reise til Spania. (bare jeg)', 'Quiero viajar a España. (Infinitiv - samme subjekt.)']])],
      '**Hovedregel:** Konjunktiv uttrykker subjektive holdninger (ønske, tvil, følelser, usikkerhet). Indikativ konstaterer objektive fakta. Ved samme subjekt → infinitiv.',
      '**Oppsummering: Avansert konjunktiv vs. indikativ**\n\n- **Konjunktiv:** ønske, følelse, tvil, formål, ukjent antecedent, fremtid i tidssetninger\n- **Indikativ:** fakta, tro (creer que), sannhet (es verdad que)\n- **Infinitiv:** samme subjekt (Quiero ir, no Quiero que yo vaya)\n- **Vanlige feil:** creer que + konjunktiv, cuando + futur, samme subjekt + konjunktiv'
    ),
  ]
};

// ============================================================================
// SPANSK 3 CHAPTER 2: TIEMPOS COMPUESTOS
// ============================================================================
const s3ch2 = {
  title: 'TIEMPOS COMPUESTOS',
  subs: [
    mkSub('2.1', 'El pluscuamperfecto', 'Pluskvamperfektum (había + partisipp)',
      'Lær å bruke pluskvamperfektum (el pluscuamperfecto) for å uttrykke handlinger som skjedde før en annen handling i fortiden.',
      ['danne og bruke pluskvamperfektum', 'uttrykke handlinger før andre fortidige handlinger'],
      'Pluskvamperfektum (el pluscuamperfecto)',
      `**Pluskvamperfektum** uttrykker en handling som skjedde **før** en annen handling i fortiden.\n\n**Dannelse:** había/habías/había/habíamos/habíais/habían + **participio pasado**\n\n| Person | Haber | + Partisipp | Eksempel |\n|--------|-------|-------------|----------|\n| yo | había | hablado | Yo había hablado. (Jeg hadde snakket.) |\n| tú | habías | comido | Tú habías comido. (Du hadde spist.) |\n| él/ella | había | vivido | Él había vivido allí. (Han hadde bodd der.) |\n| nosotros | habíamos | escrito | Habíamos escrito. (Vi hadde skrevet.) |\n| ellos | habían | hecho | Habían hecho. (De hadde gjort.) |\n\n**Uregelmessige partisipper:** hecho (hacer), escrito (escribir), dicho (decir), visto (ver), puesto (poner), vuelto (volver), abierto (abrir), muerto (morir)`,
      'Pluskvamperfektum brukes for å uttrykke at noe hadde skjedd før et annet tidspunkt i fortiden. Det tilsvarer norsk \"hadde + partisipp\".',
      ['## Bruk av pluskvamperfektum\n\n**Handling før en annen fortidshandling:**\n- *Cuando llegué, María ya **había salido**.* (Da jeg kom, hadde María allerede gått.)\n- *No pude entrar porque **había olvidado** las llaves.* (Jeg kunne ikke komme inn fordi jeg hadde glemt nøklene.)\n- *Él dijo que **había vivido** en España.* (Han sa at han hadde bodd i Spania.)\n\n**Tidslinjen:**\n1. María salió (María gikk) → FØR\n2. Yo llegué (Jeg kom) → ETTER\n→ *Cuando llegué, María **había salido**.*',
       '## Uregelmessige partisipper\n\n| Infinitiv | Partisipp | Eksempel |\n|-----------|-----------|----------|\n| hacer | hecho | había hecho (hadde gjort) |\n| decir | dicho | había dicho (hadde sagt) |\n| escribir | escrito | había escrito (hadde skrevet) |\n| ver | visto | había visto (hadde sett) |\n| poner | puesto | había puesto (hadde lagt) |\n| volver | vuelto | había vuelto (hadde kommet tilbake) |\n| abrir | abierto | había abierto (hadde åpnet) |\n| romper | roto | había roto (hadde knust) |'],
      [{ title: 'Tidslinje', problem: 'Lag en setning: Først spiste Juan. Så kom vi.', solution: 'Cuando llegamos, Juan ya **había comido**. (Da vi kom, hadde Juan allerede spist.)' },
       { title: 'Uregelmessig partisipp', problem: 'Ella (escribir) la carta antes de salir.', solution: 'Ella **había escrito** la carta antes de salir. (Hun hadde skrevet brevet før hun gikk.)' }],
      [mkEx('lett', 'Bøy verbet i pluskvamperfektum:', [
        ['Yo (hablar) ___ con el profesor.', 'había hablado'],
        ['Tú (comer) ___ antes de salir.', 'habías comido'],
        ['Nosotros (vivir) ___ en Madrid.', 'habíamos vivido'],
        ['Ellos (terminar) ___ el trabajo.', 'habían terminado']]),
       mkEx('lett', 'Bruk uregelmessige partisipper:', [
        ['Ella (escribir) ___ la carta.', 'había escrito'],
        ['Yo (ver) ___ la película.', 'había visto'],
        ['Nosotros (hacer) ___ los deberes.', 'habíamos hecho'],
        ['Ellos (decir) ___ la verdad.', 'habían dicho']]),
       mkEx('medium', 'Kombiner setningene med pluskvamperfektum:', [
        ['Primero: Juan estudió. Luego: llegó al examen.', 'Cuando Juan llegó al examen, ya había estudiado.'],
        ['Primero: Perdí las llaves. Luego: No pude entrar.', 'No pude entrar porque había perdido las llaves.'],
        ['Primero: Ellos se fueron. Luego: Nosotros llegamos.', 'Cuando nosotros llegamos, ellos ya se habían ido.'],
        ['Primero: Ella escribió el libro. Luego: Ella se hizo famosa.', 'Ella se hizo famosa después de que había escrito el libro.']]),
       mkEx('vanskelig', 'Oversett til spansk med pluskvamperfektum:', [
        ['Da jeg kom, hadde de allerede spist.', 'Cuando llegué, ya habían comido.'],
        ['Hun sa at hun hadde sett filmen.', 'Dijo que había visto la película.'],
        ['Vi kunne ikke reise fordi vi hadde glemt passene.', 'No pudimos viajar porque habíamos olvidado los pasaportes.'],
        ['Han hadde aldri vært i Norge før.', 'Nunca había estado en Noruega antes.']])],
      '**Huskeregel:** Pluskvamperfektum = \"hadde + gjort\". Bruk det for handlingen som skjedde FØRST av to fortidige handlinger.',
      '**Oppsummering: Pluskvamperfektum**\n\n- Dannelse: había/habías/había/habíamos/habían + participio\n- Bruk: handling før en annen fortidshandling\n- Uregelmessige: hecho, escrito, dicho, visto, puesto, vuelto, abierto, roto\n- Tilsvarer norsk: hadde + partisipp'
    ),
    mkSub('2.2', 'El pretérito indefinido avanzado', 'Preteritum - avansert (pretérito indefinido)',
      'Avansert bruk av preteritum med uregelmessige former og nyanserte bruksregler.',
      ['beherske uregelmessige preteritumsformer', 'skille preteritum fra imperfektum og perfektum'],
      'Avansert preteritum (pretérito indefinido)',
      `**Uregelmessige verb i preteritum:**\n\n| Verb | Stamme | Former |\n|------|--------|--------|\n| tener | tuv- | tuve, tuviste, tuvo, tuvimos, tuvieron |\n| estar | estuv- | estuve, estuviste, estuvo, estuvimos, estuvieron |\n| poder | pud- | pude, pudiste, pudo, pudimos, pudieron |\n| poner | pus- | puse, pusiste, puso, pusimos, pusieron |\n| saber | sup- | supe, supiste, supo, supimos, supieron |\n| hacer | hic-/hiz- | hice, hiciste, hizo, hicimos, hicieron |\n| venir | vin- | vine, viniste, vino, vinimos, vinieron |\n| decir | dij- | dije, dijiste, dijo, dijimos, dijeron |\n| traer | traj- | traje, trajiste, trajo, trajimos, trajeron |\n| ir/ser | fu- | fui, fuiste, fue, fuimos, fueron |`,
      'Preteritum (pretérito indefinido) brukes for avsluttede handlinger i fortiden. Mange av de vanligste verbene er uregelmessige og må læres som egne mønstre.',
      ['## Preteritum vs. imperfektum vs. perfektum\n\n| Tid | Bruk | Eksempel |\n|-----|------|----------|\n| Pretérito indefinido | Avsluttet handling | Ayer **comí** paella. |\n| Pretérito imperfecto | Beskrivelse/vane | De niño **comía** paella. |\n| Pretérito perfecto | Nær fortid | Hoy **he comido** paella. |\n\n**Nøkkelord:**\n- Indefinido: ayer, la semana pasada, en 2020, una vez\n- Imperfecto: siempre, a menudo, de niño, cada día\n- Perfecto: hoy, esta semana, este año, ya, todavía',
       '## Uregelmessige mønstre\n\n**Stammeskifte-grupper:**\n- **u-stamme:** tener→tuv-, estar→estuv-, poder→pud-, poner→pus-, saber→sup-\n- **i-stamme:** hacer→hic-, venir→vin-, querer→quis-\n- **j-stamme:** decir→dij-, traer→traj-, conducir→conduj-\n\n**Merk:** j-stamme-verb mister -i- i 3. person flertall:\n- dijeron (IKKE dijieron)\n- trajeron (IKKE trajieron)\n\n**ir/ser:** Identiske former! Konteksten avgjør betydningen.\n- *Fui al cine.* (Jeg dro på kino. → ir)\n- *Fui profesor.* (Jeg var lærer. → ser)'],
      [{ title: 'Uregelmessig form', problem: 'Bøy \"tener\" i preteritum for \"yo\" og \"ellos\".', solution: 'Yo **tuve**, ellos **tuvieron**. (tuv- + endelser: -e, -iste, -o, -imos, -ieron)' },
       { title: 'Preteritum vs. imperfektum', problem: 'Ayer (llover) ___ todo el día. / De niño siempre (llover) ___ en invierno.', solution: 'Ayer **llovió** todo el día. (Preteritum - avsluttet.) / De niño siempre **llovía** en invierno. (Imperfektum - vane.)' }],
      [mkEx('lett', 'Bøy verbene i preteritum:', [
        ['Yo (tener) ___ un examen ayer.', 'tuve'],
        ['Ella (hacer) ___ la tarea anoche.', 'hizo'],
        ['Nosotros (ir) ___ al cine la semana pasada.', 'fuimos'],
        ['Ellos (decir) ___ la verdad.', 'dijeron']]),
       mkEx('lett', 'Velg preteritum eller imperfektum:', [
        ['Ayer (yo/comer) ___ paella.', 'comí (preteritum - avsluttet handling)'],
        ['De niño (yo/comer) ___ paella cada domingo.', 'comía (imperfektum - vane)'],
        ['El año pasado (nosotros/viajar) ___ a España.', 'viajamos (preteritum - avsluttet)'],
        ['Cuando era joven, siempre (jugar) ___ al fútbol.', 'jugaba (imperfektum - vane)']]),
       mkEx('medium', 'Fyll inn riktig fortidsform (preteritum, imperfektum eller perfektum):', [
        ['Esta mañana (yo/hablar) ___ con María.', 'he hablado (perfektum - nær fortid, \"i dag\")'],
        ['El lunes pasado (ella/estar) ___ enferma.', 'estuvo (preteritum - avsluttet, forrige uke)'],
        ['Cuando era joven, (yo/vivir) ___ en Barcelona.', 'vivía (imperfektum - beskrivelse)'],
        ['Ayer (nosotros/poder) ___ terminar el proyecto.', 'pudimos (preteritum - avsluttet handling)']]),
       mkEx('vanskelig', 'Oversett til spansk med riktig fortidsform:', [
        ['I går gjorde jeg leksene. (avsluttet)', 'Ayer hice los deberes.'],
        ['Da jeg var ung, reiste jeg mye. (vane)', 'Cuando era joven, viajaba mucho.'],
        ['I dag har jeg snakket med læreren. (nær fortid)', 'Hoy he hablado con el profesor.'],
        ['De sa at de ikke kunne komme. (avsluttet)', 'Dijeron que no pudieron venir.']])],
      '**Tips:** Lær de uregelmessige stammene i grupper (u-stamme, i-stamme, j-stamme). Bruk nøkkelord for å velge riktig fortidsform.',
      '**Oppsummering: Avansert preteritum**\n\n- Uregelmessige stammeskift: tuv-, estuv-, pud-, hic-, vin-, dij-\n- j-stamme: -eron (ikke -ieron) i 3. person flertall\n- ir/ser: identiske former i preteritum\n- Preteritum: avsluttet | Imperfektum: vane/beskrivelse | Perfektum: nær fortid'
    ),
    mkSub('2.3', 'Combinación de tiempos', 'Kombinere tidsformer i tekst',
      'Lær å kombinere ulike fortidsformer i sammenhengende tekst og fortelling.',
      ['kombinere preteritum, imperfektum og pluskvamperfektum i tekst', 'skrive sammenhengende fortellinger'],
      'Kombinasjon av tidsformer',
      `I en fortelling brukes ulike fortidsformer med ulike funksjoner:\n\n| Tidsform | Funksjon | Eksempel |\n|----------|----------|----------|\n| Imperfektum | Bakgrunn, beskrivelse | **Era** un día frío. (Det var en kald dag.) |\n| Preteritum | Handling, hendelse | De repente, **llegó** Juan. (Plutselig kom Juan.) |\n| Pluskvamperfektum | Forhistorie | Juan no **había dormido** bien. (Juan hadde ikke sovet godt.) |\n\n**I en fortelling:**\n- Imperfektum = \"kulissen\" (vær, følelser, utseende)\n- Preteritum = \"handlingen\" (hva som skjedde)\n- Pluskvamperfektum = \"forhistorien\" (hva som hadde skjedd før)`,
      'Når du skriver eller leser fortellinger på spansk, veksler du mellom ulike tidsformer for å skape en rik og nyansert tekst. Hver tidsform har sin rolle.',
      ['## Fortellingsteknikk\n\n**Eksempel på fortelling:**\n*Era una noche oscura. **Llovía** mucho y **hacía** frío.* (Imperfektum - bakgrunn)\n*Juan **caminaba** por la calle vacía.* (Imperfektum - pågående handling)\n*De repente, **oyó** un ruido extraño.* (Preteritum - ny handling)\n*Se **dio** la vuelta y **vio** a un hombre.* (Preteritum - hendelser)\n*El hombre **llevaba** un abrigo negro.* (Imperfektum - beskrivelse)\n*Juan **recordó** que su madre le **había dicho** que no saliera solo.* (Preteritum + Pluskvamperfektum - handling + forhistorie)',
       '## Signalord for hver tidsform\n\n**Imperfektum (bakgrunn):**\n- Verb: ser, estar, haber, hacer (vær), llevar, tener\n- Uttrykk: mientras, siempre, a menudo, cada día\n\n**Preteritum (handling):**\n- De repente, entonces, en ese momento, un día\n- Verb som markerer endring: empezar, terminar, llegar, salir\n\n**Pluskvamperfektum (forhistorie):**\n- ya, antes, nunca antes, anteriormente\n- Brukes med porque/que for å forklare bakgrunn'],
      [{ title: 'Velg tidsform', problem: '(Ser) ___ las diez de la noche. De repente, alguien (llamar) ___ a la puerta.', solution: '**Eran** las diez de la noche. (Imperfektum - bakgrunn.) De repente, alguien **llamó** a la puerta. (Preteritum - handling.)' },
       { title: 'Forhistorie', problem: 'No pude entrar porque (olvidar) ___ las llaves.', solution: 'No pude entrar porque **había olvidado** las llaves. (Pluskvamperfektum - forhistorie.)' }],
      [mkEx('lett', 'Velg imperfektum eller preteritum:', [
        ['(Ser) ___ un día bonito cuando (decidir/nosotros) ___ ir a la playa.', 'Era (imperfektum), decidimos (preteritum)'],
        ['(Llover) ___ cuando (salir/yo) ___ de casa.', 'Llovía (imperfektum), salí (preteritum)'],
        ['María (estar) ___ cansada porque (trabajar) ___ todo el día.', 'estaba (imperfektum), había trabajado (pluskvamperfektum)'],
        ['De repente, el teléfono (sonar) ___.', 'sonó (preteritum - plutselig handling)']]),
       mkEx('lett', 'Match funksjonen med tidsformen:', [
        ['Bakgrunn og beskrivelse', 'Imperfektum (era, hacía, llovía)'],
        ['Plutselig handling', 'Preteritum (llegó, oyó, dijo)'],
        ['Noe som hadde skjedd før', 'Pluskvamperfektum (había comido, había visto)'],
        ['Vane i fortiden', 'Imperfektum (siempre iba, comía cada día)']]),
       mkEx('medium', 'Fyll inn riktig tidsform:', [
        ['Cuando yo (llegar) ___ a casa, mi madre ya (preparar) ___ la cena.', 'llegué (preteritum), había preparado (pluskvamperfektum)'],
        ['(Hacer) ___ sol y los pájaros (cantar) ___ cuando de repente (empezar) ___ a llover.', 'Hacía (imperfektum), cantaban (imperfektum), empezó (preteritum)'],
        ['Juan (decir) ___ que (estar) ___ enfermo y que no (poder) ___ venir.', 'dijo (preteritum), estaba (imperfektum), podía (imperfektum)'],
        ['No (comer/nosotros) ___ porque ya (desayunar) ___ en el hotel.', 'comimos (preteritum), habíamos desayunado (pluskvamperfektum)']]),
       mkEx('vanskelig', 'Skriv en kort fortelling (3-4 setninger) med alle tre tidsformene:', [
        ['Tema: En dag på skolen', 'Era un día normal. Hacía sol. Cuando llegué al colegio, vi que había un examen. No había estudiado nada.'],
        ['Tema: En reise', 'Estábamos en el aeropuerto. Hacía mucho calor. De repente, anunciaron que nuestro vuelo se había cancelado.'],
        ['Tema: En overraskelse', 'Era mi cumpleaños. Cuando abrí la puerta, vi que mis amigos habían preparado una fiesta sorpresa. Me puse muy contento.'],
        ['Tema: Et møte', 'Caminaba por la calle cuando vi a una chica. La reconocí inmediatamente: era María, a quien no había visto desde hacía años.']])],
      '**Huskeregel for fortellinger:** Imperfektum setter scenen, preteritum driver handlingen fremover, pluskvamperfektum forklarer forhistorien.',
      '**Oppsummering: Kombinere tidsformer**\n\n- Imperfektum: bakgrunn, beskrivelse, pågående handling\n- Preteritum: ny handling, hendelse, avsluttet handling\n- Pluskvamperfektum: forhistorie, \"hadde gjort\"\n- I fortelling: Veksle mellom alle tre for en rik tekst'
    ),
    mkSub('2.4', 'Secuencia de tiempos', 'Tidsformssekvenser',
      'Lær reglene for samsvaret mellom tidsformer i hoved- og bisetning, og tidsskift i indirekte tale.',
      ['beherske tidsformssamsvar mellom hovedsetning og bisetning', 'bruke riktig tidsform i indirekte tale'],
      'Tidsformssekvenser (concordancia temporal)',
      `**Concordancia temporal** handler om hvilken tidsform bisetningen bruker basert på hovedsetningens tidsform.\n\n| Hovedsetning | Bisetning (indikativ) | Bisetning (konjunktiv) |\n|--------------|----------------------|------------------------|\n| Presens | Presens/Perfektum/Futur | Presens konjunktiv |\n| Fortid | Imperfektum/Pluskvamp./Kondisjonalis | Imperfekt konjunktiv |\n\n**Eksempler:**\n- *Dice que **viene**.* (Han sier at han kommer.) → Presens + presens\n- *Dijo que **venía**.* (Han sa at han kom.) → Fortid + imperfektum\n- *Quiere que **vengas**.* (Hun vil at du kommer.) → Presens + presens konjunktiv\n- *Quería que **vinieras**.* (Hun ville at du kom.) → Fortid + imperfekt konjunktiv`,
      'Når hovedsetningen er i presens, brukes presens-tider i bisetningen. Når hovedsetningen er i fortid, \"skyves\" bisetningen ett steg bakover i tid.',
      ['## Tidsskift-oversikt\n\n**Fra presens til fortid (indirekte tale):**\n\n| Direkte tale | Indirekte tale |\n|-------------|----------------|\n| Presens: Estoy bien. | Dijo que **estaba** bien. |\n| Perfektum: He comido. | Dijo que **había comido**. |\n| Futur: Vendré. | Dijo que **vendría**. |\n| Imperativ: ¡Ven! | Dijo que **viniera/viniese**. |\n\n**Eksempler:**\n- *\"Tengo hambre.\"* → Dijo que **tenía** hambre.\n- *\"He terminado.\"* → Dijo que **había terminado**.\n- *\"Volveré mañana.\"* → Dijo que **volvería** al día siguiente.',
       '## Konjunktiv-sekvenser\n\n**Presens i hovedsetning → presens konjunktiv:**\n- *Quiero que **vengas**.* (Jeg vil at du skal komme.)\n- *Es importante que **estudies**.* (Det er viktig at du studerer.)\n\n**Fortid i hovedsetning → imperfekt konjunktiv:**\n- *Quería que **vinieras**.* (Jeg ville at du skulle komme.)\n- *Era importante que **estudiaras**.* (Det var viktig at du studerte.)\n\n**Imperfekt konjunktiv endelser:** -ara/-iera (to former!)\n- hablar → hablara/hablase\n- comer → comiera/comiese\n- vivir → viviera/viviese'],
      [{ title: 'Tidsskift', problem: '\"Estoy cansado.\" → Dijo que...', solution: 'Dijo que **estaba** cansado. (Presens → imperfektum i indirekte tale.)' },
       { title: 'Konjunktiv-sekvens', problem: 'Quería que tú (venir) ___.', solution: 'Quería que tú **vinieras/vinieses**. (Fortid i hovedsetning → imperfekt konjunktiv.)' }],
      [mkEx('lett', 'Gjør om fra presens til fortid i bisetningen:', [
        ['Dice que está bien. → Dijo que ___ bien.', 'estaba'],
        ['Dice que viene mañana. → Dijo que ___ al día siguiente.', 'venía'],
        ['Dice que ha comido. → Dijo que ___ comido.', 'había'],
        ['Dice que irá al cine. → Dijo que ___ al cine.', 'iría']]),
       mkEx('lett', 'Velg presens konjunktiv eller imperfekt konjunktiv:', [
        ['Quiero que tú (venir) ___.', 'vengas (presens konjunktiv - hovedsetning i presens)'],
        ['Quería que tú (venir) ___.', 'vinieras (imperfekt konjunktiv - hovedsetning i fortid)'],
        ['Es necesario que (estudiar/tú) ___.', 'estudies (presens konjunktiv - presens i hovedsetning)'],
        ['Era necesario que (estudiar/tú) ___.', 'estudiaras (imperfekt konjunktiv - fortid i hovedsetning)']]),
       mkEx('medium', 'Gjør om til indirekte tale:', [
        ['\"Tengo hambre.\" → María dijo que...', 'María dijo que tenía hambre.'],
        ['\"He terminado el trabajo.\" → Juan dijo que...', 'Juan dijo que había terminado el trabajo.'],
        ['\"Volveré mañana.\" → Ella dijo que...', 'Ella dijo que volvería al día siguiente.'],
        ['\"No puedo ir.\" → Él dijo que...', 'Él dijo que no podía ir.']]),
       mkEx('vanskelig', 'Oversett til spansk med riktig tidsformssamsvar:', [
        ['Læreren ville at vi skulle studere mer.', 'El profesor quería que estudiáramos más.'],
        ['Han sa at han hadde sett filmen.', 'Dijo que había visto la película.'],
        ['Det var viktig at de kom i tide.', 'Era importante que llegaran a tiempo.'],
        ['Hun sa at hun ville reise neste dag.', 'Dijo que viajaría al día siguiente.']])],
      '**Huskeregel:** Presens i hovedsetning = presens-tider i bisetning. Fortid i hovedsetning = fortids-tider i bisetning. Alt \"skyves\" ett hakk bakover.',
      '**Oppsummering: Tidsformssekvenser**\n\n- Presens + presens/perfektum/futur/presens konjunktiv\n- Fortid + imperfektum/pluskvamperfektum/kondisjonalis/imperfekt konjunktiv\n- Tidsskift i indirekte tale: presens→imperfektum, perfektum→pluskvamperfektum, futur→kondisjonalis\n- Imperfekt konjunktiv: -ara/-iera endelser'
    ),
  ]
};

// ============================================================================
// SPANSK 3 CHAPTER 3: ESTILO INDIRECTO
// ============================================================================
const s3ch3 = {
  title: 'ESTILO INDIRECTO',
  subs: [
    mkSub('3.1', 'Introducción al estilo indirecto', 'Grunnleggende indirekte tale',
      'Lær de grunnleggende reglene for å omforme direkte tale til indirekte tale.',
      ['omforme direkte tale til indirekte tale', 'bruke riktige innledningsverb'],
      'Indirekte tale (estilo indirecto)',
      `**Direkte tale** gjengir ordene nøyaktig: *María dice: \"Estoy cansada.\"*\n**Indirekte tale** gjengir innholdet: *María dice que está cansada.*\n\n**Grunnregel:**\n- Fjern anførselstegn\n- Legg til **que** etter innledningsverbet\n- Tilpass pronomen og tidsformer\n\n| Innledningsverb | Bruk |\n|----------------|------|\n| decir que | si/at |\n| contar que | fortelle at |\n| explicar que | forklare at |\n| afirmar que | hevde at |\n| preguntar si/qué/dónde | spørre om/hva/hvor |\n\n**Når innledningsverbet er i presens, endres IKKE tidsformen:**\n- *\"Estoy cansada.\"* → *Dice que **está** cansada.* (Ingen endring!)`,
      'Indirekte tale brukes for å gjengi hva noen har sagt, uten å sitere ordene direkte. Grunnregelen er enkel: legg til \"que\" og tilpass pronomen.',
      ['## Grunnleggende omforming (presens)\n\n**Direkte → Indirekte (innledningsverb i presens):**\n- *Juan dice: \"Tengo hambre.\"* → *Juan dice que **tiene** hambre.*\n- *María dice: \"Estoy contenta.\"* → *María dice que **está** contenta.*\n- *Ellos dicen: \"Vamos al cine.\"* → *Ellos dicen que **van** al cine.*\n\n**Pronomenendringer:**\n- yo → él/ella (avhengig av hvem som snakker)\n- mi → su\n- me → le/se\n\n*\"Me gusta **mi** coche.\"* → Dice que le gusta **su** coche.',
       '## Innledningsverb\n\n**Vanlige innledningsverb:**\n- *decir que* - si at\n- *contar que* - fortelle at\n- *explicar que* - forklare at\n- *comentar que* - kommentere at\n- *afirmar que* - hevde/påstå at\n- *asegurar que* - forsikre at\n- *añadir que* - legge til at\n- *responder que* - svare at\n\n**For spørsmål:**\n- *preguntar si* - spørre om (ja/nei-spørsmål)\n- *preguntar qué/dónde/cuándo* - spørre hva/hvor/når'],
      [{ title: 'Enkel omforming', problem: 'Juan dice: \"Estoy enfermo.\" → Omform til indirekte tale.', solution: 'Juan dice que **está** enfermo. (Fjern anførselstegn, legg til \"que\", endre yo→él.)' },
       { title: 'Pronomenendring', problem: 'María dice: \"Mi hermano está aquí.\" → Omform.', solution: 'María dice que **su** hermano está aquí. (mi → su)' }],
      [mkEx('lett', 'Omform til indirekte tale (innledningsverb i presens):', [
        ['Juan dice: \"Tengo hambre.\"', 'Juan dice que tiene hambre.'],
        ['María dice: \"Estoy cansada.\"', 'María dice que está cansada.'],
        ['Pedro dice: \"Voy al cine.\"', 'Pedro dice que va al cine.'],
        ['Ana dice: \"Mi madre está aquí.\"', 'Ana dice que su madre está aquí.']]),
       mkEx('lett', 'Fyll inn riktig innledningsverb:', [
        ['Juan ___: \"Estoy bien.\" (sier)', 'dice'], ['María ___ que la fiesta es mañana. (forteller)', 'cuenta'],
        ['El profesor ___ que el examen es fácil. (forklarer)', 'explica'], ['Ella ___ que tiene razón. (hevder)', 'afirma']]),
       mkEx('medium', 'Omform med pronomenendringer:', [
        ['Juan dice: \"Yo quiero ir con mis amigos.\"', 'Juan dice que él quiere ir con sus amigos.'],
        ['María dice: \"Mi novio me ha llamado.\"', 'María dice que su novio la ha llamado.'],
        ['Pedro dice: \"Nosotros vamos a nuestra casa.\"', 'Pedro dice que ellos van a su casa.'],
        ['Ana dice: \"Yo he perdido mi teléfono.\"', 'Ana dice que ella ha perdido su teléfono.']]),
       mkEx('vanskelig', 'Oversett til spansk som indirekte tale:', [
        ['Juan sier at han er syk.', 'Juan dice que está enfermo.'],
        ['María forteller at broren hennes bor i Madrid.', 'María cuenta que su hermano vive en Madrid.'],
        ['Læreren forklarer at eksamen er vanskelig.', 'El profesor explica que el examen es difícil.'],
        ['De hevder at de har rett.', 'Afirman que tienen razón.']])],
      '**Tips:** Når innledningsverbet er i presens (dice, cuenta), endres IKKE tidsformen i bisetningen. Husk bare å endre pronomen!',
      '**Oppsummering: Grunnleggende indirekte tale**\n\n- Fjern anførselstegn, legg til \"que\"\n- Tilpass pronomen: yo→él/ella, mi→su, me→le/se\n- Innledningsverb i presens: ingen tidsformendring\n- Vanlige verb: decir, contar, explicar, afirmar, preguntar'
    ),
    mkSub('3.2', 'Cambios de tiempos verbales', 'Tidsendringer i indirekte tale',
      'Lær de systematiske tidsendringene som skjer når innledningsverbet er i fortid.',
      ['utføre systematiske tidsendringer i indirekte tale', 'beherske alle tidsskift fra direkte til indirekte tale'],
      'Tidsendringer i indirekte tale',
      `Når innledningsverbet er i **fortid** (dijo, contó, explicó), endres tidsformene:\n\n| Direkte tale | Indirekte tale |\n|-------------|----------------|\n| Presens: *\"Estoy bien.\"* | Imperfektum: *Dijo que **estaba** bien.* |\n| Perfektum: *\"He comido.\"* | Pluskvamperfektum: *Dijo que **había comido**.* |\n| Preteritum: *\"Comí.\"* | Pluskvamperfektum: *Dijo que **había comido**.* |\n| Futur: *\"Vendré.\"* | Kondisjonalis: *Dijo que **vendría**.* |\n| Imperativ: *\"¡Ven!\"* | Imperfekt konjunktiv: *Dijo que **viniera**.* |\n\n**Andre endringer:**\n- hoy → ese día / aquel día\n- mañana → al día siguiente\n- ayer → el día anterior\n- aquí → allí\n- este → ese/aquel`,
      'Når noen gjengir i fortid hva en person sa, \"skyves\" alle tidsformene ett steg bakover. Dette er den viktigste regelen i indirekte tale.',
      ['## Systematiske tidsskift\n\n**Presens → Imperfektum:**\n- *\"**Tengo** hambre.\"* → Dijo que **tenía** hambre.\n- *\"**Estoy** cansada.\"* → Dijo que **estaba** cansada.\n\n**Perfektum → Pluskvamperfektum:**\n- *\"**He terminado**.\"* → Dijo que **había terminado**.\n\n**Futur → Kondisjonalis:**\n- *\"**Vendré** mañana.\"* → Dijo que **vendría** al día siguiente.\n- *\"**Iré** al cine.\"* → Dijo que **iría** al cine.\n\n**Imperativ → Imperfekt konjunktiv:**\n- *\"¡**Ven** aquí!\"* → Le dijo que **viniera** allí.\n- *\"¡**Estudia** más!\"* → Le dijo que **estudiara** más.',
       '## Tids- og stedsendringer\n\n| Direkte tale | Indirekte tale |\n|-------------|----------------|\n| hoy (i dag) | ese día (den dagen) |\n| mañana (i morgen) | al día siguiente (neste dag) |\n| ayer (i går) | el día anterior (dagen før) |\n| esta semana | esa semana |\n| el próximo año | el año siguiente |\n| aquí (her) | allí (der) |\n| este (denne) | ese/aquel (den) |\n\n*\"Vendré **mañana** a **esta** casa.\"*\n→ Dijo que vendría **al día siguiente** a **esa** casa.'],
      [{ title: 'Presens → imperfektum', problem: '\"Estoy contento.\" → Dijo que...', solution: 'Dijo que **estaba** contento. (Presens → imperfektum.)' },
       { title: 'Futur → kondisjonalis', problem: '\"Vendré mañana.\" → Dijo que...', solution: 'Dijo que **vendría** al día siguiente. (Futur → kondisjonalis, mañana → al día siguiente.)' }],
      [mkEx('lett', 'Gjør om til indirekte tale (innledningsverb i fortid):', [
        ['\"Tengo hambre.\" → Dijo que...', 'Dijo que tenía hambre.'],
        ['\"Estoy cansada.\" → Dijo que...', 'Dijo que estaba cansada.'],
        ['\"Vamos al cine.\" → Dijeron que...', 'Dijeron que iban al cine.'],
        ['\"He terminado.\" → Dijo que...', 'Dijo que había terminado.']]),
       mkEx('lett', 'Gjør tidsendringen:', [
        ['Presens (tengo) → fortid: ___', 'tenía (imperfektum)'],
        ['Perfektum (he comido) → fortid: ___', 'había comido (pluskvamperfektum)'],
        ['Futur (vendré) → fortid: ___', 'vendría (kondisjonalis)'],
        ['Imperativ (¡ven!) → fortid: ___', 'viniera (imperfekt konjunktiv)']]),
       mkEx('medium', 'Gjør om med alle nødvendige endringer:', [
        ['\"Mañana iré al cine.\" → Dijo que...', 'Dijo que al día siguiente iría al cine.'],
        ['\"Hoy he hablado con mi madre.\" → Contó que...', 'Contó que ese día había hablado con su madre.'],
        ['\"¡Estudia más!\" → Le dijo que...', 'Le dijo que estudiara más.'],
        ['\"Ayer compré un libro aquí.\" → Dijo que...', 'Dijo que el día anterior había comprado un libro allí.']]),
       mkEx('vanskelig', 'Oversett til spansk som indirekte tale i fortid:', [
        ['Han sa at han var sulten.', 'Dijo que tenía hambre.'],
        ['Hun fortalte at hun hadde sett filmen.', 'Contó que había visto la película.'],
        ['De sa at de ville komme neste dag.', 'Dijeron que vendrían al día siguiente.'],
        ['Læreren ba oss om å studere mer.', 'El profesor nos dijo que estudiáramos más.']])],
      '**Huskeregel for tidsskift:** Alt flyttes ett steg bakover: presens→imperfektum, perfektum→pluskvamperfektum, futur→kondisjonalis, imperativ→imperfekt konjunktiv.',
      '**Oppsummering: Tidsendringer**\n\n- Presens → imperfektum\n- Perfektum/preteritum → pluskvamperfektum\n- Futur → kondisjonalis\n- Imperativ → imperfekt konjunktiv\n- Tidsuttrykk: hoy→ese día, mañana→al día siguiente, ayer→el día anterior\n- Stedsuttrykk: aquí→allí, este→ese/aquel'
    ),
    mkSub('3.3', 'Estilo indirecto con preguntas', 'Indirekte spørsmål',
      'Lær å omforme direkte spørsmål til indirekte spørsmål.',
      ['omforme ja/nei-spørsmål til indirekte tale', 'omforme informasjonsspørsmål til indirekte tale'],
      'Indirekte spørsmål',
      `**To typer spørsmål:**\n\n**1. Ja/nei-spørsmål → preguntar si:**\n- *\"¿Vienes?\"* → *Preguntó **si** venía.*\n- *\"¿Estás bien?\"* → *Preguntó **si** estaba bien.*\n\n**2. Informasjonsspørsmål → preguntar + spørreord:**\n- *\"¿Qué haces?\"* → *Preguntó **qué** hacía.*\n- *\"¿Dónde vives?\"* → *Preguntó **dónde** vivía.*\n- *\"¿Cuándo llegas?\"* → *Preguntó **cuándo** llegaba.*\n\n**Viktig:** Ordstillingen endres til vanlig setningsstruktur (ikke inversjon):\n- Direkte: *¿Dónde **vives** tú?*\n- Indirekte: *Preguntó dónde **vivía** yo.* (subjekt etter verb er valgfritt)`,
      'Spørsmål i indirekte tale bruker \"si\" for ja/nei-spørsmål og beholder spørreordet for informasjonsspørsmål. Husk at ordstillingen endres fra spørsmålsform til vanlig setningsstruktur.',
      ['## Ja/nei-spørsmål med \"si\"\n\n*\"¿Vienes a la fiesta?\"* → Preguntó **si** venía a la fiesta.\n*\"¿Has terminado?\"* → Preguntó **si** había terminado.\n*\"¿Puedes ayudarme?\"* → Preguntó **si** podía ayudarle.\n*\"¿Irás mañana?\"* → Preguntó **si** iría al día siguiente.\n\n**Merk:** Spørsmålstegn forsvinner og \"si\" legges til.\n**Merk:** Tidsformene endres som vanlig når innledningsverbet er i fortid.',
       '## Informasjonsspørsmål\n\n| Spørreord | Direkte | Indirekte |\n|-----------|---------|----------|\n| qué | ¿Qué haces? | Preguntó qué hacía. |\n| dónde | ¿Dónde vives? | Preguntó dónde vivía. |\n| cuándo | ¿Cuándo llegas? | Preguntó cuándo llegaba. |\n| cómo | ¿Cómo estás? | Preguntó cómo estaba. |\n| por qué | ¿Por qué lloras? | Preguntó por qué lloraba. |\n| quién | ¿Quién es? | Preguntó quién era. |\n| cuánto | ¿Cuánto cuesta? | Preguntó cuánto costaba. |\n\n**Spørreordene beholder aksenttegnet** også i indirekte spørsmål!'],
      [{ title: 'Ja/nei-spørsmål', problem: '\"¿Vienes mañana?\" → Preguntó...', solution: 'Preguntó **si** venía al día siguiente. (si + imperfektum + tidsendring)' },
       { title: 'Informasjonsspørsmål', problem: '\"¿Dónde vives?\" → Preguntó...', solution: 'Preguntó **dónde** vivía. (Beholder spørreordet, endrer tidsform.)' }],
      [mkEx('lett', 'Omform ja/nei-spørsmål til indirekte tale:', [
        ['\"¿Estás bien?\" → Preguntó si...', 'Preguntó si estaba bien.'],
        ['\"¿Vienes a la fiesta?\" → Preguntó si...', 'Preguntó si venía a la fiesta.'],
        ['\"¿Has terminado?\" → Preguntó si...', 'Preguntó si había terminado.'],
        ['\"¿Puedes ayudarme?\" → Preguntó si...', 'Preguntó si podía ayudarle.']]),
       mkEx('lett', 'Omform informasjonsspørsmål:', [
        ['\"¿Qué haces?\" → Preguntó...', 'Preguntó qué hacía.'],
        ['\"¿Dónde vives?\" → Preguntó...', 'Preguntó dónde vivía.'],
        ['\"¿Cuándo llegas?\" → Preguntó...', 'Preguntó cuándo llegaba.'],
        ['\"¿Cómo te llamas?\" → Preguntó...', 'Preguntó cómo se llamaba.']]),
       mkEx('medium', 'Omform med alle nødvendige endringer:', [
        ['\"¿Qué has hecho hoy?\" → Me preguntó...', 'Me preguntó qué había hecho ese día.'],
        ['\"¿Irás mañana al cine?\" → Preguntó si...', 'Preguntó si iría al día siguiente al cine.'],
        ['\"¿Por qué no has venido?\" → Preguntó...', 'Preguntó por qué no había venido.'],
        ['\"¿Quién es tu profesor?\" → Preguntó...', 'Preguntó quién era mi profesor.']]),
       mkEx('vanskelig', 'Oversett til spansk som indirekte spørsmål:', [
        ['Han spurte om jeg var sulten.', 'Preguntó si tenía hambre.'],
        ['Hun spurte hvor jeg bodde.', 'Preguntó dónde vivía.'],
        ['De spurte når vi skulle komme.', 'Preguntaron cuándo vendríamos.'],
        ['Læreren spurte hvorfor jeg ikke hadde gjort leksene.', 'El profesor preguntó por qué no había hecho los deberes.']])],
      '**Huskeregel:** Ja/nei-spørsmål → \"si\". Informasjonsspørsmål → beholder spørreordet (med aksent). Samme tidsendringer som vanlig indirekte tale.',
      '**Oppsummering: Indirekte spørsmål**\n\n- Ja/nei-spørsmål: preguntar + si\n- Informasjonsspørsmål: preguntar + qué/dónde/cuándo/cómo/por qué\n- Spørreord beholder aksenttegn\n- Ordstillingen endres til vanlig setningsstruktur\n- Tidsendringer som vanlig ved fortid i hovedsetningen'
    ),
    mkSub('3.4', 'Textos periodísticos', 'Journalistisk bruk av indirekte tale',
      'Lær å gjenkjenne og bruke indirekte tale i avistekster og journalistikk.',
      ['gjenkjenne indirekte tale i avistekster', 'skrive nyhetsartikler med korrekt bruk av indirekte tale'],
      'Journalistisk indirekte tale',
      `**I journalistikk** brukes indirekte tale for å gjengi uttalelser fra kilder.\n\n**Vanlige journalistiske innledningsverb:**\n\n| Verb | Betydning | Bruk |\n|------|-----------|------|\n| declarar que | erklære at | Offisielle uttalelser |\n| anunciar que | kunngjøre at | Nyheter, vedtak |\n| afirmar que | hevde at | Påstander |\n| negar que + subjunktiv | nekte for at | Avvisninger |\n| asegurar que | forsikre at | Løfter |\n| señalar que | påpeke at | Presiseringer |\n| advertir que | advare om at | Advarsler |\n| según + kilde | ifølge | Kildehenvisning |\n\n**Eksempel:** *El presidente **declaró** que el gobierno **tomaría** medidas. **Según** el portavoz, las reformas **serían** implementadas en breve.*`,
      'Journalistikk bruker indirekte tale for å referere til hva politikere, eksperter og andre kilder har sagt. Det er viktig å kunne gjenkjenne og bruke dette i avistekster.',
      ['## Journalistiske uttrykk\n\n**Kildehenvisning:**\n- *Según el ministro, ...* (Ifølge ministeren, ...)\n- *De acuerdo con el informe, ...* (I henhold til rapporten, ...)\n- *Como señaló la experta, ...* (Som eksperten påpekte, ...)\n\n**Sitatteknikk i aviser:**\n- Indirekte: *El presidente **afirmó** que la economía **mejoraría**.*\n- Blanding: *El presidente dijo que la situación \"**requiere** esfuerzo de todos\".*\n- Direkte sitat: *\"La situación es grave\", **declaró** el presidente.*\n\nAvisartikler veksler ofte mellom direkte og indirekte tale for variasjon.',
       '## Skrive en nyhetsartikkel\n\n**Struktur:**\n1. **Tittel:** Kort, direkte\n2. **Ingress:** Hvem, hva, når, hvor\n3. **Brødtekst:** Detaljer, sitater (indirekte tale)\n4. **Bakgrunn:** Kontekst\n\n**Eksempel:**\n*El gobierno anuncia nuevas medidas educativas*\n\n*El ministro de Educación **declaró** ayer que el gobierno **implementaría** un nuevo plan educativo. **Según** el ministro, las reformas **afectarían** a todos los niveles. **Añadió** que los profesores **recibirían** formación adicional.*'],
      [{ title: 'Journalistisk omforming', problem: 'El presidente: \"Vamos a mejorar la educación.\" → Omform journalistisk.', solution: 'El presidente **declaró** que **iban** a mejorar la educación. (Journalistisk innledningsverb + tidsendring.)' },
       { title: 'Según', problem: 'Skriv en setning med \"según\" + kilde.', solution: '**Según** el presidente, el gobierno **tomaría** medidas para mejorar la educación.' }],
      [mkEx('lett', 'Velg riktig journalistisk innledningsverb:', [
        ['Presidenten kunngjør en ny lov.', 'El presidente anuncia una nueva ley.'],
        ['Ministeren hevder at økonomien er stabil.', 'El ministro afirma que la economía es estable.'],
        ['Eksperten advarer om klimaendringer.', 'La experta advierte sobre el cambio climático.'],
        ['Regjeringen nekter for anklagene.', 'El gobierno niega las acusaciones.']]),
       mkEx('lett', 'Omform til journalistisk indirekte tale:', [
        ['\"Tomaremos medidas.\" (El presidente)', 'El presidente declaró que tomarían medidas.'],
        ['\"La economía mejorará.\" (El ministro)', 'El ministro afirmó que la economía mejoraría.'],
        ['\"Hemos logrado buenos resultados.\" (La directora)', 'La directora aseguró que habían logrado buenos resultados.'],
        ['\"No hay peligro.\" (El portavoz)', 'El portavoz señaló que no había peligro.']]),
       mkEx('medium', 'Skriv en kort nyhetsnotis med indirekte tale:', [
        ['Tema: Ny skolelov kunngjort av regjeringen.', 'El gobierno anunció ayer una nueva ley educativa. Según el ministro de Educación, la reforma afectaría a todos los centros escolares.'],
        ['Tema: Presidenten lover bedre helsetjenester.', 'El presidente declaró que mejoraría los servicios sanitarios. Añadió que el gobierno invertiría más en hospitales públicos.'],
        ['Tema: Eksperter advarer om miljøproblemer.', 'Los expertos advirtieron que la contaminación estaba aumentando. Señalaron que era necesario tomar medidas urgentes.'],
        ['Tema: Fagforening kritiserer lønnsforhold.', 'El sindicato denunció que los salarios no habían subido en años. Según el portavoz, los trabajadores necesitaban mejores condiciones.']]),
       mkEx('vanskelig', 'Les teksten og identifiser innledningsverb, tidsformer og kilder:\n\"El alcalde anunció que la ciudad construiría un nuevo hospital. Según el alcalde, las obras comenzarían en primavera. Añadió que el proyecto costaría 50 millones de euros. Los vecinos, sin embargo, afirmaron que preferían una escuela.\"', [
        ['Hvilke innledningsverb brukes?', 'anunció, según, añadió, afirmaron'],
        ['Hvilke tidsformer brukes i indirekte tale?', 'Kondisjonalis: construiría, comenzarían, costaría. Imperfektum: preferían.'],
        ['Hvem er kildene?', 'El alcalde (ordføreren) og los vecinos (naboene).'],
        ['Hva er konflikten?', 'Ordføreren vil bygge sykehus, men naboene vil heller ha en skole.']])],
      '**Journalistisk tips:** Varier mellom ulike innledningsverb (declarar, afirmar, señalar, añadir) for å unngå gjentakelser. Bruk \"según\" for kildehenvisning.',
      '**Oppsummering: Journalistisk indirekte tale**\n\n- Innledningsverb: declarar, anunciar, afirmar, negar, señalar, advertir\n- Kildehenvisning: según + kilde, de acuerdo con\n- Teknikk: Veksle mellom direkte og indirekte tale\n- Struktur: Tittel → ingress → brødtekst med sitater → bakgrunn'
    ),
  ]
};

// Now generate the file
function generateChapterContent(level, mainNum, subNum, data) {
  const id = `spansk-${level}-${mainNum}-${subNum}`;
  const lines = [];
  lines.push(`    { id: '${id}-intro', type: 'text', content: \`## ${data.title}\n\n${data.intro}\` },`);
  lines.push(`    { id: '${id}-def-1', type: 'definition', title: '${data.defTitle}', content: \`${data.defContent}\` },`);
  data.texts.forEach((t, i) => {
    lines.push(`    { id: '${id}-text-${i+1}', type: 'text', content: \`${t}\` },`);
  });
  if (data.examples[0]) {
    lines.push(`    { id: '${id}-example-1', type: 'example', title: 'Eksempel: ${data.examples[0].title}', problem: \`${data.examples[0].problem}\`, solution: \`${data.examples[0].solution}\` },`);
  }
  data.exercises.forEach((ex, i) => {
    const subs = ex.subs.map((s, j) => {
      const l = String.fromCharCode(97+j);
      return `        { label: '${l}', task: '${s.t.replace(/'/g,"\\'")}', solution: '${s.s.replace(/'/g,"\\'")}', answer: '${s.s.replace(/'/g,"\\'")}' }`;
    }).join(',\n');
    lines.push(`    { id: '${id}-ex-block-${i+1}', type: 'exercise', exercise: { id: '${id}-ex-${i+1}', number: '${i+1}', type: 'classic', difficulty: '${ex.diff}', task: '${ex.task.replace(/'/g,"\\'")}', subTasks: [\n${subs},\n      ], solution: '${ex.subs.map((s,j)=>String.fromCharCode(97+j)+') '+s.s).join(', ').replace(/'/g,"\\'")}', hints: ['Se teorien over', 'Sjekk eksemplene'] } },`);
    if (i === 1 && data.examples[1]) {
      lines.push(`    { id: '${id}-example-2', type: 'example', title: 'Eksempel: ${data.examples[1].title}', problem: \`${data.examples[1].problem}\`, solution: \`${data.examples[1].solution}\` },`);
    }
  });
  lines.push(`    { id: '${id}-tip-1', type: 'tip', content: \`${data.tip}\` },`);
  lines.push(`    { id: '${id}-note-1', type: 'note', title: 'Oppsummering', content: \`${data.note}\` },`);
  return lines.join('\n');
}

function generateFile(level, chapterNums, chapters, fileLabel) {
  const lang = `spansk-${level}`;
  let content = `/* eslint-disable */\n// @ts-nocheck\n/**\n * Spansk nivå ${level} - Kapittel ${fileLabel} (Detaljerte underkapitler)\n *\n * Dekker:\n${chapterNums.map(n => ` * - Kapittel ${n}: ${chapters[n].title} (${n}.1-${n}.4)`).join('\n')}\n */\n\nimport type { TextbookChapter } from '@/lib/types/textbook';\n`;
  const allNames = [];
  for (const m of chapterNums) {
    const ch = chapters[m];
    content += `\n// ============================================================================\n// KAPITTEL ${m}: ${ch.title}\n// ============================================================================\n`;
    ch.subs.forEach((sub, idx) => {
      const s = idx + 1;
      const name = `CHAPTER_SPANSK_${level}_${m}_${s}`;
      allNames.push(name);
      content += `\n// ${sub.n} ${sub.title}\nexport const ${name}: TextbookChapter = {\n  id: '${lang}-${m}-${s}',\n  courseId: '${lang}',\n  chapterNumber: '${sub.n}',\n  title: '${sub.title}',\n  subtitle: '${sub.subtitle}',\n  description: '${sub.desc}',\n  estimatedMinutes: 45,\n  competenceGoals: [${sub.goals.map(g=>`'${g}'`).join(', ')}],\n  content: [\n${generateChapterContent(level, m, s, sub)}\n  ],\n  exercises: [],\n};\n`;
    });
  }
  const expName = `SPANSK_${level}_CHAPTERS_${fileLabel.replace('-','_')}`;
  content += `\nexport const ${expName}: TextbookChapter[] = [\n${allNames.map(n=>`  ${n},`).join('\n')}\n];\n`;
  return content;
}

// Generate spansk-3-kap1-3
const s3_1_3 = generateFile(3, [1, 2, 3], {1: s3ch1, 2: s3ch2, 3: s3ch3}, '1-3');
fs.writeFileSync(path.join(outDir, 'textbook-content-spansk-3-kap1-3.ts'), s3_1_3);
console.log(`Written: textbook-content-spansk-3-kap1-3.ts (${s3_1_3.split('\n').length} lines)`);
