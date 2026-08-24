import { site } from "@/lib/site";

export function Marquee() {
  const items = [
    ...site.bidang.map((b) => b.title),
    "open source",
    "cloud",
    "kolaborasi",
  ];

  return (
    <div
      aria-hidden
      className="marquee-paused border-line bg-mist/60 overflow-hidden border-y py-4"
    >
      <div className="animate-marquee flex w-max items-center gap-10 pr-10">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="font-display text-ink/70 text-lg font-semibold tracking-wide uppercase">
              {item}
            </span>
            <span className="bg-cobalt h-1.5 w-1.5 rotate-45" />
          </span>
        ))}
      </div>
    </div>
  );
}
