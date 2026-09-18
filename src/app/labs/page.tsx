import type { Metadata } from "next";
import { courseData } from "@/data/courseData";
import { LabCard } from "@/components/LabCard";

export const metadata: Metadata = {
  title: "Labs | AIM3002P — Generative AI",
  description: "Hands-on lab experiments for AIM3002P Fundamentals of Generative AI.",
};

export default function LabsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Labs</h1>
        <p className="text-muted-foreground text-lg">
          {courseData.labs.length} practical experiments to build real ML skills
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {courseData.labs.map((lab) => (
          <LabCard key={lab.id} lab={lab} />
        ))}
      </div>
    </div>
  );
}
