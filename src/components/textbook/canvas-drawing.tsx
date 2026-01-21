'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import {
  Pencil,
  Eraser,
  Undo2,
  Redo2,
  Trash2,
  Save,
  Download,
  Maximize2,
  GripHorizontal,
  Hand,
  Sparkles,
  Loader2,
  X,
  Grid3X3,
  Check,
  User,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { LatexRenderer } from './latex-renderer';

interface CanvasDrawingProps {
  exerciseId: string;
  chapterId: string;
  courseId: string;
  onSave: (dataUrl: string) => void;
  width?: number;
  height?: number;
  exerciseContent?: string; // Oppgaveteksten for AI-vurdering
  viewingAsStudentId?: string | null; // For lærervisning
}

interface Point {
  x: number;
  y: number;
  pressure?: number;
}

interface Stroke {
  points: Point[];
  color: string;
  size: number;
  tool: 'pen' | 'eraser';
}

const COLORS = [
  '#000000', // Svart
  '#1e40af', // Blå
  '#dc2626', // Rød
  '#16a34a', // Grønn
  '#9333ea', // Lilla
  '#ea580c', // Oransje
];

export function CanvasDrawing({
  exerciseId,
  chapterId,
  courseId,
  onSave,
  width = 800,
  height = 500,
  exerciseContent,
  viewingAsStudentId,
}: CanvasDrawingProps) {
  const isViewingAsStudent = !!viewingAsStudentId;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [isDrawing, setIsDrawing] = useState(false);
  const [tool, setTool] = useState<'pen' | 'eraser'>('pen');
  const [color, setColor] = useState(COLORS[0]);
  const [brushSize, setBrushSize] = useState(3);
  const [strokes, setStrokes] = useState<Stroke[]>([]);
  const [currentStroke, setCurrentStroke] = useState<Stroke | null>(null);
  const [undoneStrokes, setUndoneStrokes] = useState<Stroke[]>([]);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [canvasSize, setCanvasSize] = useState({ width, height });
  const [extraHeight, setExtraHeight] = useState(0);
  const [isResizing, setIsResizing] = useState(false);
  const [usingStylusOnly, setUsingStylusOnly] = useState(false);
  const [isCheckingAnswer, setIsCheckingAnswer] = useState(false);
  const [aiFeedback, setAiFeedback] = useState<string | null>(null);
  const [followUpQuestion, setFollowUpQuestion] = useState('');
  const [isAskingFollowUp, setIsAskingFollowUp] = useState(false);
  const [hintLevel, setHintLevel] = useState<1 | 2 | 3>(2); // 1=lite, 2=medium, 3=mye hjelp
  const [attemptCount, setAttemptCount] = useState(0);
  const [showGrid, setShowGrid] = useState(true); // Vis rutemønster som standard
  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');
  const resizeStartY = useRef(0);
  const resizeStartHeight = useRef(0);
  const lastInputType = useRef<'pen' | 'touch' | 'mouse' | null>(null);

  // Oppdater canvas-størrelse basert på container
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.clientWidth;
        const newWidth = Math.min(containerWidth - 32, width);
        const newHeight = (newWidth / width) * height;
        setCanvasSize({ width: newWidth, height: newHeight });
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, [width, height]);

  // Tegn rutemønster
  const drawGrid = useCallback((ctx: CanvasRenderingContext2D, width: number, height: number) => {
    const gridSize = 20; // Størrelse på hver rute i piksler

    // Tegn lyse rutelinjer
    ctx.strokeStyle = '#e5e7eb'; // Lys grå
    ctx.lineWidth = 0.5;

    // Vertikale linjer
    for (let x = gridSize; x < width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }

    // Horisontale linjer
    for (let y = gridSize; y < height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Tegn mørkere linjer for hver 5. rute (som ekte ruteark)
    ctx.strokeStyle = '#d1d5db'; // Litt mørkere grå
    ctx.lineWidth = 1;

    // Vertikale hovedlinjer
    for (let x = gridSize * 5; x < width; x += gridSize * 5) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }

    // Horisontale hovedlinjer
    for (let y = gridSize * 5; y < height; y += gridSize * 5) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }
  }, []);

  // Tegn alle strokes
  const redrawCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Fyll med hvit bakgrunn
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Tegn rutemønster hvis aktivert
    if (showGrid) {
      drawGrid(ctx, canvas.width, canvas.height);
    }

    // Tegn alle strokes
    [...strokes, currentStroke].filter(Boolean).forEach((stroke) => {
      if (!stroke || stroke.points.length < 2) return;

      ctx.beginPath();
      ctx.strokeStyle = stroke.tool === 'eraser' ? '#ffffff' : stroke.color;
      ctx.lineWidth = stroke.tool === 'eraser' ? stroke.size * 3 : stroke.size;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      const points = stroke.points;
      ctx.moveTo(points[0].x, points[0].y);

      for (let i = 1; i < points.length; i++) {
        const p = points[i];
        ctx.lineTo(p.x, p.y);
      }

      ctx.stroke();
    });
  }, [strokes, currentStroke, showGrid, drawGrid]);

  useEffect(() => {
    redrawCanvas();
  }, [redrawCanvas]);

  // Sjekk om input skal ignoreres (palm rejection)
  const shouldIgnoreInput = (pointerType: string): boolean => {
    // Hvis stylus er brukt og dette er touch, ignorer
    if (usingStylusOnly && pointerType === 'touch') {
      return true;
    }
    return false;
  };

  // Hent koordinater fra PointerEvent
  const getCoordinates = (e: React.PointerEvent): Point | null => {
    const canvas = canvasRef.current;
    if (!canvas) return null;

    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY,
      pressure: e.pressure || 0.5,
    };
  };

  const startDrawing = (e: React.PointerEvent) => {
    // Ikke tillat tegning i lærervisning
    if (isViewingAsStudent) return;

    // Aktiver stylus-only modus hvis pen brukes
    if (e.pointerType === 'pen') {
      setUsingStylusOnly(true);
      lastInputType.current = 'pen';
    } else if (e.pointerType === 'touch') {
      lastInputType.current = 'touch';
      // Ignorer touch hvis stylus-modus er aktiv (men tillat scrolling)
      if (usingStylusOnly) {
        return; // Ikke kall preventDefault() - tillater scrolling
      }
    } else {
      lastInputType.current = 'mouse';
    }

    e.preventDefault(); // Bare prevent default når vi faktisk skal tegne
    const point = getCoordinates(e);
    if (!point) return;

    setIsDrawing(true);
    setCurrentStroke({
      points: [point],
      color,
      size: brushSize,
      tool,
    });
    setUndoneStrokes([]); // Fjern redo-historikk når ny tegning starter
  };

  const draw = (e: React.PointerEvent) => {
    if (!isDrawing || !currentStroke) return;

    // Ignorer touch hvis stylus-modus er aktiv
    if (shouldIgnoreInput(e.pointerType)) {
      return;
    }

    e.preventDefault();

    const point = getCoordinates(e);
    if (!point) return;

    setCurrentStroke((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        points: [...prev.points, point],
      };
    });
  };

  const stopDrawing = (e?: React.PointerEvent) => {
    // Ignorer touch hvis stylus-modus er aktiv
    if (e && shouldIgnoreInput(e.pointerType)) {
      return;
    }

    if (isDrawing && currentStroke && currentStroke.points.length > 1) {
      setStrokes((prev) => [...prev, currentStroke]);
    }
    setIsDrawing(false);
    setCurrentStroke(null);
  };

  const undo = () => {
    if (strokes.length === 0) return;
    const lastStroke = strokes[strokes.length - 1];
    setStrokes((prev) => prev.slice(0, -1));
    setUndoneStrokes((prev) => [...prev, lastStroke]);
  };

  const redo = () => {
    if (undoneStrokes.length === 0) return;
    const strokeToRedo = undoneStrokes[undoneStrokes.length - 1];
    setUndoneStrokes((prev) => prev.slice(0, -1));
    setStrokes((prev) => [...prev, strokeToRedo]);
  };

  const clearCanvas = () => {
    setStrokes([]);
    setUndoneStrokes([]);
  };

  const saveCanvas = async () => {
    const canvas = canvasRef.current;
    if (!canvas || isViewingAsStudent) return;

    setIsSaving(true);
    setSaveStatus('saving');

    const dataUrl = canvas.toDataURL('image/png');
    onSave(dataUrl);

    // Lagre til localStorage som backup
    localStorage.setItem(
      `canvas-${courseId}-${chapterId}-${exerciseId}`,
      dataUrl
    );

    // Lagre til database
    try {
      const response = await fetch('/api/textbook/submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          exerciseId,
          chapterId,
          courseId,
          submissionType: 'canvas-drawing',
          canvasData: {
            dataUrl,
            strokes: strokes.map(s => ({
              points: s.points,
              color: s.color,
              size: s.size,
              tool: s.tool
            }))
          }
        }),
      });

      if (response.ok) {
        setSaveStatus('saved');
        setTimeout(() => setSaveStatus('idle'), 2000);
      } else {
        setSaveStatus('error');
        console.error('Failed to save submission');
      }
    } catch (error) {
      console.error('Error saving submission:', error);
      setSaveStatus('error');
    } finally {
      setIsSaving(false);
    }
  };

  const downloadCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const link = document.createElement('a');
    link.download = `oppgave-${exerciseId}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  // AI-vurdering av løsning
  const checkAnswerWithAI = async () => {
    const canvas = canvasRef.current;
    if (!canvas || strokes.length === 0) return;

    setIsCheckingAnswer(true);
    setAiFeedback(null);
    setAttemptCount((prev) => prev + 1);

    try {
      const imageData = canvas.toDataURL('image/png');

      const response = await fetch('/api/check-solution', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          image: imageData,
          exerciseContent: exerciseContent || 'Ingen oppgavetekst tilgjengelig',
          exerciseId,
          hintLevel,
          attemptCount: attemptCount + 1,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Kunne ikke sjekke løsningen');
      }

      setAiFeedback(data.feedback);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Ukjent feil';
      setAiFeedback(`Beklager, kunne ikke analysere løsningen din: ${errorMessage}`);
      console.error('Error checking answer:', error);
    } finally {
      setIsCheckingAnswer(false);
    }
  };

  // Oppfølgingsspørsmål til AI
  const askFollowUp = async () => {
    if (!followUpQuestion.trim() || !aiFeedback) return;

    const canvas = canvasRef.current;
    setIsAskingFollowUp(true);

    try {
      const imageData = canvas?.toDataURL('image/png') || '';

      const response = await fetch('/api/check-solution', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          image: imageData,
          exerciseContent: exerciseContent || 'Ingen oppgavetekst tilgjengelig',
          exerciseId,
          followUpQuestion: followUpQuestion,
          previousFeedback: aiFeedback,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Kunne ikke svare på spørsmålet');
      }

      setAiFeedback(data.feedback);
      setFollowUpQuestion('');
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Ukjent feil';
      setAiFeedback(`Beklager, kunne ikke svare: ${errorMessage}`);
      console.error('Error asking follow-up:', error);
    } finally {
      setIsAskingFollowUp(false);
    }
  };

  // Resize handlers
  const startResize = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    setIsResizing(true);
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    resizeStartY.current = clientY;
    resizeStartHeight.current = extraHeight;
  };

  useEffect(() => {
    if (!isResizing) return;

    const handleMove = (e: MouseEvent | TouchEvent) => {
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      const delta = clientY - resizeStartY.current;
      const newExtraHeight = Math.max(0, Math.min(500, resizeStartHeight.current + delta));
      setExtraHeight(newExtraHeight);
    };

    const handleEnd = () => {
      setIsResizing(false);
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', handleEnd);
    window.addEventListener('touchmove', handleMove);
    window.addEventListener('touchend', handleEnd);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleEnd);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('touchend', handleEnd);
    };
  }, [isResizing]);

  // Last inn lagret tegning fra database eller localStorage
  useEffect(() => {
    const loadSavedDrawing = async () => {
      // Prøv å hente fra database først
      try {
        const params = new URLSearchParams({
          courseId,
          chapterId,
          exerciseId,
        });
        if (viewingAsStudentId) {
          params.set('studentId', viewingAsStudentId);
        }
        const response = await fetch(`/api/textbook/submissions?${params}`);
        if (response.ok) {
          const data = await response.json();
          const submission = data.submissions?.[0];
          if (submission?.canvas_data?.dataUrl) {
            const img = new Image();
            img.onload = () => {
              const canvas = canvasRef.current;
              if (!canvas) return;
              const ctx = canvas.getContext('2d');
              if (!ctx) return;
              ctx.drawImage(img, 0, 0);
            };
            img.src = submission.canvas_data.dataUrl;

            // Last inn strokes hvis de finnes
            if (submission.canvas_data.strokes) {
              setStrokes(submission.canvas_data.strokes);
            }
            return; // Funnet i database, ikke sjekk localStorage
          }
        }
      } catch (error) {
        console.error('Error loading from database:', error);
      }

      // Fallback til localStorage
      const saved = localStorage.getItem(
        `canvas-${courseId}-${chapterId}-${exerciseId}`
      );
      if (saved) {
        const img = new Image();
        img.onload = () => {
          const canvas = canvasRef.current;
          if (!canvas) return;
          const ctx = canvas.getContext('2d');
          if (!ctx) return;
          ctx.drawImage(img, 0, 0);
        };
        img.src = saved;
      }
    };

    loadSavedDrawing();
  }, [courseId, chapterId, exerciseId, viewingAsStudentId]);

  return (
    <div
      ref={containerRef}
      className={cn(
        'space-y-3',
        isFullscreen && 'fixed inset-0 z-50 bg-background p-4 flex flex-col'
      )}
      style={{
        WebkitUserSelect: 'none',
        userSelect: 'none',
        WebkitTouchCallout: 'none',
      }}
      onContextMenu={(e) => e.preventDefault()}
    >
      {/* Lærervisning indikator */}
      {isViewingAsStudent && (
        <div className="flex items-center gap-2 p-3 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg text-amber-800 dark:text-amber-200">
          <User className="h-4 w-4" />
          <span className="text-sm font-medium">Du ser på elevens besvarelse (kun lesemodus)</span>
        </div>
      )}

      {/* Verktøylinje */}
      <div className={cn(
        "flex flex-wrap items-center gap-2 p-2 bg-muted rounded-lg",
        isViewingAsStudent && "opacity-50 pointer-events-none"
      )}>
        {/* Verktøy */}
        <div className="flex gap-1">
          <Button
            variant={tool === 'pen' ? 'default' : 'outline'}
            size="icon"
            onClick={() => setTool('pen')}
            title="Penn"
          >
            <Pencil className="h-4 w-4" />
          </Button>
          <Button
            variant={tool === 'eraser' ? 'default' : 'outline'}
            size="icon"
            onClick={() => setTool('eraser')}
            title="Viskelær"
          >
            <Eraser className="h-4 w-4" />
          </Button>
          <Button
            variant={usingStylusOnly ? 'default' : 'outline'}
            size="icon"
            onClick={() => setUsingStylusOnly(!usingStylusOnly)}
            title={usingStylusOnly ? 'Kun stylus (klikk for å tillate finger)' : 'Tillat finger (klikk for kun stylus)'}
          >
            <Hand className={cn('h-4 w-4', usingStylusOnly && 'opacity-50 line-through')} />
          </Button>
          <Button
            variant={showGrid ? 'default' : 'outline'}
            size="icon"
            onClick={() => setShowGrid(!showGrid)}
            title={showGrid ? 'Skjul rutenett' : 'Vis rutenett'}
          >
            <Grid3X3 className="h-4 w-4" />
          </Button>
        </div>

        <div className="w-px h-6 bg-border" />

        {/* Farger */}
        <div className="flex gap-1">
          {COLORS.map((c) => (
            <button
              key={c}
              onClick={() => {
                setColor(c);
                setTool('pen');
              }}
              className={cn(
                'w-6 h-6 rounded-full border-2 transition-transform',
                color === c && tool === 'pen'
                  ? 'border-primary scale-110'
                  : 'border-transparent hover:scale-110'
              )}
              style={{ backgroundColor: c }}
              title={`Farge: ${c}`}
            />
          ))}
        </div>

        <div className="w-px h-6 bg-border" />

        {/* Penselstørrelse */}
        <div className="flex items-center gap-2 min-w-[100px]">
          <span className="text-xs text-muted-foreground">Størrelse:</span>
          <Slider
            value={[brushSize]}
            onValueChange={(v: number[]) => setBrushSize(v[0])}
            min={1}
            max={20}
            step={1}
            className="w-20"
          />
        </div>

        <div className="w-px h-6 bg-border" />

        {/* Handlinger */}
        <div className="flex gap-1">
          <Button
            variant="outline"
            size="icon"
            onClick={undo}
            disabled={strokes.length === 0}
            title="Angre"
          >
            <Undo2 className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={redo}
            disabled={undoneStrokes.length === 0}
            title="Gjør om"
          >
            <Redo2 className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={clearCanvas}
            disabled={strokes.length === 0}
            title="Slett alt"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex-1" />

        {/* Lagre og last ned */}
        <div className="flex gap-1">
          <Button
            variant="outline"
            size="icon"
            onClick={toggleFullscreen}
            title={isFullscreen ? 'Lukk fullskjerm' : 'Fullskjerm'}
          >
            <Maximize2 className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={downloadCanvas}
            title="Last ned"
          >
            <Download className="h-4 w-4" />
          </Button>
          <Button
            variant={saveStatus === 'saved' ? 'outline' : 'default'}
            size="sm"
            onClick={saveCanvas}
            disabled={isSaving}
            className={cn(
              'gap-1',
              saveStatus === 'saved' && 'text-green-600 border-green-600',
              saveStatus === 'error' && 'text-red-600 border-red-600'
            )}
          >
            {isSaving ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : saveStatus === 'saved' ? (
              <Check className="h-4 w-4" />
            ) : (
              <Save className="h-4 w-4" />
            )}
            {isSaving ? 'Lagrer...' : saveStatus === 'saved' ? 'Lagret!' : saveStatus === 'error' ? 'Feil' : 'Lagre'}
          </Button>
          {/* Hint-nivå velger */}
          <div className="flex items-center gap-1 border rounded-md">
            <button
              onClick={() => setHintLevel(1)}
              className={cn(
                'px-2 py-1 text-xs rounded-l-md transition-colors',
                hintLevel === 1 ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
              )}
              title="Lite hjelp - bare si om det er riktig/feil"
            >
              Lite
            </button>
            <button
              onClick={() => setHintLevel(2)}
              className={cn(
                'px-2 py-1 text-xs transition-colors',
                hintLevel === 2 ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
              )}
              title="Medium hjelp - pek på feil uten å gi svar"
            >
              Medium
            </button>
            <button
              onClick={() => setHintLevel(3)}
              className={cn(
                'px-2 py-1 text-xs rounded-r-md transition-colors',
                hintLevel === 3 ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
              )}
              title="Mye hjelp - vis neste steg"
            >
              Mye
            </button>
          </div>
          <Button
            variant="secondary"
            size="sm"
            onClick={checkAnswerWithAI}
            disabled={strokes.length === 0 || isCheckingAnswer}
            className="gap-1"
            title="La AI sjekke løsningen din"
          >
            {isCheckingAnswer ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Sparkles className="h-4 w-4" />
            )}
            Sjekk
          </Button>
        </div>
      </div>

      {/* AI Feedback */}
      {aiFeedback && (
        <div className="relative p-4 bg-muted/50 border rounded-lg space-y-3">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 h-6 w-6"
            onClick={() => setAiFeedback(null)}
          >
            <X className="h-4 w-4" />
          </Button>
          <div className="flex gap-2 items-start pr-8">
            <Sparkles className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <div className="text-sm prose prose-slate dark:prose-invert max-w-none">
              <LatexRenderer content={aiFeedback} />
            </div>
          </div>
          {/* Oppfølgingsspørsmål */}
          <div className="flex gap-2 pt-2 border-t">
            <input
              type="text"
              value={followUpQuestion}
              onChange={(e) => setFollowUpQuestion(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && askFollowUp()}
              placeholder="Spør om noe du lurer på..."
              className="flex-1 px-3 py-1.5 text-sm border rounded-md bg-background"
              disabled={isAskingFollowUp}
            />
            <Button
              size="sm"
              onClick={askFollowUp}
              disabled={!followUpQuestion.trim() || isAskingFollowUp}
            >
              {isAskingFollowUp ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                'Spør'
              )}
            </Button>
          </div>
        </div>
      )}

      {/* Canvas */}
      <div
        className={cn(
          'border rounded-t-lg overflow-hidden bg-white',
          isFullscreen && 'flex-1'
        )}
        style={{
          WebkitUserSelect: 'none',
          userSelect: 'none',
          WebkitTouchCallout: 'none',
        }}
      >
        <canvas
          ref={canvasRef}
          width={isFullscreen ? window.innerWidth - 32 : canvasSize.width}
          height={isFullscreen ? window.innerHeight - 120 : canvasSize.height + extraHeight}
          className="cursor-crosshair touch-none"
          style={{
            WebkitUserSelect: 'none',
            userSelect: 'none',
            WebkitTouchCallout: 'none',
            touchAction: 'none', // Alltid blokker touch-action for å unngå scroll-interferens med pen
          }}
          onPointerDown={startDrawing}
          onPointerMove={draw}
          onPointerUp={stopDrawing}
          onPointerLeave={stopDrawing}
          onPointerCancel={stopDrawing}
          onContextMenu={(e) => e.preventDefault()}
        />
      </div>

      {/* Resize handle */}
      {!isFullscreen && (
        <div
          className={cn(
            'flex items-center justify-center h-6 bg-muted border border-t-0 rounded-b-lg cursor-ns-resize hover:bg-muted/80 transition-colors',
            isResizing && 'bg-muted/60'
          )}
          style={{
            WebkitUserSelect: 'none',
            userSelect: 'none',
            WebkitTouchCallout: 'none',
          }}
          onMouseDown={startResize}
          onTouchStart={startResize}
          onContextMenu={(e) => e.preventDefault()}
        >
          <GripHorizontal className="h-4 w-4 text-muted-foreground" />
        </div>
      )}

      {/* Tips */}
      <p className="text-xs text-muted-foreground">
        Tips: Bruk en stylus/penn for best resultat på nettbrett. Dra i håndtaket under for å utvide. Scroll utenfor tegneområdet.
      </p>
    </div>
  );
}
