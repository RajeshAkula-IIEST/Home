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
    <div
  className="
    fixed
    inset-0
    z-50
    bg-white
    flex
    flex-col
">
      {/* Header */}

      <div className="flex items-center justify-between border-b bg-white px-6 py-4">

        <button
          onClick={onClose}
          className="flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-semibold hover:bg-slate-100 transition"
        >
          <X size={18} />
          Close
        </button>

        <div className="text-center">

          <h2 className="text-xl font-bold">
            {course.title}
          </h2>

          <p className="text-sm text-slate-500">
            {viewer === "portal"
              ? "Student Portal"
              : "Course Contents"}
          </p>

        </div>

        <div className="w-24" />

      </div>

      {/* Viewer */}

      <iframe
        src={
          viewer === "portal"
            ? course.studentPortal
            : course.courseContent
        }
        className="h-[calc(100%-72px)] w-full"
      />

    </div>
  );
}