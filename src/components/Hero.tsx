import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Code2,
  Download,
} from "lucide-react";
import { fadeInUp, staggerContainer, float, rotate } from "../utils/animations";

export const Hero = () => {
  const handleScrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          variants={rotate}
          animate="animate"
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 dark:bg-orange-500/10 rounded-full blur-3xl"
        />
        <motion.div
          variants={float}
          animate="animate"
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-yellow-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="mb-8 relative">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4">
              Hello, I’m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-orange-500 dark:to-yellow-500">
                Suryaalghifari
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-2">
              <Typewriter
                words={[
                  "Full Stack Developer",
                  "Information Systems Student",
                  "Web Enthusiast",
                  "Lifelong Learner",
                ]}
                loop={0} // 0 = infinite
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.a
              href="/doc/Suryaalghifari(CV).pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-orange-500 dark:to-yellow-500 text-white rounded-full font-medium hover:shadow-lg transition-shadow duration-300 flex items-center gap-2"
            >
              <Download size={18} />
              View Resume
            </motion.a>

            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-blue-600 dark:border-orange-500 text-blue-600 dark:text-orange-500 rounded-full font-medium hover:bg-blue-600 dark:hover:bg-orange-500 hover:text-white transition-colors duration-300"
            >
              View Projects
            </motion.a>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex justify-center space-x-6"
          >
            {[
              {
                Icon: Github,
                href: "https://github.com/Suryaalghifari",
                label: "GitHub",
              },
              {
                Icon: Linkedin,
                href: "https://www.linkedin.com/in/muhamad-surya-al-ghifari-791625335",
                label: "LinkedIn",
              },
              {
                Icon: Mail,
                href: "mailto:m.suryaalghifari@gmail.com",
                label: "Email",
              },
            ].map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel={label !== "Email" ? "noopener noreferrer" : undefined}
                className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-orange-500"
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-400 dark:text-gray-500"
        >
          <ArrowDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};
