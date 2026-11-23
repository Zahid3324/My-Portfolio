import About from "@/components/about/About";
import Certificates from "@/components/certificates/Certificates";
import Contact from "@/components/contact/Contact";
import Experience from "@/components/experience/Experience";
import Hero from "@/components/hero/Hero";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";
import Stats from "@/components/stats/Stats";
export default function HomePage() {
  return (
    <div className="home-page">
      <Hero />
      <Stats />
      <About />
      <div id="skills">
        <Skills />
      </div>
      <Experience />
      <Projects />
      <Certificates />
      <Contact />
    </div>
  );
}
