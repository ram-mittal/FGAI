import Link from "next/link";
import { Rocket, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/types/course";

interface ProjectCardProps {
  project: Project;
}

const difficultyColors: Record<string, string> = {
  Beginner: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
  Intermediate: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
  Advanced: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.id}`} className="group block">
      <Card className="h-full transition-all duration-200 hover:shadow-md hover:border-primary/30 group-hover:-translate-y-0.5">
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-3">
            <Badge
              className={`text-[11px] font-semibold border-0 ${difficultyColors[project.difficulty] || ""}`}
            >
              {project.difficulty}
            </Badge>
            <Rocket className="h-4 w-4 text-muted-foreground" />
          </div>

          <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>

          <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
            {project.description}
          </p>

          <div className="mb-4">
            <p className="text-xs font-medium text-muted-foreground mb-1.5 uppercase tracking-wider">
              Technologies
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.slice(0, 5).map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="text-[11px] font-normal"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex items-center text-sm font-medium text-primary">
            View Project
            <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
