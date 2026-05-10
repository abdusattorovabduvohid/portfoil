import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

// 1. Assets papkasidagi barcha rasmlarni o'qib olish
const images = import.meta.glob("../assets/*.{png,jpg,jpeg,svg,webp}", {
  eager: true,
});

// 2. Havolalar va ularga mos ma'lumotlar
// DIQQAT: Kalit so'zlar (feather, repair) assets'dagi rasm nomi bilan BIR XIL bo'lishi shart
const projectData = {
  "Vet Project": {
    title: "Vet Project",
    link: "https://zoo-market-livid.vercel.app/",
  },

  "Wheather App": {
    title: "Wheather App",
    link: "https://wheather-cyan.vercel.app/",
  },

  Chefina: {
    // Agar rasm nomi "plant project.png" bo'lsa, bu yerda ham probel bo'lishi kerak
    title: "Chefina",
    link: "https://chefina-uz2.vercel.app/",
  },
};

const projects = Object.keys(images).map((path, index) => {
  // Fayl nomini olish (masalan: "../assets/feather.png" -> "feather")
  const fileName = path
    .split("/")
    .pop()
    .replace(/\.[^/.]+$/, "");

  // projectData'dan ma'lumotni qidirish
  const data = projectData[fileName];

  return {
    id: index,
    title: data
      ? data.title
      : fileName.charAt(0).toUpperCase() + fileName.slice(1),
    desc: data ? data.desc : "Personal Project",
    image: images[path].default,
    href: data ? data.link : "#", // Agar data topilsa linkni qo'yadi, bo'lmasa '#'
    isLinked: !!data, // Link bor yoki yo'qligini tekshirish uchun
  };
});

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-black text-white py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Проекты
          </motion.h2>
          <div className="w-20 h-1 bg-[#ff6b00] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.a
              key={project.id}
              href={project.href}
              target={project.isLinked ? "_blank" : "_self"}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              className="group bg-[#111] rounded-3xl overflow-hidden border border-gray-800 hover:border-[#ff6b00]/50 transition-all duration-300 flex flex-col shadow-2xl"
            >
              <div className="p-4">
                <div className="overflow-hidden rounded-2xl h-52 bg-gray-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500">{project.desc}</p>
                </div>

                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-black border border-gray-800 group-hover:bg-[#ff6b00] group-hover:border-[#ff6b00] transition-all duration-300">
                  <FaArrowRight
                    className={`text-[#ff6b00] group-hover:text-white transition-all ${!project.isLinked && "opacity-20"}`}
                  />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
