import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Research from "@/components/Research";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollTop from "@/components/ScrollTop";

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
