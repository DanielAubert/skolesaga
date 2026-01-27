const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'src', 'lib', 'data');

// Chapter definitions for Spansk 2
const spansk2Chapters = {
  1: {
    title: 'PERFECTO Y IMPERFECTO',
    subs: [
      { n: '1.1', title: 'El pretérito perfecto', subtitle: 'Sammensatt fortid', desc: 'Lær å bruke haber + partisipp for å uttrykke handlinger som har skjedd nylig.',
        goals: ['bruke sammensatt fortid', 'fortelle om nylige hendelser'],
        defTitle: 'Pretérito perfecto (sammensatt fortid)',
        defContent: `**Pretérito perfecto** brukes for handlinger som har skjedd nylig eller har relevans for nåtiden.\n\n**Formel:** haber (presens) + partisipp\n\n| Person | Haber | Eksempel |\n|--------|-------|----------|\n| yo | he | he hablado |\n| tú | has | has comido |\n| él/ella | ha | ha vivido |\n| nosotros | hemos | hemos estudiado |\n| ellos | han | han trabajado |\n\n**Partisipp:** -ar → -ado, -er/-ir → -ido\n**Uregelmessige:** hecho, dicho, escrito, visto, puesto, vuelto, abierto, roto`,
        intro: 'I spansk brukes **pretérito perfecto** (sammensatt fortid) for å snakke om handlinger som har skjedd nylig, eller som har relevans for nåtiden. Det tilsvarer norsk \"har gjort/har spist\". Formen dannes med hjelpeverbet **haber** i presens + **partisipp** (participio pasado).',
        texts: [
          '## Tidsuttrykk med perfecto\n\nPerfecto brukes ofte med disse tidsuttrykkene:\n\n| Spansk | Norsk |\n|--------|-------|\n| hoy | i dag |\n| esta mañana | i dag tidlig |\n| esta semana | denne uken |\n| este mes | denne måneden |\n| ya | allerede |\n| todavía no | ennå ikke |\n| alguna vez | noen gang |\n| nunca | aldri |',
          '## Uregelmessige partisipper\n\nNoen vanlige verb har uregelmessige partisipper:\n\n| Infinitiv | Partisipp | Norsk |\n|-----------|-----------|-------|\n| hacer | hecho | gjort |\n| decir | dicho | sagt |\n| escribir | escrito | skrevet |\n| ver | visto | sett |\n| poner | puesto | lagt |\n| volver | vuelto | kommet tilbake |\n| abrir | abierto | åpnet |\n| romper | roto | knust |'
        ],
        examples: [
          { title: 'Dannelse av perfecto', problem: 'Sett verbene i pretérito perfecto:\na) yo / hablar\nb) tú / comer\nc) ella / escribir', solution: 'a) Yo **he hablado** (Jeg har snakket)\nb) Tú **has comido** (Du har spist)\nc) Ella **ha escrito** (Hun har skrevet)' },
          { title: 'Uregelmessige partisipper', problem: 'Oversett til spansk:\na) Jeg har gjort leksene.\nb) Vi har sett filmen.', solution: 'a) **He hecho los deberes.** (hacer → hecho)\nb) **Hemos visto la película.** (ver → visto)' },
        ],
        exercises: [
          { diff: 'lett', task: 'Dann pretérito perfecto av verbene:', subs: [
            { t: 'yo / estudiar', s: 'he estudiado' }, { t: 'nosotros / vivir', s: 'hemos vivido' },
            { t: 'ellos / trabajar', s: 'han trabajado' }, { t: 'tú / aprender', s: 'has aprendido' }
          ]},
          { diff: 'lett', task: 'Fyll inn riktig form av haber:', subs: [
            { t: 'Yo ___ comido.', s: 'he' }, { t: 'Ella ___ salido.', s: 'ha' },
            { t: 'Nosotros ___ llegado.', s: 'hemos' }, { t: 'Ellos ___ dormido.', s: 'han' }
          ]},
          { diff: 'medium', task: 'Skriv setninger med uregelmessige partisipper:', subs: [
            { t: 'yo / hacer / la cena', s: 'Yo he hecho la cena.' }, { t: 'tú / decir / la verdad', s: 'Tú has dicho la verdad.' },
            { t: 'ella / abrir / la puerta', s: 'Ella ha abierto la puerta.' }, { t: 'nosotros / ver / la película', s: 'Nosotros hemos visto la película.' }
          ]},
          { diff: 'vanskelig', task: 'Oversett til spansk med pretérito perfecto:', subs: [
            { t: 'Har du noen gang vært i Spania?', s: '¿Has estado alguna vez en España?' },
            { t: 'Jeg har allerede spist frokost.', s: 'Ya he desayunado.' },
            { t: 'De har ikke kommet ennå.', s: 'Todavía no han llegado.' },
            { t: 'Vi har skrevet brevet i dag.', s: 'Hemos escrito la carta hoy.' }
          ]},
        ],
        tip: '**Huskeregel:** Partisippet endrer seg ALDRI i perfecto. Det er alltid *he hablado*, *ha hablado*, *hemos hablado* osv. Bare hjelpeverbet *haber* bøyes.',
        note: '**Oppsummering: Pretérito perfecto**\n\n- **Formel:** haber (presens) + partisipp\n- **Regelmessig partisipp:** -ar → -ado, -er/-ir → -ido\n- **Uregelmessige:** hecho, dicho, escrito, visto, puesto, vuelto, abierto, roto\n- **Bruk:** Nylige handlinger, erfaringer, med hoy/ya/todavía no'
      },
      { n: '1.2', title: 'El pretérito imperfecto', subtitle: 'Ufullendt fortid', desc: 'Lær å beskrive vaner, bakgrunn og pågående handlinger i fortiden.',
        goals: ['beskrive fortidige vaner', 'bruke imperfecto korrekt'],
        defTitle: 'Pretérito imperfecto (ufullendt fortid)',
        defContent: `**Imperfecto** brukes for å beskrive vaner, bakgrunn og pågående tilstander i fortiden.\n\n**-AR verb (hablar):**\n| Person | Endelse | Form |\n|--------|---------|------|\n| yo | -aba | hablaba |\n| tú | -abas | hablabas |\n| él/ella | -aba | hablaba |\n| nosotros | -ábamos | hablábamos |\n| ellos | -aban | hablaban |\n\n**-ER/-IR verb (comer/vivir):**\n| Person | Endelse | Form |\n|--------|---------|------|\n| yo | -ía | comía |\n| tú | -ías | comías |\n| él/ella | -ía | comía |\n| nosotros | -íamos | comíamos |\n| ellos | -ían | comían |`,
        intro: 'Mens pretérito perfecto brukes for avsluttede handlinger, brukes **pretérito imperfecto** for å beskrive **vaner i fortiden**, **bakgrunn** og **pågående tilstander**. Det tilsvarer ofte norsk \"pleide å\" eller \"var i ferd med å\".',
        texts: [
          '## Bruksområder for imperfecto\n\n1. **Vaner i fortiden:** *Cuando era niño, jugaba al fútbol.* (Da jeg var barn, spilte jeg fotball.)\n2. **Beskrivelser:** *El cielo estaba azul y hacía calor.* (Himmelen var blå og det var varmt.)\n3. **Alder og tid:** *Tenía quince años.* (Jeg var femten år.)\n4. **Samtidige handlinger:** *Mientras estudiaba, mi hermano veía la tele.* (Mens jeg studerte, så broren min på TV.)',
          '## Uregelmessige verb i imperfecto\n\nDet finnes bare TRE uregelmessige verb:\n\n| Verb | yo | tú | él | nosotros | ellos |\n|------|----|----|-----|----------|-------|\n| ser | era | eras | era | éramos | eran |\n| ir | iba | ibas | iba | íbamos | iban |\n| ver | veía | veías | veía | veíamos | veían |'
        ],
        examples: [
          { title: 'Imperfecto med -ar verb', problem: 'Bøy verbet hablar i imperfecto for alle personer.', solution: 'yo habl**aba**, tú habl**abas**, él habl**aba**, nosotros habl**ábamos**, ellos habl**aban**' },
          { title: 'Bruk i kontekst', problem: 'Oversett: Da jeg var liten, bodde vi i Madrid.', solution: '**Cuando era pequeño/a, vivíamos en Madrid.** (ser → era, vivir → vivíamos)' },
        ],
        exercises: [
          { diff: 'lett', task: 'Bøy verbene i imperfecto:', subs: [
            { t: 'yo / hablar', s: 'hablaba' }, { t: 'tú / comer', s: 'comías' },
            { t: 'ella / vivir', s: 'vivía' }, { t: 'nosotros / estudiar', s: 'estudiábamos' }
          ]},
          { diff: 'lett', task: 'Fyll inn riktig form av ser, ir eller ver:', subs: [
            { t: 'Yo ___ estudiante. (ser)', s: 'era' }, { t: 'Nosotros ___ al cine. (ir)', s: 'íbamos' },
            { t: 'Tú ___ la televisión. (ver)', s: 'veías' }, { t: 'Ellos ___ amigos. (ser)', s: 'eran' }
          ]},
          { diff: 'medium', task: 'Beskriv barndommen din med imperfecto:', subs: [
            { t: 'Cuando era niño/a, yo ___ (jugar) en el parque.', s: 'jugaba' },
            { t: 'Mi madre ___ (cocinar) muy bien.', s: 'cocinaba' },
            { t: 'Mis amigos y yo ___ (ir) a la playa.', s: 'íbamos' },
            { t: 'Mi abuelo ___ (contar) historias.', s: 'contaba' }
          ]},
          { diff: 'vanskelig', task: 'Oversett til spansk med imperfecto:', subs: [
            { t: 'Da jeg var ti år, bodde jeg i Barcelona.', s: 'Cuando tenía diez años, vivía en Barcelona.' },
            { t: 'Det regnet og det var kaldt.', s: 'Llovía y hacía frío.' },
            { t: 'Hver sommer dro vi til stranden.', s: 'Cada verano íbamos a la playa.' },
            { t: 'Hun pleide å lese hver kveld.', s: 'Ella leía cada noche.' }
          ]},
        ],
        tip: '**Signalord for imperfecto:** siempre, todos los días, cada verano, cuando era niño/a, mientras, normalmente, a menudo, de pequeño/a.',
        note: '**Oppsummering: Pretérito imperfecto**\n\n- **-AR verb:** -aba, -abas, -aba, -ábamos, -aban\n- **-ER/-IR verb:** -ía, -ías, -ía, -íamos, -ían\n- **Uregelmessige:** ser (era), ir (iba), ver (veía)\n- **Bruk:** Vaner, beskrivelser, bakgrunn, samtidige handlinger'
      },
      { n: '1.3', title: 'Perfecto vs. imperfecto', subtitle: 'Når brukes hva?', desc: 'Forstå forskjellen mellom avsluttede handlinger og pågående tilstander.',
        goals: ['skille mellom fortidsformene', 'bruke begge former i kontekst'],
        defTitle: 'Perfecto vs. Imperfecto',
        defContent: `**Perfecto** = avsluttede, konkrete handlinger med tydelig start/slutt.\n**Imperfecto** = pågående tilstander, vaner, beskrivelser uten tydelig avgrensning.\n\n| Perfecto | Imperfecto |\n|----------|------------|\n| Ayer comí pizza. | Siempre comía pizza. |\n| Ayer llovió. | Llovía mucho. |\n| Fui al cine. | Iba al cine cada viernes. |`,
        intro: 'Å velge mellom **perfecto** og **imperfecto** er en av de største utfordringene for norske elever som lærer spansk. Nøkkelen er å forstå om handlingen er **avgrenset** (perfecto) eller **pågående/gjentakende** (imperfecto).',
        texts: [
          '## Signalord\n\n| Perfecto | Imperfecto |\n|----------|------------|\n| ayer (i går) | siempre (alltid) |\n| la semana pasada | todos los días |\n| el año pasado | cada verano |\n| de repente (plutselig) | mientras (mens) |\n| una vez (en gang) | cuando era niño |\n| anoche (i natt) | normalmente |',
          '## Kombinert bruk\n\nI fortellinger brukes begge former sammen:\n- **Imperfecto** setter scenen (bakgrunn)\n- **Perfecto** forteller hva som skjedde (handling)\n\n*Hacía sol y los pájaros cantaban* (imperfecto - bakgrunn) *cuando de repente empezó a llover* (perfecto - handling).'
        ],
        examples: [
          { title: 'Velg riktig form', problem: 'Forklar forskjellen:\na) Ayer llovió. vs. Llovía mucho.\nb) Comí pizza. vs. Siempre comía pizza.', solution: 'a) Llovió = det regnet i går (avgrenset). Llovía = det regnet (pågående, bakgrunn).\nb) Comí = Jeg spiste (en gang). Comía = Jeg pleide å spise (vane).' },
          { title: 'Kombinert bruk', problem: 'Fyll inn: Mientras yo ___ (estudiar), mi hermano ___ (llegar) a casa.', solution: '**estudiaba** (imperfecto - pågående) ... **llegó** (perfecto - avbrytende handling). Mientras yo estudiaba, mi hermano llegó a casa.' },
        ],
        exercises: [
          { diff: 'lett', task: 'Velg perfecto eller imperfecto:', subs: [
            { t: 'Ayer ___ (llover).', s: 'llovió (perfecto - avgrenset)' },
            { t: 'Siempre ___ (jugar) al fútbol de niño.', s: 'jugaba (imperfecto - vane)' },
            { t: 'La semana pasada ___ (ir) al médico.', s: 'fui (perfecto - avgrenset)' },
            { t: 'Cada verano ___ (visitar) a mis abuelos.', s: 'visitaba (imperfecto - vane)' }
          ]},
          { diff: 'medium', task: 'Fyll inn riktig fortidsform:', subs: [
            { t: 'Cuando ___ (ser) niño, ___ (vivir) en Sevilla.', s: 'era, vivía' },
            { t: 'Ayer ___ (hacer) buen tiempo y ___ (ir) a la playa.', s: 'hizo, fui/fuimos' },
            { t: 'Mientras ___ (comer), ___ (sonar) el teléfono.', s: 'comía, sonó' },
            { t: 'El año pasado ___ (viajar) a México.', s: 'viajé/viajamos' }
          ]},
          { diff: 'medium', task: 'Oversett med riktig fortidsform:', subs: [
            { t: 'Jeg pleide å spille gitar.', s: 'Tocaba la guitarra. (imperfecto)' },
            { t: 'I går kjøpte jeg en bok.', s: 'Ayer compré un libro. (perfecto)' },
            { t: 'Det var kaldt og det snødde.', s: 'Hacía frío y nevaba. (imperfecto)' },
            { t: 'Plutselig ringte telefonen.', s: 'De repente sonó el teléfono. (perfecto)' }
          ]},
          { diff: 'vanskelig', task: 'Fullfør historien med riktig form:', subs: [
            { t: '___ (ser) las ocho de la mañana. El sol ___ (brillar).', s: 'Eran, brillaba (imperfecto - bakgrunn)' },
            { t: 'María ___ (salir) de casa y ___ (ir) al trabajo.', s: 'salió, fue (perfecto - handling)' },
            { t: 'Mientras ___ (caminar), ___ (ver) a un amigo.', s: 'caminaba (imperf.), vio (perf.)' },
            { t: 'Los dos ___ (hablar) un rato y luego ___ (despedirse).', s: 'hablaron, se despidieron (perfecto)' }
          ]},
        ],
        tip: '**Huskeregel:** Tenk på imperfecto som et **videokamera** (filmer pågående scene) og perfecto som et **fotokamera** (tar bilde av en enkelt hendelse).',
        note: '**Oppsummering: Perfecto vs. Imperfecto**\n\n- **Perfecto:** Avsluttede handlinger, konkrete hendelser, ayer/la semana pasada\n- **Imperfecto:** Vaner, beskrivelser, bakgrunn, siempre/mientras\n- **Kombinert:** Imperfecto = bakgrunn, Perfecto = handling\n- **Nøkkelspørsmål:** Er handlingen avgrenset eller pågående?'
      },
      { n: '1.4', title: 'Narrar en el pasado', subtitle: 'Fortelle historier i fortid', desc: 'Kombiner fortidsformene for å fortelle historier og beskrive hendelser.',
        goals: ['fortelle sammenhengende historier', 'bruke begge fortidsformer naturlig'],
        defTitle: 'Narrativ teknikk i fortid',
        defContent: `**Å fortelle i fortid** krever at du kombinerer perfecto (handlinger) og imperfecto (bakgrunn) naturlig.\n\n**Connectors (bindeord):**\n| Spansk | Norsk |\n|--------|-------|\n| primero | først |\n| luego/después | deretter |\n| finalmente | til slutt |\n| mientras tanto | i mellomtiden |\n| de repente | plutselig |\n| entonces | da/så |\n| al final | til slutt |`,
        intro: 'Å fortelle en god historie på spansk krever at du mestrer samspillet mellom fortidsformene. I dette kapittelet lærer du å kombinere **imperfecto** (bakgrunn og beskrivelser) med **perfecto** (hendelser og handlinger), og å bruke **connectors** for å skape flyt.',
        texts: [
          '## Struktur i en fortelling\n\n1. **Innledning (imperfecto):** Sett scenen - tid, sted, personer, vær\n2. **Utvikling (perfecto + imperfecto):** Hva skjedde? Bakgrunn + handlinger\n3. **Vendepunkt (perfecto):** Noe uventet skjer\n4. **Avslutning (perfecto):** Resultatet\n\n*Era un día de verano. Hacía mucho calor y el cielo estaba azul. De repente, empezó a llover...*',
          '## Tidsuttrykk i fortelling\n\nFor å skape sammenheng i fortellingen:\n- **Rekkefølge:** primero, luego, después, finalmente\n- **Samtidighet:** mientras, mientras tanto, al mismo tiempo\n- **Overraskelse:** de repente, de pronto, inesperadamente\n- **Avslutning:** al final, por fin, en conclusión'
        ],
        examples: [
          { title: 'En kort fortelling', problem: 'Les og identifiser perfecto (P) og imperfecto (I):\n\"Era sábado. Hacía sol. María caminaba por el parque cuando vio a un perro. El perro estaba solo y tenía hambre. María le dio comida.\"', solution: 'Era (I), Hacía (I), caminaba (I) - bakgrunn\nvio (P) - handling\nestaba (I), tenía (I) - beskrivelse\ndio (P) - handling' },
          { title: 'Bygg en fortelling', problem: 'Lag setninger med disse elementene:\n1. Det var natt / det regnet\n2. Juan gikk hjem\n3. Han hørte en lyd', solution: '1. **Era** de noche y **llovía**. (imperfecto - bakgrunn)\n2. Juan **caminaba** hacia su casa. (imperfecto - pågående)\n3. De repente, **oyó** un ruido extraño. (perfecto - hendelse)' },
        ],
        exercises: [
          { diff: 'lett', task: 'Sett inn riktig connector:', subs: [
            { t: '___ fui al supermercado. (først)', s: 'Primero' },
            { t: '___ preparé la cena. (deretter)', s: 'Luego/Después' },
            { t: '___ sonó el teléfono. (plutselig)', s: 'De repente' },
            { t: '___ me acosté. (til slutt)', s: 'Finalmente' }
          ]},
          { diff: 'medium', task: 'Velg perfecto eller imperfecto:', subs: [
            { t: '___ (ser) las tres de la tarde. (bakgrunn)', s: 'Eran' },
            { t: 'Los niños ___ (jugar) en el jardín. (pågående)', s: 'jugaban' },
            { t: 'De repente, ___ (empezar) a llover. (hendelse)', s: 'empezó' },
            { t: 'Todos ___ (entrar) en la casa. (handling)', s: 'entraron' }
          ]},
          { diff: 'medium', task: 'Ordne setningene til en fortelling:', subs: [
            { t: 'a) De repente, vio un gato en la calle.', s: '3. (vendepunkt)' },
            { t: 'b) Era una mañana fría de invierno.', s: '1. (innledning - bakgrunn)' },
            { t: 'c) Lo llevó a casa y le dio leche.', s: '4. (avslutning)' },
            { t: 'd) Ana caminaba al trabajo como siempre.', s: '2. (utvikling - pågående)' }
          ]},
          { diff: 'vanskelig', task: 'Skriv en kort fortelling (3-4 setninger) med:', subs: [
            { t: 'Bakgrunn: sommer, sol, strand', s: 'Era verano. Hacía mucho sol y estábamos en la playa.' },
            { t: 'Pågående: svømme, leke', s: 'Los niños nadaban y jugaban en el agua.' },
            { t: 'Hendelse: se en delfin', s: 'De repente, vimos un delfín cerca de la orilla.' },
            { t: 'Avslutning: ta bilde, gå hjem', s: 'Sacamos fotos y finalmente volvimos a casa muy contentos.' }
          ]},
        ],
        tip: '**Skrivetips:** Start alltid med å sette scenen med imperfecto. Beskriv tid, sted, vær og hva som pågikk. Så kan du introdusere hendelser med perfecto.',
        note: '**Oppsummering: Narrar en el pasado**\n\n- **Imperfecto:** Bakgrunn, beskrivelser, pågående handlinger\n- **Perfecto:** Konkrete hendelser, handlinger som driver historien fremover\n- **Connectors:** primero, luego, de repente, finalmente\n- **Struktur:** Innledning → Utvikling → Vendepunkt → Avslutning'
      },
    ]
  },
  2: {
    title: 'EL SUBJUNTIVO',
    subs: [
      { n: '2.1', title: 'Introducción al subjuntivo', subtitle: 'Hva er konjunktiv?', desc: 'Forstå hva konjunktiv er og når den brukes i spansk.',
        goals: ['forstå konjunktiv som begrep', 'danne presens konjunktiv'],
        defTitle: 'El subjuntivo (konjunktiv)',
        defContent: `**Subjuntivo** er en verbmodus som uttrykker subjektivitet: ønsker, følelser, tvil og usikkerhet.\n\n**Presens subjuntivo - dannelse:**\n| | -AR (hablar) | -ER (comer) | -IR (vivir) |\n|---|---|---|---|\n| yo | hable | coma | viva |\n| tú | hables | comas | vivas |\n| él | hable | coma | viva |\n| nosotros | hablemos | comamos | vivamos |\n| ellos | hablen | coman | vivan |\n\n**Huskeregel:** -AR verb får -E endelser, -ER/-IR verb får -A endelser.`,
        intro: 'Konjunktiv (el subjuntivo) er en verbmodus som ikke finnes på norsk, og som er en av de største utfordringene for norsktalende som lærer spansk. Mens **indikativ** uttrykker fakta og sikkerhet, uttrykker **subjuntivo** ønsker, følelser, tvil og usikkerhet.',
        texts: [
          '## WEIRDO-regelen\n\nEn huskeregel for når subjuntivo brukes:\n\n- **W**ishes (ønsker): *Quiero que vengas.*\n- **E**motions (følelser): *Me alegra que estés aquí.*\n- **I**mpersonal expressions: *Es importante que estudies.*\n- **R**ecommendations: *Te recomiendo que vayas.*\n- **D**oubt/Denial: *Dudo que sea verdad.*\n- **O**jalá: *Ojalá que llueva.*',
          '## Uregelmessige verb i presens subjuntivo\n\n| Verb | Subjuntivo |\n|------|------------|\n| ser | sea, seas, sea, seamos, sean |\n| estar | esté, estés, esté, estemos, estén |\n| ir | vaya, vayas, vaya, vayamos, vayan |\n| haber | haya, hayas, haya, hayamos, hayan |\n| saber | sepa, sepas, sepa, sepamos, sepan |\n| dar | dé, des, dé, demos, den |'
        ],
        examples: [
          { title: 'Dannelse av subjuntivo', problem: 'Dann presens subjuntivo:\na) hablar (yo)\nb) comer (tú)\nc) vivir (él)', solution: 'a) habl**e** (-AR → -E endelser)\nb) com**as** (-ER → -A endelser)\nc) viv**a** (-IR → -A endelser)' },
          { title: 'Subjuntivo i setning', problem: 'Oversett: Jeg vil at du skal komme.', solution: '**Quiero que vengas.** (querer que + subjuntivo)' },
        ],
        exercises: [
          { diff: 'lett', task: 'Dann presens subjuntivo:', subs: [
            { t: 'hablar (yo)', s: 'hable' }, { t: 'comer (tú)', s: 'comas' },
            { t: 'vivir (ella)', s: 'viva' }, { t: 'estudiar (nosotros)', s: 'estudiemos' }
          ]},
          { diff: 'lett', task: 'Fyll inn riktig uregelmessig subjuntivo:', subs: [
            { t: 'Es importante que tú ___ (ser) puntual.', s: 'seas' },
            { t: 'Quiero que él ___ (ir) al médico.', s: 'vaya' },
            { t: 'Espero que nosotros ___ (estar) bien.', s: 'estemos' },
            { t: 'Es necesario que yo ___ (saber) la verdad.', s: 'sepa' }
          ]},
          { diff: 'medium', task: 'Velg indikativ eller subjuntivo:', subs: [
            { t: 'Creo que María ___ (estar) en casa. (sikkerhet)', s: 'está (indikativ)' },
            { t: 'Espero que María ___ (estar) en casa. (ønske)', s: 'esté (subjuntivo)' },
            { t: 'Sé que tú ___ (hablar) español. (fakta)', s: 'hablas (indikativ)' },
            { t: 'Quiero que tú ___ (hablar) español. (ønske)', s: 'hables (subjuntivo)' }
          ]},
          { diff: 'vanskelig', task: 'Oversett med subjuntivo:', subs: [
            { t: 'Jeg vil at du skal studere mer.', s: 'Quiero que estudies más.' },
            { t: 'Det er viktig at vi kommer i tide.', s: 'Es importante que lleguemos a tiempo.' },
            { t: 'Forhåpentligvis er det fint vær.', s: 'Ojalá (que) haga buen tiempo.' },
            { t: 'Jeg tviler på at han vet svaret.', s: 'Dudo que sepa la respuesta.' }
          ]},
        ],
        tip: '**Huskeregel for dannelse:** Ta yo-formen i presens indikativ, fjern -o, og legg til subjuntivo-endelsene. F.eks.: tengo → teng- → tenga, tengas, tenga...',
        note: '**Oppsummering: El subjuntivo**\n\n- **Modus for subjektivitet** - ønsker, følelser, tvil\n- **-AR verb:** -e, -es, -e, -emos, -en\n- **-ER/-IR verb:** -a, -as, -a, -amos, -an\n- **WEIRDO:** Wishes, Emotions, Impersonal, Recommendations, Doubt, Ojalá\n- **Uregelmessige:** sea, vaya, sepa, haya, esté, dé'
      },
      { n: '2.2', title: 'Subjuntivo con emociones y deseos', subtitle: 'Konjunktiv med følelser og ønsker', desc: 'Bruk konjunktiv med uttrykk for følelser, ønsker og vilje.',
        goals: ['uttrykke ønsker med konjunktiv', 'reagere følelsesmessig med konjunktiv'],
        defTitle: 'Subjuntivo med følelser og ønsker',
        defContent: `Subjuntivo brukes i bisetningen når hovedsetningen uttrykker **følelser** eller **ønsker**.\n\n**Ønsker:** querer que, desear que, esperar que, preferir que\n**Følelser:** alegrarse de que, sentir que, tener miedo de que, molestar que, sorprender que\n**Vilje:** pedir que, rogar que, exigir que, prohibir que\n\n**Struktur:** Hovedsetning (indikativ) + **que** + Bisetning (subjuntivo)`,
        intro: 'Når du uttrykker **ønsker, følelser eller vilje** overfor noen andre, bruker du subjuntivo i bisetningen. Legg merke til at subjuntivo bare brukes når subjektet i hovedsetningen og bisetningen er **forskjellige**.',
        texts: [
          '## Ønskeverb + que + subjuntivo\n\n- *Quiero **que** vengas.* (Jeg vil at du skal komme.)\n- *Espero **que** estés bien.* (Jeg håper du har det bra.)\n- *Deseo **que** seas feliz.* (Jeg ønsker at du er lykkelig.)\n- *Prefiero **que** estudiemos juntos.* (Jeg foretrekker at vi studerer sammen.)\n\n**NB:** Når subjektet er det samme, bruk infinitiv: *Quiero **ir**.* (Jeg vil gå.)',
          '## Følelsesverb + que + subjuntivo\n\n- *Me alegra que estés aquí.* (Jeg er glad for at du er her.)\n- *Siento que no puedas venir.* (Jeg er lei for at du ikke kan komme.)\n- *Me molesta que hablen tan alto.* (Det irriterer meg at de snakker så høyt.)\n- *Me sorprende que no lo sepas.* (Det overrasker meg at du ikke vet det.)'
        ],
        examples: [
          { title: 'Ønske vs. fakta', problem: 'Fyll inn:\na) Quiero que tú ___ (venir). (ønske)\nb) Sé que tú ___ (venir). (fakta)', solution: 'a) Quiero que tú **vengas**. (subjuntivo - ønske)\nb) Sé que tú **vienes**. (indikativ - fakta)' },
          { title: 'Følelsesuttrykk', problem: 'Oversett: Jeg er glad for at dere er her.', solution: '**Me alegra que estéis/estén aquí.** (alegrarse de que + subjuntivo)' },
        ],
        exercises: [
          { diff: 'lett', task: 'Fyll inn subjuntivo:', subs: [
            { t: 'Quiero que tú ___ (estudiar).', s: 'estudies' },
            { t: 'Espero que ella ___ (llegar) pronto.', s: 'llegue' },
            { t: 'Deseo que vosotros ___ (ser) felices.', s: 'seáis' },
            { t: 'Prefiero que nosotros ___ (comer) en casa.', s: 'comamos' }
          ]},
          { diff: 'medium', task: 'Velg infinitiv eller subjuntivo:', subs: [
            { t: 'Quiero ___ (ir) al cine. (samme subjekt)', s: 'ir (infinitiv)' },
            { t: 'Quiero que tú ___ (ir) al cine. (ulikt subjekt)', s: 'vayas (subjuntivo)' },
            { t: 'Esperamos ___ (terminar) pronto. (samme subjekt)', s: 'terminar (infinitiv)' },
            { t: 'Esperamos que ellos ___ (terminar). (ulikt subjekt)', s: 'terminen (subjuntivo)' }
          ]},
          { diff: 'medium', task: 'Uttrykk følelser med subjuntivo:', subs: [
            { t: 'Me alegra que / tú / estar aquí', s: 'Me alegra que estés aquí.' },
            { t: 'Siento que / ella / no poder venir', s: 'Siento que no pueda venir.' },
            { t: 'Me molesta que / ellos / llegar tarde', s: 'Me molesta que lleguen tarde.' },
            { t: 'Me sorprende que / tú / no saber', s: 'Me sorprende que no sepas.' }
          ]},
          { diff: 'vanskelig', task: 'Oversett til spansk:', subs: [
            { t: 'Jeg håper at du har det bra.', s: 'Espero que estés bien.' },
            { t: 'Min mor vil at jeg skal studere medisin.', s: 'Mi madre quiere que estudie medicina.' },
            { t: 'Det irriterer meg at de ikke lytter.', s: 'Me molesta que no escuchen.' },
            { t: 'Vi er glade for at dere kan komme.', s: 'Nos alegramos de que podáis/puedan venir.' }
          ]},
        ],
        tip: '**Viktig forskjell:** Samme subjekt → infinitiv. Ulikt subjekt → que + subjuntivo.\n*Quiero ir.* (Jeg vil gå.) vs. *Quiero que vayas.* (Jeg vil at du skal gå.)',
        note: '**Oppsummering: Subjuntivo med følelser/ønsker**\n\n- **Ønsker:** querer/esperar/desear/preferir + que + subjuntivo\n- **Følelser:** alegrarse/sentir/molestar/sorprender + que + subjuntivo\n- **Regel:** Ulikt subjekt → subjuntivo. Samme subjekt → infinitiv\n- **Struktur:** Hovedverb + que + subjuntivo'
      },
      { n: '2.3', title: 'Subjuntivo con expresiones impersonales', subtitle: 'Konjunktiv med upersonlige uttrykk', desc: 'Bruk konjunktiv etter upersonlige uttrykk som es importante que.',
        goals: ['bruke upersonlige uttrykk med konjunktiv', 'skille mellom sikkerhet og usikkerhet'],
        defTitle: 'Upersonlige uttrykk + subjuntivo',
        defContent: `Upersonlige uttrykk som uttrykker **nødvendighet, mulighet eller vurdering** tar subjuntivo:\n\n| Uttrykk | Norsk | Modus |\n|---------|-------|-------|\n| Es importante que | Det er viktig at | Subjuntivo |\n| Es necesario que | Det er nødvendig at | Subjuntivo |\n| Es posible que | Det er mulig at | Subjuntivo |\n| Es probable que | Det er sannsynlig at | Subjuntivo |\n| Es mejor que | Det er bedre at | Subjuntivo |\n| Es una lástima que | Det er synd at | Subjuntivo |\n| Es cierto que | Det er sikkert at | **Indikativ** |\n| Es evidente que | Det er tydelig at | **Indikativ** |`,
        intro: 'Mange **upersonlige uttrykk** (es + adjektiv + que) følges av subjuntivo. Hovedregelen er at uttrykk som viser **vurdering, nødvendighet, mulighet eller følelse** tar subjuntivo, mens uttrykk som viser **sikkerhet** tar indikativ.',
        texts: [
          '## Subjuntivo vs. Indikativ\n\n**Subjuntivo** (usikkerhet/vurdering):\n- *Es posible que llueva.* (Det er mulig at det regner.)\n- *Es importante que estudies.* (Det er viktig at du studerer.)\n\n**Indikativ** (sikkerhet/fakta):\n- *Es cierto que llueve.* (Det er sikkert at det regner.)\n- *Es evidente que estudia mucho.* (Det er tydelig at hun studerer mye.)',
          '## Negasjon endrer modus\n\nNår et \"sikkerhetsuttrykk\" negeres, tar det subjuntivo:\n- *Es cierto que viene.* → *No es cierto que **venga**.*\n- *Es verdad que sabe.* → *No es verdad que **sepa**.*\n- *Es evidente que trabaja.* → *No es evidente que **trabaje**.*'
        ],
        examples: [
          { title: 'Upersonlige uttrykk', problem: 'Fyll inn:\na) Es importante que nosotros ___ (estudiar).\nb) Es cierto que María ___ (hablar) tres idiomas.', solution: 'a) Es importante que nosotros **estudiemos**. (subjuntivo - vurdering)\nb) Es cierto que María **habla** tres idiomas. (indikativ - sikkerhet)' },
          { title: 'Negasjon', problem: 'Endre til negativ form:\nEs verdad que Juan sabe la respuesta.', solution: '**No es verdad que Juan sepa la respuesta.** (negasjon → subjuntivo)' },
        ],
        exercises: [
          { diff: 'lett', task: 'Fyll inn subjuntivo:', subs: [
            { t: 'Es importante que tú ___ (llegar) a tiempo.', s: 'llegues' },
            { t: 'Es necesario que nosotros ___ (hablar) español.', s: 'hablemos' },
            { t: 'Es posible que ___ (llover) mañana.', s: 'llueva' },
            { t: 'Es mejor que ella ___ (ir) al médico.', s: 'vaya' }
          ]},
          { diff: 'medium', task: 'Velg subjuntivo eller indikativ:', subs: [
            { t: 'Es cierto que ellos ___ (vivir) en Madrid.', s: 'viven (indikativ - sikkerhet)' },
            { t: 'Es probable que ellos ___ (vivir) en Madrid.', s: 'vivan (subjuntivo - mulighet)' },
            { t: 'Es evidente que ___ (hacer) calor.', s: 'hace (indikativ - sikkerhet)' },
            { t: 'Es posible que ___ (hacer) calor.', s: 'haga (subjuntivo - mulighet)' }
          ]},
          { diff: 'medium', task: 'Endre til negativ form (bruk subjuntivo):', subs: [
            { t: 'Es verdad que Juan habla chino.', s: 'No es verdad que Juan hable chino.' },
            { t: 'Es seguro que vienen mañana.', s: 'No es seguro que vengan mañana.' },
            { t: 'Es cierto que sabe la respuesta.', s: 'No es cierto que sepa la respuesta.' },
            { t: 'Es evidente que trabaja mucho.', s: 'No es evidente que trabaje mucho.' }
          ]},
          { diff: 'vanskelig', task: 'Oversett til spansk:', subs: [
            { t: 'Det er viktig at vi lærer spansk.', s: 'Es importante que aprendamos español.' },
            { t: 'Det er mulig at de kommer i morgen.', s: 'Es posible que vengan mañana.' },
            { t: 'Det er ikke sikkert at han vet det.', s: 'No es seguro que lo sepa.' },
            { t: 'Det er synd at du ikke kan komme.', s: 'Es una lástima que no puedas venir.' }
          ]},
        ],
        tip: '**Hovedregel:** Sikkerhet → indikativ. Alt annet (mulighet, nødvendighet, vurdering, følelse) → subjuntivo. Ved negasjon av sikkerhet → subjuntivo.',
        note: '**Oppsummering: Upersonlige uttrykk**\n\n- **Subjuntivo:** es importante/necesario/posible/probable/mejor/una lástima que\n- **Indikativ:** es cierto/seguro/evidente/verdad que\n- **Negasjon:** No es cierto/seguro que → subjuntivo\n- **Nøkkel:** Vurdering/usikkerhet → subjuntivo, Fakta → indikativ'
      },
      { n: '2.4', title: 'Subjuntivo en la práctica', subtitle: 'Konjunktiv i praksis', desc: 'Øv på å bruke konjunktiv i realistiske situasjoner.',
        goals: ['bruke konjunktiv naturlig', 'skrive tekster med konjunktiv'],
        defTitle: 'Konjunktiv i daglig bruk',
        defContent: `I dagligspråket brukes subjuntivo i mange vanlige situasjoner:\n\n**Råd:** *Te aconsejo que estudies más.* (Jeg råder deg til å studere mer.)\n**Forbud:** *No quiero que salgas solo.* (Jeg vil ikke at du går ut alene.)\n**Håp:** *Ojalá que todo salga bien.* (Forhåpentligvis går alt bra.)\n**Formelle brev:** *Le ruego que me envíe...* (Jeg ber Dem om å sende meg...)`,
        intro: 'Nå som du kjenner reglene for subjuntivo, er det på tide å bruke det i **praksis**. I dette kapittelet ser vi på hvordan subjuntivo brukes i hverdagssituasjoner: gi råd, skrive e-post, uttrykke håp og gi kommandoer.',
        texts: [
          '## Subjuntivo i e-post og brev\n\n**Formelt:**\n- *Le ruego que me envíe la información.* (Jeg ber Dem sende informasjonen.)\n- *Es necesario que confirme su reserva.* (Det er nødvendig at De bekrefter reservasjonen.)\n\n**Uformelt:**\n- *Espero que estés bien.* (Håper du har det bra.)\n- *Quiero que sepas que...* (Jeg vil at du skal vite at...)',
          '## Subjuntivo med råd og anbefalinger\n\n| Uttrykk | Eksempel |\n|---------|----------|\n| Te aconsejo que | Te aconsejo que estudies más. |\n| Te recomiendo que | Te recomiendo que vayas al médico. |\n| Te sugiero que | Te sugiero que hables con ella. |\n| Es mejor que | Es mejor que descanses. |'
        ],
        examples: [
          { title: 'Gi råd', problem: 'Gi råd til en venn som er stresset:\na) Anbefal å slappe av\nb) Foreslå å snakke med noen', solution: 'a) *Te recomiendo que **descanses** más.* (Jeg anbefaler at du slapper av mer.)\nb) *Te sugiero que **hables** con alguien.* (Jeg foreslår at du snakker med noen.)' },
          { title: 'Formell e-post', problem: 'Skriv en setning der du ber om informasjon formelt.', solution: '*Le ruego que me **envíe** más información sobre el curso.* (Jeg ber Dem sende meg mer informasjon om kurset.)' },
        ],
        exercises: [
          { diff: 'lett', task: 'Gi råd med subjuntivo:', subs: [
            { t: 'Te aconsejo que ___ (dormir) más.', s: 'duermas' },
            { t: 'Te recomiendo que ___ (comer) más fruta.', s: 'comas' },
            { t: 'Es mejor que ___ (ir) al médico.', s: 'vayas' },
            { t: 'Te sugiero que ___ (hablar) con tu profesor.', s: 'hables' }
          ]},
          { diff: 'medium', task: 'Skriv setninger med ojalá:', subs: [
            { t: 'Ojalá que ___ (hacer) buen tiempo mañana.', s: 'haga' },
            { t: 'Ojalá que ___ (aprobar) el examen.', s: 'apruebe/aprobemos' },
            { t: 'Ojalá que mis padres ___ (poder) venir.', s: 'puedan' },
            { t: 'Ojalá que ___ (encontrar) trabajo pronto.', s: 'encuentre/encuentres' }
          ]},
          { diff: 'medium', task: 'Fullfør den formelle e-posten:', subs: [
            { t: 'Estimado señor: Le ruego que me ___ (enviar) el catálogo.', s: 'envíe' },
            { t: 'Es necesario que yo ___ (recibir) la información.', s: 'reciba' },
            { t: 'Espero que ___ (poder) ayudarme.', s: 'pueda' },
            { t: 'Le pido que me ___ (confirmar) la reserva.', s: 'confirme' }
          ]},
          { diff: 'vanskelig', task: 'Oversett til spansk med subjuntivo:', subs: [
            { t: 'Jeg anbefaler at du reiser til Barcelona.', s: 'Te recomiendo que viajes a Barcelona.' },
            { t: 'Forhåpentligvis kan vi ses snart.', s: 'Ojalá que podamos vernos pronto.' },
            { t: 'Læreren krever at vi leverer oppgaven.', s: 'El profesor exige que entreguemos la tarea.' },
            { t: 'Jeg ber om at De svarer så snart som mulig.', s: 'Le ruego que responda lo antes posible.' }
          ]},
        ],
        tip: '**Ojalá** kan brukes med eller uten \"que\": *Ojalá llueva* = *Ojalá que llueva*. Det uttrykker et sterkt ønske og tar ALLTID subjuntivo.',
        note: '**Oppsummering: Subjuntivo i praksis**\n\n- **Råd:** aconsejar/recomendar/sugerir + que + subjuntivo\n- **Håp:** ojalá (que) + subjuntivo\n- **Formelt:** rogar/pedir + que + subjuntivo\n- **E-post:** Le ruego que..., Es necesario que..., Espero que...'
      },
    ]
  },
  3: {
    title: 'CONDICIONAL Y FUTURO',
    subs: [
      { n: '3.1', title: 'El futuro simple', subtitle: 'Enkel fremtid', desc: 'Lær å uttrykke fremtiden med enkel fremtid.',
        goals: ['danne futuro simple', 'uttrykke fremtid og forutsigelser'],
        defTitle: 'Futuro simple (enkel fremtid)',
        defContent: `**Futuro simple** dannes ved å legge endelser til **hele infinitiven**.\n\n| Person | Endelse | hablar | comer | vivir |\n|--------|---------|--------|-------|-------|\n| yo | -é | hablaré | comeré | viviré |\n| tú | -ás | hablarás | comerás | vivirás |\n| él | -á | hablará | comerá | vivirá |\n| nosotros | -emos | hablaremos | comeremos | viviremos |\n| ellos | -án | hablarán | comerán | vivirán |\n\n**Uregelmessige stammer:**\ntener→tendr-, poner→pondr-, venir→vendr-, salir→saldr-, hacer→har-, decir→dir-, poder→podr-, saber→sabr-, querer→querr-`,
        intro: 'Det spanske **futuro simple** (enkel fremtid) brukes for å snakke om fremtiden, gjøre forutsigelser og uttrykke løfter. Det er enklere å danne enn mange andre spanske tidsformer fordi endelsene legges til hele infinitiven.',
        texts: [
          '## Bruksområder\n\n1. **Forutsigelser:** *Mañana lloverá.* (I morgen vil det regne.)\n2. **Løfter:** *Te llamaré esta noche.* (Jeg ringer deg i kveld.)\n3. **Sannsynlighet (nåtid):** *¿Qué hora será?* (Hva kan klokken være?)\n4. **Fremtidige planer:** *El próximo año estudiaré en España.* (Neste år skal jeg studere i Spania.)',
          '## Uregelmessige verb\n\nDisse verbene har uregelmessig stamme men samme endelser:\n\n| Infinitiv | Stamme | Eksempel (yo) |\n|-----------|--------|---------------|\n| tener | tendr- | tendré |\n| poner | pondr- | pondré |\n| venir | vendr- | vendré |\n| salir | saldr- | saldré |\n| hacer | har- | haré |\n| decir | dir- | diré |\n| poder | podr- | podré |\n| saber | sabr- | sabré |'
        ],
        examples: [
          { title: 'Regelmessige verb', problem: 'Dann futuro simple:\na) yo / hablar\nb) nosotros / comer\nc) ellos / vivir', solution: 'a) yo **hablaré**\nb) nosotros **comeremos**\nc) ellos **vivirán**' },
          { title: 'Uregelmessige verb', problem: 'Dann futuro:\na) yo / tener\nb) tú / poder\nc) ella / hacer', solution: 'a) yo **tendré** (tendr- + é)\nb) tú **podrás** (podr- + ás)\nc) ella **hará** (har- + á)' },
        ],
        exercises: [
          { diff: 'lett', task: 'Dann futuro simple:', subs: [
            { t: 'yo / trabajar', s: 'trabajaré' }, { t: 'tú / aprender', s: 'aprenderás' },
            { t: 'él / escribir', s: 'escribirá' }, { t: 'nosotros / viajar', s: 'viajaremos' }
          ]},
          { diff: 'lett', task: 'Fyll inn uregelmessig futuro:', subs: [
            { t: 'Mañana ___ (tener) un examen.', s: 'tendré' },
            { t: '¿___ (poder) venir tú?', s: 'Podrás' },
            { t: 'Ella ___ (hacer) la cena.', s: 'hará' },
            { t: 'Nosotros ___ (salir) temprano.', s: 'saldremos' }
          ]},
          { diff: 'medium', task: 'Oversett til spansk med futuro:', subs: [
            { t: 'I morgen skal jeg reise til Madrid.', s: 'Mañana viajaré a Madrid.' },
            { t: 'Vi vil ha eksamen neste uke.', s: 'Tendremos un examen la semana que viene.' },
            { t: 'Tror du det vil regne?', s: '¿Crees que lloverá?' },
            { t: 'De vil ikke kunne komme.', s: 'No podrán venir.' }
          ]},
          { diff: 'vanskelig', task: 'Skriv om fremtidsplanene dine:', subs: [
            { t: 'Hva skal du gjøre i sommer?', s: 'F.eks.: Este verano viajaré a España y visitaré Barcelona.' },
            { t: 'Hva tror du vil skje i verden?', s: 'F.eks.: Creo que la tecnología cambiará nuestras vidas.' },
            { t: 'Gi et løfte til en venn.', s: 'F.eks.: Te llamaré mañana sin falta.' },
            { t: 'Gjett hva klokken er (sannsynlighet).', s: 'F.eks.: Serán las tres de la tarde.' }
          ]},
        ],
        tip: '**Huskeregel:** Alle endelsene i futuro har aksent unntatt nosotros (-emos). Stammene for uregelmessige verb er de samme i futuro og condicional!',
        note: '**Oppsummering: Futuro simple**\n\n- **Dannelse:** Infinitiv + -é, -ás, -á, -emos, -án\n- **Uregelmessige stammer:** tendr-, pondr-, vendr-, saldr-, har-, dir-, podr-, sabr-, querr-\n- **Bruk:** Forutsigelser, løfter, sannsynlighet, planer'
      },
      { n: '3.2', title: 'El condicional', subtitle: 'Vilkårsformen', desc: 'Lær å uttrykke hypotetiske situasjoner og høflige forespørsler.',
        goals: ['danne kondisjonalis', 'uttrykke ønsker og høflighet'],
        defTitle: 'El condicional (kondisjonalis)',
        defContent: `**Condicional** dannes som futuro: endelser legges til **infinitiven** (eller uregelmessig stamme).\n\n| Person | Endelse | hablar | comer | vivir |\n|--------|---------|--------|-------|-------|\n| yo | -ía | hablaría | comería | viviría |\n| tú | -ías | hablarías | comerías | vivirías |\n| él | -ía | hablaría | comería | viviría |\n| nosotros | -íamos | hablaríamos | comeríamos | viviríamos |\n| ellos | -ían | hablarían | comerían | vivirían |\n\n**Samme uregelmessige stammer som futuro:** tendr-, pondr-, har-, dir-, etc.`,
        intro: 'El **condicional** (kondisjonalis) tilsvarer norsk \"ville\" eller \"skulle\". Det brukes for å uttrykke **hypotetiske situasjoner**, **høflighet**, **råd** og **ønsker**.',
        texts: [
          '## Bruksområder\n\n1. **Høflighet:** *¿Podría ayudarme?* (Kunne De hjelpe meg?)\n2. **Ønsker:** *Me gustaría viajar a Perú.* (Jeg ville gjerne reise til Peru.)\n3. **Hypotetisk:** *En tu lugar, estudiaría más.* (I ditt sted ville jeg studert mer.)\n4. **Råd:** *Yo que tú, iría al médico.* (Hvis jeg var deg, ville jeg gått til legen.)',
          '## Condicional for høflighet\n\nCondicional gjør forespørsler høfligere:\n\n| Direkte | Høflig |\n|---------|--------|\n| Quiero un café. | **Querría** un café. |\n| ¿Puedes ayudarme? | ¿**Podrías** ayudarme? |\n| ¿Tiene una mesa? | ¿**Tendría** una mesa? |\n| Debo irme. | **Debería** irme. |'
        ],
        examples: [
          { title: 'Dannelse', problem: 'Dann condicional:\na) yo / hablar\nb) tú / tener\nc) ella / hacer', solution: 'a) yo hablar**ía**\nb) tú tendr**ías** (uregelmessig stamme)\nc) ella har**ía** (uregelmessig stamme)' },
          { title: 'Høflighet', problem: 'Gjør setningene høfligere med condicional:\na) Quiero un vaso de agua.\nb) ¿Puedes repetir?', solution: 'a) **Querría** un vaso de agua. / **Me gustaría** un vaso de agua.\nb) ¿**Podrías** repetir?' },
        ],
        exercises: [
          { diff: 'lett', task: 'Dann condicional:', subs: [
            { t: 'yo / hablar', s: 'hablaría' }, { t: 'tú / comer', s: 'comerías' },
            { t: 'ella / vivir', s: 'viviría' }, { t: 'nosotros / trabajar', s: 'trabajaríamos' }
          ]},
          { diff: 'lett', task: 'Fyll inn uregelmessig condicional:', subs: [
            { t: 'Yo ___ (tener) más tiempo libre.', s: 'tendría' },
            { t: '¿___ (poder) ayudarme?', s: 'Podría/Podrías' },
            { t: 'Ella ___ (hacer) una fiesta.', s: 'haría' },
            { t: 'Nosotros ___ (salir) a las ocho.', s: 'saldríamos' }
          ]},
          { diff: 'medium', task: 'Gjør setningene høfligere:', subs: [
            { t: 'Quiero un café con leche.', s: 'Querría/Me gustaría un café con leche.' },
            { t: '¿Puedes cerrar la ventana?', s: '¿Podrías cerrar la ventana?' },
            { t: '¿Tienes un bolígrafo?', s: '¿Tendrías un bolígrafo?' },
            { t: 'Debes estudiar más.', s: 'Deberías estudiar más.' }
          ]},
          { diff: 'vanskelig', task: 'Oversett med condicional:', subs: [
            { t: 'Jeg ville gjerne reise til Spania.', s: 'Me gustaría viajar a España.' },
            { t: 'Kunne du hjelpe meg?', s: '¿Podrías ayudarme?' },
            { t: 'I ditt sted ville jeg studert mer.', s: 'En tu lugar, estudiaría más.' },
            { t: 'Vi ville gjerne bestille et bord.', s: 'Nos gustaría reservar una mesa.' }
          ]},
        ],
        tip: '**Huskeregel:** Condicional = futuro-stammer + imperfecto-endelser (-ía, -ías, -ía, -íamos, -ían). Hvis du kan futuro, kan du condicional!',
        note: '**Oppsummering: El condicional**\n\n- **Dannelse:** Infinitiv (eller uregelm. stamme) + -ía, -ías, -ía, -íamos, -ían\n- **Samme uregelmessige stammer som futuro**\n- **Bruk:** Høflighet, ønsker, hypotetisk, råd\n- **Me gustaría** = Jeg ville gjerne'
      },
      { n: '3.3', title: 'Oraciones condicionales', subtitle: 'Betingelsessetninger', desc: 'Lær å lage betingelsessetninger med si (hvis).',
        goals: ['lage betingelsessetninger', 'bruke imperfecto subjuntivo'],
        defTitle: 'Betingelsessetninger (oraciones condicionales)',
        defContent: `**Type 1 - Reell betingelse (mulig):**\nSi + presens indikativ, futuro/presens\n*Si llueve, me quedo en casa.* (Hvis det regner, blir jeg hjemme.)\n\n**Type 2 - Ureal betingelse (hypotetisk):**\nSi + imperfecto de subjuntivo, condicional\n*Si tuviera dinero, viajaría a Japón.* (Hvis jeg hadde penger, ville jeg reise til Japan.)\n\n**Imperfecto de subjuntivo (-ara/-iera):**\n| hablar | comer | vivir |\n|--------|-------|-------|\n| hablara | comiera | viviera |\n| hablaras | comieras | vivieras |\n| hablara | comiera | viviera |\n| habláramos | comiéramos | viviéramos |\n| hablaran | comieran | vivieran |`,
        intro: 'Betingelsessetninger med **si** (hvis) er viktige for å uttrykke betingelser og konsekvenser. Spansk skiller mellom **reelle betingelser** (type 1) og **ureelle/hypotetiske betingelser** (type 2).',
        texts: [
          '## Type 1: Reell betingelse\n\nBrukes når betingelsen er mulig eller sannsynlig.\n\n**Formel:** Si + presens, presens/futuro\n\n- *Si tengo tiempo, voy al cine.* (Hvis jeg har tid, går jeg på kino.)\n- *Si estudias mucho, aprobarás el examen.* (Hvis du studerer mye, vil du bestå eksamen.)\n- *Si llueve, no salimos.* (Hvis det regner, går vi ikke ut.)',
          '## Type 2: Ureal betingelse\n\nBrukes når betingelsen er usannsynlig eller hypotetisk.\n\n**Formel:** Si + imperfecto subjuntivo, condicional\n\n- *Si tuviera dinero, compraría un coche.* (Hvis jeg hadde penger, ville jeg kjøpt en bil.)\n- *Si pudiera volar, iría a la luna.* (Hvis jeg kunne fly, ville jeg dratt til månen.)\n\n**Merk:** Si tar ALDRI presens subjuntivo!'
        ],
        examples: [
          { title: 'Type 1 vs. Type 2', problem: 'Forklar forskjellen:\na) Si tengo dinero, compro un libro.\nb) Si tuviera dinero, compraría un coche.', solution: 'a) Type 1: Reell - Hvis jeg har penger (og det er mulig), kjøper jeg en bok.\nb) Type 2: Ureal - Hvis jeg hadde penger (men det har jeg ikke), ville jeg kjøpt en bil.' },
          { title: 'Imperfecto subjuntivo', problem: 'Dann imperfecto subjuntivo:\na) tener (yo)\nb) poder (tú)\nc) ser (ella)', solution: 'a) tuvi**era** (tener → tuvieron → tuviera)\nb) pudi**eras** (poder → pudieron → pudieras)\nc) fu**era** (ser → fueron → fuera)' },
        ],
        exercises: [
          { diff: 'lett', task: 'Fullfør type 1 betingelser:', subs: [
            { t: 'Si llueve, ___ (quedarse) en casa.', s: 'me quedo' },
            { t: 'Si tengo tiempo, ___ (ir) al gimnasio.', s: 'voy/iré' },
            { t: 'Si estudias, ___ (aprobar) el examen.', s: 'aprobarás' },
            { t: 'Si hace sol, ___ (ir) a la playa.', s: 'vamos/iremos' }
          ]},
          { diff: 'medium', task: 'Dann imperfecto subjuntivo:', subs: [
            { t: 'tener (yo)', s: 'tuviera' }, { t: 'poder (tú)', s: 'pudieras' },
            { t: 'ser (ella)', s: 'fuera' }, { t: 'saber (nosotros)', s: 'supiéramos' }
          ]},
          { diff: 'medium', task: 'Fullfør type 2 betingelser:', subs: [
            { t: 'Si ___ (tener) dinero, viajaría a Japón.', s: 'tuviera' },
            { t: 'Si ___ (poder) volar, iría a la luna.', s: 'pudiera' },
            { t: 'Si ___ (ser) presidente, cambiaría las leyes.', s: 'fuera' },
            { t: 'Si ___ (hablar) chino, trabajaría en China.', s: 'hablara' }
          ]},
          { diff: 'vanskelig', task: 'Oversett med riktig type:', subs: [
            { t: 'Hvis det regner, tar jeg paraply. (reell)', s: 'Si llueve, llevo paraguas.' },
            { t: 'Hvis jeg var rik, ville jeg kjøpt et hus. (ureal)', s: 'Si fuera rico/a, compraría una casa.' },
            { t: 'Hvis du studerer, vil du bestå. (reell)', s: 'Si estudias, aprobarás.' },
            { t: 'Hvis jeg kunne spansk, ville jeg reist til Peru. (ureal)', s: 'Si supiera español, viajaría a Perú.' }
          ]},
        ],
        tip: '**Dannelse av imperfecto subjuntivo:** Ta 3. person flertall preteritum (ellos-formen), fjern -ron, legg til -ra, -ras, -ra, -ramos, -ran. F.eks.: tuvieron → tuvie- → tuviera.',
        note: '**Oppsummering: Betingelsessetninger**\n\n- **Type 1 (reell):** Si + presens, presens/futuro\n- **Type 2 (ureal):** Si + imperfecto subjuntivo, condicional\n- **Imperfecto subjuntivo:** 3. pl. pret. - ron + ra-endelser\n- **ALDRI:** Si + presens subjuntivo'
      },
      { n: '3.4', title: 'Expresar planes y posibilidades', subtitle: 'Uttrykke planer og muligheter', desc: 'Kombiner fremtid, vilkår og betingelser for å snakke om planer.',
        goals: ['uttrykke planer og muligheter', 'kombinere tidsformer'],
        defTitle: 'Uttrykke planer og muligheter',
        defContent: `**Planer:**\n- *Voy a + infinitiv:* Voy a estudiar. (Jeg skal studere.)\n- *Pienso + infinitiv:* Pienso viajar. (Jeg tenker å reise.)\n- *Tengo la intención de:* Tengo la intención de aprender. (Jeg har tenkt å lære.)\n\n**Muligheter:**\n- *Quizás/Tal vez + subjuntivo:* Quizás llueva. (Kanskje det regner.)\n- *A lo mejor + indikativ:* A lo mejor llueve. (Kanskje det regner.)\n- *Probablemente + subjuntivo:* Probablemente venga. (Han kommer sannsynligvis.)`,
        intro: 'I dette kapittelet kombinerer vi alle måtene å snakke om fremtiden på: **futuro simple**, **ir a + infinitiv**, **condicional** og uttrykk for **mulighet og sannsynlighet**.',
        texts: [
          '## Planer med ulike uttrykk\n\n| Uttrykk | Eksempel | Grad av sikkerhet |\n|---------|----------|-------------------|\n| Voy a + inf | Voy a estudiar | Bestemt plan |\n| Futuro simple | Estudiaré | Plan/forutsigelse |\n| Pienso + inf | Pienso estudiar | Intensjon |\n| Me gustaría + inf | Me gustaría estudiar | Ønske |\n| Quizás + subj | Quizás estudie | Usikkert |',
          '## Sannsynlighetsuttrykk\n\n**Med subjuntivo:**\n- *Quizás/Tal vez venga.* (Kanskje han kommer.)\n- *Es posible que llueva.* (Det er mulig at det regner.)\n- *Probablemente sea verdad.* (Det er sannsynligvis sant.)\n\n**Med indikativ:**\n- *A lo mejor viene.* (Kanskje han kommer.)\n- *Seguramente llueve.* (Det regner sikkert.)\n\n**NB:** *A lo mejor* tar alltid indikativ!'
        ],
        examples: [
          { title: 'Planer', problem: 'Uttrykk planen \"studere i Spania\" med ulike former:\na) Bestemt plan\nb) Intensjon\nc) Ønske', solution: 'a) **Voy a estudiar en España.** (bestemt)\nb) **Pienso estudiar en España.** (intensjon)\nc) **Me gustaría estudiar en España.** (ønske)' },
          { title: 'Muligheter', problem: 'Uttrykk \"kanskje det regner\" på to måter.', solution: '**Quizás llueva.** (subjuntivo)\n**A lo mejor llueve.** (indikativ)' },
        ],
        exercises: [
          { diff: 'lett', task: 'Fyll inn med ir a + infinitiv:', subs: [
            { t: 'Mañana yo ___ (ir a / estudiar).', s: 'voy a estudiar' },
            { t: 'Este verano nosotros ___ (ir a / viajar).', s: 'vamos a viajar' },
            { t: 'Ella ___ (ir a / cocinar) la cena.', s: 'va a cocinar' },
            { t: '¿Tú ___ (ir a / venir) a la fiesta?', s: 'vas a venir' }
          ]},
          { diff: 'medium', task: 'Velg riktig modus etter sannsynlighetsuttrykk:', subs: [
            { t: 'Quizás ___ (llover) mañana.', s: 'llueva (subjuntivo)' },
            { t: 'A lo mejor ___ (llover) mañana.', s: 'llueve (indikativ)' },
            { t: 'Es posible que ___ (venir) Juan.', s: 'venga (subjuntivo)' },
            { t: 'Probablemente ___ (ser) verdad.', s: 'sea (subjuntivo)' }
          ]},
          { diff: 'medium', task: 'Uttrykk planene dine med ulike former:', subs: [
            { t: 'Studere spansk (bestemt plan)', s: 'Voy a estudiar español.' },
            { t: 'Reise til Mexico (intensjon)', s: 'Pienso viajar a México.' },
            { t: 'Lære å surfe (ønske)', s: 'Me gustaría aprender a surfear.' },
            { t: 'Flytte til utlandet (usikkert)', s: 'Quizás me mude al extranjero.' }
          ]},
          { diff: 'vanskelig', task: 'Oversett med riktig uttrykk:', subs: [
            { t: 'Neste år skal jeg studere medisin. (bestemt)', s: 'El año que viene voy a estudiar medicina.' },
            { t: 'Kanskje vi kan dra på lørdag. (usikkert)', s: 'Quizás podamos ir el sábado.' },
            { t: 'Jeg ville gjerne bo i Barcelona. (ønske)', s: 'Me gustaría vivir en Barcelona.' },
            { t: 'De kommer sannsynligvis i morgen. (sannsynlig)', s: 'Probablemente vengan mañana.' }
          ]},
        ],
        tip: '**Husk:** *A lo mejor* er det eneste sannsynlighetsuttrykket som tar indikativ. Alle de andre (quizás, tal vez, probablemente, es posible que) tar subjuntivo.',
        note: '**Oppsummering: Planer og muligheter**\n\n- **Bestemt plan:** ir a + infinitiv\n- **Forutsigelse:** futuro simple\n- **Intensjon:** pienso/tengo la intención de + infinitiv\n- **Ønske:** me gustaría + infinitiv\n- **Mulighet:** quizás/tal vez + subjuntivo, a lo mejor + indikativ\n- **Samlet oversikt:** Grad av sikkerhet avgjør formen'
      },
    ]
  }
};

