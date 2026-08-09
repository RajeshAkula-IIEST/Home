import {
  BookOpen,
  Users,
  Clock3,
} from "lucide-react";

import { courses } from "@/data/courses";

export default function TeachingStats() {
  const totalCourses = courses.length;

  const totalStudents = courses.reduce(
    (sum, course) => sum + course.students,
    0
  );

  const totalHours = courses.reduce(
    (sum, course) => sum + course.teachingHours,
    0
  );

  const stats = [
    {
      value: totalCourses,
      label: "Courses Taught",
      shortLabel: "Courses",
      icon: BookOpen,
      border: "border-t-blue-600",
      ring: "ring-blue-200",
      text: "text-blue-700",
      gradient: "from-blue-50 via-white to-blue-100",
    },
    {
      value: `${totalStudents}+`,
      label: "Students Taught",
      shortLabel: "Students",
      icon: Users,
      border: "border-t-emerald-600",
      ring: "ring-emerald-200",
      text: "text-emerald-700",
      gradient: "from-emerald-50 via-white to-emerald-100",
    },
    {
      value: `${totalHours}+`,
      label: "Teaching Hours",
      shortLabel: "Hours",
      icon: Clock3,
      border: "border-t-violet-600",
      ring: "ring-violet-200",
      text: "text-violet-700",
      gradient: "from-violet-50 via-white to-violet-100",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-2 sm:flex sm:flex-wrap sm:justify-center sm:gap-6">

      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.label}
            className={`
              min-w-0
              flex-1
              rounded-2xl
              border
              border-slate-200
              border-t-4
              ${item.border}
              bg-gradient-to-br
              ${item.gradient}
              px-2
              py-3
              text-center
              shadow-sm
              transition-all
              duration-300
              sm:w-60
              sm:flex-none
              sm:p-3
              sm:hover:-translate-y-2
              sm:hover:shadow-xl
            `}
          >

            {/* Icon */}

            <div
              className={`
                mx-auto
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                bg-white
                shadow-sm
                ring-1
                ${item.ring}
                sm:h-16
                sm:w-16
                sm:shadow-md
              `}
            >
              <Icon
                className={item.text}
                size={21}
              />
            </div>

            {/* Number */}

            <h2
              className={`mt-1 text-xl font-black ${item.text} sm:mt-2 sm:text-3xl`}
            >
              {item.value}
            </h2>

            {/* Mobile label */}

            <p className="mt-0.5 text-[10px] font-semibold leading-tight text-slate-700 sm:hidden">
              {item.shortLabel}
            </p>

            {/* Desktop label */}

            <p className="mt-0 hidden text-lg font-semibold text-slate-700 sm:block">
              {item.label}
            </p>

          </div>
        );
      })}

    </div>
  );
}