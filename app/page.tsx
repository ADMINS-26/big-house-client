import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Career from "@/components/Career";
import JoinUs from "@/components/JoinUs";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Career />
        <JoinUs />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
