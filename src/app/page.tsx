// src/app/page.tsx
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import WhyVivantix from "@/components/sections/WhyVivantix";
import Projects from "@/components/sections/Projects"
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Services />
      <Process />
      <WhyVivantix />
      <Projects />
      <Contact />
    </main>
  );
}
