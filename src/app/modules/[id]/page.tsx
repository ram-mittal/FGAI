import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowLeft,
  FileText,
  Download,
  Eye,
  HelpCircle,
  BookOpen,
  List,
  StickyNote,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { courseData } from "@/data/courseData";

type PageParams = { id: string };

export async function generateStaticParams() {
  return courseData.modules.map((mod) => ({ id: mod.id }));
}

export async function generateMetadata(
  props: { params: Promise<PageParams> }
): Promise<Metadata> {
  const params = await props.params;
  const mod = courseData.modules.find((m) => m.id === params.id);
  if (!mod) return { title: "Module Not Found" };
  return {
    title: `Module ${String(mod.number).padStart(2, "0")}: ${mod.title} | AIM3002P`,
    description: mod.description,
  };
}

const noteTypeIcons: Record<string, string> = {
  pdf: "📄",
  markdown: "📝",
  ppt: "📊",
  doc: "📃",
  other: "📎",
};

const questionTypeBadgeColors: Record<string, string> = {
  short: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
  long: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400",
  numerical: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
  conceptual: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400",
  viva: "bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-400",
};

export default async function ModuleDetailPage(
  props: { params: Promise<PageParams> }
) {
  const params = await props.params;
  const mod = courseData.modules.find((m) => m.id === params.id);
  if (!mod) notFound();

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
      {/* Back link */}
      <Link
        href="/modules"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
      >
        <ArrowLeft className="h-4 w-4 mr-1.5" />
        All Modules
      </Link>

      {/* Header */}
      <div className="mb-8">
        <Badge
          variant="secondary"
          className="mb-3 text-xs font-semibold tracking-widest"
        >
          MODULE {String(mod.number).padStart(2, "0")}
        </Badge>
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">{mod.title}</h1>
        <p className="text-lg text-muted-foreground">{mod.description}</p>
      </div>

      {/* Overview */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <BookOpen className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold">Overview</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            {mod.overview}
          </p>
        </CardContent>
      </Card>

      {/* Topics */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <List className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold">Topics</h2>
          </div>
          <ol className="space-y-2.5">
            {mod.topics.map((topic, i) => (
              <li key={topic.id} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-semibold">
                  {i + 1}
                </span>
                <span className="text-sm pt-0.5">{topic.title}</span>
              </li>
            ))}
          </ol>
        </CardContent>
      </Card>

      {/* Notes */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <StickyNote className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold">Notes</h2>
          </div>
          <div className="space-y-3">
            {mod.notes.map((note) => (
              <div
                key={note.id}
                className="flex items-center justify-between rounded-lg border border-border/60 p-4 hover:bg-muted/30 transition-colors"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="text-xl shrink-0">
                    {noteTypeIcons[note.type] || "📄"}
                  </span>
                  <div className="min-w-0">
                    <p className="font-medium text-sm">{note.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {note.description} — {note.type.toUpperCase()}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0 ml-4">
                  <a href={note.url || "#"} target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "outline", size: "sm" })}>
                    <Eye className="h-3.5 w-3.5 mr-1.5" />
                    View
                  </a>
                  <a href={note.downloadUrl || "#"} download className={buttonVariants({ variant: "outline", size: "sm" })}>
                    <Download className="h-3.5 w-3.5 mr-1.5" />
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Important Questions */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <HelpCircle className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold">Important Questions</h2>
          </div>
          <ol className="space-y-3">
            {mod.importantQuestions.map((q, i) => (
              <li
                key={q.id}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/30 transition-colors"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-semibold text-muted-foreground">
                  {i + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm">{q.question}</p>
                </div>
                <Badge
                  className={`text-[10px] font-medium border-0 shrink-0 ${questionTypeBadgeColors[q.type] || ""}`}
                >
                  {q.type}
                </Badge>
              </li>
            ))}
          </ol>
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        {mod.number > 1 ? (
          <Link href={`/modules/module-${mod.number - 1}`} className={buttonVariants({ variant: "outline" })}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Module {String(mod.number - 1).padStart(2, "0")}
          </Link>
        ) : (
          <div />
        )}
        {mod.number < courseData.modules.length ? (
          <Link href={`/modules/module-${mod.number + 1}`} className={buttonVariants({ variant: "outline" })}>
            Module {String(mod.number + 1).padStart(2, "0")}
            <ArrowLeft className="h-4 w-4 ml-2 rotate-180" />
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
