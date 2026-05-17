'use client';

import {
  Triangle406080StyleA,
  Triangle406080StyleB,
  Triangle406080StyleC,
} from '@/components/textbook/illustrations/triangle-illustrations';
import {
  GraphX2Minus9StyleA,
  GraphX2Minus9StyleB,
  GraphX2Minus9StyleC,
} from '@/components/textbook/illustrations/function-graph-illustrations';
import {
  RectangleAreaIllustration,
  ParallelogramAreaIllustration,
  TrapezoidAreaIllustration,
  CircleAreaIllustration,
} from '@/components/textbook/illustrations/area-illustrations';
import {
  PrismVolumeIllustration,
  CylinderVolumeIllustration,
  ConeVolumeIllustration,
  PyramidVolumeIllustration,
  SphereVolumeIllustration,
} from '@/components/textbook/illustrations/volume-illustrations';
import {
  LinearFunctionIllustration,
  ParallelLinesIllustration,
  IntersectingLinesIllustration,
} from '@/components/textbook/illustrations/linear-function-illustrations';
import {
  TrigRatiosIllustration,
  UnitCircleIllustration,
} from '@/components/textbook/illustrations/trigonometry-illustrations';
import {
  FractionCircleIllustration,
  FractionBarIllustration,
  PercentBarIllustration,
} from '@/components/textbook/illustrations/fraction-illustrations';
import {
  FirstQuadraticIdentityIllustration,
  SecondQuadraticIdentityIllustration,
  ThirdQuadraticIdentityIllustration,
} from '@/components/textbook/illustrations/quadratic-identities-illustrations';
import {
  SimilarTrianglesIllustration,
  CongruenceSSS,
  CongruenceSAS,
  CongruenceASA,
} from '@/components/textbook/illustrations/similarity-illustrations';
import {
  BoxPlotIllustration,
  HistogramIllustration,
  PieChartIllustration,
} from '@/components/textbook/illustrations/statistics-illustrations';
import {
  ExponentialGrowthIllustration,
  ExponentialDecayIllustration,
  LinearVsExponentialIllustration,
} from '@/components/textbook/illustrations/exponential-illustrations';
import {
  NumberLineInequalityIllustration,
  NumberLineIntervalsIllustration,
} from '@/components/textbook/illustrations/number-line-illustrations';
import {
  VectorBasicIllustration,
  VectorAdditionIllustration,
} from '@/components/textbook/illustrations/vector-illustrations';
import {
  TriangularNumbersIllustration,
  SquareNumbersIllustration,
  StaircaseNumbersIllustration,
} from '@/components/textbook/illustrations/pattern-illustrations';

function IllustrationCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div className="border rounded-lg p-4 bg-white max-w-md">
        {children}
      </div>
    </section>
  );
}

