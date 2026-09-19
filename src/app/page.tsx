import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Studies } from "@/components/sections/studies";

export default function Home() {
  return (
    <>
      <Header />
      <main id="conteudo" className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Studies />
        <Contact />
      </main>
      <Footer />
    </>
  );
}