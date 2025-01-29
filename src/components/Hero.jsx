import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center text-white bg-gradient-to-br from-primary to-primary-dark">
      <div className="text-center">
        <motion.h1
          className="text-6xl font-bold tracking-wide"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          In a World Full of Flowers, Be a Cactus!
        </motion.h1>
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <button className="px-8 py-3 bg-white text-primary rounded-lg hover:bg-gray-100 transition-colors duration-300 text-lg font-semibold">
            Explore Our Services
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;