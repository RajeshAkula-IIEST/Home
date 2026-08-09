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
    <div className="w-full">

      {/* ===================================================== */}
      {/* COURSES HEADING */}
      {/* ===================================================== */}

      <h3 className="mb-3 text-lg font-bold text-slate-900 sm:mb-4 sm:text-xl">
        Courses
      </h3>

      {/* ===================================================== */}
      {/* COURSE LIST */}
      {/* ===================================================== */}

      <div className="space-y-2 sm:space-y-3">

        {courses.map((course) => {
          const active = course.code === selected;

          return (
            <button
              key={course.code}
              type="button"
              onClick={() => onSelect(course.code)}
              className={`
                group
                w-full
                rounded-2xl
                border
                p-3
                text-left
                transition-all
                duration-200
                sm:p-4

                ${
                  active
                    ? "border-blue-600 bg-blue-50 shadow-md"
                    : "border-slate-200 bg-white hover:border-blue-300 hover:bg-slate-50 hover:shadow"
                }
              `}
            >

              <div className="flex items-start justify-between gap-2">

                <div className="min-w-0 flex-1">

                  {/* Course code + semester */}

                  <div className="flex items-center gap-2.5 sm:gap-3">

                    <div
                      className={`
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        sm:h-9
                        sm:w-9

                        ${
                          active
                            ? "bg-blue-600 text-white"
                            : "bg-slate-100 text-slate-600"
                        }
                      `}
                    >
                      <BookOpen size={15} />
                    </div>

                    <div className="min-w-0">

                      <h4 className="text-sm font-bold text-slate-900 sm:text-base">
                        {course.code}
                      </h4>

                      <p className="text-[11px] text-slate-500 sm:text-xs">
                        {course.semester}
                      </p>

                    </div>

                  </div>

                  {/* Course title */}

                  <p className="mt-2 max-w-full break-words text-sm leading-5 text-slate-600 sm:mt-3 sm:leading-6">
                  {course.title}
                  </p>

                </div>

                {/* Arrow */}

                <ChevronRight
                  size={17}
                  className={`
                    mt-1
                    shrink-0
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