"use client";

import { useState, useEffect, useCallback } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { MainNav } from "@/components/navigation/main-nav";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Flag,
  RefreshCw,
  Trash2,
  Users,
  Copy,
  Check,
  ClipboardCopy,
  ExternalLink,
} from "lucide-react";

interface Feedback {
  id: string;
  category: string;
  message: string;
  course_id: string | null;
  chapter_id: string | null;
  chapter_title: string | null;
  page_url: string | null;
  contact_email: string | null;
  user_id: string | null;
  status: string;
  created_at: string;
}

const STATUS_LABELS: Record<string, string> = {
  ny: "Ny",
  "under-arbeid": "Under arbeid",
  lost: "Løst",
  avvist: "Avvist",
};

/** Bygger en prompt som kan limes rett inn i Claude Code for å rette feilen. */
function buildClaudePrompt(item: Feedback): string {
  const lines = [
    `En bruker har meldt ${item.category === "feil" ? "en feil" : "et forbedringsforslag"} på Skolesaga (${new Date(item.created_at).toLocaleDateString("nb-NO")}):`,
    "",
  ];

  if (item.chapter_id) {
    lines.push(`Kapittel: ${item.chapter_title || item.chapter_id}${item.course_id ? ` i kurset ${item.course_id}` : ""}`);
    lines.push(`Kapittelfil: src/lib/data/chapters/${item.chapter_id}.json`);
    const narrativId = item.chapter_id.endsWith("-narrativ")
      ? item.chapter_id.replace(/-narrativ$/, "")
      : `${item.chapter_id}-narrativ`;
    lines.push(`Søsterversjon (sjekk om samme feil finnes der): src/lib/data/chapters/${narrativId}.json`);
  }
  if (item.page_url) {
    lines.push(`Side: ${item.page_url}`);
  }

  lines.push("", "Melding fra bruker:", `"${item.message}"`, "");
  lines.push(
    item.category === "feil"
      ? "Undersøk meldingen og finn rotårsaken i kapittelfilen før du retter noe. Hvis brukeren har rett: rett feilen i både vanlig og narrativ versjon der det er relevant. Hvis brukeren tar feil: ikke endre noe, men forklar hvorfor."
      : "Vurder forslaget. Hvis det er fornuftig og passer bokens struktur: gjennomfør det i kapittelfilen (og narrativ versjon der det er relevant). Hvis ikke: forklar hvorfor."
  );
  lines.push("Kjør npm run build for å verifisere at endringen ikke knekker noe.");

  return lines.join("\n");
}

