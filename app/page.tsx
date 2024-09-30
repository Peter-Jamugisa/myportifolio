import About from "@/components/About/About";
import FirstSection from "@/components/FirstSection/FirstSection";
import Projects from "@/components/Projects/Projects";
import Services from "@/components/Services/Services";
import Footer from "@/components/ui/Footer";
import NavBar from "@/components/ui/Navbar";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <main >
            <Head>
        <title>Jamugisa Peter Paul - Portfolio</title>
        <meta name="description" content="Portfolio of Jamugisa Peter Paul - frontend developer" />
        <meta name="keywords" content="Jamugisa Peter Paul,Jamugisa,Jamugisa Peter,Jamugisa Paul, portfolio, frontend developer" />
      </Head>
      <NavBar />

      <div>
        <section id="Home">
          <FirstSection />
        </section>

      </div>

      <div>
        <section id="About">
          <About />
        </section>
      </div>

      <div>
        <section id="Projects">
          <Projects />
        </section>
      </div>

      <div>
        <section id="Services">
          <Services />
        </section>
      </div>

      <div>

        <Footer />

      </div>

    </main>


  );
}
