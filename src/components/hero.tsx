import { ArrowRight } from "lucide-react";

const nodes = [
  { id: "WEB", label: "web", x: 60, y: 40 },
  { id: "NET", label: "jaringan", x: 340, y: 24 },
  { id: "IOT", label: "iot", x: 368, y: 250 },
  { id: "SRV", label: "server", x: 84, y: 262 },
];

export function Hero() {
  return (
    <section
      id="beranda"
      className="relative overflow-hidden px-5 pt-36 pb-20 sm:px-8 sm:pt-44 sm:pb-28"
    >
      <div aria-hidden className="blueprint-grid absolute inset-0" />
      <div
        aria-hidden
        className="bg-sky absolute -top-32 right-[-10%] h-[420px] w-[560px] rounded-full blur-[120px]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <p className="animate-rise border-line text-cobalt inline-flex max-w-full flex-wrap items-center gap-x-2 gap-y-1 rounded-2xl border bg-white/70 px-4 py-1.5 font-mono text-xs tracking-widest backdrop-blur-sm">
            <span
              aria-hidden
              className="pulse-dot bg-pulse h-1.5 w-1.5 shrink-0 rounded-full"
            />
            KOMUNITAS TEKNOLOGI · HIMSI UNIVERSITAS MUHAMMADIYAH KUDUS
          </p>

          <h1 className="font-display mt-7 text-5xl leading-[1.02] font-bold tracking-tight text-balance sm:text-6xl lg:text-7xl">
            <span className="animate-rise block [animation-delay:120ms]">
              Bangun.
            </span>
            <span className="animate-rise text-cobalt block [animation-delay:240ms]">
              Sambungkan.
            </span>
            <span className="animate-rise block [animation-delay:360ms]">
              Jalankan.
            </span>
          </h1>

          <p className="animate-rise text-fog mt-7 max-w-xl leading-relaxed [animation-delay:480ms] sm:text-lg">
            BitSI (Bit of Sistem Informasi) itu komunitas mahasiswa Sistem
            Informasi Universitas Muhammadiyah Kudus yang suka ngoprek: bikin
            web, utak-atik jaringan, rakit IoT, sampai ngatur server.
          </p>

          <div className="animate-rise mt-9 flex flex-wrap items-center gap-4 [animation-delay:600ms]">
            <a
              href="#gabung"
              className="group bg-cobalt text-paper hover:bg-cobalt-deep inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium transition-colors"
            >
              Gabung BitSI
              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
            <a
              href="#galeri"
              className="border-line text-ink hover:border-cobalt hover:text-cobalt rounded-full border bg-white/60 px-7 py-3.5 text-sm font-medium backdrop-blur-sm transition-colors"
            >
              Lihat Galeri
            </a>
          </div>
        </div>

        <div
          className="animate-rise hidden justify-center [animation-delay:500ms] lg:flex"
          role="img"
          aria-label="Diagram topologi jaringan BitSI: web, jaringan, IoT, dan server terhubung ke satu inti"
        >
          <svg
            viewBox="0 0 452 340"
            className="w-full max-w-[430px]"
            fill="none"
            aria-hidden
          >
            {nodes.map((n) => (
              <line
                key={`edge-${n.id}`}
                x1={226}
                y1={170}
                x2={n.x + 24}
                y2={n.y + 24}
                stroke="#2743F5"
                strokeOpacity="0.45"
                strokeWidth="1.5"
                className="edge-flow"
              />
            ))}

            {nodes.map((n, i) => (
              <g key={n.id} style={{ animationDelay: `${i * 150}ms` }}>
                <rect
                  x={n.x}
                  y={n.y}
                  width={48}
                  height={48}
                  rx={12}
                  fill="#FFFFFF"
                  stroke="#2743F5"
                  strokeWidth="1.5"
                />
                <circle cx={n.x + 24} cy={n.y + 24} r={5} fill="#2743F5" />
                <text
                  x={n.x + 24}
                  y={n.y + 72}
                  textAnchor="middle"
                  fontFamily="monospace"
                  fontSize="11"
                  letterSpacing="2"
                  fill="#5A6478"
                >
                  {n.label.toUpperCase()}
                </text>
              </g>
            ))}

            <circle cx="226" cy="170" r="64" fill="#2743F5" />
            <circle
              cx="226"
              cy="170"
              r="78"
              stroke="#2743F5"
              strokeOpacity="0.3"
              strokeWidth="1"
              strokeDasharray="3 6"
            />
            <text
              x="226"
              y="163"
              textAnchor="middle"
              fontFamily="sans-serif"
              fontWeight="700"
              fontSize="20"
              fill="#FAFBFE"
            >
              BitSI
            </text>
            <text
              x="226"
              y="184"
              textAnchor="middle"
              fontFamily="monospace"
              fontSize="10"
              letterSpacing="2"
              fill="#BFCFFF"
            >
              CORE
            </text>
          </svg>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
      >
        <span className="text-fog font-mono text-[10px] tracking-[0.3em]">
          SCROLL
        </span>
        <span className="from-cobalt h-8 w-px bg-gradient-to-b to-transparent" />
      </div>
    </section>
  );
}
