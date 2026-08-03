const tags = [
  "Battery Thermal Management",
  "Artificial Intelligence",
  "Machine Learning",
  "Energy Storage",
  "Heat Transfer",
  "Battery Diagnostics",
];

export default function ResearchTags() {
  return (
    <div className="mt-10">

      <h3 className="text-lg font-semibold text-slate-900 mb-5">
        Research Interests
      </h3>

      <div className="flex flex-wrap gap-3">

        {tags.map((tag) => (
          <span
            key={tag}
            className="
              rounded-full
              border
              border-blue-100
              bg-blue-50
              px-4
              py-2
              text-sm
              font-medium
              text-blue-700
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-blue-600
              hover:text-white
            "
          >
            {tag}
          </span>
        ))}

      </div>

    </div>
  );
}