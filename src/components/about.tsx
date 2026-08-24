import Image from "next/image";
import { site } from "@/lib/site";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";

const naungan = [
  {
    src: site.logos.um,
    alt: "Universitas Muhammadiyah Kudus",
    label: "UM Kudus",
  },
  {
    src: site.logos.himsi,
    alt: "Himpunan Mahasiswa Sistem Informasi",
    label: "HIMSI",
  },
  { src: site.logos.bitsi, alt: "BitSI", label: "BitSI" },
];

export function About() {
  return (
    <section id="tentang" className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel index="01" title="Tentang" />
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <Reveal delay={100}>
            <h2 className="font-display text-3xl leading-snug font-semibold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem]">
              Satu komunitas,{" "}
              <span className="text-cobalt">empat jalur teknologi</span>, satu
              tujuan: tumbuh lewat praktik.
            </h2>
            <p className="text-fog mt-7 max-w-2xl leading-relaxed">
              BitSI (Bit of Sistem Informasi) adalah komunitas mahasiswa di
              bawah naungan HIMSI Universitas Muhammadiyah Kudus. Kami percaya
              cara terbaik menguasai teknologi bukan membaca teori saja — tapi
              membangun, menyambungkan, dan menjalankannya sungguhan.
            </p>
            <ul className="mt-8 flex flex-wrap gap-2.5">
              {[
                "belajar dengan praktik",
                "open source",
                "kolaborasi lintas bidang",
              ].map((chip) => (
                <li
                  key={chip}
                  className="border-line text-fog rounded-full border bg-white px-4 py-1.5 font-mono text-xs"
                >
                  {chip}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={200}>
            <p className="text-fog font-mono text-xs tracking-widest uppercase">
              Berdiri di bawah naungan
            </p>
            <ul className="mt-5 space-y-3">
              {naungan.map((item) => (
                <li
                  key={item.label}
                  className="border-line hover:border-cobalt/40 flex items-center gap-4 rounded-xl border bg-white p-4 transition-colors"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={44}
                    height={44}
                    className="rounded-lg object-contain"
                  />
                  <span className="text-sm font-medium">{item.alt}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
