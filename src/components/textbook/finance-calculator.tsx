'use client';

import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calculator, TrendingUp } from 'lucide-react';
import { LatexRenderer } from './latex-renderer';

export type FinanceCalculatorType =
  | 'compound-interest'
  | 'effective-interest'
  | 'present-value'
  | 'annuity-pv'
  | 'annuity-fv'
  | 'loan-payment'
  | 'npv'
  | 'continuous';

export interface FinanceCalculatorProps {
  calculatorType: FinanceCalculatorType;
  title?: string;
  description?: string;
  defaults?: Record<string, number>;
}

const NOK = new Intl.NumberFormat('nb-NO', {
  style: 'currency',
  currency: 'NOK',
  maximumFractionDigits: 0,
});

const PCT = (x: number) =>
  new Intl.NumberFormat('nb-NO', { maximumFractionDigits: 3 }).format(x * 100) + ' %';

const NUM = (x: number, digits = 2) =>
  new Intl.NumberFormat('nb-NO', { maximumFractionDigits: digits }).format(x);

function NumberField({
  label,
  value,
  onChange,
  suffix,
  step = 1,
  min,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  suffix?: string;
  step?: number;
  min?: number;
}) {
  return (
    <div className="space-y-1">
      <Label className="text-sm font-medium">{label}</Label>
      <div className="relative">
        <Input
          type="number"
          value={Number.isFinite(value) ? value : 0}
          onChange={(e) => {
            const v = parseFloat(e.target.value);
            onChange(Number.isFinite(v) ? v : 0);
          }}
          step={step}
          min={min}
          className="pr-12"
        />
        {suffix && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground pointer-events-none">
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
}

function ResultRow({ label, value, latex }: { label: string; value: string; latex?: string }) {
  return (
    <div className="flex items-baseline justify-between gap-3 py-1.5 border-t first:border-t-0">
      <div className="text-sm text-muted-foreground">
        {latex ? <LatexRenderer content={latex} /> : label}
      </div>
      <div className="font-mono text-base font-semibold tabular-nums">{value}</div>
    </div>
  );
}

// =========================================================================
// Compound interest: K_t = K_0 (1 + r/m)^(mt)
// =========================================================================
function CompoundInterestCalc({ defaults }: { defaults?: Record<string, number> }) {
  const [K0, setK0] = useState(defaults?.K0 ?? 100000);
  const [r, setR] = useState(defaults?.r ?? 5);
  const [t, setT] = useState(defaults?.t ?? 10);
  const [m, setM] = useState(defaults?.m ?? 1);

  const { Kt, rEff, growth } = useMemo(() => {
    const rDec = r / 100;
    const Kt = K0 * Math.pow(1 + rDec / m, m * t);
    const rEff = Math.pow(1 + rDec / m, m) - 1;
    const growth = Kt - K0;
    return { Kt, rEff, growth };
  }, [K0, r, t, m]);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <NumberField label="Startkapital K₀" value={K0} onChange={setK0} suffix="kr" step={1000} min={0} />
        <NumberField label="Nominell rente r" value={r} onChange={setR} suffix="%" step={0.1} />
        <NumberField label="Tid t" value={t} onChange={setT} suffix="år" step={1} min={0} />
        <NumberField label="Kapitaliseringer/år m" value={m} onChange={setM} step={1} min={1} />
      </div>
      <div className="rounded-lg bg-muted/40 px-4 py-3">
        <ResultRow latex="$K_t = K_0 \cdot (1 + r/m)^{mt}$" label="Sluttkapital" value={NOK.format(Kt)} />
        <ResultRow label="Avkastning" value={NOK.format(growth)} />
        <ResultRow latex="$r_{\text{eff}} = (1 + r/m)^m - 1$" label="Effektiv rente" value={PCT(rEff)} />
      </div>
    </div>
  );
}

// =========================================================================
// Effective interest: r_eff = (1 + r/m)^m - 1
// =========================================================================
function EffectiveInterestCalc({ defaults }: { defaults?: Record<string, number> }) {
  const [r, setR] = useState(defaults?.r ?? 6);
  const [m, setM] = useState(defaults?.m ?? 12);

  const { rEff, perPeriod } = useMemo(() => {
    const rDec = r / 100;
    const rEff = Math.pow(1 + rDec / m, m) - 1;
    const perPeriod = rDec / m;
    return { rEff, perPeriod };
  }, [r, m]);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <NumberField label="Nominell rente r" value={r} onChange={setR} suffix="%" step={0.1} />
        <NumberField label="Kapitaliseringer/år m" value={m} onChange={setM} step={1} min={1} />
      </div>
      <div className="rounded-lg bg-muted/40 px-4 py-3">
        <ResultRow label="Periode-rente" value={PCT(perPeriod)} />
        <ResultRow latex="$r_{\text{eff}} = (1 + r/m)^m - 1$" label="Effektiv årlig rente" value={PCT(rEff)} />
        <ResultRow label="Forskjell fra nominell" value={PCT(rEff - r / 100)} />
      </div>
    </div>
  );
}

