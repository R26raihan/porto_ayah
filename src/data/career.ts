import gaiaPhoto1 from '../assets/WhatsApp Image 2026-04-24 at 19.31.18.jpeg'
import gaiaPhoto2 from '../assets/WhatsApp Image 2026-04-24 at 19.31.18 (1).jpeg'

export interface Experience {
  company: string;
  period: string;
  role: string;
  project: string;
  tasks: string[];
  thumbnail?: string;
  gallery?: string[];
}

export const careerData: Experience[] = [
  {
    company: "PT. BERCA",
    period: "2025",
    role: "Drafter MEP",
    project: "RUMAH SAKIT SUCI PARAMITA",
    tasks: [
      "Menyusun dan mereview shop drawing sistem MEP sesuai spesifikasi proyek rumah sakit.",
      "Melakukan koordinasi teknis dengan tim lapangan, kontraktor, dan konsultan.",
      "Mendukung pengawasan instalasi MEP agar sesuai standar fasilitas kesehatan."
    ],
    thumbnail: "https://tetra.co.id/assets/images/project/rumah_sakit_suci_paramita__balaraja__banten_677.jpg"
  },
  {
    company: "PT. MULTIKON",
    period: "2024",
    role: "Koordinator Subkontraktor MEP",
    project: "UNIVERSITAS CIPUTRA JAKARTA",
    tasks: [
      "Mengkoordinasikan pekerjaan subkontraktor MEP di lapangan.",
      "Mengecek gambar kerja dan kesesuaian pelaksanaan dengan spesifikasi proyek.",
      "Memastikan progres pekerjaan MEP berjalan sesuai jadwal konstruksi."
    ],
    thumbnail: "https://jakarta.ciputra.ac.id/wp-content/uploads/2024/06/11.-UC-JAKARTA-1_11zon.jpg"
  },
  {
    company: "PT. GAIA KENCANA",
    period: "2014 — 2023",
    role: "Site Engineer MEP",
    project: "HOTEL GAIA BANDUNG, JAWA BARAT",
    tasks: [
      "Mengawasi pelaksanaan sistem MEP pada proyek hotel.",
      "Melakukan koordinasi lintas disiplin (arsitektur, struktur, dan kontraktor).",
      "Memastikan instalasi sesuai spesifikasi teknis, standar keselamatan, dan jadwal.",
      "Menyusun dokumentasi teknis dan proses serah terima pekerjaan."
    ],
    thumbnail: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/325094988.jpg?k=ff1e4cb5f7c745a935c939658cdf3c3e87bcb80b20a47e3f8c17088044607877&o=",
    gallery: [
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/325094988.jpg?k=ff1e4cb5f7c745a935c939658cdf3c3e87bcb80b20a47e3f8c17088044607877&o=",
      "https://images2.imgbox.com/bf/84/0SCDb3W4_o.jpg",
      gaiaPhoto1,
      gaiaPhoto2
    ]
  },
  {
    company: "PT. WIJAYA ENGGINDO NUSA",
    period: "2010 — 2014",
    role: "Engineer MEP",
    project: "THE PARK RESIDENCE APARTMENT & JAKARTA TELISINDO",
    tasks: [
      "Terlibat dalam perencanaan dan penggambaran sistem MEP gedung bertingkat.",
      "Menyusun gambar kerja dan mendukung koordinasi teknis proyek.",
      "Mengawasi implementasi sistem MEP di lapangan."
    ],
    thumbnail: "https://d2jgpj59n9tcev.cloudfront.net/apartment/gallery/apartment/entrance5b6aaf7b3e448.jpg"
  },
  {
    company: "PT. NARWASTU PRATAMA",
    period: "2005 — 2007",
    role: "Drafter MEP",
    project: "SUDIRMAN CITY APARTMENT & CITY HOME APARTMENT KELAPA GADING",
    tasks: [
      "Menyusun gambar kerja dan shop drawing sistem MEP.",
      "Mendukung koordinasi teknis dan dokumentasi proyek."
    ],
    thumbnail: "https://cdn.raywhite.co.id/2023/08/10/396728-69489381__1691640361-1699-AptCityHomeMOI2-794.jpg"
  },
  {
    company: "PT. NEPTININDO PASIFIC",
    period: "2001 — 2002",
    role: "Drafter MEP",
    project: "PURI BUGAR",
    tasks: [
      "Menyusun gambar teknis sistem MEP sesuai desain perencanaan.",
      "Mendukung kebutuhan teknis proyek pada tahap awal pelaksanaan."
    ],
    thumbnail: "https://hargacampur.com/wp-content/uploads/2023/05/Harga-Tiket-Masuk-Kolam-Renang-Puri-Bugar-Sport-Club.webp"
  }
];

export const educationData = {
  school: "STM Jakarta III Kedoya",
  location: "Jakarta Barat",
  year: "Lulus 1995"
};
