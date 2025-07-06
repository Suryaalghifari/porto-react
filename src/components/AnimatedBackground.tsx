import React from "react";
import { motion } from "framer-motion";

// Boleh pake useMemo, tapi partikel jangan terlalu banyak!
export const AnimatedBackground = () => {
  const particles = React.useMemo(
    () =>
      [...Array(3)].map(() => ({
        startX: Math.random() * window.innerWidth,
        startY: Math.random() * window.innerHeight,
        endX: Math.random() * window.innerWidth,
        endY: Math.random() * window.innerHeight,
        duration: Math.random() * 8 + 7, // durasi antara 7-15 detik
      })),
    []
  );

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated Floating Particles (3x) */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-500/20 dark:bg-orange-500/20 rounded-full"
          initial={{ x: p.startX, y: p.startY }}
          animate={{ x: p.endX, y: p.endY }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        />
      ))}

      {/* Satu orb gradient saja, animasi pelan */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-80 h-80 bg-gradient-to-r from-blue-400/30 to-purple-600/30 dark:from-orange-400/30 dark:to-yellow-600/30 rounded-full blur-3xl"
        animate={{
          y: [0, -40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Optional: Tambahkan orb kecil di pojok lain, statis */}
      <div className="absolute bottom-10 right-16 w-40 h-40 bg-gradient-to-r from-purple-400/20 to-pink-600/20 dark:from-yellow-400/20 dark:to-red-600/20 rounded-full blur-3xl" />
    </div>
  );
};
