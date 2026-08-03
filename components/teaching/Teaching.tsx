import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

import TeachingCard from "./TeachingCard";
import { teachingCourses } from "@/data/teaching";
import TeachingPhilosophy from "./TeachingPhilosophy"; 
import Mentoring from "./Mentoring";
export default function Teaching() {
  return (
    <Section id="teaching">
      <SectionTitle
        eyebrow="Teaching"
        title="Teaching"
        subtitle="Committed to delivering high-quality engineering education by integrating fundamental concepts, research, and real-world applications."
      />

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {teachingCourses.map((course) => (
          <TeachingCard
            key={course.code}
            {...course}
          />
        ))}
      </div>
      <TeachingPhilosophy />
      <Mentoring />
    </Section>
  );
}