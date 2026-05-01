import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Galerie from "./components/Galerie";
import Avis from "./components/Avis";
import PourquoiNous from "./components/PourquoiNous";
import ZonesIntervention from "./components/ZonesIntervention";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingCTA from "./components/FloatingCTA";
import ScrollAnimations from "./components/ScrollAnimations";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Galerie />
      <Services />
      <Avis />
      <PourquoiNous />
      <ZonesIntervention />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingCTA />
      <ScrollAnimations />
    </main>
  );
}
