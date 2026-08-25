import { Cpu, Globe, Network, Server, type LucideIcon } from "lucide-react";
import { site } from "@/lib/site";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";

const icons: Record<string, LucideIcon> = {
  web: Globe,
  jaringan: Network,
  iot: Cpu,
  server: Server,
};

export function Bidang() {
  return (
    <section id="bidang" className="bg-mist/50 px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel index="02" title="Bidang Fokus" />
        </Reveal>

        <div className="mt-12 flex flex-wrap items-end justify-between gap-6">
          <Reveal delay={80}>
            <h2 className="font-display max-w-xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Empat bidang.{" "}
              <span className="text-cobalt">
                Tinggal pilih mau mulai dari mana.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="text-fog max-w-sm text-sm leading-relaxed">
              Anggota bebas fokus ke satu bidang atau nyobain semuanya.
            </p>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {site.bidang.map((b, i) => {
            const Icon = icons[b.id];
            return (
              <Reveal key={b.id} delay={i * 90}>
                <li className="group border-line hover:border-cobalt/50 relative h-full rounded-2xl border bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_48px_-20px_rgba(39,67,245,0.4)]">
                  <span
                    aria-hidden
                    className="text-fog group-hover:text-cobalt absolute top-6 right-6 font-mono text-xs transition-colors"
                  >
                    /{b.index}
                  </span>

                  <span className="bg-sky text-cobalt group-hover:bg-cobalt group-hover:text-paper inline-flex rounded-xl p-3 transition-colors">
                    <Icon size={22} strokeWidth={1.8} />
                  </span>

                  <h3 className="font-display mt-5 text-lg font-semibold tracking-tight">
                    {b.title}
                  </h3>
                  <p className="text-fog mt-3 text-sm leading-relaxed">
                    {b.desc}
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-1.5">
                    {b.tags.map((tag) => (
                      <li
                        key={tag}
                        className="bg-mist text-fog rounded-full px-2.5 py-1 font-mono text-[11px]"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </li>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
