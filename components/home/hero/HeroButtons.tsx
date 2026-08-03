type HeroButtonsProps = {
  onExploreResearch: () => void;
};

export default function HeroButtons({
  onExploreResearch,
}: HeroButtonsProps) {
  return (
    <div className="mt-8 flex flex-wrap gap-4">

      <button
        onClick={onExploreResearch}
        className="
          rounded-xl
          bg-sky-700
          px-7
          py-3
          font-semibold
          text-white
          transition
          hover:bg-sky-800
        "
      >
        Explore Research
      </button>

      <a
        href="/Rajesh_Akula_CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="
          rounded-xl
          border
          border-slate-300
          bg-white
          px-7
          py-3
          font-semibold
          text-slate-700
          transition
          hover:border-sky-700
          hover:text-sky-700
        "
      >
        Download CV
      </a>

    </div>
  );
}