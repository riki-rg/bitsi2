export const site = {
  name: "BitSI",
  fullName: "Bit of Sistem Informasi",
  tagline: "Komunitas Teknologi HIMSI Universitas Muhammadiyah Kudus",
  description:
    "Komunitas mahasiswa Sistem Informasi Universitas Muhammadiyah Kudus yang belajar lewat praktik: bikin web, atur jaringan, rakit IoT, dan kelola server.",
  nav: [
    { href: "#tentang", label: "Tentang" },
    { href: "#bidang", label: "Bidang" },
    { href: "#aktivitas", label: "Aktivitas" },
    { href: "#galeri", label: "Galeri" },
  ],
  logos: {
    bitsi: "/assets/logos/bitsi-logo.png",
    himsi: "/assets/logos/himsi-logo.png",
    um: "/assets/logos/um-logo.png",
  },
  bidang: [
    {
      id: "web",
      index: "01",
      title: "Web Development",
      desc: "Bikin website dan aplikasi web beneran, dari tampilan sampai API-nya. Tools yang dipakai sama dengan yang dipakai di industri.",
      tags: ["frontend", "backend", "fullstack"],
    },
    {
      id: "jaringan",
      index: "02",
      title: "Jaringan",
      desc: "Setting router, subnetting, dan ngerti gimana data berpindah antar perangkat. Termasuk dasar-dasar pengamanannya.",
      tags: ["routing", "konfigurasi", "keamanan"],
    },
    {
      id: "iot",
      index: "03",
      title: "Internet of Things",
      desc: "Rakit alat dari sensor dan mikrokontroler, terus program supaya bisa dipantau atau dikendalikan lewat internet.",
      tags: ["sensor", "mikrokontroler", "otomasi"],
    },
    {
      id: "server",
      index: "04",
      title: "Server & DevOps",
      desc: "Kelola VM himpunan sendiri: administrasi Linux, deploy aplikasi, dan belajar Docker di server yang benar-benar jalan.",
      tags: ["linux", "docker", "deployment"],
    },
  ],
  aktivitas: [
    {
      id: "workshop",
      title: "Workshop & Bootcamp",
      desc: "Kelas teknis per bidang. Kadang dibawain mentor internal, kadang undang praktisi luar.",
    },
    {
      id: "sharing",
      title: "Sharing Session",
      desc: "Sesi santai buat bagi pengalaman: magang, lomba, sampai hal baru yang lagi ramai.",
    },
    {
      id: "proyek",
      title: "Proyek Nyata",
      desc: "Bangun sistem yang benar-benar dipakai, mulai dari kebutuhan himpunan sendiri sampai UMKM sekitar.",
    },
    {
      id: "lomba",
      title: "Lomba & Kompetisi",
      desc: "Ikut kompetisi teknologi bareng-bareng, dari tingkat kampus sampai nasional.",
    },
  ],
  galeri: [
    {
      file: "/assets/gallery/foto-01.svg",
      caption: "Workshop web bareng anggota baru",
    },
    {
      file: "/assets/gallery/foto-02.svg",
      caption: "Praktik konfigurasi jaringan di lab",
    },
    {
      file: "/assets/gallery/foto-03.svg",
      caption: "Rakit alat IoT dari awal",
    },
    {
      file: "/assets/gallery/foto-04.svg",
      caption: "Ngurus server di VM himpunan",
    },
    {
      file: "/assets/gallery/foto-05.svg",
      caption: "Sharing session bareng alumni",
    },
    {
      file: "/assets/gallery/foto-06.svg",
      caption: "Hasil proyek IoT anggota BitSI",
    },
  ],
  sosial: {
    googleForm:
      "https://docs.google.com/forms/d/e/1FAIpQLSfM5ZaTzXKFeFXNr_Cz9dj1MBdicgYnhU9jJbLUvyThtuyVYA/viewform?usp=send_form",
    whatsapp:
      "https://wa.me/6285702552125?text=Permisi%20kak%20Fajar.%20Saya%20berminat%20untuk%20cari%20tahu%20lebih%20lanjut%20mengenai%20BitSI%2C%20boleh%20bantu%20jelaskan%20detailnya%3F",
    instagramHimsi:
      "https://www.instagram.com/himsi_umku?igsi=dmE1NXAwYXN6eGpv",
    email: "himsi@ukm.umku.ac.id",
  },
} as const;

export type Site = typeof site;
