import Hero from "@/components/sections/Hero";
import HeroLight from "@/components/lights/HeroLight";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";

export default function Home() {
  return (
    <main className="relative overflow-hidden min-h-screen">
      <HeroLight />
      <Hero />
      <About />
      <Services />
    </main>
  );
}
