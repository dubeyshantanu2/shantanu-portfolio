import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { BlogSection } from "@/components/BlogSection";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <ProjectsGrid />
        <BlogSection />
        <ExperienceTimeline />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
