#!/usr/bin/env python3
"""
Generer illustrerte collage-stil cover-bilder for ungdomsskolefag.
Matcher stilen til VGS-bildene: fargerike illustrasjoner med stor fagtekst.
"""

import os
import sys
import time
from pathlib import Path
from google import genai
from google.genai import types

STYLE_BASE = """Create a vibrant, colorful illustrated collage-style educational cover image in 16:9 landscape format.
The image should have a modern flat illustration style with multiple scenes and icons arranged in a dynamic collage layout.
The subject name text should be large, bold, and prominently displayed in the center/lower portion of the image with a slight 3D effect or outline to make it stand out.
Use bright, saturated colors. Include multiple small illustrated vignettes, icons, and symbols related to the subject scattered throughout.
The overall feel should be energetic, educational, and appealing to teenagers (ages 13-16).
NO photorealism - this should look like a professional digital illustration/infographic.
Do NOT include any watermarks or logos."""

SUBJECTS = [
    {
        "name": "Matematikk",
        "filename": "matematikk-hero",
        "prompt": f"""{STYLE_BASE}

Subject: MATEMATIKK (Mathematics for Norwegian middle school)
The large text "Matematikk" should be displayed prominently.

Include illustrated elements: geometric shapes (triangles, circles, cubes), mathematical formulas and equations floating around (like x²+2x=0, π, fractions), a coordinate system with graphs, a calculator, rulers and compass, percentage symbols, algebra expressions, Pythagorean theorem illustration, pie charts, number lines.
Color palette: blues, purples, and warm accents. Background has a subtle mathematical grid pattern."""
    },
    {
        "name": "Norsk",
        "filename": "norsk-hero",
        "prompt": f"""{STYLE_BASE}

Subject: NORSK (Norwegian language and literature for middle school)
The large text "Norsk" should be displayed prominently.

Include illustrated elements: open books with Norwegian text, a quill pen and ink, a Norwegian flag, a stave church, a Viking ship, northern lights (aurora borealis), trolls from Norwegian folklore, mountains and fjords, speech bubbles, a microphone for oral presentations, theater masks, a newspaper, rune stones, Ibsen-style portrait silhouette.
Color palette: reds, whites, and blues (Norwegian flag colors) with warm earth tones."""
    },
    {
        "name": "Engelsk",
        "filename": "engelsk-hero",
        "prompt": f"""{STYLE_BASE}

Subject: ENGELSK (English language for Norwegian middle school)
The large text "Engelsk" should be displayed prominently.

Include illustrated elements: Union Jack and American flag, Big Ben, Statue of Liberty, open English books, speech bubbles with English words, a globe highlighting English-speaking countries, headphones, a smartphone with chat messages, Shakespeare silhouette, a dictionary, Sydney Opera House, maple leaf (Canada), movie clapperboard.
Color palette: deep blues, reds, and golds."""
    },
    {
        "name": "Naturfag",
        "filename": "naturfag-hero",
        "prompt": f"""{STYLE_BASE}

Subject: NATURFAG (Natural science for Norwegian middle school)
The large text "Naturfag" should be displayed prominently.

Include illustrated elements: a DNA helix, atom model, microscope, test tubes and beakers, a volcano erupting, the solar system, a plant cell, photosynthesis diagram, a magnet, electrical circuit, a frog, a leaf with veins, periodic table elements, rock layers/geology, weather symbols, a telescope, Norwegian nature (mountains, forest).
Color palette: greens, teals, and earth tones with bright science accents."""
    },
    {
        "name": "Samfunnsfag",
        "filename": "samfunnsfag-hero",
        "prompt": f"""{STYLE_BASE}

Subject: SAMFUNNSFAG (Social studies for Norwegian middle school)
The large text "Samfunnsfag" should be displayed prominently.

Include illustrated elements: the Norwegian Parliament (Stortinget) building, a globe with trade routes, diverse group of people, a ballot box and voting, scales of justice, a map of Norway, historical timeline, newspapers, human rights symbols, UN building, money/economy symbols, a compass rose, immigration/diversity, Viking age to modern Norway visual progression.
Color palette: warm oranges, ambers, and earthy tones with blue accents."""
    },
    {
        "name": "KRLE",
        "filename": "krle-hero",
        "prompt": f"""{STYLE_BASE}

Subject: KRLE (Religion, life philosophy and ethics for Norwegian middle school)
The large text "KRLE" should be displayed prominently.

Include illustrated elements: symbols of world religions (Christian cross, Islamic crescent, Star of David, Hindu Om, Buddhist wheel, Sikh Khanda), a peace dove, candles, diverse people in dialogue, an ethical dilemma illustration (scales/balance), a Norwegian stave church, a mosque, a temple, hands reaching together, a compass (moral compass), philosophy books, Yin-Yang symbol, a heart representing compassion.
Color palette: purples, violets, and warm golden tones."""
    },
    {
        "name": "Kunst og håndverk",
        "filename": "kunst-hero",
        "prompt": f"""{STYLE_BASE}

Subject: KUNST OG HÅNDVERK (Art and crafts for Norwegian middle school)
The large text "Kunst og håndverk" should be displayed prominently, possibly on two lines.

Include illustrated elements: a paint palette with colorful dots, paintbrushes, an easel with a canvas, colored pencils and crayons, a clay pot being shaped, scissors and craft paper, a color wheel, a camera, digital design on a tablet, weaving/textile patterns, Munch's Scream reference (stylized), architectural sketches, origami, sewing needle and thread, woodworking tools.
Color palette: rainbow colors - vibrant pinks, yellows, blues, greens."""
    },
    {
        "name": "Musikk",
        "filename": "musikk-hero",
        "prompt": f"""{STYLE_BASE}

Subject: MUSIKK (Music for Norwegian middle school)
The large text "Musikk" should be displayed prominently.

Include illustrated elements: a grand piano, an electric guitar, a recorder (blokkfløyte), drums, musical notes and treble clef floating around, a music staff with notes, headphones, a microphone on a stage, sheet music, a speaker with sound waves, people dancing, a choir singing, a DJ turntable, a violin, a smartphone playing music, a metronome, a concert scene.
Color palette: vibrant purples, magentas, electric blues, and golden yellows."""
    },
    {
        "name": "Mat og helse",
        "filename": "mat-helse-hero",
        "prompt": f"""{STYLE_BASE}

Subject: MAT OG HELSE (Food and health for Norwegian middle school)
The large text "Mat og helse" should be displayed prominently.

Include illustrated elements: a kitchen scene with pots and pans, fresh vegetables and fruits, a food pyramid/nutrition plate, a chef's hat, a whisk and spatula, a cutting board with ingredients, a recipe book, a heart representing health, a person exercising, a water glass, Norwegian traditional food (brunost, lefse), a balanced meal plate, measuring cups, an oven, diverse healthy foods from around the world.
Color palette: warm oranges, fresh greens, and appetizing reds."""
    },
    {
        "name": "Kroppsøving",
        "filename": "kroppsoving-hero",
        "prompt": f"""{STYLE_BASE}

Subject: KROPPSØVING (Physical education for Norwegian middle school)
The large text "Kroppsøving" should be displayed prominently.

Include illustrated elements: diverse teenagers playing various sports (soccer, basketball, swimming, skiing, running), a gymnasium/sports hall, a stopwatch, a whistle, a jump rope, a soccer ball, outdoor activities in Norwegian nature (hiking, cross-country skiing), a heart rate monitor, stretching exercises, a trophy, athletic track, climbing wall, team sports scene, a forest trail for orienteering.
Color palette: energetic cyans, teals, bright greens, and orange accents."""
    },
]


