import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { About } from "@/components/about";
import { Bidang } from "@/components/bidang";
import { Aktivitas } from "@/components/aktivitas";
import { Galeri } from "@/components/galeri";
import { Cta, Footer } from "@/components/cta";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Bidang />
        <Aktivitas />
        <Galeri />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
