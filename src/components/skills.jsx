import { motion } from "framer-motion";
import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiRedux,
  SiSass,
  SiTypescript,
  SiNextdotjs,
  SiVite,
  SiCss,
} from "react-icons/si";
import { FaGraduationCap, FaLaptopCode } from "react-icons/fa";

// Texnologiyalar ro'yxati
const skillList = [
  { name: "HTML", icon: <SiHtml5 />, color: "text-[#e34c26]" },
  { name: "JavaScript", icon: <SiJavascript />, color: "text-[#f7df1e]" },
  { name: "React", icon: <SiReact />, color: "text-[#61dbfb]" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "text-[#38bdf8]" },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
    color: "text-[#000000] dark:text-white",
  },
  { name: "Redux", icon: <SiRedux />, color: "text-[#764abc]" },
  { name: "TypeScript", icon: <SiTypescript />, color: "text-[#3178c6]" },
  { name: "Sass", icon: <SiSass />, color: "text-[#cc6699]" },
  { name: "Vite", icon: <SiVite />, color: "text-[#646cff]" },
  { name: "CSS", icon: <SiCss />, color: "text-[#1572b6]" },
];

// // Texnologiyalar ro'yxati
// const skillList = [
//   { name: "HTML", icon: <SiHtml5 />, color: "text-[#e34c26]" },
//   { name: "CSS", icon: <SiCss3 />, color: "text-[#1572b6]" }, // Qo'shildi
//   { name: "JavaScript", icon: <SiJavascript />, color: "text-[#f7df1e]" },
//   { name: "TypeScript", icon: <SiTypescript />, color: "text-[#3178c6]" }, // Qo'shildi
//   { name: "React", icon: <SiReact />, color: "text-[#61dbfb]" },
//   { name: "Next.js", icon: <SiNextdotjs />, color: "text-[#000000] dark:text-white" }, // Qo'shildi
//   { name: "Tailwind", icon: <SiTailwindcss />, color: "text-[#38bdf8]" },
//   { name: "Redux", icon: <SiRedux />, color: "text-[#764abc]" },
//   { name: "Sass", icon: <SiSass />, color: "text-[#cc6699]" },
//   { name: "Vite", icon: <SiVite />, color: "text-[#646cff]" },
//   { name: "Node.js", icon: <SiNodejs />, color: "text-[#339933]" },
// ];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-black text-white py-24 min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Sarlavha */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter"
          >
            Образование и навыки
          </motion.h2>
          <div className="w-20 h-1 bg-[#ff6b00] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* 1. TA'LIM BO'LIMI (Education) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold border-l-4 border-[#ff6b00] pl-4 mb-8">
              Образование
            </h3>

            {/* TDIU Karta */}
            <div className="flex items-center gap-5 bg-[#111] p-6 rounded-3xl border border-gray-800 hover:border-[#ff6b00]/30 transition-all group">
              <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center rounded-2xl bg-blue-600/10 text-blue-500 text-3xl group-hover:scale-110 transition-transform">
                <FaGraduationCap />
              </div>
              <div>
                <h4 className="text-xl font-bold">ТГТУ (TDTU)</h4>
                <p className="text-gray-500 text-sm">
                  Ташкентский государственный технический университет
                </p>
                <span className="inline-block mt-2 text-[10px] px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full font-bold uppercase tracking-widest">
                  В настоящее время — студент
                </span>
              </div>
            </div>

            {/* Najot Ta'lim Karta */}
            <div className="flex items-center gap-5 bg-[#111] p-6 rounded-3xl border border-gray-800 hover:border-[#ff6b00]/30 transition-all group">
              <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center rounded-2xl bg-orange-600/10 text-[#ff6b00] text-3xl group-hover:scale-110 transition-transform">
                <FaLaptopCode />
              </div>
              <div>
                <h4 className="text-xl font-bold">Najot Ta'lim</h4>
                <p className="text-gray-500 text-sm">
                  Центр современных профессий
                </p>
                <span className="inline-block mt-2 text-[10px] px-3 py-1 bg-[#ff6b00]/10 text-[#ff6b00] rounded-full font-bold uppercase tracking-widest">
                  2025 - 2026
                </span>
              </div>
            </div>
          </motion.div>

          {/* 2. TEXNOLOGIYALAR BO'LIMI (Technical Skills) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h3 className="text-2xl font-bold border-l-4 border-[#ff6b00] pl-4 mb-8">
              Технологии
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {skillList.map((skill, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="bg-[#111] border border-gray-800 p-6 rounded-3xl flex flex-col items-center justify-center transition-all duration-300 group hover:border-[#ff6b00]/50"
                >
                  <div
                    className={`text-4xl mb-3 ${skill.color} group-hover:drop-shadow-[0_0_10px_rgba(255,107,0,0.3)] transition-all`}
                  >
                    {skill.icon}
                  </div>
                  <span className="text-[10px] font-black tracking-widest text-gray-600 uppercase group-hover:text-white transition-colors text-center">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
