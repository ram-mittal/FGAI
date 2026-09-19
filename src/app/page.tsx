import Link from "next/link";
import {
  BookOpen,
  FileText,
  FlaskConical,
  Rocket,
  HelpCircle,
  Library,
  ArrowRight,
  ExternalLink,
  GraduationCap,
  Target,
  CheckCircle2,
  LayoutGrid,
  User,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { courseData } from "@/data/courseData";

const quickAccessCards = [
  {
    icon: BookOpen,
    label: "Modules",
    description: "Course syllabus and topics",
    href: "/modules",
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-50 dark:bg-blue-950/40",
  },
  {
    icon: FileText,
    label: "Notes",
    description: "Lecture notes and study material",
    href: "/modules",
    color: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-50 dark:bg-emerald-950/40",
  },
  {
    icon: FlaskConical,
    label: "Labs",
    description: "Practical experiments",
    href: "/labs",
    color: "text-purple-600 dark:text-purple-400",
    bg: "bg-purple-50 dark:bg-purple-950/40",
  },
  {
    icon: Rocket,
    label: "Projects",
    description: "Course projects and ideas",
    href: "/projects",
    color: "text-orange-600 dark:text-orange-400",
    bg: "bg-orange-50 dark:bg-orange-950/40",
  },
  {
    icon: HelpCircle,
    label: "Important Questions",
    description: "Exam preparation",
    href: "/questions",
    color: "text-rose-600 dark:text-rose-400",
    bg: "bg-rose-50 dark:bg-rose-950/40",
  },
  {
    icon: Library,
    label: "Resources",
    description: "Books, papers, videos & docs",
    href: "/resources",
    color: "text-cyan-600 dark:text-cyan-400",
    bg: "bg-cyan-50 dark:bg-cyan-950/40",
  },
];

const collaborationIcons: Record<string, string> = {
  github: "💻",
  "hard-drive": "☁️",
  cloud: "🧪",
  "message-circle": "💬",
  "bar-chart": "📊",
};

export default function HomePage() {
  return (
    <div>
      {/* ─── Hero Section ──────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-background to-indigo-50/50 dark:from-blue-950/20 dark:via-background dark:to-indigo-950/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent dark:from-blue-900/10" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <Badge
              variant="secondary"
              className="mb-4 px-4 py-1.5 text-sm font-semibold tracking-widest"
            >
              {courseData.code}
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              {courseData.title}
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-6 max-w-2xl mx-auto">
              {courseData.description}
            </p>

            {/* Instructor Highlight */}
            <div className="inline-flex items-center gap-3 bg-white/70 dark:bg-white/5 backdrop-blur-sm border border-border/60 rounded-full px-5 py-2.5 mb-8 shadow-sm">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 text-white shadow-md">
                <User className="h-4 w-4" />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground font-medium leading-none mb-0.5">Course Instructor</p>
                <p className="text-sm font-semibold tracking-tight">Prof. Shraddha Jadhav</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/modules" className={buttonVariants({ size: "lg", className: "px-8" })}>
                Explore Modules
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/modules" className={buttonVariants({ variant: "outline", size: "lg", className: "px-8" })}>
                View Notes
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Quick Access ──────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            Quick Access
          </h2>
          <p className="text-muted-foreground">
            Find what you need in 2–3 clicks
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {quickAccessCards.map((card) => (
            <Link key={card.label} href={card.href} className="group block">
              <Card className="h-full transition-all duration-200 hover:shadow-md hover:border-primary/20 group-hover:-translate-y-0.5">
                <CardContent className="p-6 flex items-start gap-4">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${card.bg} transition-transform group-hover:scale-105`}
                  >
                    <card.icon className={`h-6 w-6 ${card.color}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                      {card.label}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {card.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <Separator className="mx-auto max-w-7xl" />

      {/* ─── Course Overview ───────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            Course Overview
          </h2>
          <p className="text-muted-foreground">
            Everything you need to know about {courseData.code}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Description */}
          <Card className="lg:col-span-2">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-lg">Course Description</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {courseData.longDescription}
              </p>
            </CardContent>
          </Card>

          {/* Course Structure Stats */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <LayoutGrid className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-lg">Course Structure</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: courseData.modules.length, label: "Modules" },
                  { value: courseData.labs.length, label: "Labs" },
                  { value: courseData.projects.length, label: "Projects" },
                  {
                    value: `${courseData.books.length + courseData.publications.length + courseData.videoResources.length + courseData.externalLinks.length}+`,
                    label: "Resources",
                  },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="text-center p-3 rounded-lg bg-muted/50"
                  >
                    <p className="text-2xl font-bold text-primary">
                      {stat.value}
                    </p>
                    <p className="text-xs text-muted-foreground font-medium">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Prerequisites */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Target className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-lg">Prerequisites</h3>
              </div>
              <ul className="space-y-2.5">
                {courseData.prerequisites.map((prereq) => (
                  <li
                    key={prereq}
                    className="flex items-start gap-2.5 text-sm text-muted-foreground"
                  >
                    <span className="text-primary/60 mt-0.5">•</span>
                    {prereq}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Learning Objectives */}
          <Card className="lg:col-span-2">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-lg">Learning Objectives</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {courseData.learningObjectives.map((obj) => (
                  <div
                    key={obj}
                    className="flex items-start gap-2.5 text-sm text-muted-foreground"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-green-500 mt-0.5 shrink-0" />
                    {obj}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="mx-auto max-w-7xl" />

      {/* ─── Collaboration Links ───────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            Collaboration
          </h2>
          <p className="text-muted-foreground">
            Tools and platforms for learning together
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {courseData.collaborationLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <Card className="h-full transition-all duration-200 hover:shadow-md hover:border-primary/20 group-hover:-translate-y-0.5">
                <CardContent className="p-5 flex items-center gap-4">
                  <span className="text-2xl">
                    {collaborationIcons[link.icon] || "🔗"}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-xs text-muted-foreground truncate">
                      {link.description}
                    </p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
