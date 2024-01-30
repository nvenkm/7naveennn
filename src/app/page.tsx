import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="">
      {/* Navbar */}
      <Navbar />

      {/* Intro section */}
      <Intro />

      {/* Projects section */}
      <Projects />
    </div>
  );
}
