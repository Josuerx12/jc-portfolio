import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";

export default function Home() {
  return (
    <main className="relative overflow-hidden min-h-screen">
      <Hero />
      <About />
      <Services />
    </main>
  );
}
