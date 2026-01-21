'use client'

import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react"
import { usePyodide } from "@/contexts/pyodide-context"

export function PyodideLoadingIndicator() {
  const { isLoading, isReady, error } = usePyodide()

  if (isReady) {
    return (
      <Alert className="mb-6 border-green-200 bg-green-50">
        <CheckCircle2 className="h-4 w-4 text-green-600" />
        <AlertDescription className="text-green-800">
          Python-miljøet er klart! Du kan nå kjøre kode.
        </AlertDescription>
      </Alert>
    )
  }

  if (error) {
    return (
      <Alert className="mb-6 border-red-200 bg-red-50" variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          {error} Prøv å laste siden på nytt.
        </AlertDescription>
      </Alert>
    )
  }

  if (isLoading) {
    return (
      <Alert className="mb-6 border-blue-200 bg-blue-50">
        <Loader2 className="h-4 w-4 animate-spin text-blue-600" />
        <AlertDescription className="text-blue-800">
          Laster Python-miljø... Dette kan ta noen sekunder første gang.
        </AlertDescription>
      </Alert>
    )
  }

  return null
}