// =========================================================================
// Present value: NV = K_t / (1+r)^t
// =========================================================================
function PresentValueCalc({ defaults }: { defaults?: Record<string, number> }) {
  const [Kt, setKt] = useState(defaults?.Kt ?? 1000000);
  const [r, setR] = useState(defaults?.r ?? 4);
  const [t, setT] = useState(defaults?.t ?? 10);

  const { NV, diskonteringsfaktor } = useMemo(() => {
    const rDec = r / 100;
    const faktor = Math.pow(1 + rDec, -t);
    const NV = Kt * faktor;
    return { NV, diskonteringsfaktor: faktor };
  }, [Kt, r, t]);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-3">
        <NumberField label="Fremtidig beløp Kₜ" value={Kt} onChange={setKt} suffix="kr" step={1000} min={0} />
        <NumberField label="Diskonteringsrente r" value={r} onChange={setR} suffix="%" step={0.1} />
        <NumberField label="Tid t" value={t} onChange={setT} suffix="år" step={1} min={0} />
      </div>
      <div className="rounded-lg bg-muted/40 px-4 py-3">
        <ResultRow latex="$NV = K_t / (1+r)^t$" label="Nåverdi" value={NOK.format(NV)} />
        <ResultRow label="Diskonteringsfaktor" value={NUM(diskonteringsfaktor, 4)} />
        <ResultRow label="Verdireduksjon" value={NOK.format(Kt - NV)} />
      </div>
    </div>
  );
}

// =========================================================================
// Annuity present value: A = a * (1 - (1+r)^-n) / r
// =========================================================================
function AnnuityPVCalc({ defaults }: { defaults?: Record<string, number> }) {
  const [a, setA] = useState(defaults?.a ?? 50000);
  const [r, setR] = useState(defaults?.r ?? 5);
  const [n, setN] = useState(defaults?.n ?? 20);

  const { NV, faktor } = useMemo(() => {
    const rDec = r / 100;
    const faktor = rDec === 0 ? n : (1 - Math.pow(1 + rDec, -n)) / rDec;
    const NV = a * faktor;
    return { NV, faktor };
  }, [a, r, n]);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-3">
        <NumberField label="Årlig beløp a" value={a} onChange={setA} suffix="kr" step={1000} min={0} />
        <NumberField label="Rente r" value={r} onChange={setR} suffix="%" step={0.1} />
        <NumberField label="Antall år n" value={n} onChange={setN} step={1} min={1} />
      </div>
      <div className="rounded-lg bg-muted/40 px-4 py-3">
        <ResultRow latex="$A = a \cdot \frac{1 - (1+r)^{-n}}{r}$" label="Nåverdi av annuitet" value={NOK.format(NV)} />
        <ResultRow label="Annuitetsfaktor" value={NUM(faktor, 4)} />
        <ResultRow label="Sum av utbetalinger" value={NOK.format(a * n)} />
        <ResultRow label="Diskonteringseffekt" value={NOK.format(a * n - NV)} />
      </div>
    </div>
  );
}

// =========================================================================
// Annuity future value: S = a * ((1+r)^n - 1) / r
// =========================================================================
function AnnuityFVCalc({ defaults }: { defaults?: Record<string, number> }) {
  const [a, setA] = useState(defaults?.a ?? 24000);
  const [r, setR] = useState(defaults?.r ?? 5);
  const [n, setN] = useState(defaults?.n ?? 25);

  const { S, faktor, renteEffekt } = useMemo(() => {
    const rDec = r / 100;
    const faktor = rDec === 0 ? n : (Math.pow(1 + rDec, n) - 1) / rDec;
    const S = a * faktor;
    const renteEffekt = S - a * n;
    return { S, faktor, renteEffekt };
  }, [a, r, n]);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-3">
        <NumberField label="Årlig innskudd a" value={a} onChange={setA} suffix="kr" step={1000} min={0} />
        <NumberField label="Rente r" value={r} onChange={setR} suffix="%" step={0.1} />
        <NumberField label="Antall år n" value={n} onChange={setN} step={1} min={1} />
      </div>
      <div className="rounded-lg bg-muted/40 px-4 py-3">
        <ResultRow latex="$S_n = a \cdot \frac{(1+r)^n - 1}{r}$" label="Sluttverdi" value={NOK.format(S)} />
        <ResultRow label="Sluttverdifaktor" value={NUM(faktor, 4)} />
        <ResultRow label="Sum av innskudd" value={NOK.format(a * n)} />
        <ResultRow label="Renteinntekter" value={NOK.format(renteEffekt)} />
      </div>
    </div>
  );
}

