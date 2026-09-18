import Link from "next/link";
import { GraduationCap, Heart } from "lucide-react";
import { courseData } from "@/data/courseData";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-muted/30 mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <GraduationCap className="h-4 w-4" />
              </div>
              <span className="font-bold">
                {courseData.code} — {courseData.title}
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {courseData.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm mb-3">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { href: "/modules", label: "Modules" },
                { href: "/labs", label: "Labs" },
                { href: "/projects", label: "Projects" },
                { href: "/questions", label: "Important Questions" },
                { href: "/resources", label: "Resources" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-sm mb-3">Resources</h4>
            <ul className="space-y-2">
              {courseData.externalLinks.slice(0, 5).map((link) => (
                <li key={link.id}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Collaboration */}
          <div>
            <h4 className="font-semibold text-sm mb-3">Collaboration</h4>
            <ul className="space-y-2">
              {courseData.collaborationLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border/60 flex flex-col items-center justify-center gap-2">
          <p className="text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} {courseData.code} — {courseData.title}.
            All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground flex items-center gap-1 flex-wrap justify-center">
            Built with <Heart className="h-3 w-3 text-red-500 fill-red-500" />{" "}
            for students | Made by{" "}
            <a
              href="https://github.com/ram-mittal"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:text-foreground underline underline-offset-2 transition-colors"
            >
              Ram Mittal
            </a>
            {" "}(
            <a
              href="https://www.linkedin.com/in/rammittal"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground underline underline-offset-2 transition-colors"
            >
              LinkedIn
            </a>
            )
          </p>
        </div>
      </div>
    </footer>
  );
}
