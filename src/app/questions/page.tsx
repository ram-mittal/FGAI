"use client";

import { useState } from "react";
import type { Metadata } from "next";
import { HelpCircle, Filter } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { courseData } from "@/data/courseData";

const questionTypeBadgeColors: Record<string, string> = {
  short: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
  long: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400",
  numerical: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
  conceptual: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400",
  viva: "bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-400",
};

export default function QuestionsPage() {
  const [selectedModule, setSelectedModule] = useState<string>("all");

  const filteredModules =
    selectedModule === "all"
      ? courseData.modules
      : courseData.modules.filter((m) => m.id === selectedModule);

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">
          Important Questions
        </h1>
        <p className="text-muted-foreground text-lg">
          Exam preparation questions organized by module
        </p>
      </div>

      {/* Filter */}
      <div className="mb-8 flex items-center gap-3">
        <Filter className="h-4 w-4 text-muted-foreground" />
        <select
          value={selectedModule}
          onChange={(e) => setSelectedModule(e.target.value)}
          className="rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          <option value="all">All Modules</option>
          {courseData.modules.map((mod) => (
            <option key={mod.id} value={mod.id}>
              Module {String(mod.number).padStart(2, "0")} — {mod.title}
            </option>
          ))}
        </select>
      </div>

      {/* Questions by module */}
      <div className="space-y-8">
        {filteredModules.map((mod) => (
          <div key={mod.id}>
            <div className="flex items-center gap-3 mb-4">
              <Badge
                variant="secondary"
                className="text-xs font-semibold tracking-wider"
              >
                MODULE {String(mod.number).padStart(2, "0")}
              </Badge>
              <h2 className="text-lg font-semibold">{mod.title}</h2>
            </div>

            <Card>
              <CardContent className="p-4 sm:p-6">
                <ol className="space-y-3">
                  {mod.importantQuestions.map((q, i) => (
                    <li
                      key={q.id}
                      className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-muted/30 transition-colors"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-semibold text-muted-foreground">
                        {i + 1}
                      </span>
                      <p className="flex-1 text-sm pt-0.5">{q.question}</p>
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

            <Separator className="mt-8" />
          </div>
        ))}
      </div>
    </div>
  );
}
