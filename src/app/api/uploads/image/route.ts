import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/config";
import { createClient } from "@supabase/supabase-js";

const BUCKET_NAME = "exercise-uploads";

function getSupabaseAdmin() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  return createClient(supabaseUrl, supabaseServiceKey);
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ message: "Ikke innlogget" }, { status: 401 });
    }

    const formData = await request.formData();
    const file = formData.get("file") as File | null;
    const exerciseId = formData.get("exerciseId") as string | null;
    const chapterId = formData.get("chapterId") as string | null;
    const courseId = formData.get("courseId") as string | null;

    if (!file || !exerciseId || !chapterId || !courseId) {
      return NextResponse.json(
        { message: "Mangler fil eller metadata" },
        { status: 400 }
      );
    }

    // Valider filtype (MIME-type)
    const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/gif", "image/webp"];
    if (!ALLOWED_TYPES.includes(file.type)) {
      return NextResponse.json(
        { message: "Kun bildefiler er tillatt (JPEG, PNG, GIF, WebP)" },
        { status: 400 }
      );
    }

    // Valider filstørrelse (maks 5 MB)
    const MAX_SIZE = 5 * 1024 * 1024;
    if (file.size > MAX_SIZE) {
      return NextResponse.json(
        { message: "Bildet er for stort. Maks 5 MB." },
        { status: 400 }
      );
    }

    // Valider filinnhold med magic bytes
    const headerBytes = new Uint8Array(await file.slice(0, 12).arrayBuffer());
    const isJpeg = headerBytes[0] === 0xFF && headerBytes[1] === 0xD8 && headerBytes[2] === 0xFF;
    const isPng = headerBytes[0] === 0x89 && headerBytes[1] === 0x50 && headerBytes[2] === 0x4E && headerBytes[3] === 0x47;
    const isGif = headerBytes[0] === 0x47 && headerBytes[1] === 0x49 && headerBytes[2] === 0x46;
    const isWebp = headerBytes[0] === 0x52 && headerBytes[1] === 0x49 && headerBytes[2] === 0x46 && headerBytes[3] === 0x46
      && headerBytes[8] === 0x57 && headerBytes[9] === 0x45 && headerBytes[10] === 0x42 && headerBytes[11] === 0x50;

    if (!isJpeg && !isPng && !isGif && !isWebp) {
      return NextResponse.json(
        { message: "Filinnholdet samsvarer ikke med en gyldig bildefil" },
        { status: 400 }
      );
    }

    const supabase = getSupabaseAdmin();

    // Opprett bucket hvis den ikke finnes
    const { data: buckets } = await supabase.storage.listBuckets();
    const bucketExists = buckets?.some((b) => b.name === BUCKET_NAME);

    if (!bucketExists) {
      await supabase.storage.createBucket(BUCKET_NAME, {
        public: true,
        fileSizeLimit: MAX_SIZE,
        allowedMimeTypes: ["image/jpeg", "image/png", "image/gif", "image/webp"],
      });
    }

    // Generer unik filsti
    const timestamp = Date.now();
    const sanitizedName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
    const filePath = `${courseId}/${chapterId}/${exerciseId}/${session.user.id}/${timestamp}-${sanitizedName}`;

    // Last opp fil
    const arrayBuffer = await file.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);

    const { error: uploadError } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(filePath, buffer, {
        contentType: file.type,
        upsert: false,
      });

    if (uploadError) {
      console.error("Supabase upload error:", uploadError);
      return NextResponse.json(
        { message: "Kunne ikke laste opp bildet. Prøv igjen." },
        { status: 500 }
      );
    }

    // Hent offentlig URL
    const { data: urlData } = supabase.storage
      .from(BUCKET_NAME)
      .getPublicUrl(filePath);

    return NextResponse.json({ url: urlData.publicUrl });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { message: "En feil oppstod under opplasting" },
      { status: 500 }
    );
  }
}
