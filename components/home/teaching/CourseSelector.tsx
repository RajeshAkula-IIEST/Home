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
    <div className="flex justify-center">

      <div className="inline-flex rounded-2xl border border-slate-200 bg-slate-100 p-1 shadow-sm">

        <button
          onClick={() => onChange("current")}
          className={`
            rounded-xl
            px-8
            py-3
            text-lg
            font-semibold
            transition-all
            duration-300
            ${
              value === "current"
                ? "bg-white text-blue-700 shadow-md"
                : "text-slate-600 hover:text-blue-600"
            }
          `}
        >
          Current Courses
        </button>

        <button
          onClick={() => onChange("past")}
          className={`
            rounded-xl
            px-8
            py-3
            text-lg
            font-semibold
            transition-all
            duration-300
            ${
              value === "past"
                ? "bg-white text-blue-700 shadow-md"
                : "text-slate-600 hover:text-blue-600"
            }
          `}
        >
          Past Courses
        </button>

      </div>

    </div>
  );
}