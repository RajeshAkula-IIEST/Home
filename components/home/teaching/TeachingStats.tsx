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
      icon: BookOpen,
      gradient: "from-blue-50 via-white to-blue-100",
      border: "border-t-blue-600",
      ring: "ring-blue-200",
      text: "text-blue-700",
    },

    {
      value: `${totalStudents}+`,
      label: "Students Taught",
      icon: Users,
      gradient: "from-emerald-50 via-white to-emerald-100",
      border: "border-t-emerald-600",
      ring: "ring-emerald-200",
      text: "text-emerald-700",
    },

    {
      value: `${totalHours}+`,
      label: "Teaching Hours",
      icon: Clock3,
      gradient: "from-violet-50 via-white to-violet-100",
      border: "border-t-violet-600",
      ring: "ring-violet-200",
      text: "text-violet-700",
    },
  ];

  return (

    <div className="flex flex-wrap justify-center gap-6">

      {stats.map((item) => {

        const Icon = item.icon;

        return (

          <div
            key={item.label}
            className={`
              w-60
              rounded-2xl
              border
              border-slate-200
              border-t-4
              ${item.border}
              bg-gradient-to-br
              ${item.gradient}
              p-2
              text-center
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-xl
            `}
          >

            <div
              className={`
                mx-auto
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-full
                bg-white
                shadow-md
                ring-1
                ${item.ring}
              `}
            >

              <Icon
                className={item.text}
                size={28}
              />

            </div>

            <h2
              className={`mt-2 text-3xl font-black ${item.text}`}
            >
              {item.value}
            </h2>

            <p className="mt-0 text-lg font-semibold text-slate-700">
              {item.label}
            </p>

          </div>

        );

      })}

    </div>

  );
}