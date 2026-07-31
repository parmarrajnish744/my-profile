import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Services } from "@/components/sections/Services";
import { Certificates } from "@/components/sections/Certificates";
import { Statistics } from "@/components/sections/Statistics";
import { Testimonials } from "@/components/sections/Testimonials";
import { Resume } from "@/components/sections/Resume";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 sm:gap-20">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Services />
      <Certificates />
      <Statistics />
      <Testimonials />
      <Resume />
      <Contact />
    </div>
  );
}
