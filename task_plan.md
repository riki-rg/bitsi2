# Task Plan — BitSI Landing Page (Fitur Komunitas + Galeri + Logo)

## Konteks

Project: ~/Documents/projects/bitsi (Next.js 16, TS, Tailwind v4, shadcn/ui)
Arah desain: **Cerah + Biru** ("Engineering Blueprint") — total berbeda dari versi lama (gelap+lime).
Izin skill desain diberikan user. Ini memengaruhi citra HIMSI UM Kudus.

## Fase 1 — Fondasi Desain

- [x] Konsep: paper white + cobalt elektrik + navy; grid blueprint; topologi jaringan
- [x] Fonts: Bricolage Grotesque (display), IBM Plex Sans (body), IBM Plex Mono (label)
- [ ] globals.css: token warna baru + keyframes (rise, marquee, dash-flow, blink-dot)
- [ ] layout.tsx: fonts + metadata BitSI

## Fase 2 — Assets

- [ ] public/assets/logos/: bitsi-logo.svg, himsi-logo.svg, um-logo.svg (placeholder, user ganti PNG asli)
- [ ] public/assets/gallery/: foto-01..06.svg placeholder
- [ ] Instruksi swap file → CLAUDE.md

## Fase 3 — Komponen

- [ ] lib/site.ts (single source of truth konten + path asset)
- [ ] reveal.tsx (IntersectionObserver client wrapper)
- [ ] navbar.tsx (sticky glass, logo slot, anchor links)
- [ ] hero.tsx (H1 Bangun/Sambungkan/Jalankan + SVG topologi jaringan animasi)
- [ ] marquee.tsx (ticker bidang)
- [ ] about.tsx (+ strip logo naungan UM/HIMSI/BitSI)
- [ ] bidang.tsx (4 kartu: Web Dev, Jaringan, IoT, Server — lucide icons)
- [ ] aktivitas.tsx (workshop, sharing, proyek, lomba)
- [ ] galeri.tsx + galeri-client.tsx (grid + lightbox shadcn Dialog)
- [ ] cta.tsx (gabung) + footer.tsx
- [ ] page.tsx compose

## Fase 4 — Quality Gates

- [ ] format (prettier) · lint · typecheck · vitest · build
- [ ] Update e2e expectation

## Checkpoint

Selesai = semua gate pass + summary ke user (logo/foto asli menyusul dari user).
