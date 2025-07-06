import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Code2,
  Database,
  Smartphone,
  Cloud,
  Palette,
  Zap,
  Monitor,
  Globe,
  Settings,
  Layers,
} from "lucide-react";
import { fadeInUp, staggerContainer, scaleIn } from "../utils/animations";

export const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      title: "Languages",
      icon: Code2, // Cocok untuk "bahasa pemrograman"
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
      borderColor: "border-indigo-200 dark:border-indigo-700",
      skills: ["PHP", "Dart", "JavaScript", "Python"],
    },
    {
      title: "Frameworks",
      icon: Layers, // Cocok untuk stack/frameworks
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      borderColor: "border-blue-200 dark:border-blue-700",
      skills: ["Laravel", "Express.js", "Flutter", "React"],
    },
    {
      title: "Databases",
      icon: Database,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      borderColor: "border-purple-200 dark:border-purple-700",
      skills: ["MySQL", "MongoDB", "Firebase"],
    },
    {
      title: "Developer Tools",
      icon: Settings,
      color: "from-yellow-500 to-amber-500",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
      borderColor: "border-yellow-200 dark:border-yellow-700",
      skills: ["Git", "Postman", "VS Code"],
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 dark:bg-orange-500/10 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500/10 dark:bg-yellow-500/10 rounded-full blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating Tech Icons */}
        {[Code, Database, Cloud, Settings, Globe, Layers].map((Icon, index) => (
          <motion.div
            key={index}
            className="absolute text-blue-500/10 dark:text-orange-500/10"
            style={{
              top: `${20 + index * 15}%`,
              left: `${10 + index * 12}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10 + index * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 2,
            }}
          >
            <Icon size={32} />
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
            Technical{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-orange-500 dark:to-yellow-500">
              Skills
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive toolkit that enables me to build robust and scalable
            applications
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={scaleIn}
              onHoverStart={() => setHoveredSkill(category.title)}
              onHoverEnd={() => setHoveredSkill(null)}
              className="group relative"
            >
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className={`${category.bgColor} ${category.borderColor} border-2 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 relative overflow-hidden`}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center`}
                  >
                    <category.icon size={24} className="text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                      whileHover={{ scale: 1.05 }}
                      className="bg-white dark:bg-gray-800 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 border border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500"
                    >
                      <span className="block truncate">{skill}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Hover Effect Overlay */}
                <AnimatePresence>
                  {hoveredSkill === category.title && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-10 rounded-2xl pointer-events-none`}
                    />
                  )}
                </AnimatePresence>

                {/* Animated Border */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                  style={{
                    background: `linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)`,
                  }}
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="mt-16 text-center"
        ></motion.div>
      </div>
    </section>
  );
};
