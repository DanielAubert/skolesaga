'use client';

import { useEffect, useRef, useState, useId, useCallback, useMemo } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2, RotateCcw, Maximize2, Minimize2 } from 'lucide-react';
import { translateCommand, appForCommands } from '@/lib/geogebra/command-translator';

declare global {
  interface Window {
    GGBApplet: new (params: GeoGebraParams, version?: string) => GeoGebraApplet;
  }
}

interface GeoGebraParams {
  appName?: 'graphing' | 'geometry' | 'classic' | '3d' | 'cas' | 'scientific' | 'suite';
  width?: number;
  height?: number;
  showToolBar?: boolean;
  showAlgebraInput?: boolean;
  showMenuBar?: boolean;
  enableLabelDrags?: boolean;
  enableShiftDragZoom?: boolean;
  enableRightClick?: boolean;
  showResetIcon?: boolean;
  language?: string;
  material_id?: string;
  ggbBase64?: string;
  appletOnLoad?: (api: GeoGebraAPI) => void;
  borderColor?: string;
  allowStyleBar?: boolean;
  preventFocus?: boolean;
  showZoomButtons?: boolean;
  capturingThreshold?: number;
  scaleContainerClass?: string;
  autoHeight?: boolean;
  playButton?: boolean;
  algebraInputPosition?: 'algebra' | 'top' | 'bottom';
  showToolBarHelp?: boolean;
  perspective?: string;
  algebraWidth?: number;
}

export interface GeoGebraAPI {
  evalCommand: (command: string) => boolean;
  getValue: (name: string) => number;
  getValueString: (name: string) => string;
  setValue: (name: string, value: number) => void;
  setCoordSystem: (xmin: number, xmax: number, ymin: number, ymax: number) => void;
  reset: () => void;
  setVisible: (name: string, visible: boolean) => void;
  getXML: () => string;
  setXML: (xml: string) => void;
  exists: (name: string) => boolean;
  getXcoord: (name: string) => number;
  getYcoord: (name: string) => number;
  getObjectType: (name: string) => string;
  getDefinitionString: (name: string) => string;
  setAxisLabels: (view: number, xLabel: string, yLabel: string, zLabel?: string) => void;
}

