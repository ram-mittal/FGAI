import type { Metadata } from "next";
import { courseData } from "@/data/courseData";
import { ProjectCard } from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects | AIM3002P — Generative AI",
  description: "Course projects and ideas for AIM3002P Generative AI.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Projects</h1>
        <p className="text-muted-foreground text-lg">
          {courseData.projects.length} project ideas to apply your ML knowledge
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {courseData.projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
