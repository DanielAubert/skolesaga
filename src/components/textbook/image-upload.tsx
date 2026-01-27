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

interface UploadedImage {
  url: string;
  preview: string;
}

interface ImageUploadProps {
  exerciseId: string;
  chapterId: string;
  courseId: string;
  onUpload: (urls: string[]) => void;
  maxSizeMB?: number;
  maxImages?: number;
  existingUrls?: string[];
}

export function ImageUpload({
  exerciseId,
  chapterId,
  courseId,
  onUpload,
  maxSizeMB = 5,
  maxImages = 3,
  existingUrls = [],
}: ImageUploadProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedImages, setUploadedImages] = useState<UploadedImage[]>(
    existingUrls.map((url) => ({ url, preview: url }))
  );
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  const canUploadMore = uploadedImages.length < maxImages;

  const uploadFile = useCallback(async (file: File): Promise<string | null> => {
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

    return data.url;
  }, [exerciseId, chapterId, courseId]);

  const handleFile = useCallback(async (file: File) => {
    setError(null);

    if (!canUploadMore) {
      setError(`Du kan laste opp maks ${maxImages} bilder per oppgave.`);
      return;
    }

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

    // Vis forhåndsvisning og last opp
    const reader = new FileReader();
    reader.onload = async (e) => {
      const preview = e.target?.result as string;

      setIsUploading(true);
      try {
        const url = await uploadFile(file);
        if (url) {
          const newImages = [...uploadedImages, { url, preview }];
          setUploadedImages(newImages);
          onUpload(newImages.map((img) => img.url));
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Kunne ikke laste opp bildet. Prøv igjen.');
        console.error('Upload error:', err);
      } finally {
        setIsUploading(false);
      }
    };
    reader.readAsDataURL(file);
  }, [canUploadMore, maxImages, maxSizeMB, uploadFile, uploadedImages, onUpload]);

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
      // Reset input så samme fil kan velges igjen
      if (e.target) {
        e.target.value = '';
      }
    },
    [handleFile]
  );

  const removeImage = useCallback((index: number) => {
    const newImages = uploadedImages.filter((_, i) => i !== index);
    setUploadedImages(newImages);
    onUpload(newImages.map((img) => img.url));
    setError(null);
  }, [uploadedImages, onUpload]);

  return (
    <div className="space-y-4">
      {/* Opplastede bilder */}
      {uploadedImages.length > 0 && (
        <div className="grid gap-3">
          {uploadedImages.map((img, index) => (
            <div key={index} className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.preview}
                alt={`Opplastet bilde ${index + 1}`}
                className="max-w-full max-h-96 rounded-lg border mx-auto"
              />
              <Button
                variant="destructive"
                size="icon"
                className="absolute top-2 right-2 h-7 w-7"
                onClick={() => removeImage(index)}
              >
                <X className="h-4 w-4" />
              </Button>
              <div className="absolute top-2 left-2">
                <div className="bg-green-500 text-white px-3 py-1 rounded-full flex items-center gap-1 text-sm">
                  <CheckCircle2 className="h-4 w-4" />
                  Bilde {index + 1}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Opplastingsstatus */}
      {isUploading && (
        <div className="flex items-center justify-center gap-2 p-4 border rounded-lg bg-muted/50">
          <Loader2 className="h-5 w-5 animate-spin" />
          <span className="text-sm">Laster opp...</span>
        </div>
      )}

      {/* Drop-sone - vis kun hvis vi kan laste opp flere */}
      {canUploadMore && !isUploading && (
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          className={cn(
            'border-2 border-dashed rounded-lg p-6 text-center transition-colors',
            isDragging
              ? 'border-primary bg-primary/10'
              : 'border-muted-foreground/25 hover:border-primary/50'
          )}
        >
          <ImageIcon className="h-10 w-10 mx-auto mb-3 text-muted-foreground" />
          <p className="text-muted-foreground mb-3 text-sm">
            Dra og slipp et bilde her, eller
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => fileInputRef.current?.click()}
            >
              <Upload className="h-4 w-4 mr-2" />
              Velg fil
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => cameraInputRef.current?.click()}
            >
              <Camera className="h-4 w-4 mr-2" />
              Ta bilde
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            JPG, PNG eller GIF. Maks {maxSizeMB} MB.
            {uploadedImages.length > 0 && (
              <> ({uploadedImages.length}/{maxImages} bilder lastet opp)</>
            )}
          </p>
        </div>
      )}

      {/* Maks nådd */}
      {!canUploadMore && !isUploading && (
        <p className="text-xs text-muted-foreground text-center">
          Maks {maxImages} bilder lastet opp.
        </p>
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