// =========================================================================
// Loan payment: a = K_0 * r / (1 - (1+r)^-n)
// =========================================================================
function LoanPaymentCalc({ defaults }: { defaults?: Record<string, number> }) {
  const [K0, setK0] = useState(defaults?.K0 ?? 3000000);
  const [r, setR] = useState(defaults?.r ?? 5);
  const [n, setN] = useState(defaults?.n ?? 25);

  const { termin, total, renteUtgift, terminMnd } = useMemo(() => {
    const rDec = r / 100;
    const faktor = rDec === 0 ? 1 / n : rDec / (1 - Math.pow(1 + rDec, -n));
    const termin = K0 * faktor;
    const total = termin * n;
    const renteUtgift = total - K0;

    // Månedlige beregninger
    const rMnd = rDec / 12;
    const nMnd = n * 12;
    const faktorMnd = rMnd === 0 ? 1 / nMnd : rMnd / (1 - Math.pow(1 + rMnd, -nMnd));
    const terminMnd = K0 * faktorMnd;
    return { termin, total, renteUtgift, terminMnd };
  }, [K0, r, n]);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-3">
        <NumberField label="Lånebeløp K₀" value={K0} onChange={setK0} suffix="kr" step={10000} min={0} />
        <NumberField label="Årsrente r" value={r} onChange={setR} suffix="%" step={0.1} />
        <NumberField label="Løpetid n" value={n} onChange={setN} suffix="år" step={1} min={1} />
      </div>
      <div className="rounded-lg bg-muted/40 px-4 py-3">
        <ResultRow latex="$a = K_0 \cdot \frac{r}{1-(1+r)^{-n}}$" label="Årlig terminbeløp" value={NOK.format(termin)} />
        <ResultRow label="Månedlig terminbeløp" value={NOK.format(terminMnd)} />
        <ResultRow label="Totalt tilbakebetalt" value={NOK.format(total)} />
        <ResultRow label="Total rentekostnad" value={NOK.format(renteUtgift)} />
      </div>
    </div>
  );
}

// =========================================================================
// NPV: NPV = -C_0 + sum(C_t / (1+r)^t)
// Inkluderer IRR-beregning via Newton-iterasjon
// =========================================================================
function NPVCalc({ defaults }: { defaults?: Record<string, number> }) {
  const [C0, setC0] = useState(defaults?.C0 ?? 500000);
  const [cashflowsStr, setCashflowsStr] = useState<string>(
    defaults?.cashflows
      ? String(defaults.cashflows)
      : '150000, 150000, 150000, 150000, 150000'
  );
  const [r, setR] = useState(defaults?.r ?? 8);

  const cashflows = useMemo(() => {
    return cashflowsStr
      .split(/[,\s;]+/)
      .map((s) => parseFloat(s.replace(',', '.')))
      .filter((v) => Number.isFinite(v));
  }, [cashflowsStr]);

  const { NPV, IRR } = useMemo(() => {
    const rDec = r / 100;
    let npv = -C0;
    for (let t = 0; t < cashflows.length; t++) {
      npv += cashflows[t] / Math.pow(1 + rDec, t + 1);
    }

    // IRR via Newton-Raphson
    let irr: number | null = null;
    let guess = 0.1;
    for (let iter = 0; iter < 100; iter++) {
      let f = -C0;
      let df = 0;
      for (let t = 0; t < cashflows.length; t++) {
        const tt = t + 1;
        f += cashflows[t] / Math.pow(1 + guess, tt);
        df += (-tt * cashflows[t]) / Math.pow(1 + guess, tt + 1);
      }
      if (Math.abs(f) < 0.01) {
        irr = guess;
        break;
      }
      if (df === 0) break;
      const next = guess - f / df;
      if (!Number.isFinite(next) || next < -0.99) break;
      guess = next;
    }

    return { NPV: npv, IRR: irr };
  }, [C0, cashflows, r]);

  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <NumberField label="Investering C₀ (år 0)" value={C0} onChange={setC0} suffix="kr" step={10000} min={0} />
        <NumberField label="Diskonteringsrente r" value={r} onChange={setR} suffix="%" step={0.1} />
      </div>
      <div className="space-y-1">
        <Label className="text-sm font-medium">Kontantstrømmer (år 1, 2, 3 ...)</Label>
        <Input
          type="text"
          value={cashflowsStr}
          onChange={(e) => setCashflowsStr(e.target.value)}
          placeholder="f.eks. 150000, 150000, 200000"
          className="font-mono"
        />
        <p className="text-xs text-muted-foreground">Skill med komma. Negative tall for utbetalinger.</p>
      </div>
      <div className="rounded-lg bg-muted/40 px-4 py-3">
        <ResultRow latex="$NPV = -C_0 + \sum_t C_t/(1+r)^t$" label="Netto nåverdi" value={NOK.format(NPV)} />
        <ResultRow
          label="Lønnsom?"
          value={NPV > 0 ? '✓ Ja' : NPV < 0 ? '✗ Nei' : '—'}
        />
        {IRR !== null && (
          <ResultRow latex="$IRR$" label="Internrente" value={PCT(IRR)} />
        )}
      </div>
    </div>
  );
}

