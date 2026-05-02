import { motion } from "framer-motion";

const skills = [
  { name: "HTML", percentage: 90 },
  { name: "CSS/SCSS", percentage: 85 },
  { name: "JAVASCRIPT", percentage: 80 },
  { name: "REACT.JS", percentage: 85 },
  { name: "TAILWIND CSS", percentage: 90 },
  { name: "AI PROMPTING", percentage: 75 }, // AI qobiliyati
];

export default function About() {
  return (
    <section id="about" className="bg-black text-white py-20 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        
        {/* Sarlavha */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter"
          >
            About Me
          </motion.h2>
          <div className="w-20 h-1 bg-[#ff6b00] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Chap Tomon: Yangilangan Motivatsion Matn */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-gray-300 text-lg leading-relaxed"
          >
            <p>
              Hi, I'm <span className="text-white font-semibold">Abduvohid Abdusattorov</span>. My journey into technology was driven by a deep curiosity about how digital worlds are built. I recently completed an intensive <span className="text-[#ff6b00] font-bold">8-month Front-End curriculum at Najot Ta’lim</span>, where I transformed from a tech enthusiast into a focused developer.
            </p>
            
            <p>
              What sets me apart is my <span className="text-white font-semibold">AI-first approach to development</span>. I am highly proficient in leveraging AI tools to accelerate my workflow, debug complex issues, and stay ahead of industry trends. I believe that the future of coding lies in the synergy between human creativity and artificial intelligence.
            </p>

            <p>
              Although I am at the <span className="text-[#ff6b00] font-semibold">threshold of my professional career</span>, I have spent hundreds of hours building real-world application structures, focusing on performance and pixel-perfect responsiveness. I don't just write code; I craft experiences.
            </p>

            <p className="italic text-gray-400 border-l-2 border-[#ff6b00] pl-4">
              "I am not looking for just a job, but a challenge where I can grow and deliver value from day one."
            </p>
          </motion.div>

          {/* O'ng Tomon: Skills (Foizli doiralar) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center group"
              >
                <div className="relative w-24 h-24 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="5"
                      fill="transparent"
                      className="text-gray-900"
                    />
                    <motion.circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="#ff6b00"
                      strokeWidth="5"
                      fill="transparent"
                      strokeDasharray="251.2"
                      initial={{ strokeDashoffset: 251.2 }}
                      whileInView={{ strokeDashoffset: 251.2 - (251.2 * skill.percentage) / 100 }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                  </svg>
                  <span className="absolute text-lg font-bold text-white">{skill.percentage}%</span>
                </div>
                <span className="mt-4 text-[10px] font-black tracking-widest text-gray-500 group-hover:text-[#ff6b00] transition-colors uppercase">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}