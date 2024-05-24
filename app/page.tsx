import About from "@/components/About/About";
import FirstSection from "@/components/FirstSection/FirstSection";
import Projects from "@/components/Projects/Projects";
import Services from "@/components/Services/Services";
import Footer from "@/components/ui/Footer";
import NavBar from "@/components/ui/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main >
      <NavBar />

      <div>
        <FirstSection />
      </div>

      <div>
        <About />
      </div>

      <div>
        <Projects />
      </div>

      <div>
        <Services />
      </div>
      <div>
        <Footer />
      </div>

    </main>


  );
}
