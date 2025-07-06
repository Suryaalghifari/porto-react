import React from "react";
import { motion } from "framer-motion";

export const AnimatedBackground = () => (
  <div className="fixed inset-0 z-0 pointer-events-none">
    <motion.div
      className="absolute top-1/3 left-1/3 w-[350px] h-[350px] rounded-full blur-3xl bg-gradient-to-r from-blue-500/30 to-purple-500/30 dark:from-orange-500/40 dark:to-yellow-500/30"
      animate={{ scale: [1, 1.15, 1], rotate: [0, 180, 360] }}
      transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>
);
