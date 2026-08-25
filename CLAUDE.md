# CLAUDE.md — Project Context untuk AI Assistant

## Project: BitSI (Bit of Sistem Informasi)

**Tipe:** Landing page statis (tanpa database, tanpa auth)
**Stack:** Next.js 16 (App Router, Turbopack) + React 19 + TypeScript
**Styling:** Tailwind CSS v4 + shadcn/ui (new-york style, neutral base)
**Package Manager:** npm

> ⚠️ Next.js 16 punya breaking changes dari versi lama. Selalu cek docs lokal di
> `node_modules/next/dist/docs/` sebelum menulis kode yang menyentuh API Next.

## Perintah Penting

```bash
npm run dev          # Development server (Turbopack)
npm run build        # Production build (output: standalone)
node .next/standalone/server.js  # Serve hasil build standalone
                     # (npm start TIDAK jalan dengan output: "standalone")
npm run lint         # ESLint (flat config)
npm run lint:fix     # ESLint auto-fix
npm run typecheck    # tsc --noEmit
npm run format       # Prettier write semua file
npm run format:check # Prettier check saja
npm test             # Vitest run (unit, jsdom)
npm run test:watch   # Vitest watch mode
npm run test:e2e     # Playwright (butuh build dulu untuk webServer `npm start`)
```

## Struktur Project

```
src/
  app/               # App Router: layout.tsx, page.tsx, globals.css, seo files
  components/
    ui/              # shadcn/ui primitives (button, card, badge, separator)
    providers/       # PostHog provider + pageview tracker
  lib/               # utils.ts (cn helper)
e2e/                 # Playwright e2e tests
.github/workflows/   # CI (quality + e2e jobs)
Dockerfile           # Multi-stage, standalone output, non-root user
docker-compose.yml   # Deploy ke VM HIMA, port 3000
```

## Konvensi Kode

- Conventional commits (`feat:`, `fix:`, `chore:`, `docs:`, `refactor:`, `test:`) — divalidasi commitlint
- TypeScript dengan path alias `@/*` → `src/*`
- Prettier + plugin tailwindcss (class sorting otomatis)
- ESLint flat config (`eslint.config.mjs`), prettier rule dipakai via `eslint-config-prettier`
- Komponen shadcn ditambahkan via: `npx shadcn@latest add <component>`
- Unit test colocated: `*.test.tsx` di samping komponen; e2e di folder `e2e/`
- **Gaya copywriting:** bahasa Indonesia semi-kasual khas org mahasiswa (kamu,
  gapapa, bareng). Hindari pola AI: em dash, rule of three, "tidak hanya X
  tapi Y", puitis kosong. Referensi pola:
  `~/.gemini/config/skills/anti-ai-detection/`

## Deploy ke VM HIMA

```bash
# Di VM (butuh Docker):
git pull
docker compose up -d --build
```

- Image final ~alpine minimal, jalan sebagai user non-root `nextjs`
- Port 3000; taruh reverse proxy (nginx/caddy) di depan untuk domain + TLS
- Copy `.env.example` → `.env` dan isi `NEXT_PUBLIC_POSTHOG_KEY` sebelum build
  (variabel NEXT_PUBLIC_ di-bake saat build time)

## Catatan

- Tanpa database & auth — landing page murni
- PostHog: pageview manual via `PostHogPageView` (capture_pageview=false)
- Analytics tidak aktif kalau env key kosong (guard ada di provider)

## Assets (Logo & Galeri)

Semua path asset terpusat di `src/lib/site.ts`.

**Ganti logo asli:** drop file ke `public/assets/logos/` lalu update path di
`site.logos` (mis. `um-logo.png`). Nama file placeholder: `bitsi-logo.svg`,
`himsi-logo.svg`, `um-logo.svg`. Logo tampil di navbar, strip "naungan"
(section Tentang), dan dipakai sebagai favicon kandidat.

**Favicon/tab icon:** ada di `src/app/icon.svg` (konvensi App Router, otomatis).
Kalau logo BitSI asli sudah ada, copy juga ke file ini supaya tab icon ikut
berubah. Browser agresif cache favicon — hard refresh (Ctrl+Shift+R) kalau
masih muncul yang lama.

**Tambah foto galeri:** taruh foto di `public/assets/gallery/` lalu tambah
entri `{ file, caption }` di `site.galeri`. Placeholder: `foto-01..06.svg`.
Rekomendasi rasio 3:2 (min 1200x800), format JPG/WebP untuk foto asli.

Desain tema: light "Engineering Blueprint" — paper `#FAFBFE`, ink `#0F1B33`,
cobalt `#2743F5`; token ada di `globals.css`.