export default function IllustrasjonerTestPage() {
  return (
    <div className="max-w-4xl mx-auto p-8 space-y-16">
      <h1 className="text-2xl font-bold">Illustrasjonstest</h1>

      {/* Trekanter */}
      <div>
        <h2 className="text-xl font-bold mb-6">Trekant 40-60-80</h2>
        <div className="space-y-8">
          <IllustrationCard title="Stil A — Minimal">
            <Triangle406080StyleA className="w-full h-auto" />
          </IllustrationCard>
          <IllustrationCard title="Stil B — Akademisk (foretrukket)">
            <Triangle406080StyleB className="w-full h-auto" />
          </IllustrationCard>
          <IllustrationCard title="Stil C — Fylte vinkelsektorer">
            <Triangle406080StyleC className="w-full h-auto" />
          </IllustrationCard>
        </div>
      </div>

      <hr />

      {/* Funksjonsgrafer */}
      <div>
        <h2 className="text-xl font-bold mb-6">Graf: f(x) = x² − 9</h2>
        <div className="space-y-8">
          <IllustrationCard title="Stil A — Minimal">
            <GraphX2Minus9StyleA className="w-full h-auto" />
          </IllustrationCard>
          <IllustrationCard title="Stil B — Akademisk">
            <GraphX2Minus9StyleB className="w-full h-auto" />
          </IllustrationCard>
          <IllustrationCard title="Stil C — Annotert">
            <GraphX2Minus9StyleC className="w-full h-auto" />
          </IllustrationCard>
        </div>
      </div>

      <hr />

      {/* Areal */}
      <div>
        <h2 className="text-xl font-bold mb-6">Arealformler</h2>
        <div className="space-y-8">
          <IllustrationCard title="Rektangel">
            <RectangleAreaIllustration className="w-full h-auto" />
          </IllustrationCard>
          <IllustrationCard title="Parallellogram">
            <ParallelogramAreaIllustration className="w-full h-auto" />
          </IllustrationCard>
          <IllustrationCard title="Trapes">
            <TrapezoidAreaIllustration className="w-full h-auto" />
          </IllustrationCard>
          <IllustrationCard title="Sirkel">
            <CircleAreaIllustration className="w-full h-auto" />
          </IllustrationCard>
        </div>
      </div>

      <hr />

      {/* Volum */}
      <div>
        <h2 className="text-xl font-bold mb-6">Romfigurer og volum</h2>
        <div className="space-y-8">
          <IllustrationCard title="Prisme">
            <PrismVolumeIllustration className="w-full h-auto" />
          </IllustrationCard>
          <IllustrationCard title="Sylinder">
            <CylinderVolumeIllustration className="w-full h-auto" />
          </IllustrationCard>
          <IllustrationCard title="Kjegle">
            <ConeVolumeIllustration className="w-full h-auto" />
          </IllustrationCard>
          <IllustrationCard title="Pyramide">
            <PyramidVolumeIllustration className="w-full h-auto" />
          </IllustrationCard>
          <IllustrationCard title="Kule">
            <SphereVolumeIllustration className="w-full h-auto" />
          </IllustrationCard>
        </div>
      </div>

      <hr />

      {/* Lineære funksjoner */}
      <div>
        <h2 className="text-xl font-bold mb-6">Lineære funksjoner</h2>
        <div className="space-y-8">
          <IllustrationCard title="y = 2x + 1 med stigningstall-trekant">
            <LinearFunctionIllustration className="w-full h-auto" />
          </IllustrationCard>
          <IllustrationCard title="Parallelle linjer">
            <ParallelLinesIllustration className="w-full h-auto" />
          </IllustrationCard>
          <IllustrationCard title="Kryssende linjer (likningssett)">
            <IntersectingLinesIllustration className="w-full h-auto" />
          </IllustrationCard>
        </div>
      </div>

      <hr />

      {/* Trigonometri */}
      <div>
        <h2 className="text-xl font-bold mb-6">Trigonometri</h2>
        <div className="space-y-8">
          <IllustrationCard title="Trigonometriske forhold">
            <TrigRatiosIllustration className="w-full h-auto" />
          </IllustrationCard>
          <IllustrationCard title="Enhetssirkelen">
            <UnitCircleIllustration className="w-full h-auto" />
          </IllustrationCard>
        </div>
      </div>

      <hr />

      {/* Brøk og prosent */}
      <div>
        <h2 className="text-xl font-bold mb-6">Brøk og prosent</h2>
        <div className="space-y-8">
          <IllustrationCard title="Brøk-sirkel (3/4)">
            <FractionCircleIllustration className="w-full h-auto" />
          </IllustrationCard>
          <IllustrationCard title="Brøk-stolpe (3/5)">
            <FractionBarIllustration className="w-full h-auto" />
          </IllustrationCard>
          <IllustrationCard title="Prosent-stolpe (65 %)">
            <PercentBarIllustration className="w-full h-auto" />
          </IllustrationCard>
        </div>
      </div>

      <hr />

      {/* Kvadratsetningene */}
      <div>
        <h2 className="text-xl font-bold mb-6">Kvadratsetningene</h2>
        <div className="space-y-8">
          <IllustrationCard title="1. kvadratsetning: (a+b)²">
            <FirstQuadraticIdentityIllustration className="w-full h-auto" />
          </IllustrationCard>
          <IllustrationCard title="2. kvadratsetning: (a−b)²">
            <SecondQuadraticIdentityIllustration className="w-full h-auto" />
          </IllustrationCard>
          <IllustrationCard title="Konjugatsetningen: (a+b)(a−b)">
            <ThirdQuadraticIdentityIllustration className="w-full h-auto" />
          </IllustrationCard>
        </div>
      </div>

      <hr />

      {/* Formlikhet og kongruens */}
      <div>
        <h2 className="text-xl font-bold mb-6">Formlikhet og kongruens</h2>
        <div className="space-y-8">
          <IllustrationCard title="Formlike trekanter">
            <SimilarTrianglesIllustration className="w-full h-auto" />
          </IllustrationCard>
          <IllustrationCard title="Kongruens SSS">
            <CongruenceSSS className="w-full h-auto" />
          </IllustrationCard>
          <IllustrationCard title="Kongruens SAS">
            <CongruenceSAS className="w-full h-auto" />
          </IllustrationCard>
          <IllustrationCard title="Kongruens ASA">
            <CongruenceASA className="w-full h-auto" />
          </IllustrationCard>
        </div>
      </div>

      <hr />

      {/* Statistikk */}
      <div>
        <h2 className="text-xl font-bold mb-6">Statistikk</h2>
        <div className="space-y-8">
          <IllustrationCard title="Boksplott">
            <BoxPlotIllustration className="w-full h-auto" />
          </IllustrationCard>
          <IllustrationCard title="Histogram">
            <HistogramIllustration className="w-full h-auto" />
          </IllustrationCard>
          <IllustrationCard title="Sektordiagram">
            <PieChartIllustration className="w-full h-auto" />
          </IllustrationCard>
        </div>
      </div>

      <hr />

      {/* Eksponentialfunksjoner */}
      <div>
        <h2 className="text-xl font-bold mb-6">Eksponentialfunksjoner</h2>
        <div className="space-y-8">
          <IllustrationCard title="Eksponentiell vekst: f(x) = 2^x">
            <ExponentialGrowthIllustration className="w-full h-auto" />
          </IllustrationCard>
          <IllustrationCard title="Eksponentiell nedgang: f(x) = (1/2)^x">
            <ExponentialDecayIllustration className="w-full h-auto" />
          </IllustrationCard>
          <IllustrationCard title="Lineær vs. eksponentiell">
            <LinearVsExponentialIllustration className="w-full h-auto" />
          </IllustrationCard>
        </div>
      </div>

      <hr />

      {/* Tallinjer */}
      <div>
        <h2 className="text-xl font-bold mb-6">Tallinjer</h2>
        <div className="space-y-8">
          <IllustrationCard title="Ulikheter på tallinje">
            <NumberLineInequalityIllustration className="w-full h-auto" />
          </IllustrationCard>
          <IllustrationCard title="Intervall [a, b]">
            <NumberLineIntervalsIllustration className="w-full h-auto" />
          </IllustrationCard>
        </div>
      </div>

      <hr />

      {/* Vektorer */}
      <div>
        <h2 className="text-xl font-bold mb-6">Vektorer</h2>
        <div className="space-y-8">
          <IllustrationCard title="Vektor fra A til B">
            <VectorBasicIllustration className="w-full h-auto" />
          </IllustrationCard>
          <IllustrationCard title="Vektoraddisjon">
            <VectorAdditionIllustration className="w-full h-auto" />
          </IllustrationCard>
        </div>
      </div>

      <hr />

      {/* Figurtall */}
      <div>
        <h2 className="text-xl font-bold mb-6">Figurtall</h2>
        <div className="space-y-8">
          <IllustrationCard title="Trekanttall T1–T4">
            <TriangularNumbersIllustration className="w-full h-auto" />
          </IllustrationCard>
          <IllustrationCard title="Kvadrattall">
            <SquareNumbersIllustration className="w-full h-auto" />
          </IllustrationCard>
          <IllustrationCard title="Trappetall">
            <StaircaseNumbersIllustration className="w-full h-auto" />
          </IllustrationCard>
        </div>
      </div>
    </div>
  );
}
