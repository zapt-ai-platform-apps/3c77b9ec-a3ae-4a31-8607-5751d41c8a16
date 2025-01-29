import React from 'react';
import { motion } from 'framer-motion';

function ServicesOverview() {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom websites combining design & functionality.',
      icon: '💻'
    },
    {
      title: 'Branding',
      description: 'Creating unique brand identities that stand out.',
      icon: '🎨'
    },
    {
      title: 'Marketing',
      description: 'Strategies that drive results and growth.',
      icon: '📈'
    }
  ];

  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center mb-16">Our Expertise. Your Vision.</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            className="group relative p-8 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-6xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default ServicesOverview;