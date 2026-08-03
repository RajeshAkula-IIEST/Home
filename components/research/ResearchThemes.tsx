const themes = [
  "Battery Thermal Management",
  "Artificial Intelligence",
  "Battery Diagnostics",
  "Infrared Thermography",
  "Inverse Heat Transfer",
  "COMSOL Multiphysics",
  "Fast Charging",
  "Thermal Runaway",
  "Battery Ageing",
  "Phase Change Materials",
  "Battery Pack Design",
  "ConvLSTM",
];

export default function ResearchThemes() {
  return (
    <div className="mt-20">
      <h3 className="text-center text-2xl font-bold text-slate-900">
        Current Research Themes
      </h3>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {themes.map((theme) => (
          <span
            key={theme}
            className="
              rounded-full
              border
              border-slate-200
              bg-white
              px-5
              py-3
              text-sm
              font-medium
              text-slate-700
              transition-all
              duration-300
              hover:border-blue-500
              hover:bg-blue-50
              hover:text-blue-700
            "
          >
            {theme}
          </span>
        ))}
      </div>
    </div>
  );
}