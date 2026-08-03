"use client";

import {
  BookOpen,
  GraduationCap,
  Users,
  Clock3,
  ExternalLink,
  FileText,
} from "lucide-react";

import { Course } from "@/data/courses";

type Props = {
  course?: Course;
  viewer: "portal" | "content" | null;
  onViewerChange: (viewer: "portal" | "content" | null) => void;
};

export default function CourseDetails({
  course,
  viewer,
  onViewerChange,
}: Props) {

  if (!course) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white px-6 py-5 text-center text-slate-500 shadow-sm">
        Select a course.
      </div>
    );
  }

  /* ==========================
     FULL SCREEN VIEWER
  ========================== */

  if (viewer) {
    return (
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

        {/* Header */}

        <div className="flex items-center justify-between border-b bg-slate-50 px-6 py-4">

          <button
            onClick={() => onViewerChange(null)}
            className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold transition hover:bg-white"
          >
            ← Back
          </button>

          <div className="text-center">

            <h2 className="text-lg font-bold text-slate-800">
              {course.title}
            </h2>

            <p className="text-sm text-slate-500">
              {viewer === "portal"
                ? "Student Portal"
                : "Course Contents"}
            </p>

          </div>

          <div className="w-20" />

        </div>

        <iframe
          src={
            viewer === "portal"
              ? course.studentPortal
              : course.courseContent
          }
          className="h-[850px] w-full"
        />

      </div>
    );
  }

  /* ==========================
     COURSE DETAILS
  ========================== */

  return (
    <div className="rounded-3xl border border-slate-200 bg-white px-6 py-5 shadow-sm">

      {/* Header */}

      <div className="flex items-start justify-between gap-4">

        <div>

          <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-600">
            {course.code}
          </span>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900">
            {course.title}
          </h2>

        </div>

        <span
          className={`rounded-full px-4 py-2 text-sm font-semibold whitespace-nowrap ${
            course.current
              ? "bg-emerald-100 text-emerald-700"
              : "bg-slate-100 text-slate-600"
          }`}
        >
          {course.current ? "Current Course" : "Past Course"}
        </span>

      </div>

      {/* Description */}

      <p className="mt-4 text-base leading-8 text-slate-600">
        {course.description}
      </p>

      {/* Dashboard */}

      <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_420px]">

        {/* Statistics */}

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

          <div className="grid grid-cols-2 gap-x-8 gap-y-6">

            <InfoCard
              icon={<GraduationCap size={18} />}
              title="Semester"
              value={course.semester}
            />

            <InfoCard
              icon={<BookOpen size={18} />}
              title="Credits"
              value={`${course.credits}`}
            />

            <InfoCard
              icon={<Users size={18} />}
              title="Students"
              value={`${course.students}`}
            />

            <InfoCard
              icon={<Clock3 size={18} />}
              title="Hours"
              value={`${course.teachingHours}`}
            />

          </div>

        </div>

        {/* Resources */}

        <div className="rounded-2xl border border-slate-200 bg-white p-0">

          <div className="flex h-full flex-col justify-center">

            <button
              onClick={() => onViewerChange("portal")}
              className="flex items-center gap-4 rounded-t-2xl p-4 transition hover:bg-blue-50"
            >

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                <ExternalLink size={22} />
              </div>

              <div className="text-left">

                <h3 className="text-lg font-bold">
                  Student Portal
                </h3>

                <p className="text-sm text-slate-600">
                  Attendance, Marks, Class Tests & Dashboard
                </p>

              </div>

            </button>

            <div className="mx-4 border-t border-slate-200" />

            <button
              onClick={() => onViewerChange("content")}
              className="flex items-center gap-4 rounded-b-2xl p-4 transition hover:bg-blue-50"
            >

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                <FileText size={22} />
              </div>

              <div className="text-left">

                <h3 className="text-lg font-bold">
                  Course Contents
                </h3>

                <p className="text-sm text-slate-600">
                  Syllabus, Lecture Plan & References
                </p>

              </div>

            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

function InfoCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3">

      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
        {icon}
      </div>

      <div>

        <p className="text-sm text-slate-500">
          {title}
        </p>

        <h4 className="text-2xl font-bold leading-none text-slate-900">
          {value}
        </h4>

      </div>

    </div>
  );
}