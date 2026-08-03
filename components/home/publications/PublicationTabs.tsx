"use client";

type Props = {
  value: string;
  onChange: (v: string) => void;
};

const tabs = [
  "Journal",
  "Conference",
  "Patent",
];

export default function PublicationTabs({
  value,
  onChange,
}: Props) {
  return (
    <div className="flex justify-center">
      <div className="flex rounded-full bg-slate-100 p-1">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onChange(tab)}
            className={`rounded-full px-8 py-3 font-medium transition ${
              value === tab
                ? "bg-blue-600 text-white shadow"
                : "text-slate-600 hover:text-blue-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}