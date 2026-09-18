import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowLeft,
  Download,
  FlaskConical,
  Target,
  BookOpen,
  Wrench,
  ListOrdered,
  Code2,
  MonitorCheck,
  MessageCircleQuestion,
  Library,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { courseData } from "@/data/courseData";

type PageParams = { id: string };

export async function generateStaticParams() {
  return courseData.labs.map((lab) => ({ id: lab.id }));
}

export async function generateMetadata(
  props: { params: Promise<PageParams> }
): Promise<Metadata> {
  const params = await props.params;
  const lab = courseData.labs.find((l) => l.id === params.id);
  if (!lab) return { title: "Lab Not Found" };
  return {
    title: `Lab ${String(lab.number).padStart(2, "0")}: ${lab.title} | AIM3002P`,
    description: lab.objective,
  };
}

export default async function LabDetailPage(
  props: { params: Promise<PageParams> }
) {
  const params = await props.params;
  const lab = courseData.labs.find((l) => l.id === params.id);
  if (!lab) notFound();

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
      <Link
        href="/labs"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
      >
        <ArrowLeft className="h-4 w-4 mr-1.5" />
        All Labs
      </Link>

      {/* Header */}
      <div className="mb-8">
        <Badge
          variant="secondary"
          className="mb-3 text-xs font-semibold tracking-widest"
        >
          LAB {String(lab.number).padStart(2, "0")}
        </Badge>
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">{lab.title}</h1>
      </div>

      {/* Objective */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <Target className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold">Objective</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            {lab.objective}
          </p>
        </CardContent>
      </Card>

      {/* Theory */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <BookOpen className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold">Theory</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">{lab.theory}</p>
        </CardContent>
      </Card>

      {/* Requirements */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <Wrench className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold">Requirements</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {lab.requirements.map((req) => (
              <Badge key={req} variant="secondary" className="text-sm">
                {req}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Procedure */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <ListOrdered className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold">Procedure</h2>
          </div>
          <ol className="space-y-2.5">
            {lab.procedure.map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-semibold">
                  {i + 1}
                </span>
                <span className="text-sm text-muted-foreground pt-0.5">
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </CardContent>
      </Card>

      {/* Code */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Code2 className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold">Code / Implementation</h2>
            <Badge variant="outline" className="ml-auto text-xs">
              {lab.codeLanguage}
            </Badge>
          </div>
          <div className="rounded-lg bg-[#1e1e2e] p-4 overflow-x-auto">
            <pre className="text-sm text-[#cdd6f4] leading-relaxed">
              <code>{lab.code}</code>
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Expected Output */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <MonitorCheck className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold">Expected Output</h2>
          </div>
          <div className="rounded-lg bg-muted/50 p-4">
            <pre className="text-sm text-muted-foreground whitespace-pre-wrap">
              {lab.expectedOutput}
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Viva Questions */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <MessageCircleQuestion className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold">Viva Questions</h2>
          </div>
          <ol className="space-y-2.5">
            {lab.vivaQuestions.map((vq, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-semibold text-muted-foreground">
                  {i + 1}
                </span>
                <span className="text-sm text-muted-foreground pt-0.5">
                  {vq}
                </span>
              </li>
            ))}
          </ol>
        </CardContent>
      </Card>

      {/* Lab Resources */}
      {lab.resources.length > 0 && (
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <Library className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-semibold">Lab Resources</h2>
            </div>
            <ul className="space-y-2">
              {lab.resources.map((res) => (
                <li
                  key={res}
                  className="flex items-start gap-2.5 text-sm text-muted-foreground"
                >
                  <span className="text-primary/60 mt-0.5">•</span>
                  {res}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Download Button */}
      <div className="flex justify-center">
        <a href={lab.manualUrl || "#"} download className={buttonVariants({ size: "lg", variant: "outline" })}>
          <Download className="h-4 w-4 mr-2" />
          Download Lab Manual
        </a>
      </div>
    </div>
  );
}
