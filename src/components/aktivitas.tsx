import {
  MessagesSquare,
  Rocket,
  Trophy,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { site } from "@/lib/site";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";

const icons: Record<string, LucideIcon> = {
  workshop: Wrench,
  sharing: MessagesSquare,
  proyek: Rocket,
  lomba: Trophy,
};

export function Aktivitas() {
  return (
    <section id="aktivitas" className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel index="03" title="Aktivitas" />
        </Reveal>

        <Reveal delay={80}>
          <h2 className="font-display mt-12 max-w-xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Belajar itu rutinitas,{" "}
            <span className="text-cobalt">bukan acara.</span>
          </h2>
        </Reveal>

        <ul className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2">
          {site.aktivitas.map((a, i) => {
            const Icon = icons[a.id];
            return (
              <Reveal key={a.id} delay={i * 90}>
                <li className="group border-line hover:border-cobalt/50 flex gap-5 border-t pt-6 transition-colors">
                  <span className="border-line text-cobalt group-hover:border-cobalt group-hover:bg-cobalt group-hover:text-paper inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border bg-white transition-all">
                    <Icon size={19} strokeWidth={1.8} />
                  </span>
                  <div>
                    <h3 className="font-display font-semibold tracking-tight">
                      {a.title}
                    </h3>
                    <p className="text-fog mt-1.5 text-sm leading-relaxed">
                      {a.desc}
                    </p>
                  </div>
                </li>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
