"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Search,
  BookOpen,
  FlaskConical,
  Rocket,
  HelpCircle,
  FileText,
  Video,
  Library,
} from "lucide-react";
import { courseData } from "@/data/courseData";

interface SearchResult {
  type: string;
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const [query, setQuery] = useState("");

  // Keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        onOpenChange(true);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onOpenChange]);

  // Reset query on close
  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  const results = useMemo(() => {
    if (!query.trim()) return [];

    const q = query.toLowerCase();
    const found: SearchResult[] = [];

    // Search modules
    courseData.modules.forEach((mod) => {
      if (
        mod.title.toLowerCase().includes(q) ||
        mod.description.toLowerCase().includes(q)
      ) {
        found.push({
          type: "Module",
          title: `Module ${String(mod.number).padStart(2, "0")} — ${mod.title}`,
          description: mod.description,
          href: `/modules/${mod.id}`,
          icon: <BookOpen className="h-4 w-4" />,
        });
      }

      // Search topics within modules
      mod.topics.forEach((topic) => {
        if (topic.title.toLowerCase().includes(q)) {
          found.push({
            type: "Topic",
            title: topic.title,
            description: `Module ${mod.number}: ${mod.title}`,
            href: `/modules/${mod.id}`,
            icon: <FileText className="h-4 w-4" />,
          });
        }
      });

      // Search notes
      mod.notes.forEach((note) => {
        if (
          note.title.toLowerCase().includes(q) ||
          note.description.toLowerCase().includes(q)
        ) {
          found.push({
            type: "Note",
            title: note.title,
            description: note.description,
            href: `/modules/${mod.id}`,
            icon: <FileText className="h-4 w-4" />,
          });
        }
      });

      // Search important questions
      mod.importantQuestions.forEach((iq) => {
        if (iq.question.toLowerCase().includes(q)) {
          found.push({
            type: "Question",
            title: iq.question,
            description: `Module ${mod.number}: ${mod.title}`,
            href: "/questions",
            icon: <HelpCircle className="h-4 w-4" />,
          });
        }
      });
    });

    // Search labs
    courseData.labs.forEach((lab) => {
      if (
        lab.title.toLowerCase().includes(q) ||
        lab.objective.toLowerCase().includes(q)
      ) {
        found.push({
          type: "Lab",
          title: `Lab ${String(lab.number).padStart(2, "0")} — ${lab.title}`,
          description: lab.objective,
          href: `/labs/${lab.id}`,
          icon: <FlaskConical className="h-4 w-4" />,
        });
      }
    });

    // Search projects
    courseData.projects.forEach((project) => {
      if (
        project.title.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q)
      ) {
        found.push({
          type: "Project",
          title: project.title,
          description: project.description,
          href: `/projects/${project.id}`,
          icon: <Rocket className="h-4 w-4" />,
        });
      }
    });

    // Search books
    courseData.books.forEach((book) => {
      if (
        book.title.toLowerCase().includes(q) ||
        book.author.toLowerCase().includes(q)
      ) {
        found.push({
          type: "Book",
          title: book.title,
          description: `by ${book.author}`,
          href: "/resources",
          icon: <Library className="h-4 w-4" />,
        });
      }
    });

    // Search publications
    courseData.publications.forEach((pub) => {
      if (
        pub.title.toLowerCase().includes(q) ||
        pub.authors.toLowerCase().includes(q) ||
        pub.topic.toLowerCase().includes(q)
      ) {
        found.push({
          type: "Publication",
          title: pub.title,
          description: `${pub.authors} (${pub.year})`,
          href: "/resources",
          icon: <FileText className="h-4 w-4" />,
        });
      }
    });

    // Search videos
    courseData.videoResources.forEach((vid) => {
      if (
        vid.title.toLowerCase().includes(q) ||
        vid.topic.toLowerCase().includes(q)
      ) {
        found.push({
          type: "Video",
          title: vid.title,
          description: `${vid.topic} — ${vid.duration}`,
          href: "/resources",
          icon: <Video className="h-4 w-4" />,
        });
      }
    });

    return found.slice(0, 20);
  }, [query]);

  // Group results by type
  const grouped = useMemo(() => {
    const groups: Record<string, SearchResult[]> = {};
    results.forEach((r) => {
      if (!groups[r.type]) groups[r.type] = [];
      groups[r.type].push(r);
    });
    return groups;
  }, [results]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[550px] p-0 gap-0 overflow-hidden">
        <DialogHeader className="sr-only">
          <DialogTitle>Search course content</DialogTitle>
        </DialogHeader>
        <div className="flex items-center border-b px-4">
          <Search className="h-4 w-4 text-muted-foreground shrink-0" />
          <Input
            placeholder="Search modules, topics, labs, projects..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="h-12 border-0 focus-visible:ring-0 focus-visible:ring-offset-0 pl-3 text-sm"
          />
          <kbd className="hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
            ESC
          </kbd>
        </div>

        <div className="max-h-[400px] overflow-y-auto p-2">
          {query.trim() && results.length === 0 && (
            <div className="py-8 text-center text-sm text-muted-foreground">
              No results found for &ldquo;{query}&rdquo;
            </div>
          )}

          {!query.trim() && (
            <div className="py-8 text-center text-sm text-muted-foreground">
              Start typing to search course content...
              <div className="mt-2 text-xs">
                Tip: Use <kbd className="rounded border px-1 py-0.5 text-[10px]">Ctrl+K</kbd> to open search anytime
              </div>
            </div>
          )}

          {Object.entries(grouped).map(([type, items]) => (
            <div key={type} className="mb-3">
              <div className="px-3 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                {type}s
              </div>
              {items.map((item, i) => (
                <Link
                  key={`${type}-${i}`}
                  href={item.href}
                  onClick={() => onOpenChange(false)}
                  className="flex items-start gap-3 rounded-md px-3 py-2.5 text-sm hover:bg-accent transition-colors"
                >
                  <span className="mt-0.5 text-muted-foreground shrink-0">
                    {item.icon}
                  </span>
                  <div className="min-w-0">
                    <div className="font-medium truncate">{item.title}</div>
                    <div className="text-xs text-muted-foreground truncate">
                      {item.description}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
