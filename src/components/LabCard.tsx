import Link from "next/link";
import { FlaskConical, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Lab } from "@/types/course";

interface LabCardProps {
  lab: Lab;
}

export function LabCard({ lab }: LabCardProps) {
  return (
    <Link href={`/labs/${lab.id}`} className="group block">
      <Card className="h-full transition-all duration-200 hover:shadow-md hover:border-primary/30 group-hover:-translate-y-0.5">
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-3">
            <Badge
              variant="secondary"
              className="text-[11px] font-semibold tracking-wide"
            >
              LAB {String(lab.number).padStart(2, "0")}
            </Badge>
            <FlaskConical className="h-4 w-4 text-muted-foreground" />
          </div>

          <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
            {lab.title}
          </h3>

          <div className="mb-4">
            <p className="text-xs font-medium text-muted-foreground mb-1 uppercase tracking-wider">
              Objective
            </p>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {lab.objective}
            </p>
          </div>

          <div className="mb-4">
            <p className="text-xs font-medium text-muted-foreground mb-1.5 uppercase tracking-wider">
              Requirements
            </p>
            <div className="flex flex-wrap gap-1.5">
              {lab.requirements.slice(0, 4).map((req) => (
                <Badge
                  key={req}
                  variant="outline"
                  className="text-[11px] font-normal"
                >
                  {req}
                </Badge>
              ))}
              {lab.requirements.length > 4 && (
                <Badge variant="outline" className="text-[11px] font-normal">
                  +{lab.requirements.length - 4}
                </Badge>
              )}
            </div>
          </div>

          <div className="flex items-center text-sm font-medium text-primary">
            View Lab
            <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
