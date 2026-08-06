"use client";

import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
} from "lucide-react";

interface Portal {
  title: string;
  icon: React.ElementType;
  description: string;
  link: string;
}

interface Props {
  code: string;
  title: string;
  semester: string;
  description: string;

  status?: string;
  portals?: Portal[];
}

export default function CourseCard({
  code,
  title,
  semester,
  status,
  description,
  portals,
}: Props) {
  return (
    <div
      className="
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-8
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      {/* Header */}

      <div className="flex items-start justify-between">

        <div>

          <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            {code}
          </span>

          <h2 className="mt-5 text-3xl font-bold text-slate-900">
            {title}
          </h2>

        </div>

        {status && (
  <span
    className={`rounded-full px-4 py-2 text-sm font-semibold ${
      status === "Active"
        ? "bg-emerald-100 text-emerald-700"
        : "bg-slate-100 text-slate-600"
    }`}
  >
    {status}
  </span>
)}

      </div>

      {/* Semester */}

      <div className="mt-5 flex items-center gap-3 text-slate-500">

        <CalendarDays size={18} />

        {semester}

      </div>

      {/* Description */}

      <p className="mt-6 text-lg leading-8 text-slate-600">
        {description}
      </p>

      {/* Student Portal */}

      {status === "Active" && portals && portals.length > 0 && (

        <>

          <div className="mt-10 border-t border-slate-200 pt-8">

            <h3 className="text-xl font-bold text-slate-900">
              Student Academic Portal
            </h3>

            <p className="mt-2 text-slate-500">
              Access all course activities from one place.
            </p>

          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {portals.map((portal) => {

              const Icon = portal.icon;

              return (

                <Link
                  key={portal.title}
                  href={portal.link}
                  className="
                    group
                    rounded-2xl
                    border
                    border-slate-200
                    bg-slate-50
                    p-5
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-blue-500
                    hover:bg-blue-50
                    hover:shadow-lg
                  "
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm">

                    <Icon
                      className="text-blue-600"
                      size={22}
                    />

                  </div>

                  <h4 className="mt-4 text-lg font-semibold text-slate-900">
                    {portal.title}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {portal.description}
                  </p>

                  <div className="mt-5 flex items-center gap-2 font-medium text-blue-600">

                    Open

                    <ArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />

                  </div>

                </Link>

              );

            })}

          </div>

        </>

      )}

      {status && status !== "Active" && (

        <div className="mt-8 rounded-2xl bg-slate-50 p-6 text-slate-500">
          This course is archived. Teaching materials and records are retained
          for reference.
        </div>

      )}

    </div>
  );
}