function generateChapterContent(level, mainNum, subNum, data) {
  const id = `spansk-${level}-${mainNum}-${subNum}`;
  const lines = [];

  // Content blocks
  lines.push(`    // ========== Introduksjon ==========`);
  lines.push(`    { id: '${id}-intro', type: 'text', content: \`## ${data.title}\n\n${data.intro}\` },`);

  lines.push(`    { id: '${id}-def-1', type: 'definition', title: '${data.defTitle}', content: \`${data.defContent}\` },`);

  // Text blocks
  data.texts.forEach((t, i) => {
    lines.push(`    { id: '${id}-text-${i+1}', type: 'text', content: \`${t}\` },`);
  });

  // Example 1 + Exercise 1
  if (data.examples[0]) {
    const ex = data.examples[0];
    lines.push(`    { id: '${id}-example-1', type: 'example', title: 'Eksempel: ${ex.title}', problem: \`${ex.problem}\`, solution: \`${ex.solution}\` },`);
  }

  // Exercise blocks
  data.exercises.forEach((ex, i) => {
    const subTasksStr = ex.subs.map((s, j) => {
      const label = String.fromCharCode(97 + j); // a, b, c, d
      return `        { label: '${label}', task: '${s.t.replace(/'/g, "\\'")}', solution: '${s.s.replace(/'/g, "\\'")}', answer: '${s.s.replace(/'/g, "\\'")}' }`;
    }).join(',\n');

    lines.push(`    {
      id: '${id}-ex-block-${i+1}',
      type: 'exercise',
      exercise: {
        id: '${id}-ex-${i+1}',
        number: '${i+1}',
        type: 'classic',
        difficulty: '${ex.diff}',
        task: '${ex.task.replace(/'/g, "\\'")}',
        subTasks: [
${subTasksStr},
        ],
        solution: '${ex.subs.map((s, j) => String.fromCharCode(97+j) + ') ' + s.s).join(', ').replace(/'/g, "\\'")}',
        hints: ['Se teorien over for hjelp', 'Sjekk eksemplene'],
      },
    },`);

    // Add example 2 after exercise 2
    if (i === 1 && data.examples[1]) {
      const ex2 = data.examples[1];
      lines.push(`    { id: '${id}-example-2', type: 'example', title: 'Eksempel: ${ex2.title}', problem: \`${ex2.problem}\`, solution: \`${ex2.solution}\` },`);
    }
  });

  // Tip
  lines.push(`    { id: '${id}-tip-1', type: 'tip', content: \`${data.tip}\` },`);

  // Note/Summary
  lines.push(`    { id: '${id}-note-1', type: 'note', title: 'Oppsummering', content: \`${data.note}\` },`);

  return lines.join('\n');
}

