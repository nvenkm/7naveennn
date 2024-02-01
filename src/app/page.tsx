import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="">
      {/* Navbar */}
      <Navbar />

      {/* Intro section */}
      <Intro />

      {/* Projects section */}
      <Projects />

      {/* Skills Section */}
      <Skills />
    </div>
  );
}
