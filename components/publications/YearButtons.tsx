"use client";

type Props = {
  years: number[];
  value: number;
  onChange: (year: number) => void;
};

export default function YearButtons({
  years,
  value,
  onChange,
}: Props) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
      {years.map((year) => (
        <button
          key={year}
          type="button"
          onClick={() => onChange(year)}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 sm:px-6 sm:py-2 ${
            value === year
              ? "bg-blue-600 text-white shadow-sm"
              : "bg-slate-100 text-slate-700 hover:bg-blue-50 hover:text-blue-700"
          }`}
        >
          {year}
        </button>
      ))}
    </div>
  );
}