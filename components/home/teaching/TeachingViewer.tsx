"use client";

import { X } from "lucide-react";
import { Course } from "@/data/courses";

type Props = {
  course: Course;
  viewer: "portal" | "content";
  onClose: () => void;
};

export default function TeachingViewer({
  course,
  viewer,
  onClose,
}: Props) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-white">

      {/* ===================================================== */}
      {/* HEADER */}
      {/* ===================================================== */}

      <div className="flex shrink-0 items-center justify-between border-b bg-white px-3 py-3 sm:px-6 sm:py-4">

        {/* Close button */}

        <button
          type="button"
          onClick={onClose}
          className="flex items-center gap-1.5 rounded-xl border border-slate-300 px-3 py-2 text-sm font-semibold transition hover:bg-slate-100 sm:gap-2 sm:px-4"
        >
          <X size={17} />
          <span>Close</span>
        </button>

        {/* Title */}

        <div className="min-w-0 flex-1 px-3 text-center">

          <h2 className="truncate text-sm font-bold text-slate-900 sm:text-xl">
            {course.title}
          </h2>

          <p className="text-xs text-slate-500 sm:text-sm">
            {viewer === "portal"
              ? "Student Portal"
              : "Course Contents"}
          </p>

        </div>

        {/* Header balancing space */}

        <div className="w-[58px] sm:w-24" />

      </div>

      {/* ===================================================== */}
      {/* VIEWER */}
      {/* ===================================================== */}

      <div className="min-h-0 flex-1">

        <iframe
          src={
            viewer === "portal"
              ? course.studentPortal
              : course.courseContent
          }
          title={
            viewer === "portal"
              ? "Student Portal"
              : "Course Contents"
          }
          className="h-full w-full border-0"
        />

      </div>

    </div>
  );
}