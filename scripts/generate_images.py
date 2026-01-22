#!/usr/bin/env python3
"""
Masseproduksjon av bilder med Google GenAI (Imagen / Gemini)

Bruk:
    python generate_images.py --input prompts.txt --output ./generated_images
    python generate_images.py --input prompts.xlsx --output ./generated_images
"""

import os
import argparse
import time
from pathlib import Path
from google import genai
from google.genai import types

# Konfigurasjon
MODEL_ID = "gemini-2.0-flash"  # Gemini 2.0 Flash med bildegenerering


def load_prompts_from_txt(filepath: str) -> list[str]:
    """Les prompts fra en tekstfil (en prompt per linje)."""
    with open(filepath, 'r', encoding='utf-8') as f:
        prompts = [line.strip() for line in f if line.strip()]
    return prompts


def load_prompts_from_excel(filepath: str) -> list[str]:
    """Les prompts fra en Excel-fil (første kolonne)."""
    try:
        import pandas as pd
    except ImportError:
        print("Feil: pandas er ikke installert. Kjør: pip install pandas openpyxl")
        raise

    df = pd.read_excel(filepath)
    # Anta at prompts er i første kolonne
    prompts = df.iloc[:, 0].dropna().astype(str).tolist()
    return prompts


def load_prompts(filepath: str) -> list[str]:
    """Last prompts fra fil basert på filtype."""
    path = Path(filepath)

    if path.suffix.lower() == '.txt':
        return load_prompts_from_txt(filepath)
    elif path.suffix.lower() in ['.xlsx', '.xls']:
        return load_prompts_from_excel(filepath)
    else:
        raise ValueError(f"Ustøttet filformat: {path.suffix}. Bruk .txt eller .xlsx")


def sanitize_filename(text: str, max_length: int = 50) -> str:
    """Lag et gyldig filnavn fra prompt-teksten."""
    # Fjern ugyldige tegn
    invalid_chars = '<>:"/\\|?*'
    for char in invalid_chars:
        text = text.replace(char, '')

    # Begrens lengde og fjern mellomrom på endene
    text = text[:max_length].strip()

    # Erstatt mellomrom med understrek
    text = text.replace(' ', '_')

    return text or "image"


def generate_image_gemini(client: genai.Client, prompt: str, output_path: Path, index: int) -> bool:
    """Generer bilde med Gemini modellen."""
    try:
        # Legg til eksplisitt instruksjon for bildegenerering
        full_prompt = f"Generate an image: {prompt}"
        response = client.models.generate_content(
            model=MODEL_ID,
            contents=full_prompt,
            config=types.GenerateContentConfig(
                response_modalities=['image', 'text'],
            )
        )

        # Finn bildet i responsen
        for part in response.candidates[0].content.parts:
            if part.inline_data is not None:
                # Bestem filtype basert på mime type
                mime_type = part.inline_data.mime_type
                extension = '.png' if 'png' in mime_type else '.jpg'

                # Lag filnavn
                safe_name = sanitize_filename(prompt)
                filename = f"{index:03d}_{safe_name}{extension}"
                filepath = output_path / filename

                # Lagre bildet
                with open(filepath, 'wb') as f:
                    f.write(part.inline_data.data)

                print(f"  Lagret: {filename}")
                return True

        print(f"  Advarsel: Ingen bilde i respons for prompt {index}")
        return False

    except Exception as e:
        print(f"  Feil ved generering: {e}")
        return False


def generate_image_imagen(client: genai.Client, prompt: str, output_path: Path, index: int) -> bool:
    """Generer bilde med Imagen modellen."""
    try:
        response = client.models.generate_images(
            model="imagen-3.0-generate-002",
            prompt=prompt,
            config=types.GenerateImagesConfig(
                number_of_images=1,
                aspect_ratio="1:1",  # eller "16:9", "9:16", "4:3", "3:4"
            )
        )

        if response.generated_images:
            image = response.generated_images[0]

            # Lag filnavn
            safe_name = sanitize_filename(prompt)
            filename = f"{index:03d}_{safe_name}.png"
            filepath = output_path / filename

            # Lagre bildet
            image.image.save(filepath)
            print(f"  Lagret: {filename}")
            return True
        else:
            print(f"  Advarsel: Ingen bilde generert for prompt {index}")
            return False

    except Exception as e:
        print(f"  Feil ved generering: {e}")
        return False


def main():
    parser = argparse.ArgumentParser(
        description='Generer bilder fra en liste med prompts ved hjelp av Google GenAI'
    )
    parser.add_argument(
        '--input', '-i',
        required=True,
        help='Sti til inputfil med prompts (.txt eller .xlsx)'
    )
    parser.add_argument(
        '--output', '-o',
        default='./generated_images',
        help='Mappe for genererte bilder (default: ./generated_images)'
    )
    parser.add_argument(
        '--delay', '-d',
        type=float,
        default=2.0,
        help='Forsinkelse mellom API-kall i sekunder (default: 2.0)'
    )
    parser.add_argument(
        '--model', '-m',
        choices=['gemini', 'imagen'],
        default='gemini',
        help='Velg modell: gemini eller imagen (default: gemini)'
    )

    args = parser.parse_args()

    # Sjekk at API-nøkkel er satt
    api_key = os.environ.get('GEMINI_API_KEY')
    if not api_key:
        print("Feil: GEMINI_API_KEY miljøvariabel er ikke satt!")
        print("Kjør: export GEMINI_API_KEY='din-api-nøkkel'")
        return 1

    # Opprett klient
    client = genai.Client(api_key=api_key)

    # Last prompts
    print(f"Laster prompts fra: {args.input}")
    try:
        prompts = load_prompts(args.input)
    except Exception as e:
        print(f"Feil ved lasting av prompts: {e}")
        return 1

    print(f"Fant {len(prompts)} prompts")

    # Opprett output-mappe
    output_path = Path(args.output)
    output_path.mkdir(parents=True, exist_ok=True)
    print(f"Lagrer bilder til: {output_path.absolute()}")

    # Velg genereringsfunksjon
    generate_func = generate_image_gemini if args.model == 'gemini' else generate_image_imagen

    # Generer bilder
    successful = 0
    failed = 0

    print(f"\nStarter generering med {args.model} modellen...\n")

    for i, prompt in enumerate(prompts, 1):
        print(f"[{i}/{len(prompts)}] {prompt[:60]}{'...' if len(prompt) > 60 else ''}")

        if generate_func(client, prompt, output_path, i):
            successful += 1
        else:
            failed += 1

        # Vent mellom kall for å unngå rate limiting
        if i < len(prompts):
            time.sleep(args.delay)

    # Oppsummering
    print(f"\n{'='*50}")
    print(f"Ferdig!")
    print(f"  Vellykkede: {successful}")
    print(f"  Feilet: {failed}")
    print(f"  Bilder lagret i: {output_path.absolute()}")

    return 0 if failed == 0 else 1


if __name__ == '__main__':
    exit(main())
