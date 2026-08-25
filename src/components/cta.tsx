import { AtSign, ClipboardList, Mail, MessageCircle } from "lucide-react";
import { site } from "@/lib/site";
import { Reveal } from "@/components/reveal";

export function Cta() {
  return (
    <section id="gabung" className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="bg-cobalt relative overflow-hidden rounded-3xl px-8 py-16 text-center sm:px-16 sm:py-20">
            <div aria-hidden className="dot-grid absolute inset-0 opacity-40" />
            <div
              aria-hidden
              className="absolute -top-24 left-1/2 h-64 w-[480px] -translate-x-1/2 rounded-full bg-white/15 blur-[100px]"
            />

            <div className="relative">
              <p className="text-sky font-mono text-xs tracking-[0.3em] uppercase">
                Rekrutmen Anggota Baru
              </p>
              <h2 className="font-display mx-auto mt-5 max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
                Mau gabung ke BitSI?
              </h2>
              <p className="text-paper/80 mx-auto mt-5 max-w-xl leading-relaxed">
                Gapapa kalau masih nol pengalaman. Daftar lewat Google Form,
                nanti info selanjutnya diinfokan lewat grup WhatsApp.
              </p>

              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={site.sosial.googleForm}
                  className="text-cobalt inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <ClipboardList size={16} />
                  Daftar Lewat Google Form
                </a>
                <a
                  href={site.sosial.whatsapp}
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:border-white hover:bg-white/10"
                >
                  <MessageCircle size={16} />
                  Tanya via WhatsApp
                </a>
              </div>

              <a
                href={site.sosial.instagramHimsi}
                className="text-paper/70 hover:text-paper mt-6 inline-flex items-center gap-1.5 font-mono text-xs transition-colors"
              >
                <AtSign size={13} />
                atau DM Instagram HIMSI
              </a>

              <p className="text-paper/70 mt-5 flex items-center justify-center gap-2 font-mono text-xs">
                <span
                  aria-hidden
                  className="pulse-dot bg-pulse h-1.5 w-1.5 rounded-full"
                />
                pendaftaran dibuka tiap awal semester
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-line border-t px-5 pt-16 pb-10 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-xl font-bold tracking-tight">
              bit<span className="text-cobalt">si</span>
            </p>
            <p className="text-fog mt-3 max-w-sm text-sm leading-relaxed">
              {site.fullName}, komunitas teknologi mahasiswa Sistem Informasi di
              bawah Himpunan Mahasiswa Sistem Informasi Universitas Muhammadiyah
              Kudus.
            </p>
            <a
              href={`mailto:${site.sosial.email}`}
              className="text-fog hover:text-cobalt mt-4 inline-flex items-center gap-2 font-mono text-xs transition-colors"
            >
              <Mail size={13} />
              hubungi kami
            </a>
          </div>

          <nav aria-label="Navigasi footer">
            <p className="text-ink font-mono text-xs tracking-widest uppercase">
              Jelajahi
            </p>
            <ul className="mt-4 space-y-2.5">
              {[...site.nav, { href: "#gabung", label: "Gabung" }].map(
                (item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-fog hover:text-cobalt text-sm transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </nav>

          <div>
            <p className="text-ink font-mono text-xs tracking-widest uppercase">
              Bidang Kami
            </p>
            <ul className="mt-4 space-y-2.5">
              {site.bidang.map((b) => (
                <li key={b.id}>
                  <a
                    href="#bidang"
                    className="text-fog hover:text-cobalt text-sm transition-colors"
                  >
                    {b.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-line mt-14 flex flex-col items-center justify-between gap-4 border-t pt-6 sm:flex-row">
          <p className="text-fog font-mono text-xs">
            © {new Date().getFullYear()} BitSI · HIMSI Universitas Muhammadiyah
            Kudus
          </p>
          <p className="text-fog font-mono text-xs">
            dibuat sama anggotanya sendiri
          </p>
        </div>
      </div>
    </footer>
  );
}
