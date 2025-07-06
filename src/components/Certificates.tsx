import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  Calendar,
  Download,
  Eye,
  Star,
  CheckCircle,
} from "lucide-react";
import { fadeInUp, staggerContainer, scaleIn } from "../utils/animations";

export const Certificates = () => {
  const certificates = [
    {
      title: "Belajar Membuat Front-End Web untuk Pemula",
      issuer: "Dicoding Indonesia",
      date: "Jun 2025",
      level: "Beginner",
      image: "/certificates/cert-frontend-pemula.png",
      credentialId: "07Z6JKL5JXQR",
      skills: [
        "DOM Manipulation",
        "Event Handling",
        "Web Storage API",
        "JavaScript",
        "Front-End",
      ],
      description:
        "Learned how to build interactive front-end websites: deep-dive into DOM/BOM manipulation with JavaScript, event handling, and browser data storage (Web Storage API). Applied concepts in real-world web projects.",

      verifyLink: "https://www.dicoding.com/certificates/07Z6JKL5JXQR",
      downloadLink: "https://www.dicoding.com/certificates/07Z6JKL5JXQR",
      rating: 5,
      validUntil: "Jun 2028",
    },
    {
      title: "Belajar Dasar Pemrograman JavaScript",
      issuer: "Dicoding Indonesia",
      date: "Mei 2024",
      level: "Beginner",
      image: "/certificates/cert-js.png",
      credentialId: "MEPJNV0NQX3V",
      skills: [
        "JavaScript",
        "OOP",
        "Functional Programming",
        "Async Programming",
        "Module System",
        "Testing",
      ],

      description:
        "Covers JavaScript essentials: variables, data types, logic, functions, OOP, error handling, functional programming, asynchronous programming, module system, and testing. Includes practical tasks and final exam.",

      verifyLink: "https://www.dicoding.com/certificates/MEPJNV0NQX3V",
      downloadLink: "https://www.dicoding.com/certificates/MEPJNV0NQX3V",
      rating: 5,
      validUntil: "Mei 2027",
    },
    {
      title: "Belajar Dasar Pemrograman Web",
      issuer: "Dicoding Indonesia",
      date: "Apr 2024",
      level: "Beginner",
      image: "/certificates/cert-dasar-pemula.png",
      credentialId: "98XWLK3D9ZM3",
      skills: [
        "Semantic HTML",
        "CSS",
        "Responsive Layout",
        "Flexbox",
        "Media Query",
        "Web Project",
      ],

      description:
        "Comprehensive course covering website fundamentals, semantic HTML, advanced CSS (selectors, box model, media queries), and responsive layouts using Flexbox. Final project: building a complete, responsive website.",

      verifyLink: "https://www.dicoding.com/certificates/98XWLK3D9ZM3",
      downloadLink: "https://www.dicoding.com/certificates/98XWLK3D9ZM3",
      rating: 5,
      validUntil: "Apr 2027",
    },
  ];

  return (
    <section
      id="certificates"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background (opsional, bisa hapus jika mau simple) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-yellow-500/10 dark:text-orange-500/10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          >
            <Award size={24} />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Certificates &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-600 dark:from-blue-500 dark:to-purple-600">
              Achievements
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Official certifications from Dicoding that validate my expertise in
            front-end web development.
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch"
        >
          <AnimatePresence>
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.credentialId}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative h-full min-h-[500px] flex flex-col"
              >
                <motion.div
                  whileHover={{ y: -10, rotateY: 5 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                >
                  {/* Certificate Image */}
                  <div className="relative aspect-video w-full overflow-hidden flex items-center justify-center bg-gray-100 dark:bg-gray-900">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover rounded shadow"
                    />
                  </div>

                  {/* Certificate Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <Award size={16} className="text-yellow-500" />
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        {cert.issuer}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-yellow-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {cert.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                      {cert.description}
                    </p>

                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>Issued {cert.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <CheckCircle size={14} className="text-green-500" />
                        <span>Valid until {cert.validUntil}</span>
                      </div>
                    </div>

                    {/* Credential ID */}
                    <div className="text-xs text-gray-400 dark:text-gray-500 mb-4 font-mono bg-gray-50 dark:bg-gray-700 p-2 rounded">
                      ID: {cert.credentialId}
                    </div>

                    {/* Action Button */}
                    <div className="flex justify-center mt-auto">
                      <motion.a
                        href={cert.verifyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-600 dark:from-blue-500 dark:to-purple-600 text-white rounded-lg font-medium text-center hover:shadow-lg transition-shadow duration-300 flex items-center justify-center gap-2 text-sm"
                      >
                        <Eye size={14} />
                        Verify
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
