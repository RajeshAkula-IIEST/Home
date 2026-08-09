"use client";

type Props = {
  value: "current" | "past";
  onChange: (value: "current" | "past") => void;
};

export default function CourseSelector({
  value,
  onChange,
}: Props) {
  return (
    <div className="flex w-full justify-center">
      <div className="inline-flex rounded-2xl border border-slate-200 bg-slate-100 p-1 shadow-sm">

        {/* Current Courses */}

        <button
          type="button"
          onClick={() => onChange("current")}
          className={`
            rounded-xl
            px-5
            py-2.5
            text-sm
            font-semibold
            transition-all
            duration-200
            sm:px-8
            sm:py-3
            sm:text-lg
            ${
              value === "current"
                ? "bg-blue-600 text-white shadow-md"
                : "text-slate-600 hover:text-blue-600"
            }
          `}
        >
          <span className="sm:hidden">
            Current
          </span>

          <span className="hidden sm:inline">
            Current Courses
          </span>
        </button>

        {/* Past Courses */}

        <button
          type="button"
          onClick={() => onChange("past")}
          className={`
            rounded-xl
            px-5
            py-2.5
            text-sm
            font-semibold
            transition-all
            duration-200
            sm:px-8
            sm:py-3
            sm:text-lg
            ${
              value === "past"
                ? "bg-blue-600 text-white shadow-md"
                : "text-slate-600 hover:text-blue-600"
            }
          `}
        >
          <span className="sm:hidden">
            Past
          </span>

          <span className="hidden sm:inline">
            Past Courses
          </span>
        </button>

      </div>
    </div>
  );
}