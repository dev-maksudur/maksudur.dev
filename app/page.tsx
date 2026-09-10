import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Intro from "@/components/sections/Intro";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import HomeCta from "@/components/sections/HomeCta";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Intro />
      <Experience />
      <Skills />
      <Projects />
      <HomeCta />
    </>
  );
}