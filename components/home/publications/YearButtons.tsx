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
    <div className="flex justify-center gap-3 flex-wrap">

      {years.map((year) => (

        <button
          key={year}
          onClick={() => onChange(year)}
          className={`rounded-full px-6 py-2 font-medium transition ${
            value === year
              ? "bg-blue-600 text-white"
              : "bg-slate-100 text-slate-700 hover:bg-blue-50"
          }`}
        >
          {year}
        </button>

      ))}

    </div>
  );
}