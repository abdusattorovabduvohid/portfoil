import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTelegram,
} from "react-icons/fa";

const contactInfo = [
  {
    icon: <FaEnvelope className="text-[#ff6b00]" />,
    label: "Email",
    value: "abduvohid_5080@icloud.com",
    href: "mailto:abduvohid_5080@icloud.com",
  },
  {
    icon: <FaPhoneAlt className="text-[#ff6b00]" />,
    label: "Телефон",
    value: "+998 97 755 50 80",
    href: "tel:+998977555080",
  },
  {
    icon: <FaMapMarkerAlt className="text-[#ff6b00]" />,
    label: "Адрес",
    value: "Ташкент, Узбекистан",
    href: "https://maps.google.com",
  },
];

const socials = [
  {
    icon: <FaGithub />,
    href: "https://github.com/abdusattorovabduvohid",
    label: "GitHub",
  },
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/abduvakhid-abdusattorov-b176623bb/",
    label: "LinkedIn",
  },
  { icon: <FaTelegram />, href: "https://t.me/@a_abb7", label: "Telegram" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-black text-white py-24 min-h-[80vh] flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Sarlavha */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter"
          >
            Связаться со мной
          </motion.h2>
          <div className="w-20 h-1 bg-[#ff6b00] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Chap tomon: Kontakt ma'lumotlari */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex items-center p-4 sm:p-6 bg-[#111] border border-gray-800 rounded-3xl group hover:border-[#ff6b00]/50 transition-all duration-300 shadow-xl w-full"
              >
                {/* Ikonka hajmini mobilda biroz kichraytirdik */}
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-2xl bg-black border border-gray-800 group-hover:bg-[#ff6b00]/10 transition-colors text-xl sm:text-2xl">
                  {item.icon}
                </div>

                <div className="ml-4 sm:ml-6 min-w-0 flex-1">
                  {" "}
                  {/* min-w-0 flexbox ichida matn sinishi uchun shart */}
                  <p className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">
                    {item.label}
                  </p>
                  <p className="text-sm sm:text-lg font-medium text-gray-200 group-hover:text-white transition-colors break-all leading-tight">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* O'ng tomon: Social Media & Call to Action */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-[#111] border border-gray-800 p-10 rounded-[40px] flex flex-col items-center text-center shadow-2xl"
          >
            <h3 className="text-2xl font-bold mb-4 text-white">
              Давайте общаться
            </h3>
            <p className="text-gray-400 mb-10 max-w-sm">
              Я нахожусь в поиске новых возможностей. Если у вас есть вопрос или
              вы просто хотите поздороваться — я обязательно постараюсь вам
              ответить!
            </p>

            <div className="flex gap-6 mb-10">
              {socials.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-16 h-16 flex items-center justify-center rounded-2xl bg-black border border-gray-800 text-2xl text-gray-400 hover:text-[#ff6b00] hover:border-[#ff6b00]/50 transition-all shadow-lg"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            <a
              href="mailto:abduvohid_5080@icloud.com"
              className="w-full py-5 bg-[#ff6b00] text-black font-black uppercase tracking-widest rounded-2xl hover:bg-[#e65a00] transition-all transform hover:scale-[1.02] shadow-lg shadow-[#ff6b00]/20"
            >
              Отправить сообщение
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
