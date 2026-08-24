import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  IBM_Plex_Mono,
  IBM_Plex_Sans,
} from "next/font/google";
import { CSPostHogProvider } from "@/components/providers/posthog-provider";
import { PostHogPageView } from "@/components/providers/posthog-page-view";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-sans",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
});

export const metadata: Metadata = {
  title: {
    default: "BitSI — Komunitas Teknologi HIMSI UM Kudus",
    template: "%s | BitSI",
  },
  description:
    "BitSI (Bit of Sistem Informasi) — komunitas teknologi mahasiswa di bawah HIMSI Universitas Muhammadiyah Kudus yang bergerak di bidang web development, jaringan, IoT, dan server.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${bricolage.variable} ${plexSans.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <CSPostHogProvider>
          <PostHogPageView />
          {children}
        </CSPostHogProvider>
      </body>
    </html>
  );
}
