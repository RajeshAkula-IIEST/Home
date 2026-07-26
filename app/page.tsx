import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Research from "@/components/Research";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>

        <Hero />

        <About />

        <Stats />

        <Research />

      </main>

      <Footer />

    </>
  );
}
