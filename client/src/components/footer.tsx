import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, Coffee } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/arshita01625/",
      icon: <Linkedin className="w-5 h-5" />,
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      name: "GitHub",
      href: "https://github.com/arshita1625",
      icon: <Github className="w-5 h-5" />,
      color: "bg-gray-700 hover:bg-gray-800",
    },
    {
      name: "Email",
      href: "mailto:arshita01625@gmail.com",
      icon: <Mail className="w-5 h-5" />,
      color: "bg-purple-600 hover:bg-purple-700",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 py-12 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left mb-6 md:mb-0"
          >
            <button
              onClick={scrollToTop}
              className="text-2xl font-bold text-cyan-400 mb-2 hover:text-cyan-300 transition-colors cursor-pointer"
            >
              Arshita
            </button>
            <p className="text-gray-400 flex items-center justify-center md:justify-start">
              From concept to code — crafting clean, impactful software.
              <Heart className="w-4 h-4 ml-2 text-red-400" />
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex space-x-4"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`w-10 h-10 ${link.color} rounded-lg flex items-center justify-center transition-colors`}
                title={link.name}
              >
                <div className="text-white">
                  {link.icon}
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-slate-800 mt-8 pt-8 text-center"
        >
          <p className="text-gray-400 flex items-center justify-center">
            &copy; 2025 Arshita All rights reserved. Built with passion and lots of{" "}
            <Coffee className="w-4 h-4 mx-1 text-amber-600" />
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
