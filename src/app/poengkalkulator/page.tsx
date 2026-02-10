"use client";

import { useState, useMemo } from "react";
import { MainNav } from "@/components/navigation/main-nav";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Calculator, GraduationCap, FlaskConical, Languages, Award, CalendarDays, Users, Plus, X } from "lucide-react";

interface FagValg {
  id: string;
  navn: string;
  poeng: number;
}

const realfag: { kategori: string; fag: FagValg[] }[] = [
  {
    kategori: "Matematikk",
    fag: [
      { id: "r1", navn: "Matematikk R1", poeng: 0.5 },
      { id: "r2", navn: "Matematikk R2", poeng: 1.0 },
      { id: "s1", navn: "Matematikk S1", poeng: 0.5 },
      { id: "s2", navn: "Matematikk S2", poeng: 0.5 },
    ],
  },
  {
    kategori: "Naturfag",
    fag: [
      { id: "fysikk1", navn: "Fysikk 1", poeng: 0.5 },
      { id: "fysikk2", navn: "Fysikk 2", poeng: 1.0 },
      { id: "kjemi1", navn: "Kjemi 1", poeng: 0.5 },
      { id: "kjemi2", navn: "Kjemi 2", poeng: 0.5 },
      { id: "bio1", navn: "Biologi 1", poeng: 0.5 },
      { id: "bio2", navn: "Biologi 2", poeng: 0.5 },
    ],
  },
  {
    kategori: "IT og teknologi",
    fag: [
      { id: "it1", navn: "Informasjonsteknologi 1", poeng: 0.5 },
      { id: "it2", navn: "Informasjonsteknologi 2", poeng: 0.5 },
      { id: "geo1", navn: "Geofag 1", poeng: 0.5 },
      { id: "geo2", navn: "Geofag 2", poeng: 0.5 },
      { id: "tof1", navn: "Teknologi og forskningslære 1", poeng: 0.5 },
      { id: "tof2", navn: "Teknologi og forskningslære 2", poeng: 0.5 },
    ],
  },
];

const sprakfag: FagValg[] = [
  { id: "sprak1", navn: "Fremmedspråk programfag nivå I", poeng: 0.5 },
  { id: "sprak2", navn: "Fremmedspråk programfag nivå II", poeng: 0.5 },
  { id: "sprak3", navn: "Fremmedspråk programfag nivå III", poeng: 1.0 },
];

interface TilleggsValg {
  id: string;
  navn: string;
  poeng: number;
  beskrivelse: string;
}

const tilleggsvalg: TilleggsValg[] = [
  { id: "folkehogskole", navn: "Folkehøgskole", poeng: 2, beskrivelse: "Minst 33 uker" },
  { id: "militar", navn: "Militær førstegangstjeneste", poeng: 2, beskrivelse: "Fullført tjeneste" },
  { id: "siviltjeneste", navn: "Siviltjeneste", poeng: 2, beskrivelse: "Fullført tjeneste" },
  { id: "fagskole60", navn: "Fagskole (60+ studiepoeng)", poeng: 2, beskrivelse: "60 stp eller mer" },
  { id: "fagskole30", navn: "Fagskole (30–59 studiepoeng)", poeng: 1, beskrivelse: "30–59 stp" },
  { id: "hoyere60", navn: "Høyere utdanning (60+ stp)", poeng: 2, beskrivelse: "60 stp eller mer" },
  { id: "hoyere30", navn: "Høyere utdanning (30–59 stp)", poeng: 1, beskrivelse: "30–59 stp" },
];

interface KarakterRad {
  id: number;
  fag: string;
  karakter: number | "";
}

const vanligeFag = [
  "Norsk hovedmål",
  "Norsk sidemål",
  "Norsk muntlig",
  "Engelsk",
  "Matematikk",
  "Naturfag",
  "Samfunnsfag",
  "Geografi",
  "Historie",
  "Religion og etikk",
  "Kroppsøving",
  "Fremmedspråk",
  "Kunst og håndverk",
  "Musikk",
  "Mat og helse",
];

