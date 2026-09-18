import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Module } from "@/types/course";

interface ModuleCardProps {
  module: Module;
}

export function ModuleCard({ module }: ModuleCardProps) {
  return (
    <Link href={`/modules/${module.id}`} className="group block">
      <Card className="h-full transition-all duration-200 hover:shadow-md hover:border-primary/30 group-hover:-translate-y-0.5">
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-3">
            <Badge
              variant="secondary"
              className="text-[11px] font-semibold tracking-wide"
            >
              MODULE {String(module.number).padStart(2, "0")}
            </Badge>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </div>

          <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
            {module.title}
          </h3>

          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {module.description}
          </p>

          <div className="mb-4">
            <p className="text-xs font-medium text-muted-foreground mb-1.5 uppercase tracking-wider">
              Topics
            </p>
            <ul className="space-y-1">
              {module.topics.slice(0, 4).map((topic) => (
                <li
                  key={topic.id}
                  className="text-sm text-muted-foreground flex items-start gap-1.5"
                >
                  <span className="text-primary/60 mt-0.5">•</span>
                  <span className="line-clamp-1">{topic.title}</span>
                </li>
              ))}
              {module.topics.length > 4 && (
                <li className="text-xs text-muted-foreground/70 pl-4">
                  +{module.topics.length - 4} more topics
                </li>
              )}
            </ul>
          </div>

          <div className="flex items-center text-sm font-medium text-primary">
            Open Module
            <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
