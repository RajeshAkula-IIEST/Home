import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Stats from "@/components/home/Stats";
import Research from "@/components/home/Research";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/shared/ScrollProgress";
import ScrollTop from "@/components/shared/ScrollTop";

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Stats />
        <Research />
      </main>

      <Footer />
      <ScrollTop />
    </>
  );
}
