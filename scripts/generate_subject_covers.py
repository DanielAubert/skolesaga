#!/usr/bin/env python3
"""
Generer cover-bilder for fag som mangler hero-bilder.
Bruker Google Gemini for å lage bilder i samme stil som eksisterende.
"""

import os
import sys
import time
from pathlib import Path
from google import genai
from google.genai import types

# Stil-beskrivelse basert på eksisterende bilder
STYLE = """Photorealistic 3D render of a warm, bright classroom desk scene.
Large colorful 3D letter blocks spell out the subject name, standing upright on a natural wooden desk.
Each letter is a different bright color (red, blue, green, yellow, purple, orange).
Behind the letters is a green chalkboard mounted on a light wall, with subject-relevant chalk drawings/text.
Natural warm sunlight streams in from a window on the right side.
An open textbook lies on the desk in front of the letters, alongside a pencil and a notebook.
The overall mood is inviting, educational, and child-friendly.
High quality, sharp focus, soft shadows, 16:9 landscape aspect ratio."""

SUBJECTS = [
    {
        "name": "SAMFUNNSFAG",
        "filename": "samfunnsfag-hero",
        "items": "a small globe, a folded newspaper, and a miniature map on the desk. The chalkboard shows a simple world map outline and the word 'Demokrati' in chalk."
    },
    {
        "name": "KRLE",
        "filename": "krle-hero",
        "items": "a small white candle, a peace dove figurine, and an illustrated book about world religions on the desk. The chalkboard shows symbols of different religions (cross, crescent, Star of David, Om) drawn in chalk."
    },
    {
        "name": "KUNST OG HÅNDVERK",
        "filename": "kunst-hero",
        "items": "a wooden paint palette with colorful paint dots, a few paintbrushes, colored pencils, and a small clay sculpture on the desk. The chalkboard shows a color wheel and simple art sketches in chalk."
    },
    {
        "name": "MUSIKK",
        "filename": "musikk-hero",
        "items": "a small toy xylophone, a recorder (blokkfløyte), and sheet music on the desk. The chalkboard shows musical notes on a staff and a treble clef drawn in chalk."
    },
    {
        "name": "MAT OG HELSE",
        "filename": "mat-helse-hero",
        "items": "a small wooden cutting board, a whisk, an apple, and a recipe book on the desk. The chalkboard shows a simple food pyramid diagram drawn in chalk."
    },
    {
        "name": "KROPPSØVING",
        "filename": "kroppsoving-hero",
        "items": "a small soccer ball, a jump rope, a whistle on a lanyard, and a stopwatch on the desk. The chalkboard shows stick figure exercises and the word 'Aktivitet' drawn in chalk."
    },
]


def generate_image(client, subject, output_dir):
    """Generate a single subject cover image."""
    prompt = f"""{STYLE}

The 3D letter blocks spell "{subject['name']}" on the desk.
Additional subject-specific items on the desk: {subject['items']}

Do NOT include any text watermarks or logos. The image should look like a professional textbook cover photo."""

    print(f"\nGenererer: {subject['name']}...")

    try:
        response = client.models.generate_images(
            model="imagen-4.0-generate-001",
            prompt=prompt,
            config=types.GenerateImagesConfig(
                number_of_images=1,
                aspect_ratio="16:9",
            )
        )

        if response.generated_images:
            image = response.generated_images[0]
            filepath = output_dir / f"{subject['filename']}.png"
            image.image.save(filepath)
            print(f"  Lagret: {filepath}")

            # Convert to webp
            try:
                from PIL import Image
                img = Image.open(filepath)
                webp_path = output_dir / f"{subject['filename']}.webp"
                img.save(webp_path, 'WEBP', quality=85)
                os.remove(filepath)  # Remove PNG
                print(f"  Konvertert til WebP: {webp_path}")
            except Exception as e:
                print(f"  Advarsel: Kunne ikke konvertere til WebP: {e}")

            return True

        print(f"  Ingen bilde generert!")
        return False

    except Exception as e:
        print(f"  Feil: {e}")
        return False


def main():
    # Load API key
    api_key = os.environ.get('GEMINI_API_KEY')
    if not api_key:
        # Try loading from .env.local
        env_path = Path(__file__).parent.parent / '.env.local'
        if env_path.exists():
            with open(env_path) as f:
                for line in f:
                    if line.startswith('GEMINI_API_KEY='):
                        api_key = line.split('=', 1)[1].strip().strip("'\"")
                        break

    if not api_key:
        print("Feil: GEMINI_API_KEY ikke funnet!")
        return 1

    client = genai.Client(api_key=api_key)
    output_dir = Path(__file__).parent.parent / 'public' / 'images' / 'subjects'
    output_dir.mkdir(parents=True, exist_ok=True)

    # Filter to only subjects that don't have images yet
    missing = []
    for s in SUBJECTS:
        webp = output_dir / f"{s['filename']}.webp"
        png = output_dir / f"{s['filename']}.png"
        if not webp.exists() and not png.exists():
            missing.append(s)
        else:
            print(f"Hopper over {s['name']} - bilde finnes allerede")

    if not missing:
        print("Alle bilder finnes allerede!")
        return 0

    print(f"\nGenererer {len(missing)} bilder...")

    success = 0
    for i, subject in enumerate(missing):
        if i > 0:
            time.sleep(3)  # Rate limiting
        if generate_image(client, subject, output_dir):
            success += 1

    print(f"\nFerdig! {success}/{len(missing)} bilder generert.")
    return 0 if success == len(missing) else 1


if __name__ == '__main__':
    sys.exit(main())
