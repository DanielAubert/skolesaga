#!/usr/bin/env python3
"""
Script to restructure Norsk VG1 del5 chapters.
This script analyzes each chapter and restructures the content array
so that exercises are placed right after the relevant theory sections.
"""

import re

def main():
    # Read the file
    with open('src/lib/data/textbook-content-norsk-vg1-del5.ts', 'r', encoding='utf-8') as f:
        content = f.read()

    print("Original file loaded")
    print(f"File size: {len(content)} characters")

    # Define restructuring for each chapter
    # Format: chapter_id -> list of (content_id, new_position_marker) or 'keep_order'

    # Chapter 8.1: Setningsanalyse
    # Structure mapping based on analysis:
    # - ex-1 (verbal) -> after def-1
    # - ex-6 (verbal MC) -> after ex-1
    # - ex-7 (subjekt MC) -> after def-2
    # - ex-2 (subjekt/objekt) -> after def-3
    # - ex-3 (adverbial) -> after def-4
    # - ex-4 (predikativ) -> after def-5
    # - ex-5 (fullstendig) -> after example-1
    # - ex-8, ex-9 -> after ex-5
    # - ex-10, ex-11 -> samleoppgaver

    chapter_8_1_order = [
        'norsk-vg1-8-1-intro',
        'norsk-vg1-8-1-ordliste',
        'norsk-vg1-8-1-image-setningsanalyse',
        'norsk-vg1-8-1-def-1',
        'norsk-vg1-8-1-ex-1',  # Moved: Finn verbalet
        'norsk-vg1-8-1-ex-6',  # Moved: MC about verbal
        'norsk-vg1-8-1-def-2',
        'norsk-vg1-8-1-ex-7',  # Moved: MC about subjekt
        'norsk-vg1-8-1-def-3',
        'norsk-vg1-8-1-ex-2',  # Moved: Finn subjekt og objekt
        'norsk-vg1-8-1-def-4',
        'norsk-vg1-8-1-ex-3',  # Moved: Identifiser adverbialer
        'norsk-vg1-8-1-def-5',
        'norsk-vg1-8-1-image-setningsledd',
        'norsk-vg1-8-1-image-ordklasser',
        'norsk-vg1-8-1-example-2',  # Moved before example-1 (predikativ vs adverbial)
        'norsk-vg1-8-1-ex-4',  # Moved: Finn predikativet
        'norsk-vg1-8-1-example-1',  # Fullstendig setningsanalyse
        'norsk-vg1-8-1-ex-5',  # Fullstendig setningsanalyse oppgave
        'norsk-vg1-8-1-ex-8',  # Setningsskjema
        'norsk-vg1-8-1-ex-9',  # Leddsetninger
        # --- Samleoppgaver ---
        'norsk-vg1-8-1-ex-10',  # Samleoppgave (drøftende)
        'norsk-vg1-8-1-ex-11',  # Samleoppgave (kreativ)
        'norsk-vg1-8-1-oppsummering',
        'norsk-vg1-8-1-se-ogsa',
    ]

    # Chapter 8.2: Tekstbinding og sammenheng
    chapter_8_2_order = [
        'norsk-vg1-8-2-intro',
        'norsk-vg1-8-2-ordliste',
        'norsk-vg1-8-2-image-tekstbinding',
        'norsk-vg1-8-2-def-1',  # Konjunksjoner
        'norsk-vg1-8-2-image-konnektiver',
        'norsk-vg1-8-2-def-2',  # Subjunksjoner
        'norsk-vg1-8-2-ex-1',  # Moved: Identifiser konjunksjoner og subjunksjoner
        'norsk-vg1-8-2-ex-6',  # Moved: MC about fordi
        'norsk-vg1-8-2-def-3',  # Referentbinding
        'norsk-vg1-8-2-ex-2',  # Moved: Finn referansene
        'norsk-vg1-8-2-ex-7',  # Moved: MC about referentbinding
        'norsk-vg1-8-2-def-4',  # Tematisk binding
        'norsk-vg1-8-2-ex-8',  # Moved: Tematisk progresjon
        'norsk-vg1-8-2-ex-9',  # Moved: Tre typer tematisk progresjon
        'norsk-vg1-8-2-def-5',  # Leksikalsk binding
        'norsk-vg1-8-2-example-1',  # Analyse av tekstbinding
        'norsk-vg1-8-2-example-2',  # Forbedre tekstbinding
        'norsk-vg1-8-2-ex-3',  # Forbedre tekstbinding
        'norsk-vg1-8-2-ex-4',  # Sett inn passende bindeord
        'norsk-vg1-8-2-ex-5',  # Skriv avsnitt med tekstbinding
        # --- Samleoppgaver ---
        'norsk-vg1-8-2-ex-10',  # Samleoppgave
        'norsk-vg1-8-2-ex-11',  # Samleoppgave
        'norsk-vg1-8-2-oppsummering',
        'norsk-vg1-8-2-se-ogsa',
    ]

    # Print the orders
    print("\n=== Chapter 8.1 restructured order ===")
    for i, item in enumerate(chapter_8_1_order):
        print(f"{i+1}. {item}")

    print("\n=== Chapter 8.2 restructured order ===")
    for i, item in enumerate(chapter_8_2_order):
        print(f"{i+1}. {item}")

if __name__ == '__main__':
    main()