export default function AdminFeedbackPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [items, setItems] = useState<Feedback[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState("ny");
  const [total, setTotal] = useState(0);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const fetchFeedback = useCallback(async () => {
    setIsLoading(true);
    try {
      const params = new URLSearchParams();
      if (statusFilter && statusFilter !== "alle") params.set("status", statusFilter);

      const response = await fetch(`/api/feedback?${params}`);
      const data = await response.json();

      if (response.ok) {
        setItems(data.feedback);
        setTotal(data.total);
      } else {
        console.error("Feil:", data.message);
      }
    } catch (error) {
      console.error("Feil ved henting av tilbakemeldinger:", error);
    } finally {
      setIsLoading(false);
    }
  }, [statusFilter]);

  useEffect(() => {
    if (status === "loading") return;

    if (!session?.user || session.user.role !== "admin") {
      router.push("/dashboard");
      return;
    }

    fetchFeedback();
  }, [session, status, router, fetchFeedback]);

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (error) {
      console.error("Kunne ikke kopiere:", error);
      alert("Kunne ikke kopiere til utklippstavlen");
    }
  };

  const copyAllVisible = () => {
    if (items.length === 0) return;
    const combined = items.map((item) => buildClaudePrompt(item)).join("\n\n---\n\n");
    copyToClipboard(combined, "__all__");
  };

  const handleStatusChange = async (id: string, newStatus: string) => {
    setUpdatingId(id);
    try {
      const response = await fetch("/api/feedback", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus }),
      });

      const data = await response.json();
      if (response.ok) {
        // Fjern fra listen hvis den ikke lenger matcher filteret
        if (statusFilter !== "alle" && newStatus !== statusFilter) {
          setItems(items.filter((i) => i.id !== id));
          setTotal(total - 1);
        } else {
          setItems(items.map((i) => (i.id === id ? { ...i, status: newStatus } : i)));
        }
      } else {
        alert(`Feil: ${data.message}`);
      }
    } catch (error) {
      console.error("Feil ved oppdatering:", error);
      alert("Kunne ikke oppdatere status");
    } finally {
      setUpdatingId(null);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Slette denne tilbakemeldingen permanent?")) return;
    try {
      const response = await fetch(`/api/feedback?id=${id}`, { method: "DELETE" });
      const data = await response.json();
      if (response.ok) {
        setItems(items.filter((i) => i.id !== id));
        setTotal(total - 1);
      } else {
        alert(`Feil: ${data.message}`);
      }
    } catch (error) {
      console.error("Feil ved sletting:", error);
      alert("Kunne ikke slette");
    }
  };

  if (status === "loading" || session?.user?.role !== "admin") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <MainNav />

      <main id="main-content" className="flex-1 container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-3">
                <Flag className="h-6 w-6" />
                <CardTitle>Tilbakemeldinger</CardTitle>
                <Badge variant="outline">{total} meldinger</Badge>
              </div>
              <div className="flex items-center gap-2">
                <Link href="/dashboard/admin/users">
                  <Button variant="outline" size="sm">
                    <Users className="h-4 w-4 mr-2" />
                    Brukere
                  </Button>
                </Link>
                <Button variant="outline" size="sm" onClick={fetchFeedback}>
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Oppdater
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {/* Filtre og masse-kopiering */}
            <div className="flex gap-4 mb-6 flex-wrap">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-44">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="alle">Alle</SelectItem>
                  <SelectItem value="ny">Ny</SelectItem>
                  <SelectItem value="under-arbeid">Under arbeid</SelectItem>
                  <SelectItem value="lost">Løst</SelectItem>
                  <SelectItem value="avvist">Avvist</SelectItem>
                </SelectContent>
              </Select>
              <Button
                variant="secondary"
                onClick={copyAllVisible}
                disabled={items.length === 0}
                className="gap-2"
              >
                {copiedId === "__all__" ? (
                  <Check className="h-4 w-4 text-green-600" />
                ) : (
                  <ClipboardCopy className="h-4 w-4" />
                )}
                Kopier alle viste til Claude
              </Button>
            </div>

            {/* Tabell */}
            {isLoading ? (
              <div className="flex justify-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
              </div>
            ) : items.length === 0 ? (
              <div className="text-center py-12 text-muted-foreground">
                Ingen tilbakemeldinger{statusFilter !== "alle" ? ` med status «${STATUS_LABELS[statusFilter] || statusFilter}»` : ""}
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-24">Dato</TableHead>
                    <TableHead className="w-28">Kategori</TableHead>
                    <TableHead>Melding</TableHead>
                    <TableHead className="w-40">Kapittel</TableHead>
                    <TableHead className="w-36">Status</TableHead>
                    <TableHead className="w-28">Handlinger</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {items.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="align-top">
                        <span className="text-sm text-muted-foreground whitespace-nowrap">
                          {new Date(item.created_at).toLocaleDateString("nb-NO")}
                        </span>
                      </TableCell>
                      <TableCell className="align-top">
                        <Badge variant={item.category === "feil" ? "destructive" : "secondary"}>
                          {item.category === "feil" ? "Feil" : "Forbedring"}
                        </Badge>
                      </TableCell>
                      <TableCell className="align-top">
                        <button
                          type="button"
                          className="text-left text-sm whitespace-pre-wrap"
                          onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                          title={expandedId === item.id ? "Vis mindre" : "Vis hele meldingen"}
                        >
                          {expandedId === item.id || item.message.length <= 160
                            ? item.message
                            : `${item.message.slice(0, 160)}…`}
                        </button>
                        {item.contact_email && (
                          <div className="text-xs text-muted-foreground mt-1">
                            Kontakt: {item.contact_email}
                          </div>
                        )}
                      </TableCell>
                      <TableCell className="align-top">
                        {item.chapter_id ? (
                          <div className="text-sm">
                            {item.page_url ? (
                              <Link
                                href={item.page_url}
                                target="_blank"
                                className="inline-flex items-center gap-1 hover:underline"
                              >
                                {item.chapter_title || item.chapter_id}
                                <ExternalLink className="h-3 w-3 shrink-0" />
                              </Link>
                            ) : (
                              <span>{item.chapter_title || item.chapter_id}</span>
                            )}
                            {item.course_id && (
                              <div className="text-xs text-muted-foreground">{item.course_id}</div>
                            )}
                          </div>
                        ) : (
                          <span className="text-sm text-muted-foreground">—</span>
                        )}
                      </TableCell>
                      <TableCell className="align-top">
                        <Select
                          value={item.status}
                          onValueChange={(value) => handleStatusChange(item.id, value)}
                          disabled={updatingId === item.id}
                        >
                          <SelectTrigger className="w-32">
                            <SelectValue>{STATUS_LABELS[item.status] || item.status}</SelectValue>
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ny">Ny</SelectItem>
                            <SelectItem value="under-arbeid">Under arbeid</SelectItem>
                            <SelectItem value="lost">Løst</SelectItem>
                            <SelectItem value="avvist">Avvist</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="align-top">
                        <div className="flex items-center gap-1">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => copyToClipboard(buildClaudePrompt(item), item.id)}
                            title="Kopier som Claude-prompt"
                          >
                            {copiedId === item.id ? (
                              <Check className="h-4 w-4 text-green-600" />
                            ) : (
                              <Copy className="h-4 w-4" />
                            )}
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-destructive hover:text-destructive hover:bg-destructive/10"
                            onClick={() => handleDelete(item.id)}
                            title="Slett tilbakemelding"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
}
