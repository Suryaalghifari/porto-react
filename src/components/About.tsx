import React from "react";
import { motion } from "framer-motion";
import { Code2, Folder, Download } from "lucide-react";
import { fadeInUp, slideInLeft, slideInRight } from "../utils/animations";

export const About = () => {
  const stats = [
    { icon: Code2, label: "Lines of Code", value: "100K+" },
    { icon: Folder, label: "Projects Created", value: "20+" },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-blue-600 dark:text-orange-500">Me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInLeft}
            className="space-y-6"
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-orange-500 dark:to-yellow-500 rounded-2xl p-8 text-white">
              <div className="w-64 h-64 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-6 overflow-hidden">
                <img
                  src="/images/SuryaPhoto.jpg"
                  alt="Suryaalghifari"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-center">Suryaalghifari</h3>
              <p className="text-center text-white/90">Full Stack Developer</p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInRight}
            className="space-y-6"
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Hi, I’m Suryaalghifari—a Full Stack Developer and second-year
                Information Systems student in Bandung. I started coding 2+
                years ago and love turning ideas into real web solutions that
                make a difference.
              </p>
              <blockquote className="border-l-4 pl-4 italic text-gray-600 dark:text-gray-300 mt-4">
                I am driven to build robust, scalable, and elegant software that
                solves real-world problems and pushes the boundaries of what's
                possible.
              </blockquote>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map(({ icon: Icon, label, value }) => (
                <motion.div
                  key={label}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl"
                >
                  <Icon
                    size={32}
                    className="mx-auto mb-3 text-blue-600 dark:text-orange-500"
                  />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    {label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
