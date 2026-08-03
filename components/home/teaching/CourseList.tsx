"use client";

import { BookOpen, ChevronRight } from "lucide-react";
import { Course } from "@/data/courses";

type Props = {
  courses: Course[];
  selected: string;
  onSelect: (code: string) => void;
};

export default function CourseList({
  courses,
  selected,
  onSelect,
}: Props) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">

      <h3 className="mb-4 text-xl font-bold text-slate-900">
        Courses
      </h3>

      <div className="space-y-3">

        {courses.map((course) => {

          const active = course.code === selected;

          return (

            <button
              key={course.code}
              onClick={() => onSelect(course.code)}
              className={`
                group
                w-full
                rounded-2xl
                border
                p-4
                text-left
                transition-all
                duration-300

                ${
                  active
                    ? "border-blue-600 bg-blue-50 shadow-md"
                    : "border-slate-200 bg-white hover:border-blue-300 hover:bg-slate-50 hover:shadow"
                }
              `}
            >

              <div className="flex items-start justify-between">

                <div className="flex-1">

                  <div className="flex items-center gap-3">

                    <div
                      className={`
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-lg

                        ${
                          active
                            ? "bg-blue-600 text-white"
                            : "bg-slate-100 text-slate-600"
                        }
                      `}
                    >
                      <BookOpen size={16} />
                    </div>

                    <div>

                      <h4 className="text-base font-bold text-slate-900">
                        {course.code}
                      </h4>

                      <p className="text-xs text-slate-500">
                        {course.semester}
                      </p>

                    </div>

                  </div>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {course.title}
                  </p>

                </div>

                <ChevronRight
                  size={18}
                  className={`
                    ml-3
                    mt-1
                    transition-all

                    ${
                      active
                        ? "text-blue-600"
                        : "text-slate-400 group-hover:text-blue-500"
                    }
                  `}
                />

              </div>

            </button>

          );
        })}

      </div>

    </div>
  );
}