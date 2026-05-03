import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { NotableProjects } from "@/components/NotableProjects";
import { Achievements } from "@/components/Achievements";
import { Testimonials } from "@/components/Testimonials";
import { Process } from "@/components/Process";
import { Upcoming } from "@/components/Upcoming";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <main className="bg-background">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <NotableProjects />
      <Achievements />
      <Testimonials />
      <Process />
      <Upcoming />
      <Contact />
    </main>
  );
};

export default Index;
