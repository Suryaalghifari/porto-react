import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const ScrollIndicator = () => {
  const { scrollY } = useScrollAnimation();
  const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollProgress = Math.min(scrollY / documentHeight, 1);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-orange-500 dark:to-yellow-500 z-50 origin-left"
      style={{ scaleX: scrollProgress }}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: scrollProgress }}
      transition={{ duration: 0.1 }}
    />
  );
};