export const site = {
  name: "BitSI",
  fullName: "Bit of Sistem Informasi",
  tagline: "Komunitas Teknologi HIMSI UM Kudus",
  description:
    "Komunitas teknologi mahasiswa di bawah HIMSI Universitas Muhammadiyah Kudus yang bergerak di bidang web development, jaringan, IoT, dan server.",
  nav: [
    { href: "#tentang", label: "Tentang" },
    { href: "#bidang", label: "Bidang" },
    { href: "#aktivitas", label: "Aktivitas" },
    { href: "#galeri", label: "Galeri" },
  ],
  logos: {
    bitsi: "/assets/logos/bitsi-logo.svg",
    himsi: "/assets/logos/himsi-logo.svg",
    um: "/assets/logos/um-logo.svg",
  },
  bidang: [
    {
      id: "web",
      index: "01",
      title: "Web Development",
      desc: "Merancang dan membangun aplikasi web modern — dari antarmuka yang memukau hingga API yang andal, dengan standar industri nyata.",
      tags: ["frontend", "backend", "fullstack"],
    },
    {
      id: "jaringan",
      index: "02",
      title: "Jaringan",
      desc: "Memahami dan mempraktikkan infrastruktur jaringan: konfigurasi perangkat, routing, hingga dasar-dasar keamanan jaringan.",
      tags: ["routing", "konfigurasi", "keamanan"],
    },
    {
      id: "iot",
      index: "03",
      title: "Internet of Things",
      desc: "Menghubungkan dunia fisik ke dunia digital lewat sensor, mikrokontroler, dan otomasi yang bermanfaat langsung bagi banyak orang.",
      tags: ["sensor", "mikrokontroler", "otomasi"],
    },
    {
      id: "server",
      index: "04",
      title: "Server & DevOps",
      desc: "Mengelola server dan deployment: administrasi Linux, containerization, dan praktik DevOps agar aplikasi hidup terus di internet.",
      tags: ["linux", "docker", "deployment"],
    },
  ],
  aktivitas: [
    {
      id: "workshop",
      title: "Workshop & Bootcamp",
      desc: "Kelas intensif per bidang, dipandu mentor dari dalam maupun luar kampus.",
    },
    {
      id: "sharing",
      title: "Sharing Session",
      desc: "Forum rutin berbagi ilmu, tren teknologi, dan pengalaman magis/kerja.",
    },
    {
      id: "proyek",
      title: "Proyek Nyata",
      desc: "Membangun sistem sungguhan untuk himpunan, kampus, dan UMKM sekitar.",
    },
    {
      id: "lomba",
      title: "Lomba & Kompetisi",
      desc: "Delegasi termuda di kompetisi teknologi nasional — belajar sambil bertanding.",
    },
  ],
  galeri: [
    {
      file: "/assets/gallery/foto-01.svg",
      caption: "Workshop pemrograman web bersama anggota baru",
    },
    {
      file: "/assets/gallery/foto-02.svg",
      caption: "Praktik konfigurasi jaringan di lab",
    },
    {
      file: "/assets/gallery/foto-03.svg",
      caption: "Rakit dan program perangkat IoT",
    },
    {
      file: "/assets/gallery/foto-04.svg",
      caption: "Administrasi server di VM himpunan",
    },
    {
      file: "/assets/gallery/foto-05.svg",
      caption: "Sharing session bareng alumni",
    },
    {
      file: "/assets/gallery/foto-06.svg",
      caption: "Tim BitSI usai lomba kompetisi teknologi",
    },
  ],
  sosial: {
    instagram: "#",
    whatsapp: "#",
    email: "#",
  },
} as const;

export type Site = typeof site;
