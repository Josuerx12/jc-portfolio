import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import PortfolioSection from "@/components/sections/portfolio";
import ClientsSection from "@/components/sections/Clients";

export default function Home() {
  return (
    <main className="relative overflow-hidden min-h-screen">
      <Hero />
      <About />
      <Services />
      <ClientsSection />
      <PortfolioSection />
    </main>
  );
}
