import Section from "@/components/ui/Section";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import HeroStats from "./HeroStats";

export default function Hero() {
  return (
    <Section
      id="home"
      className="min-h-[90vh] flex items-center bg-gradient-to-b from-white via-slate-50 to-white"
    >
      <div className="w-full">
        {/* Hero Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <HeroContent />
          <HeroImage />
        </div>

        {/* Statistics */}
        <div className="mt-20">
          <HeroStats />
        </div>
      </div>
    </Section>
  );
}