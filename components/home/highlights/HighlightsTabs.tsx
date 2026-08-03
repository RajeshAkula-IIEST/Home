type Props = {
  active: string;
  setActive: (value: string) => void;
};

const tabs = [
  "Publications",
  "Patent",
  "Conferences",
];

export default function HighlightsTabs({
  active,
  setActive,
}: Props) {
  return (
    <div className="flex justify-center">
      <div className="inline-flex rounded-full bg-slate-100 p-1">

        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`
              rounded-full
              px-6
              py-3
              text-sm
              font-semibold
              transition-all
              duration-300

              ${
                active === tab
                  ? "bg-blue-600 text-white shadow-lg"
                  : "text-slate-600 hover:text-blue-600"
              }
            `}
          >
            {tab}
          </button>
        ))}

      </div>
    </div>
  );
}