def generate_image(client, subject, output_dir):
    """Generate a single subject cover image using Imagen 4.0."""
    print(f"\nGenererer: {subject['name']}...")

    try:
        response = client.models.generate_images(
            model="imagen-4.0-generate-001",
            prompt=subject['prompt'],
            config=types.GenerateImagesConfig(
                number_of_images=1,
                aspect_ratio="16:9",
            )
        )

        if response.generated_images:
            image = response.generated_images[0]
            filepath = output_dir / f"{subject['filename']}.png"
            image.image.save(filepath)
            print(f"  Lagret PNG: {filepath}")

            # Convert to webp
            try:
                from PIL import Image
                img = Image.open(filepath)
                webp_path = output_dir / f"{subject['filename']}.webp"
                img.save(webp_path, 'WEBP', quality=85)
                os.remove(filepath)
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
    api_key = os.environ.get('GEMINI_API_KEY')
    if not api_key:
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

    print(f"Genererer {len(SUBJECTS)} illustrerte cover-bilder...\n")

    success = 0
    for i, subject in enumerate(SUBJECTS):
        if i > 0:
            time.sleep(3)
        if generate_image(client, subject, output_dir):
            success += 1

    print(f"\nFerdig! {success}/{len(SUBJECTS)} bilder generert.")
    return 0 if success == len(SUBJECTS) else 1


if __name__ == '__main__':
    sys.exit(main())