const ZOOM_RE = /^ZoomIn\s*[\(\[]\s*(-?[\d.]+)\s*,\s*(-?[\d.]+)\s*,\s*(-?[\d.]+)\s*,\s*(-?[\d.]+)\s*[\)\]]$/i;
// SetAxisLabels er ingen GeoGebra-kommando (evalCommand gir «Ukjent kommando»), men API-et har setAxisLabels.
const AXIS_LABELS_RE = /^SetAxisLabels\s*\(\s*(\d)\s*,\s*"([^"]*)"\s*,\s*"([^"]*)"\s*\)$/;

/**
 * Kjører blokkens kommandoer slik de står i innholdet: norske navn oversettes (evalCommand godtar bare
 * engelske kommandonavn, uansett språk på appleten), SetAxisLabels går via API-et og ZoomIn med tall
 * kjøres sist via setCoordSystem når objektene finnes.
 */
function runInitialCommands(api: GeoGebraAPI, commands: string[], getApi: () => GeoGebraAPI | null = () => api) {
  const zoomCommands: { xmin: number; ymin: number; xmax: number; ymax: number }[] = [];
  commands.forEach((cmd) => {
    // Tom kommando (f.eks. initialCommands: [""] i r2-6-1) gir dialogen «Det du satte inn ble ikke akseptert».
    if (!cmd || !cmd.trim()) return;
    const zoomMatch = cmd.trim().match(ZOOM_RE);
    const axisMatch = cmd.trim().match(AXIS_LABELS_RE);
    if (zoomMatch) {
      zoomCommands.push({
        xmin: parseFloat(zoomMatch[1]),
        ymin: parseFloat(zoomMatch[2]),
        xmax: parseFloat(zoomMatch[3]),
        ymax: parseFloat(zoomMatch[4]),
      });
    } else if (axisMatch) {
      api.setAxisLabels?.(parseInt(axisMatch[1], 10), axisMatch[2], axisMatch[3]);
    } else {
      api.evalCommand(translateCommand(cmd));
    }
  });
  if (zoomCommands.length > 0) {
    setTimeout(() => {
      const lastZoom = zoomCommands[zoomCommands.length - 1];
      getApi()?.setCoordSystem(lastZoom.xmin, lastZoom.xmax, lastZoom.ymin, lastZoom.ymax);
    }, 200);
  }
}

interface GeoGebraApplet {
  inject: (elementId: string) => void;
  getAPI: () => GeoGebraAPI;
}

export interface GeoGebraEmbedProps {
  title?: string;
  description?: string;
  materialId?: string;
  appName?: 'graphing' | 'geometry' | 'classic' | '3d' | 'cas' | 'scientific' | 'suite';
  width?: number;
  height?: number;
  showToolBar?: boolean;
  showAlgebraInput?: boolean;
  showMenuBar?: boolean;
  showResetIcon?: boolean;
  enableRightClick?: boolean;
  initialCommands?: string[];
  className?: string;
  onApiReady?: (api: GeoGebraAPI) => void;
  algebraWidth?: number;
}

export function GeoGebraEmbed({
  title,
  description,
  materialId,
  appName = 'classic',
  width = 900,
  height = 550,
  showToolBar = true,
  showAlgebraInput = true,
  showMenuBar = false,
  showResetIcon = true,
  enableRightClick = true,
  initialCommands = [],
  className = '',
  onApiReady,
  algebraWidth,
}: GeoGebraEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const appletRef = useRef<GeoGebraApplet | null>(null);
  const apiRef = useRef<GeoGebraAPI | null>(null);
  const savedXmlRef = useRef<string | null>(null);
  const initialCommandsRef = useRef(initialCommands);
  const isFullscreenRef = useRef(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [appletKey, setAppletKey] = useState(0); // Used to force re-render
  const reactId = useId();
  const uniqueId = `ggb${reactId.replace(/:/g, '')}_${appletKey}`;

  // Keep refs in sync
  initialCommandsRef.current = initialCommands;
  isFullscreenRef.current = isFullscreen;

  // Grafregneren («graphing») kjenner ikke Tangent, Asymptote, Segment, PerpendicularLine m.fl. — bruker blokken
  // slike kommandoer, lastes Classic (22.10.2026: 17 Skolesaga-sider viste «Ukjent kommando» i appleten).
  const commandKey = initialCommands.join('\n');
  const effectiveAppName = useMemo(
    () => appForCommands(appName, commandKey ? commandKey.split('\n').map(translateCommand) : []),
    [appName, commandKey],
  );

  // Memoize config to prevent unnecessary re-renders
  const config = useMemo(() => ({
    appName: effectiveAppName,
    width,
    height,
    showToolBar,
    showAlgebraInput,
    showMenuBar,
    showResetIcon,
    enableRightClick,
    materialId,
    algebraWidth,
  }), [effectiveAppName, width, height, showToolBar, showAlgebraInput, showMenuBar, showResetIcon, enableRightClick, materialId, algebraWidth]);

  // Load GeoGebra script if not already loaded
  const loadGeoGebraScript = useCallback(() => {
    return new Promise<void>((resolve) => {
      if (window.GGBApplet) {
        resolve();
        return;
      }

      // Check if script is already loading
      const existingScript = document.querySelector('script[src*="deployggb.js"]');
      if (existingScript) {
        existingScript.addEventListener('load', () => resolve());
        // If script is already loaded but GGBApplet isn't available yet, wait a bit
        const checkInterval = setInterval(() => {
          if (window.GGBApplet) {
            clearInterval(checkInterval);
            resolve();
          }
        }, 100);
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://www.geogebra.org/apps/deployggb.js';
      script.async = true;
      script.onload = () => resolve();
      document.head.appendChild(script);
    });
  }, []);

  useEffect(() => {
    let cancelled = false;

    const initApplet = async () => {
      await loadGeoGebraScript();

      if (cancelled) return;

      // Calculate dimensions based on fullscreen state
      let appletWidth = config.width;
      let appletHeight = config.height;

      // 7.10.2026: appleten fikk alltid config.width (900 px) og ble klippet av kortet på mobil
      // (lasteboksen stakk 550 px ut til høyre ved 390 px). Uten fullskjerm: aldri bredere enn beholderen.
      if (!isFullscreenRef.current && containerRef.current && containerRef.current.clientWidth > 0) {
        appletWidth = Math.min(config.width, containerRef.current.clientWidth);
      }

      if (isFullscreenRef.current && containerRef.current) {
        // Wait a frame for the container to be sized
        await new Promise(resolve => requestAnimationFrame(resolve));
        if (cancelled) return;
        const container = containerRef.current;
        appletWidth = container.clientWidth || window.innerWidth - 32;
        appletHeight = container.clientHeight || window.innerHeight - 100;
      }

      const params: GeoGebraParams = {
        appName: config.appName,
        width: appletWidth,
        height: appletHeight,
        showToolBar: config.showToolBar,
        showAlgebraInput: config.showAlgebraInput,
        showMenuBar: config.showMenuBar,
        showResetIcon: config.showResetIcon,
        enableRightClick: config.enableRightClick,
        enableShiftDragZoom: true,
        enableLabelDrags: false,
        language: 'no',
        borderColor: 'transparent',
        preventFocus: true,
        showZoomButtons: true,
        allowStyleBar: true,
        algebraInputPosition: 'algebra',
        showToolBarHelp: true,
        ...(config.algebraWidth && { algebraWidth: config.algebraWidth }),
        appletOnLoad: (api) => {
          if (cancelled) return;
          apiRef.current = api;
          setIsLoading(false);

          // Restore saved state if available
          if (savedXmlRef.current) {
            api.setXML(savedXmlRef.current);
            savedXmlRef.current = null;
          } else if (initialCommandsRef.current.length > 0) {
            runInitialCommands(api, initialCommandsRef.current);
          }

          // Notify parent component that API is ready
          if (onApiReady) {
            onApiReady(api);
          }
        },
      };

      if (config.materialId) {
        params.material_id = config.materialId;
      }

      const applet = new window.GGBApplet(params, '5.0');
      appletRef.current = applet;
      applet.inject(uniqueId);
    };

    setIsLoading(true);
    initApplet();

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config, uniqueId, loadGeoGebraScript]);

  const handleReset = () => {
    if (apiRef.current) {
      apiRef.current.reset();
      // Re-run initial commands after reset (translate Norwegian to English)
      if (initialCommandsRef.current.length > 0) {
        runInitialCommands(apiRef.current, initialCommandsRef.current, () => apiRef.current);
      }
    }
  };

  const toggleFullscreen = () => {
    // Save current state before toggling
    if (apiRef.current) {
      savedXmlRef.current = apiRef.current.getXML();
    }
    setIsFullscreen(!isFullscreen);
    // Increment key to force re-mount with new dimensions
    setAppletKey(prev => prev + 1);
  };

  return (
    <>
      {isFullscreen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={toggleFullscreen}
        />
      )}
      <Card className={`overflow-hidden ${className} ${isFullscreen ? 'fixed inset-4 z-50 flex flex-col' : ''}`}>
        {(title || description) && (
          <div className="bg-blue-600 text-white px-4 py-3 flex-shrink-0">
            <div className="flex items-center justify-between">
              <div>
                {title && <h3 className="font-bold text-lg">{title}</h3>}
                {description && <p className="text-sm text-blue-100 mt-1">{description}</p>}
              </div>
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-blue-500"
                  onClick={handleReset}
                  title="Tilbakestill"
                >
                  <RotateCcw className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-blue-500"
                  onClick={toggleFullscreen}
                  title={isFullscreen ? 'Avslutt fullskjerm' : 'Fullskjerm'}
                >
                  {isFullscreen ? (
                    <Minimize2 className="h-4 w-4" />
                  ) : (
                    <Maximize2 className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
          </div>
        )}
        <div className={`relative bg-white ${isFullscreen ? 'flex-1 min-h-0' : ''}`} ref={containerRef}>
          {isLoading && (
            <div
              className="absolute inset-0 flex items-center justify-center bg-muted/50 z-10"
              style={isFullscreen ? undefined : { width, maxWidth: '100%', height }}
            >
              <div className="flex flex-col items-center gap-2">
                <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
                <span className="text-sm text-muted-foreground">Laster GeoGebra...</span>
              </div>
            </div>
          )}
          <div
            id={uniqueId}
            className={isFullscreen ? 'w-full h-full' : ''}
            style={isFullscreen ? undefined : { width, maxWidth: '100%', height }}
          />
        </div>
      </Card>
    </>
  );
}
