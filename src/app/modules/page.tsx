import type { Metadata } from "next";
import { courseData } from "@/data/courseData";
import { ModuleCard } from "@/components/ModuleCard";

export const metadata: Metadata = {
  title: "Modules | AIM3002P — Generative AI",
  description: "Browse all course modules for AIM3002P Fundamentals of Generative AI.",
};

export default function ModulesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Modules</h1>
        <p className="text-muted-foreground text-lg">
          {courseData.modules.length} modules covering the complete{" "}
          {courseData.title} curriculum
        </p>
      </div>

      {/* Module Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {courseData.modules.map((mod) => (
          <ModuleCard key={mod.id} module={mod} />
        ))}
      </div>
    </div>
  );
}
