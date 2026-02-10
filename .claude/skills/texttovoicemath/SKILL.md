# Text-to-Voice Math: Matematisk uttale-konvertering

Denne skillen definerer regler for hvordan LaTeX-matematikk skal konverteres til naturlig norsk tale for lydbok-generering. Brukes sammen med `/texttovoice` for matematiske kapitler.

## Bruk

```
/texttovoicemath
```

Vis gjeldende konverteringsregler. Disse reglene skal alltid brukes i `stripMarkdown`-funksjonen i lydbok-skript for matematiske kapitler.

## Konverteringsregler

### Likhetstegn og relasjoner

| LaTeX | Feil uttale | Riktig uttale |
|-------|-------------|---------------|
| `=` | "ilime" | "er lik" |
| `\neq` | — | "er ikke lik" |
| `\approx` | — | "er omtrent lik" |
| `\leq` | — | "er mindre enn eller lik" |
| `\geq` | — | "er større enn eller lik" |
| `<` | — | "er mindre enn" |
| `>` | — | "er større enn" |

### Potenser

| LaTeX | Feil uttale | Riktig uttale |
|-------|-------------|---------------|
| `x^2` | "x kvadrert" | "x i andre" |
| `x^3` | "x kubikk" | "x i tredje" |
| `x^4` | — | "x i fjerde" |
| `x^5` | — | "x i femte" |
| `x^n` | — | "x opphøyd i n" |
| `x^{n+m}` | — | "x opphøyd i n pluss m" |
| `x^{1+2}` | — | "x opphøyd i 1 pluss 2" |

### Parenteser

| LaTeX/tekst | Feil uttale | Riktig uttale |
|-------------|-------------|---------------|
| `(` | (ingenting) | "startparentes" |
| `)` | (ingenting) | "sluttparentes" |
| `\left(` | (ingenting) | "startparentes" |
| `\right)` | (ingenting) | "sluttparentes" |

### Implisitt multiplikasjon

Når et tall står rett foran en parentes uten gangetegn, skal gangetegnet leses opp.

| LaTeX/tekst | Feil uttale | Riktig uttale |
|-------------|-------------|---------------|
| `3(x+2)` | "tre x pluss to" | "tre ganger startparentes x pluss 2 sluttparentes" |
| `2(x-3)` | "to x minus tre" | "to ganger startparentes x minus 3 sluttparentes" |
| `-3(2x-2)` | "minus tre to x minus to" | "minus 3 ganger startparentes 2 x minus 2 sluttparentes" |
| `x(x+3)` | — | "x ganger startparentes x pluss 3 sluttparentes" |

### Operasjoner

| LaTeX | Feil uttale | Riktig uttale |
|-------|-------------|---------------|
| `\cdot` | "ganger" | "ganger" (OK) |
| `\times` | — | "ganger" |
| `\frac{a}{b}` | — | "a delt på b" |
| `\sqrt{x}` | — | "kvadratroten av x" |
| `\pm` | — | "pluss minus" |

## Implementasjon

Disse reglene implementeres i `stripMarkdown`-funksjonen som brukes i lydbok-skript. Her er kjernekonverteringene:

```typescript
function mathToNorwegian(text: string): string {
  return text
    // Likhetstegn og relasjoner
    .replace(/\\approx/g, ' er omtrent lik ')
    .replace(/\\neq/g, ' er ikke lik ')
    .replace(/\\leq/g, ' er mindre enn eller lik ')
    .replace(/\\geq/g, ' er større enn eller lik ')
    .replace(/</g, ' er mindre enn ')
    .replace(/>/g, ' er større enn ')
    .replace(/=/g, ' er lik ')

    // Potenser: x^{uttrykk} og x^n
    .replace(/\^{(\d+)\s*\+\s*(\d+)}/g, ' opphøyd i $1 pluss $2')
    .replace(/\^{([^}]+)}/g, (_, exp) => {
      if (exp === '2') return ' i andre';
      if (exp === '3') return ' i tredje';
      if (exp === '4') return ' i fjerde';
      if (exp === '5') return ' i femte';
      return ` opphøyd i ${exp}`;
    })
    .replace(/\^2(?!\d)/g, ' i andre')
    .replace(/\^3(?!\d)/g, ' i tredje')
    .replace(/\^4(?!\d)/g, ' i fjerde')
    .replace(/\^5(?!\d)/g, ' i femte')
    .replace(/\^(\d+)/g, ' opphøyd i $1')
    .replace(/\^([a-z])/g, ' opphøyd i $1')

    // Implisitt multiplikasjon: tall/bokstav etterfulgt av parentes
    .replace(/(\d)\(/g, '$1 ganger startparentes ')
    .replace(/([a-zA-Z])\(/g, '$1 ganger startparentes ')

    // Parenteser
    .replace(/\\left\(/g, 'startparentes ')
    .replace(/\\right\)/g, ' sluttparentes')
    .replace(/\(/g, 'startparentes ')
    .replace(/\)/g, ' sluttparentes')

    // Brøk
    .replace(/\\frac{([^}]+)}{([^}]+)}/g, '$1 delt på $2')

    // Kvadratrot
    .replace(/\\sqrt{([^}]+)}/g, 'kvadratroten av $1')

    // Andre LaTeX-kommandoer
    .replace(/\\cdot/g, ' ganger ')
    .replace(/\\times/g, ' ganger ')
    .replace(/\\pm/g, ' pluss minus ')

    // Rydd opp
    .replace(/\s{2,}/g, ' ')
    .trim();
}
```

## Merknader

- Disse reglene gjelder kun for **lydbok-generering**, ikke for visuell visning
- Reglene brukes i `stripMarkdown`-funksjonen i skriptene som genererer lydbok-tekst
- Listen utvides etter hvert som nye problemer oppdages
- Test alltid med ElevenLabs etter endringer for å verifisere at uttalen er naturlig
