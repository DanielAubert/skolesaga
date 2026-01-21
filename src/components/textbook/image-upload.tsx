'use client';

import { useState, useRef, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import {
  Upload,
  X,
  Camera,
  CheckCircle2,
  Loader2,
  Image as ImageIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface ImageUploadProps {
  exerciseId: string;
  chapterId: string;
  courseId: string;
  onUpload: (url: string) => void;
  maxSizeMB?: number;
}

export function ImageUpload({
  exerciseId,
  chapterId,
  courseId,
  onUpload,
  maxSizeMB = 5,
}: ImageUploadProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isUploaded, setIsUploaded] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback(async (file: File) => {
    setError(null);

    // Sjekk filtype
    if (!file.type.startsWith('image/')) {
      setError('Vennligst velg et bilde (JPG, PNG, etc.)');
      return;
    }

    // Sjekk filstørrelse
    const sizeMB = file.size / (1024 * 1024);
    if (sizeMB > maxSizeMB) {
      setError(`Bildet er for stort. Maks størrelse er ${maxSizeMB} MB.`);
      return;
    }

    // Vis forhåndsvisning
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreview(e.target?.result as string);
    };
    reader.readAsDataURL(file);

    // Last opp til Supabase via API
    setIsUploading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('exerciseId', exerciseId);
      formData.append('chapterId', chapterId);
      formData.append('courseId', courseId);

      const response = await fetch('/api/uploads/image', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Opplasting feilet');
      }

      setIsUploaded(true);
      onUpload(data.url);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Kunne ikke laste opp bildet. Prøv igjen.');
      console.error('Upload error:', err);
    } finally {
      setIsUploading(false);
    }
  }, [maxSizeMB, onUpload, exerciseId, chapterId, courseId]);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);

      const file = e.dataTransfer.files[0];
      if (file) {
        handleFile(file);
      }
    },
    [handleFile]
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleFileSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        handleFile(file);
      }
    },
    [handleFile]
  );

  const clearPreview = () => {
    setPreview(null);
    setIsUploaded(false);
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    if (cameraInputRef.current) {
      cameraInputRef.current.value = '';
    }
  };

  return (
    <div className="space-y-4">
      {/* Forhåndsvisning */}
      {preview ? (
        <div className="relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={preview}
            alt="Forhåndsvisning av løsning"
            className="max-w-full max-h-96 rounded-lg border mx-auto"
          />
          <Button
            variant="destructive"
            size="icon"
            className="absolute top-2 right-2"
            onClick={clearPreview}
          >
            <X className="h-4 w-4" />
          </Button>

          {isUploading && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-lg">
              <div className="text-white text-center">
                <Loader2 className="h-8 w-8 animate-spin mx-auto mb-2" />
                <span>Laster opp...</span>
              </div>
            </div>
          )}

          {isUploaded && (
            <div className="absolute top-2 left-2">
              <div className="bg-green-500 text-white px-3 py-1 rounded-full flex items-center gap-1 text-sm">
                <CheckCircle2 className="h-4 w-4" />
                Lastet opp
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Drop-sone */
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          className={cn(
            'border-2 border-dashed rounded-lg p-8 text-center transition-colors',
            isDragging
              ? 'border-primary bg-primary/10'
              : 'border-muted-foreground/25 hover:border-primary/50'
          )}
        >
          <ImageIcon className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
          <p className="text-muted-foreground mb-4">
            Dra og slipp et bilde her, eller
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Button
              variant="outline"
              onClick={() => fileInputRef.current?.click()}
            >
              <Upload className="h-4 w-4 mr-2" />
              Velg fil
            </Button>
            <Button
              variant="outline"
              onClick={() => cameraInputRef.current?.click()}
            >
              <Camera className="h-4 w-4 mr-2" />
              Ta bilde
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            JPG, PNG eller GIF. Maks {maxSizeMB} MB.
          </p>
        </div>
      )}

      {/* Skjulte input-felter */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        className="hidden"
      />
      <input
        ref={cameraInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        onChange={handleFileSelect}
        className="hidden"
      />

      {/* Feilmelding */}
      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {/* Tips */}
      <p className="text-xs text-muted-foreground">
        Tips: Sørg for god belysning og at skriften er tydelig lesbar.
      </p>
    </div>
  );
}
