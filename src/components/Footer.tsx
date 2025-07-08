import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import {
  Heart,
  Code2,
  Github,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export const Footer = () => {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Suryaalghifari",
      label: "GitHub",
      color: "hover:text-gray-300",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/muhamad-surya-al-ghifari-791625335",
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },
    {
      icon: Mail,
      href: "mailto:m.suryaalghifari@gmail.com",
      label: "Email",
      color: "hover:text-red-400",
    },
  ];

  const { scrollProgress } = useScrollAnimation();

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Certificates", href: "#certificates" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-600/10 dark:from-orange-500/10 dark:to-yellow-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-purple-500/10 to-pink-600/10 dark:from-yellow-500/10 dark:to-red-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating Code Icons */}
        {[Code2, Github, Heart].map((Icon, index) => (
          <motion.div
            key={index}
            className="absolute text-white/5"
            style={{
              top: `${20 + index * 25}%`,
              left: `${15 + index * 20}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 8 + index * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 2,
            }}
          >
            <Icon size={32} />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="relative"
              >
                <img
                  src="/images/LogoS.png"
                  alt="Logo Suryaalghifari"
                  className="w-16 h-16 rounded-full border-2 border-white/20 shadow-lg"
                />
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 dark:from-orange-500/20 dark:to-yellow-600/20"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 dark:from-orange-400 dark:to-yellow-500 bg-clip-text text-transparent">
                  Suryaalghifari
                </h3>
                <p className="text-gray-400 text-sm">Full Stack Developer</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-sm mx-auto md:mx-0">
              Thank you for visiting my portfolio. Let's create something
              amazing together and build the future of web development!
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h4 className="text-lg font-semibold mb-6 text-white">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ x: 5, color: "#60a5fa" }}
                  className="text-gray-400 hover:text-blue-400 dark:hover:text-orange-400 transition-colors duration-300 text-sm"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center md:text-left"
          >
            <h4 className="text-lg font-semibold mb-6 text-white">
              Get In Touch
            </h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-center md:justify-start gap-3 text-gray-400">
                <Mail size={16} />
                <span className="text-sm">m.suryaalghifari@gmail.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3 text-gray-400">
                <MapPin size={16} />
                <span className="text-sm">Indonesia</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 bg-gray-800 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 dark:hover:shadow-orange-500/25`}
                  title={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-8"
        />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-center gap-2 text-gray-400"
          >
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart size={16} className="text-red-500" />
            </motion.div>
            <span>by</span>
            <span className="font-semibold text-white">Suryaalghifari</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-sm text-gray-500 flex items-center gap-4"
          >
            <span>© 2025 Suryaalghifari. All rights reserved.</span>
            <div className="hidden md:flex items-center gap-2">
              <Code2 size={14} className="text-blue-500 dark:text-orange-500" />
              <span className="text-xs">Built with React & Tailwind</span>
            </div>
          </motion.div>
        </div>

        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-orange-500 dark:to-yellow-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow duration-300 z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          style={{ outline: "none", position: "fixed" }}
        >
          {/* SVG Lingkaran Progress */}
          <svg
            width={48}
            height={48}
            className="absolute"
            style={{ left: 0, top: 0, pointerEvents: "none" }}
          >
            <circle
              cx={24}
              cy={24}
              r={20}
              fill="none"
              stroke="white"
              strokeOpacity={0.2}
              strokeWidth={4}
            />
            <motion.circle
              cx={24}
              cy={24}
              r={20}
              fill="none"
              stroke="#fff"
              strokeWidth={4}
              strokeDasharray={2 * Math.PI * 20}
              strokeDashoffset={2 * Math.PI * 20 * (1 - scrollProgress)}
              initial={false}
              animate={{
                strokeDashoffset: 2 * Math.PI * 20 * (1 - scrollProgress),
              }}
              transition={{ duration: 0.2 }}
              strokeLinecap="round"
            />
          </svg>
          <motion.div
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="relative z-10"
          >
            ↑
          </motion.div>
        </motion.button>
      </div>
    </footer>
  );
};
