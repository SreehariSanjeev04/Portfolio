import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import ProjectsBento from "@/components/projects-bento";
import Experience from "@/components/experience";
import Skills from "@/components/skills";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-ink-950">
      <Navbar />
      <Hero />
      <ProjectsBento />
      <Experience />
      <Skills />
      <Footer />
    </main>
  );
}
