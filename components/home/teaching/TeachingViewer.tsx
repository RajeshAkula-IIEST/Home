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
    <div className="fixed inset-0 z-[100] bg-white">

      {/* ===================================================== */}
      {/* THIN HEADER */}
      {/* ===================================================== */}

      <div className="absolute left-0 right-0 top-0 z-[110] flex h-10 items-center justify-between border-b border-slate-200 bg-white/95 px-2 shadow-sm backdrop-blur sm:h-12 sm:px-4">

        {/* Close Button */}

        <button
          type="button"
          onClick={onClose}
          className="
            flex
            items-center
            gap-1
            rounded-lg
            px-2
            py-1
            text-xs
            font-semibold
            text-slate-600
            transition
            hover:bg-slate-100
            active:bg-slate-200
          "
        >
          <X size={15} />
          <span>Close</span>
        </button>

        {/* Viewer Type */}

        <div className="min-w-0 flex-1 px-2 text-center">

          <p className="truncate text-[11px] font-semibold text-slate-700 sm:text-sm">
            {viewer === "portal"
              ? "Student Portal"
              : "Course Contents"}
          </p>

        </div>

        {/* Balance Header */}

        <div className="w-[45px] sm:w-[55px]" />

      </div>

      {/* ===================================================== */}
      {/* VIEWER */}
      {/* ===================================================== */}

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
        className="
          absolute
          bottom-0
          left-0
          top-10
          h-[calc(100%-2.5rem)]
          w-full
          border-0
          sm:top-12
          sm:h-[calc(100%-3rem)]
        "
      />

    </div>
  );
}