function generateFile(level, chapterNums, chapters, fileLabel) {
  const lang = `spansk-${level}`;
  let content = `/* eslint-disable */
// @ts-nocheck
/**
 * Spansk nivå ${level} - Kapittel ${fileLabel} (Detaljerte underkapitler)
 *
 * Dekker:
${chapterNums.map(n => ` * - Kapittel ${n}: ${chapters[n].title} (${n}.1-${n}.4)`).join('\n')}
 */

import type { TextbookChapter } from '@/lib/types/textbook';
`;

  const allChapterNames = [];

  for (const mainNum of chapterNums) {
    const ch = chapters[mainNum];
    content += `\n// ============================================================================\n// KAPITTEL ${mainNum}: ${ch.title}\n// ============================================================================\n`;

    ch.subs.forEach((sub, idx) => {
      const subNum = idx + 1;
      const constName = `CHAPTER_SPANSK_${level}_${mainNum}_${subNum}`;
      allChapterNames.push(constName);

      content += `\n// ----------------------------------------------------------------------------\n// ${sub.n} ${sub.title}\n// ----------------------------------------------------------------------------\n\nexport const ${constName}: TextbookChapter = {
  id: '${lang}-${mainNum}-${subNum}',
  courseId: '${lang}',
  chapterNumber: '${sub.n}',
  title: '${sub.title}',
  subtitle: '${sub.subtitle}',
  description: '${sub.desc}',
  estimatedMinutes: 45,
  competenceGoals: [${sub.goals.map(g => `'${g}'`).join(', ')}],
  content: [
${generateChapterContent(level, mainNum, subNum, sub)}
  ],
  exercises: [],
};\n`;
    });
  }

  // Export array
  const exportName = `SPANSK_${level}_CHAPTERS_${fileLabel.replace('-', '_')}`;
  content += `\n// ============================================================================\n// EKSPORT\n// ============================================================================\n\nexport const ${exportName}: TextbookChapter[] = [\n${allChapterNames.map(n => `  ${n},`).join('\n')}\n];\n`;

  return content;
}

// Generate Spansk 2 kap1-3
const s2_1_3 = generateFile(2, [1, 2, 3], spansk2Chapters, '1-3');
fs.writeFileSync(path.join(outDir, 'textbook-content-spansk-2-kap1-3.ts'), s2_1_3);
console.log(`Written: textbook-content-spansk-2-kap1-3.ts (${s2_1_3.split('\n').length} lines)`);
