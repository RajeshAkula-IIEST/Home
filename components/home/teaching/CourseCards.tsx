import { courses } from "@/data/courses";
import CourseCard from "./CourseCard";

export default function CourseCards() {
  return (
    <section>

      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
        CURRENT COURSES
      </p>

      <h2 className="mt-2 text-4xl font-bold text-slate-900">
        Teaching Portfolio
      </h2>

      <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-600">
        My teaching combines classroom instruction, continuous assessment,
        digital learning tools, and hands-on activities to provide students
        with an engaging and practical learning experience.
      </p>

      <div className="mt-12 space-y-10">

        {courses.map((course) => (

          <CourseCard
            key={course.code}
            {...course}
          />

        ))}

      </div>

    </section>
  );
}