"use client";

import { useState } from "react";
import {
  BookOpen,
  FileText,
  ExternalLink,
  Video,
  Link2,
  Clock,
  User,
  Calendar,
  Tag,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { courseData } from "@/data/courseData";

const tabs = [
  { id: "books", label: "Books", icon: BookOpen },
  { id: "publications", label: "Publications", icon: FileText },
  { id: "links", label: "Important Links", icon: Link2 },
  { id: "videos", label: "Video Resources", icon: Video },
] as const;

type TabId = (typeof tabs)[number]["id"];

export default function ResourcesPage() {
  const [activeTab, setActiveTab] = useState<TabId>("books");

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Resources</h1>
        <p className="text-muted-foreground text-lg">
          Books, research papers, videos, and useful links
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
              activeTab === tab.id
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
          >
            <tab.icon className="h-4 w-4" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Books Tab */}
      {activeTab === "books" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {courseData.books.map((book) => (
            <Card
              key={book.id}
              className="group transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
            >
              <CardContent className="p-6">
                <div className="flex gap-4">
                  {/* Book spine */}
                  <div
                    className="w-3 shrink-0 rounded-full self-stretch"
                    style={{ backgroundColor: book.coverColor || "#2563eb" }}
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-base mb-1 group-hover:text-primary transition-colors">
                      {book.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-1">
                      <User className="h-3.5 w-3.5" />
                      {book.author}
                    </div>
                    {book.edition && (
                      <Badge
                        variant="outline"
                        className="text-[10px] mb-3 font-normal"
                      >
                        {book.edition}
                      </Badge>
                    )}
                    <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                      {book.description}
                    </p>
                    {book.url && book.url !== "#" && (
                      <a
                        href={book.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={buttonVariants({ variant: "outline", size: "sm" })}
                      >
                        View Details
                        <ExternalLink className="ml-1.5 h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Publications Tab */}
      {activeTab === "publications" && (
        <div className="space-y-4">
          {courseData.publications.map((pub) => (
            <Card
              key={pub.id}
              className="group transition-all duration-200 hover:shadow-md"
            >
              <CardContent className="p-6">
                <h3 className="font-semibold text-base mb-2 group-hover:text-primary transition-colors">
                  {pub.title}
                </h3>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm text-muted-foreground mb-3">
                  <span className="flex items-center gap-1.5">
                    <User className="h-3.5 w-3.5" />
                    {pub.authors}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {pub.year}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Tag className="h-3.5 w-3.5" />
                    {pub.topic}
                  </span>
                </div>
                {pub.abstract && (
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {pub.abstract}
                  </p>
                )}
                {pub.url && pub.url !== "#" && (
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonVariants({ variant: "outline", size: "sm" })}
                  >
                    Read Publication
                    <ExternalLink className="ml-1.5 h-3 w-3" />
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Important Links Tab */}
      {activeTab === "links" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {courseData.externalLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <Card className="h-full transition-all duration-200 hover:shadow-md hover:border-primary/20 group-hover:-translate-y-0.5">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">
                      {link.title}
                    </h3>
                    <ExternalLink className="h-4 w-4 text-muted-foreground shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {link.description}
                  </p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      )}

      {/* Videos Tab */}
      {activeTab === "videos" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {courseData.videoResources.map((vid) => (
            <Card
              key={vid.id}
              className="group transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <Video className="h-5 w-5 text-red-500 shrink-0" />
                  <Badge variant="outline" className="text-[10px] font-normal">
                    {vid.platform}
                  </Badge>
                </div>
                <h3 className="font-semibold text-base mb-1 group-hover:text-primary transition-colors">
                  {vid.title}
                </h3>
                <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1.5">
                    <Tag className="h-3.5 w-3.5" />
                    {vid.topic}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {vid.duration}
                  </span>
                </div>
                <a
                  href={vid.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({ variant: "outline", size: "sm" })}
                >
                  Watch Video
                  <ExternalLink className="ml-1.5 h-3 w-3" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
