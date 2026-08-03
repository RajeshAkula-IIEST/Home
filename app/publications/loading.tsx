import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import ScrollProgress from "@/components/shared/ScrollProgress";
import ScrollTop from "@/components/shared/ScrollTop";
import Research from "@/components/home/Research";
import Publications from "@/components/home/publications/Publications";
import Highlights from "@/components/home/highlights/Highlights";
import Impact from "@/components/home/impact/Impact";

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Research />
        <Highlights />
        <Impact />
      </main>

      <ScrollTop />
    </>
  );
}