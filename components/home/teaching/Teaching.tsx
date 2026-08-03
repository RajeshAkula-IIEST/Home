"use client";

import { useMemo, useState } from "react";

import Section from "@/components/ui/Section";

import TeachingPhilosophy from "@/components/home/teaching/TeachingPhilosophy";
import TeachingStats from "@/components/home/teaching/TeachingStats";
import CourseSelector from "@/components/home/teaching/CourseSelector";
import CourseList from "@/components/home/teaching/CourseList";
import CourseDetails from "@/components/home/teaching/CourseDetails";
import TeachingViewer from "@/components/home/teaching/TeachingViewer";

import { courses } from "@/data/courses";

export default function Teaching() {

  const [category, setCategory] = useState<"current" | "past">("current");

  const filteredCourses = useMemo(
    () =>
      courses.filter((course) =>
        category === "current"
          ? course.current
          : !course.current
      ),
    [category]
  );

  const [selectedCode, setSelectedCode] = useState(
    filteredCourses[0]?.code ?? ""
  );

  const selectedCourse =
    filteredCourses.find(
      (course) => course.code === selectedCode
    ) ?? filteredCourses[0];

  const [viewer, setViewer] = useState<
    "portal" | "content" | null
  >(null);

  return (

    <Section id="teaching">

      {/* Relative wrapper for overlay */}

      <div className="relative">

        {/* Teaching Philosophy */}

        <TeachingPhilosophy />

        {/* Statistics */}

        <div className="mt-3">

          <TeachingStats />

        </div>

        {/* Current / Past */}

        <div className="mt-3">

          <CourseSelector
            value={category}
            onChange={(value) => {

              setCategory(value);

              const next = courses.filter((c) =>
                value === "current"
                  ? c.current
                  : !c.current
              );

              setSelectedCode(next[0]?.code ?? "");

              setViewer(null);

            }}
          />

        </div>

        {/* Main Layout */}

        <div className="mt-3 grid gap-6 lg:grid-cols-[250px_1fr]">

          <CourseList
            courses={filteredCourses}
            selected={selectedCode}
            onSelect={(code) => {

              setSelectedCode(code);

              setViewer(null);

            }}
          />

          <CourseDetails
            course={selectedCourse}
            viewer={viewer}
            onViewerChange={setViewer}
          />

        </div>

        {/* ==========================
             FULL SCREEN OVERLAY
        =========================== */}

        {viewer && selectedCourse && (

          <TeachingViewer
            course={selectedCourse}
            viewer={viewer}
            onClose={() => setViewer(null)}
          />

        )}

      </div>

    </Section>

  );
}