let nextId = 1;

export default function PoengkalkulatorPage() {
  const [brukKarakterliste, setBrukKarakterliste] = useState(false);
  const [karakterer, setKarakterer] = useState<KarakterRad[]>(() =>
    vanligeFag.slice(0, 6).map((fag) => ({ id: nextId++, fag, karakter: "" }))
  );
  const [snitt, setSnitt] = useState(4.0);
  const [selectedRealfag, setSelectedRealfag] = useState<string[]>([]);
  const [selectedSprak, setSelectedSprak] = useState<string[]>([]);
  const [selectedTillegg, setSelectedTillegg] = useState<string[]>([]);
  const [fodselsar, setFodselsar] = useState<string>("");
  const [kjonnspoeng, setKjonnspoeng] = useState(0);

  const beregnetSnitt = useMemo(() => {
    const gyldige = karakterer.filter((k) => k.karakter !== "" && k.karakter >= 1 && k.karakter <= 6);
    if (gyldige.length === 0) return 0;
    const sum = gyldige.reduce((s, k) => s + (k.karakter as number), 0);
    return Math.round((sum / gyldige.length) * 100) / 100;
  }, [karakterer]);

  const aktivtSnitt = brukKarakterliste ? beregnetSnitt : snitt;
  const karakterpoeng = useMemo(() => Math.round(aktivtSnitt * 10 * 10) / 10, [aktivtSnitt]);

  const realfagspoengRaw = useMemo(() => {
    let sum = 0;
    for (const gruppe of realfag) {
      for (const fag of gruppe.fag) {
        if (selectedRealfag.includes(fag.id)) sum += fag.poeng;
      }
    }
    return sum;
  }, [selectedRealfag]);

  const sprakpoengRaw = useMemo(() => {
    let sum = 0;
    for (const fag of sprakfag) {
      if (selectedSprak.includes(fag.id)) sum += fag.poeng;
    }
    return sum;
  }, [selectedSprak]);

  const realfagOgSprakSum = useMemo(
    () => Math.min(realfagspoengRaw + sprakpoengRaw, 4),
    [realfagspoengRaw, sprakpoengRaw]
  );

  const tilleggspoengRaw = useMemo(() => {
    let sum = 0;
    for (const t of tilleggsvalg) {
      if (selectedTillegg.includes(t.id)) sum += t.poeng;
    }
    return sum;
  }, [selectedTillegg]);

  const tilleggspoengCapped = useMemo(() => Math.min(tilleggspoengRaw, 2), [tilleggspoengRaw]);

  const alderspoeng = useMemo(() => {
    const ar = parseInt(fodselsar);
    if (isNaN(ar) || ar < 1940 || ar > 2010) return 0;
    const alder = 2026 - ar;
    if (alder < 20) return 0;
    const arOver20 = alder - 20;
    return Math.min(arOver20 * 2, 8);
  }, [fodselsar]);

  const skolepoeng = useMemo(
    () => karakterpoeng + realfagOgSprakSum + kjonnspoeng,
    [karakterpoeng, realfagOgSprakSum, kjonnspoeng]
  );

  const konkurransepoeng = useMemo(
    () => skolepoeng + tilleggspoengCapped + alderspoeng,
    [skolepoeng, tilleggspoengCapped, alderspoeng]
  );

  function leggTilFag() {
    setKarakterer((prev) => [...prev, { id: nextId++, fag: "", karakter: "" }]);
  }

  function fjernFag(id: number) {
    setKarakterer((prev) => prev.filter((k) => k.id !== id));
  }

  function oppdaterFag(id: number, fag: string) {
    setKarakterer((prev) => prev.map((k) => (k.id === id ? { ...k, fag } : k)));
  }

  function oppdaterKarakter(id: number, value: string) {
    const num = value === "" ? "" as const : parseInt(value);
    if (num !== "" && (isNaN(num) || num < 1 || num > 6)) return;
    setKarakterer((prev) => prev.map((k) => (k.id === id ? { ...k, karakter: num } : k)));
  }

  function toggleRealfag(id: string) {
    setSelectedRealfag((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  }

  function toggleSprak(id: string) {
    setSelectedSprak((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  }

  function toggleTillegg(id: string) {
    setSelectedTillegg((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />

      <main className="flex-1">
        <div className="container py-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Hjem</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Poengkalkulator</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Header */}
        <section className="bg-gradient-to-r from-blue-500 to-cyan-600 py-10 mb-8">
          <div className="container text-center text-white">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="rounded-lg bg-white/20 p-3">
                <Calculator className="h-8 w-8" />
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold">Poengkalkulator</h1>
            </div>
            <p className="text-blue-100 max-w-xl mx-auto">
              Beregn dine skolepoeng og konkurransepoeng for Samordna opptak 2025.
            </p>
          </div>
        </section>

        <div className="container pb-12 max-w-3xl mx-auto space-y-6">
          {/* Resultat-kort (sticky) */}
          <div className="sticky top-16 z-30">
            <Card className="border-2 border-blue-200 dark:border-blue-800 shadow-lg bg-background/95 backdrop-blur">
              <CardContent className="p-4 sm:p-6">
                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground mb-1">Skolepoeng</div>
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                      {skolepoeng.toFixed(1)}
                    </div>
                    <div className="text-xs text-muted-foreground">Førstegangsvitnemål</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground mb-1">Konkurransepoeng</div>
                    <div className="text-3xl font-bold text-cyan-600 dark:text-cyan-400">
                      {konkurransepoeng.toFixed(1)}
                    </div>
                    <div className="text-xs text-muted-foreground">Ordinær kvote</div>
                  </div>
                </div>
                <Separator className="my-3" />
                <div className="flex flex-wrap gap-2 justify-center text-xs">
                  <Badge variant="secondary">Karakter: {karakterpoeng.toFixed(1)}</Badge>
                  {realfagOgSprakSum > 0 && (
                    <Badge variant="secondary">
                      Realfag/språk: {realfagOgSprakSum.toFixed(1)}
                    </Badge>
                  )}
                  {kjonnspoeng > 0 && (
                    <Badge variant="secondary">Kjønn: +{kjonnspoeng}</Badge>
                  )}
                  {tilleggspoengCapped > 0 && (
                    <Badge variant="secondary">Tillegg: +{tilleggspoengCapped}</Badge>
                  )}
                  {alderspoeng > 0 && (
                    <Badge variant="secondary">Alder: +{alderspoeng}</Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 1. Karaktersnitt */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-blue-600" />
                Karaktersnitt
              </CardTitle>
              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => setBrukKarakterliste(false)}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                    !brukKarakterliste
                      ? "bg-blue-600 text-white"
                      : "bg-muted hover:bg-muted/80 text-foreground"
                  }`}
                >
                  Skriv inn snitt
                </button>
                <button
                  onClick={() => setBrukKarakterliste(true)}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                    brukKarakterliste
                      ? "bg-blue-600 text-white"
                      : "bg-muted hover:bg-muted/80 text-foreground"
                  }`}
                >
                  Skriv inn karakterer
                </button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {!brukKarakterliste ? (
                /* Slider-modus */
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <Slider
                      value={[snitt]}
                      onValueChange={([v]) => setSnitt(Math.round(v * 10) / 10)}
                      min={1}
                      max={6}
                      step={0.1}
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>1.0</span>
                      <span>2.0</span>
                      <span>3.0</span>
                      <span>4.0</span>
                      <span>5.0</span>
                      <span>6.0</span>
                    </div>
                  </div>
                  <Input
                    type="number"
                    min={1}
                    max={6}
                    step={0.1}
                    value={snitt}
                    onChange={(e) => {
                      const v = parseFloat(e.target.value);
                      if (!isNaN(v) && v >= 1 && v <= 6) setSnitt(Math.round(v * 10) / 10);
                    }}
                    className="w-20 text-center font-mono text-lg"
                  />
                </div>
              ) : (
                /* Karakterliste-modus */
                <div className="space-y-2">
                  <div className="grid grid-cols-[1fr_60px_32px] gap-2 text-xs font-medium text-muted-foreground px-1">
                    <span>Fag</span>
                    <span className="text-center">Karakter</span>
                    <span />
                  </div>
                  {karakterer.map((rad) => (
                    <div key={rad.id} className="grid grid-cols-[1fr_60px_32px] gap-2 items-center">
                      <Input
                        value={rad.fag}
                        onChange={(e) => oppdaterFag(rad.id, e.target.value)}
                        placeholder="Fagnavn"
                        className="text-sm h-9"
                      />
                      <Input
                        type="number"
                        min={1}
                        max={6}
                        value={rad.karakter}
                        onChange={(e) => oppdaterKarakter(rad.id, e.target.value)}
                        placeholder="1-6"
                        className="text-center font-mono text-sm h-9"
                      />
                      <button
                        onClick={() => fjernFag(rad.id)}
                        className="h-9 w-8 flex items-center justify-center rounded-md hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                  <button
                    onClick={leggTilFag}
                    className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 py-1.5 transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                    Legg til fag
                  </button>

                  {beregnetSnitt > 0 && (
                    <div className="bg-muted/50 rounded-lg p-3 flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        Snitt av {karakterer.filter((k) => k.karakter !== "" && k.karakter >= 1 && k.karakter <= 6).length} fag
                      </span>
                      <span className="font-semibold text-lg font-mono">{beregnetSnitt.toFixed(2)}</span>
                    </div>
                  )}
                </div>
              )}

              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Karakterpoeng (snitt &times; 10)</span>
                <span className="font-semibold text-lg">{karakterpoeng.toFixed(1)}</span>
              </div>
            </CardContent>
          </Card>

          {/* 2. Realfags- og språkpoeng */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FlaskConical className="h-5 w-5 text-blue-600" />
                Realfags- og språkpoeng
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Maks 4 poeng totalt for realfag og språk til sammen.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Realfag */}
              {realfag.map((gruppe) => (
                <div key={gruppe.kategori}>
                  <h3 className="text-sm font-semibold mb-3">{gruppe.kategori}</h3>
                  <div className="grid gap-2">
                    {gruppe.fag.map((fag) => (
                      <label
                        key={fag.id}
                        className="flex items-center gap-3 p-2 rounded-md hover:bg-muted/50 cursor-pointer transition-colors"
                      >
                        <Checkbox
                          checked={selectedRealfag.includes(fag.id)}
                          onCheckedChange={() => toggleRealfag(fag.id)}
                        />
                        <span className="text-sm flex-1">{fag.navn}</span>
                        <Badge variant="outline" className="font-mono text-xs">
                          +{fag.poeng.toFixed(1)}
                        </Badge>
                      </label>
                    ))}
                  </div>
                </div>
              ))}

              <Separator />

              {/* Språk */}
              <div>
                <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
                  <Languages className="h-4 w-4" />
                  Fremmedspråk programfag
                </h3>
                <div className="grid gap-2">
                  {sprakfag.map((fag) => (
                    <label
                      key={fag.id}
                      className="flex items-center gap-3 p-2 rounded-md hover:bg-muted/50 cursor-pointer transition-colors"
                    >
                      <Checkbox
                        checked={selectedSprak.includes(fag.id)}
                        onCheckedChange={() => toggleSprak(fag.id)}
                      />
                      <span className="text-sm flex-1">{fag.navn}</span>
                      <Badge variant="outline" className="font-mono text-xs">
                        +{fag.poeng.toFixed(1)}
                      </Badge>
                    </label>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Oppsummering */}
              <div className="flex items-center justify-between bg-muted/50 rounded-lg p-3">
                <div className="text-sm">
                  <span className="text-muted-foreground">Realfag: </span>
                  <span className="font-medium">{realfagspoengRaw.toFixed(1)}</span>
                  <span className="text-muted-foreground"> + Språk: </span>
                  <span className="font-medium">{sprakpoengRaw.toFixed(1)}</span>
                  <span className="text-muted-foreground"> = {(realfagspoengRaw + sprakpoengRaw).toFixed(1)}</span>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-lg">
                    {realfagOgSprakSum.toFixed(1)}
                  </div>
                  {realfagspoengRaw + sprakpoengRaw > 4 && (
                    <span className="text-xs text-amber-600 dark:text-amber-400">Begrenset til 4.0</span>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 3. Tilleggspoeng */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-blue-600" />
                Tilleggspoeng
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Maks 2 tilleggspoeng totalt. Gjelder kun ordinær kvote.
              </p>
            </CardHeader>
            <CardContent className="space-y-2">
              {tilleggsvalg.map((t) => (
                <label
                  key={t.id}
                  className="flex items-center gap-3 p-2 rounded-md hover:bg-muted/50 cursor-pointer transition-colors"
                >
                  <Checkbox
                    checked={selectedTillegg.includes(t.id)}
                    onCheckedChange={() => toggleTillegg(t.id)}
                  />
                  <div className="flex-1">
                    <span className="text-sm">{t.navn}</span>
                    <span className="text-xs text-muted-foreground ml-2">({t.beskrivelse})</span>
                  </div>
                  <Badge variant="outline" className="font-mono text-xs">
                    +{t.poeng}
                  </Badge>
                </label>
              ))}

              <div className="flex items-center justify-between bg-muted/50 rounded-lg p-3 mt-3">
                <span className="text-sm text-muted-foreground">Sum tilleggspoeng</span>
                <div className="text-right">
                  <span className="font-semibold text-lg">{tilleggspoengCapped}</span>
                  {tilleggspoengRaw > 2 && (
                    <span className="text-xs text-amber-600 dark:text-amber-400 ml-2">
                      Begrenset til 2
                    </span>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 4. Alderspoeng */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CalendarDays className="h-5 w-5 text-blue-600" />
                Alderspoeng
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                2 poeng per år fra fylte 20 år, maks 8 poeng. Gjelder kun ordinær kvote.
              </p>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <Label htmlFor="fodselsar" className="text-sm whitespace-nowrap">
                  Fødselsår
                </Label>
                <Input
                  id="fodselsar"
                  type="number"
                  placeholder="f.eks. 2000"
                  min={1940}
                  max={2010}
                  value={fodselsar}
                  onChange={(e) => setFodselsar(e.target.value)}
                  className="w-32 font-mono"
                />
                <div className="flex-1 text-right">
                  <span className="font-semibold text-lg">{alderspoeng}</span>
                  <span className="text-sm text-muted-foreground ml-1">poeng</span>
                </div>
              </div>
              {fodselsar && alderspoeng === 8 && (
                <p className="text-xs text-amber-600 dark:text-amber-400 mt-2">Maksimalt 8 alderspoeng</p>
              )}
            </CardContent>
          </Card>

          {/* 5. Kjønnspoeng */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-600" />
                Kjønnspoeng
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Enkelte studier gir 1–2 poeng for underrepresentert kjønn. Valgfritt.
              </p>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                {[0, 1, 2].map((v) => (
                  <button
                    key={v}
                    onClick={() => setKjonnspoeng(v)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      kjonnspoeng === v
                        ? "bg-blue-600 text-white"
                        : "bg-muted hover:bg-muted/80 text-foreground"
                    }`}
                  >
                    {v === 0 ? "Ingen" : `+${v}`}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Info */}
          <div className="text-xs text-muted-foreground text-center space-y-1">
            <p>Basert på regler fra Samordna opptak 2025. Kalkulatoren er kun veiledende.</p>
            <p>Skolepoeng brukes i førstegangsvitnemål-kvoten. Konkurransepoeng brukes i ordinær kvote.</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
