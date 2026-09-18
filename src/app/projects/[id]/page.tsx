import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowLeft,
  Rocket,
  Target,
  Cpu,
  ListOrdered,
  CheckCircle2,
  Lightbulb,
  Library,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { courseData } from "@/data/courseData";

type PageParams = { id: string };

const difficultyColors: Record<string, string> = {
  Beginner: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
  Intermediate: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
  Advanced: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
};

export async function generateStaticParams() {
  return courseData.projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata(
  props: { params: Promise<PageParams> }
): Promise<Metadata> {
  const params = await props.params;
  const project = courseData.projects.find((p) => p.id === params.id);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} | AIM3002P Projects`,
    description: project.description,
  };
}

export default async function ProjectDetailPage(
  props: { params: Promise<PageParams> }
) {
  const params = await props.params;
  const project = courseData.projects.find((p) => p.id === params.id);
  if (!project) notFound();

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
      <Link
        href="/projects"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
      >
        <ArrowLeft className="h-4 w-4 mr-1.5" />
        All Projects
      </Link>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Badge
            className={`text-xs font-semibold border-0 ${difficultyColors[project.difficulty] || ""}`}
          >
            {project.difficulty}
          </Badge>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">
          {project.title}
        </h1>
        <p className="text-lg text-muted-foreground">{project.description}</p>
      </div>

      {/* Objective */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <Target className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold">Objective</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            {project.objective}
          </p>
        </CardContent>
      </Card>

      {/* Technologies */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <Cpu className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold">Technologies</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-sm">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Implementation Steps */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <ListOrdered className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold">Implementation Steps</h2>
          </div>
          <ol className="space-y-2.5">
            {project.implementationSteps.map((step, i) => (
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

      {/* Expected Outcome */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle2 className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold">Expected Outcome</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            {project.expectedOutcome}
          </p>
        </CardContent>
      </Card>

      {/* Future Scope */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Lightbulb className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold">Future Scope</h2>
          </div>
          <ul className="space-y-2">
            {project.futureScope.map((scope) => (
              <li
                key={scope}
                className="flex items-start gap-2.5 text-sm text-muted-foreground"
              >
                <span className="text-primary/60 mt-0.5">•</span>
                {scope}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Resources */}
      {project.resources.length > 0 && (
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <Library className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-semibold">Resources</h2>
            </div>
            <ul className="space-y-2">
              {project.resources.map((res) => (
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
    </div>
  );
}
