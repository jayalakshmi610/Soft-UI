import Image from "next/image";
import Navbar from "./components/navbar/page";
import Styles from "./globals.css";
import Hero from "./components/Hero/page";
import Section2 from "./components/Section2/page";
import Section3 from "./components/Section3/page";
import Section4 from "./components/Section4/page";
import Section5 from "./components/Section5/page";
import Footer from "./components/footer/page";

export default function Home() {
  return (
    <main>
      <div>
        <Navbar />
        <Hero />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Footer />
      </div>
    </main>
  );
}
