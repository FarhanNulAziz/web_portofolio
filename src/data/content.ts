export type Profile = {
  name: string;
  tagline: string;
};

export type HeroContent = {
  badge: string;
  greeting: string;
  ctaLabel: string;
};

export type AboutContent = {
  number: string;
  heading: string;
  description: string;
  paragraphs: string[];
  academicTitle: string;
  academicLabels: {
    campus: string;
    major: string;
    semester: string;
    location: string;
    status: string;
    ipk: string;
    sks: string;
  };
};

export type AcademicInfo = {
  campus: string;
  major: string;
  semester: string;
  location: string;
  status: string;
  ipk?: string;
  sks?: string;
};

export type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
};

export type SkillIcon = "terminal" | "wrench" | "brain";

export type SkillGroup = {
  title: string;
  icon: SkillIcon;
  items: string[];
};

export type SectionContent = {
  number: string;
  heading: string;
  description: string;
};

export type ContactFormContent = {
  fields: {
    name: string;
    email: string;
    message: string;
  };
  placeholder: {
    name: string;
    email: string;
    message: string;
  };
  submitLabel: string;
  status: {
    sending: string;
    success: string;
    error: string;
  };
  validation: {
    name: string;
    email: string;
    message: string;
  };
};

export type ContactContent = {
  number: string;
  heading: string;
  description: string;
  availabilityTitle: string;
  availabilityStatus: string;
  availabilityDescription: string;
  form: ContactFormContent;
};

export type SocialLinks = {
  email: string;
  github: string;
  linkedin: string;
};

export type NavigationItem = {
  label: string;
  href: string;
};

export type Labels = {
  mainNavigation: string;
  openMenu: string;
  closeMenu: string;
  github: string;
  linkedin: string;
  email: string;
  demo: string;
  viewCode: string;
  viewDemo: string;
  onGithub: string;
  projectImageAlt: string;
  profilePhotoAlt: string;
  copyrightSymbol: string;
  skipToContent: string;
  portfolioTitle: string;
};

export type PortfolioContent = {
  profile: Profile;
  hero: HeroContent;
  about: AboutContent;
  academic: AcademicInfo;
  projectsSection: SectionContent;
  projects: Project[];
  skillsSection: SectionContent;
  skills: SkillGroup[];
  contact: ContactContent;
  socials: SocialLinks;
  navigation: NavigationItem[];
  labels: Labels;
};

