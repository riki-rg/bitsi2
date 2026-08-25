"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { site } from "@/lib/site";

export function GaleriClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const items = site.galeri;
  const current = openIndex !== null ? items[openIndex] : null;

  const step = (dir: 1 | -1) => {
    if (openIndex === null) return;
    setOpenIndex((openIndex + dir + items.length) % items.length);
  };

  return (
    <>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <li key={item.file}>
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              aria-label={`Perbesar foto: ${item.caption}`}
              className="group border-line hover:border-cobalt/50 relative block w-full overflow-hidden rounded-2xl border bg-white text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_48px_-20px_rgba(39,67,245,0.35)]"
            >
              <span className="relative block aspect-[3/2] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.file}
                  alt={item.caption}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </span>
              <span className="flex items-center justify-between gap-3 px-5 py-4">
                <span className="text-sm leading-snug font-medium">
                  {item.caption}
                </span>
                <Expand
                  size={15}
                  className="text-fog group-hover:text-cobalt shrink-0 transition-colors"
                />
              </span>
            </button>
          </li>
        ))}
      </ul>

      <Dialog
        open={current !== null}
        onOpenChange={(o) => !o && setOpenIndex(null)}
      >
        <DialogContent className="border-line max-w-3xl bg-white p-3 sm:p-3">
          {current && (
            <div className="space-y-3">
              <DialogTitle className="px-1 pt-1 text-sm font-medium">
                {current.caption}
              </DialogTitle>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={current.file}
                alt={current.caption}
                className="aspect-[3/2] w-full rounded-xl object-cover"
              />
              <div className="flex items-center justify-between px-1 pb-1">
                <button
                  type="button"
                  onClick={() => step(-1)}
                  aria-label="Foto sebelumnya"
                  className="border-line hover:border-cobalt hover:text-cobalt inline-flex h-9 w-9 items-center justify-center rounded-full border transition-colors"
                >
                  <ChevronLeft size={16} />
                </button>
                <span className="text-fog font-mono text-xs">
                  {(openIndex ?? 0) + 1} / {items.length}
                </span>
                <button
                  type="button"
                  onClick={() => step(1)}
                  aria-label="Foto berikutnya"
                  className="border-line hover:border-cobalt hover:text-cobalt inline-flex h-9 w-9 items-center justify-center rounded-full border transition-colors"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

export function Galeri() {
  return (
    <section id="galeri" className="bg-mist/50 px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-cobalt font-mono text-xs tracking-[0.25em]">
              04
            </p>
            <p className="text-ink mt-1 font-mono text-xs tracking-[0.25em] uppercase">
              Galeri
            </p>
            <h2 className="font-display mt-6 max-w-xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Dokumentasi <span className="text-cobalt">kegiatan kami.</span>
            </h2>
          </div>
          <p className="text-fog max-w-sm text-sm leading-relaxed">
            Beberapa momen selama kegiatan. Klik fotonya kalau mau lihat lebih
            besar.
          </p>
        </div>

        <div className="mt-14">
          <GaleriClient />
        </div>
      </div>
    </section>
  );
}
