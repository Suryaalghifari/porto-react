import React from "react";
import { motion } from "framer-motion";
import { Heart, Code2 } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Code2 size={24} className="text-blue-500 dark:text-orange-500" />
            </div>
            <p className="text-gray-300 max-w-md mx-auto">
              Thank you for visiting my portfolio. Let's create something
              amazing together!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center gap-2 text-gray-400"
          >
            <span>Made with</span>
            <Heart size={16} className="text-red-500 animate-pulse" />
            <span>by Suryaalghifari</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 text-sm text-gray-500"
          >
            © 2025 Suryaalghifari. All rights reserved.
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
