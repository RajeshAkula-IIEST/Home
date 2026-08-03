"use client";

import { ExternalLink, FileText } from "lucide-react";
import { Course } from "@/data/courses";

type Props = {
  course?: Course;
  viewer: "portal" | "content" | null;
};

export default function ViewerPanel({
  course,
  viewer,
}: Props) {

  if (!viewer || !course) {
    return (
      <div className="flex h-[700px] items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-slate-50">
        <div className="text-center">

          <FileText
            className="mx-auto text-slate-400"
            size={50}
          />

          <h3 className="mt-5 text-2xl font-semibold text-slate-700">
            Viewer
          </h3>

          <p className="mt-3 max-w-sm text-slate-500">
            Select <strong>Student Portal</strong> or
            <strong> Course Contents</strong> to display them here.
          </p>

        </div>
      </div>
    );
  }

  if (viewer === "portal") {

    return (

      <div className="rounded-3xl border border-slate-200 bg-white shadow-sm">

        <div className="flex items-center justify-between border-b p-5">

          <h3 className="text-xl font-bold">
            Student Portal
          </h3>

          <a
            href={course.studentPortal}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
          >
            Open in New Tab

            <ExternalLink size={18} />
          </a>

        </div>

        <iframe
          src={course.studentPortal}
          className="h-[700px] w-full rounded-b-3xl"
        />

      </div>

    );
  }

  return (

    <div className="rounded-3xl border border-slate-200 bg-white shadow-sm">

      <div className="border-b p-5">

        <h3 className="text-xl font-bold">
          Course Contents
        </h3>

      </div>

      <iframe
        src={course.courseContent}
        className="h-[700px] w-full rounded-b-3xl"
      />

    </div>

  );
}