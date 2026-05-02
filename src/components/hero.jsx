import { useEffect, useState, useMemo } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { SiHtml5, SiJavascript,  SiReact, SiTailwindcss, SiRedux, SiVite } from "react-icons/si";
import { FaGithub, FaInstagram, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";

export default function Hero() {
  const [init, setInit] = useState(false);

  // 1. Mayda nuqtalar foni (avvalgi xato bo'lsa-yu, lekin o'rnatilgan bo'lsa ishlaydi)
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesOptions = useMemo(() => ({
    background: { color: { value: "transparent" } },
    fpsLimit: 120,
    particles: {
      color: { value: "#ff6b00" },
      move: { enable: true, speed: 0.6, direction: "none", random: true },
      number: { density: { enable: true, area: 800 }, value: 120 },
      opacity: { value: 0.3 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  }), []);

  // 2. Mouse Hover (Silliq harakat)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  function handleMouseMove(event) {
    const { clientX, clientY } = event;
    mouseX.set((clientX / window.innerWidth - 0.5) * 50);
    mouseY.set((clientY / window.innerHeight - 0.5) * 50);
  }

  const techIcons = [
    { Icon: SiHtml5, color: "text-orange-500" },
    { Icon: SiJavascript, color: "text-yellow-400" },
    { Icon: SiReact, color: "text-cyan-400" },
    { Icon: SiRedux, color: "text-purple-500" },
    { Icon: SiTailwindcss, color: "text-sky-400" },
    { Icon: SiVite, color: "text-yellow-500" },
  ];

  return (
    <section onMouseMove={handleMouseMove} className="relative min-h-screen bg-black py-[100px] text-white flex items-center overflow-hidden">
      
      {/* Nuqtalar foni */}
      {init && (
        <Particles id="tsparticles" options={particlesOptions} className="absolute inset-0 z-0" />
      )}

      {/* Sichqonchaga ergashuvchi yorug'lik */}
      <motion.div 
        style={{ x: springX, y: springY }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff6b00]/10 rounded-full blur-[120px] pointer-events-none z-10"
      />

      <div className="relative justify-center max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full z-20 pt-16">
        
        {/* Chap tomon: Matn va Ism */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-gray-500 mb-2 text-xl">
            Abdusattorov Abduvohid
          </motion.p>
          <motion.h1 initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="text-[60px] md:text-[100px] font-black leading-none text-[#ff6b00] tracking-tighter">
            Front-End
          </motion.h1>
          <motion.h2 initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="text-[60px] md:text-[100px] font-black leading-none text-white tracking-tighter mb-8">
            developer
          </motion.h2>

          {/* <div className="flex gap-4">
            {[FaGithub, FaInstagram, FaLinkedinIn, FaTelegramPlane].map((Icon, i) => (
              <motion.div key={i} whileHover={{ y: -5, backgroundColor: "#ff6b00" }} className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-800 bg-gray-900 text-gray-400 hover:text-white cursor-pointer transition-colors">
                <Icon size={20} />
              </motion.div>
            ))}
          </div> */}
          <div className="flex gap-4">
  {[
    { Icon: FaGithub, url: "https://github.com/abbbabb736-star" },
    { Icon: FaInstagram, url: "https://instagram.com/azdv_6" },
    { Icon: FaLinkedinIn, url: "https://www.linkedin.com/in/abduvakhid-abdusattorov-b176623bb/" },
    { Icon: FaTelegramPlane, url: "https://t.me/a_abb7" }
  ].map((social, i) => (
    <motion.a
      key={i}
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -5, backgroundColor: "#ff6b00" }}
      className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-800 bg-gray-900 text-gray-400 hover:text-white cursor-pointer transition-colors"
    >
      <social.Icon size={20} />
    </motion.a>
  ))}
</div>
        </div>

        {/* O'ng tomon: Markazlashgan Aylanuvchi doira (Responsive Radius) */}
        <div className="relative flex items-center justify-center h-[500px] w-full">
          <div className="text-9xl font-bold text-[#ff2b28]/20 select-none">&lt;/&gt;</div>
          
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute w-[400px] h-[400px] md:w-[480px] md:h-[480px] rounded-full">
            {techIcons.map(({ Icon, color }, index) => {
              const angle = (index / techIcons.length) * 360;
              
              // Responsive Radius: Ekran kengligiga qarab radius hisoblanadi
              // Telefondan (400px) kompyuterga (480px) silliq o'tadi. 
              const radius = window.innerWidth < 768 ? 160 : 210;

              return (
                <div key={index} className="absolute left-1/2 top-1/2" style={{ transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)` }}>
                  <motion.div animate={{ rotate: -360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="w-15 h-15 bg-gray-950 border border-orange-600 rounded-2xl flex items-center justify-center shadow-2xl">
                    <Icon className={`${color} text-4xl flex justify-center`} />
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}