// =========================================================================
// Continuous compounding: K_t = K_0 * e^(rt)
// =========================================================================
function ContinuousCalc({ defaults }: { defaults?: Record<string, number> }) {
  const [K0, setK0] = useState(defaults?.K0 ?? 100000);
  const [r, setR] = useState(defaults?.r ?? 5);
  const [t, setT] = useState(defaults?.t ?? 10);

  const { Kt, rEff, doblingstid } = useMemo(() => {
    const rDec = r / 100;
    const Kt = K0 * Math.exp(rDec * t);
    const rEff = Math.exp(rDec) - 1;
    const doblingstid = rDec === 0 ? Infinity : Math.log(2) / rDec;
    return { Kt, rEff, doblingstid };
  }, [K0, r, t]);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-3">
        <NumberField label="Startkapital K₀" value={K0} onChange={setK0} suffix="kr" step={1000} min={0} />
        <NumberField label="Rente r" value={r} onChange={setR} suffix="%" step={0.1} />
        <NumberField label="Tid t" value={t} onChange={setT} suffix="år" step={1} min={0} />
      </div>
      <div className="rounded-lg bg-muted/40 px-4 py-3">
        <ResultRow latex="$K_t = K_0 \cdot e^{rt}$" label="Sluttkapital" value={NOK.format(Kt)} />
        <ResultRow latex="$r_{\text{eff}} = e^r - 1$" label="Effektiv årlig rente" value={PCT(rEff)} />
        <ResultRow label="Doblingstid" value={Number.isFinite(doblingstid) ? `${NUM(doblingstid, 2)} år` : '—'} />
      </div>
    </div>
  );
}

// =========================================================================
// Main component
// =========================================================================
const CALCULATOR_TITLES: Record<FinanceCalculatorType, string> = {
  'compound-interest': 'Rentes-rente-kalkulator',
  'effective-interest': 'Effektiv rente-kalkulator',
  'present-value': 'Nåverdi-kalkulator',
  'annuity-pv': 'Annuitet — nåverdi',
  'annuity-fv': 'Annuitet — sluttverdi',
  'loan-payment': 'Lånekalkulator',
  'npv': 'NPV- og IRR-kalkulator',
  'continuous': 'Kontinuerlig forrentning',
};

export function FinanceCalculator({
  calculatorType,
  title,
  description,
  defaults,
}: FinanceCalculatorProps) {
  const displayTitle = title ?? CALCULATOR_TITLES[calculatorType];

  return (
    <Card className="my-6 border-l-4 border-l-emerald-500 bg-emerald-50/40 dark:bg-emerald-950/15">
      <CardHeader className="pb-3">
        <CardTitle className="text-base flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
          <Calculator className="h-5 w-5" />
          {displayTitle}
          <TrendingUp className="h-4 w-4 ml-auto text-emerald-600/50" />
        </CardTitle>
        {description && (
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        )}
      </CardHeader>
      <CardContent className="pt-0">
        {calculatorType === 'compound-interest' && <CompoundInterestCalc defaults={defaults} />}
        {calculatorType === 'effective-interest' && <EffectiveInterestCalc defaults={defaults} />}
        {calculatorType === 'present-value' && <PresentValueCalc defaults={defaults} />}
        {calculatorType === 'annuity-pv' && <AnnuityPVCalc defaults={defaults} />}
        {calculatorType === 'annuity-fv' && <AnnuityFVCalc defaults={defaults} />}
        {calculatorType === 'loan-payment' && <LoanPaymentCalc defaults={defaults} />}
        {calculatorType === 'npv' && <NPVCalc defaults={defaults} />}
        {calculatorType === 'continuous' && <ContinuousCalc defaults={defaults} />}
      </CardContent>
    </Card>
  );
}