export const content: PortfolioContent = {
  profile: {
    name: "Farhan Nul Aziz",
    tagline:
      "Mahasiswa tingkat akhir yang sedang mencari pengalaman magang di bidang pengembangan web.",
  },
  hero: {
    badge: "Mahasiswa Semester Akhir",
    greeting: "Halo, saya",
    ctaLabel: "Lihat Proyek",
  },
  about: {
    number: "01",
    heading: "Tentang Saya",
    description: "Sedikit cerita tentang latar belakang dan minat saya.",
    paragraphs: [
      "Saya adalah mahasiswa tingkat akhir yang tertarik pada pengembangan web, khususnya antarmuka yang sederhana dan mudah digunakan.",
      "Saat ini saya sedang memperdalam React, Next.js, dan TypeScript melalui proyek-proyek pribadi. Saya terbuka untuk kesempatan magang agar bisa belajar langsung dari tim profesional.",
    ],
    academicTitle: "Detail Akademik",
    academicLabels: {
      campus: "Kampus",
      major: "Jurusan",
      semester: "Semester",
      location: "Lokasi",
      status: "Status",
      ipk: "IPK",
      sks: "SKS",
    },
  },
  academic: {
    campus: "Politeknik Negeri Padang",
    major: "Manajemen Informatika",
    semester: "Semester 5",
    location: "Kota Padang, Sumatera Barat",
    status: "Terbuka untuk magang",
  },
  projectsSection: {
    number: "02",
    heading: "Proyek Pilihan",
    description:
      "Beberapa proyek yang saya kerjakan untuk melatih kemampuan pengembangan web.",
  },
  projects: [
    {
      title: "Sistem Pemesanan Kantin Online",
      description:
        "Web pemesanan menu kantin: pesan dari tempat duduk, bayar lewat QRIS, e-wallet, atau COD, tanpa antre.",
      image: "/images/project-1.png",
      tags: ["Node.js", "Laravel", "PHP"],
      githubUrl: "https://github.com/FarhanNulAziz/kantin-online",
    },
    {
      title: "Marketplace Produk UMKM Lokal",
      description:
        "Marketplace web untuk menjual dan membeli produk UMKM lokal, dengan katalog dan kategori produk.",
      image: "/images/project-2.png",
      tags: ["PHP", "Laravel", "MySQL"],
      githubUrl: "https://github.com/FarhanNulAziz/toko-online-produk-lokal",
    },
    {
      title: "Sistem Informasi Klinik Hewan Florion Petcare",
      description:
        "Sistem informasi klinik hewan yang menampilkan layanan medis, vaksinasi, dan grooming untuk pemilik hewan.",
      image: "/images/project-3.png",
      tags: ["React", "PHP", "MySQL"],
      githubUrl: "https://github.com/FarhanNulAziz/MI3A-K02-FlorionPetcare",
    },
  ],
  skillsSection: {
    number: "03",
    heading: "Keahlian",
    description:
      "Teknologi dan kemampuan yang saya gunakan dalam mengerjakan proyek.",
  },
  skills: [
    {
      title: "Bahasa & Framework",
      icon: "terminal",
      items: [ "JavaScript", "Tailwind CSS", "PHP", "Laravel" , "HTML"],
    },
    {
      title: "Tools",
      icon: "wrench",
      items: ["Git", "GitHub", "VS Code", "Figma", "Vercel"],
    },
    {
      title: "Soft Skills",
      icon: "brain",
      items: ["Komunikasi", "Kolaborasi", "Manajemen Waktu", "Problem Solving"],
    },
  ],
  contact: {
    number: "04",
    heading: "Mari Terhubung",
    description:
      "Punya pertanyaan atau peluang magang? Silakan hubungi saya melalui email atau media sosial berikut.",
    availabilityTitle: "Kesiapan Kerja",
    availabilityStatus: "Terbuka untuk magang",
    availabilityDescription:
      "Saya siap belajar dan berkontribusi di lingkungan tim profesional.",
    form: {
      fields: {
        name: "Nama",
        email: "Email",
        message: "Pesan",
      },
      placeholder: {
        name: "",
        email: "",
        message: "",
      },
      submitLabel: "Kirim Pesan",
      status: {
        sending: "Mengirim...",
        success:
          "Terima kasih! Pesan kamu sudah terkirim. Saya akan membalas secepatnya.",
        error:
          "Pesan gagal terkirim. Coba lagi atau hubungi saya lewat email.",
      },
      validation: {
        name: "Nama minimal 2 karakter.",
        email: "Masukkan alamat email yang valid.",
        message: "Pesan minimal 10 karakter.",
      },
    },
  },
  socials: {
    email: "farhannulaziz540@email.com",
    github: "https://github.com/FarhanNulAziz",
    linkedin: "https://www.linkedin.com/in/farhannulaziz/",
  },
  navigation: [
    { label: "Tentang", href: "#tentang" },
    { label: "Proyek", href: "#proyek" },
    { label: "Keahlian", href: "#keahlian" },
    { label: "Kontak", href: "#kontak" },
  ],
  labels: {
    mainNavigation: "Navigasi utama",
    openMenu: "Buka menu navigasi",
    closeMenu: "Tutup menu navigasi",
    github: "GitHub",
    linkedin: "LinkedIn",
    email: "Email",
    demo: "Demo",
    viewCode: "Lihat kode",
    viewDemo: "Lihat demo",
    onGithub: "di GitHub",
    projectImageAlt: "Tangkapan layar proyek",
    profilePhotoAlt: "Foto profil",
    copyrightSymbol: "©",
    skipToContent: "Lewati ke konten utama",
    portfolioTitle: "Portofolio Mahasiswa",
  },
};
