const expertise = [
  "Battery Thermal Management",
  "Lithium-ion Batteries",
  "Battery Packs",
  "Fast Charging",
  "Thermal Runaway",
  "Heat Transfer",
  "Phase Change Materials",
  "Infrared Thermography",
  "Inverse Heat Transfer",
  "COMSOL Multiphysics",
  "PyBaMM",
  "MATLAB",
  "Python",
  "Machine Learning",
  "Deep Learning",
  "Computer Vision",
  "ConvLSTM",
  "Surrogate Modelling",
  "Battery Diagnostics",
  "Battery Characterization",
];

export default function ResearchExpertise() {
  return (
    <div>

      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
        RESEARCH EXPERTISE
      </p>

      <h2 className="mt-2 text-4xl font-bold text-slate-900">
        Technical Expertise
      </h2>

      <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-600">
        My research integrates experimental investigations, computational
        modelling, and artificial intelligence to develop advanced battery
        technologies and sustainable energy storage systems.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">

        {expertise.map((item) => (

          <span
            key={item}
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
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-blue-500
              hover:bg-blue-50
              hover:text-blue-700
            "
          >
            {item}
          </span>

        ))}

      </div>

    </div>
  );
}