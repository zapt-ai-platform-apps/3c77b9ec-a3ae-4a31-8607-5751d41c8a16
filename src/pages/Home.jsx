import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import ServicesOverview from '../components/ServicesOverview';
import PortfolioTeaser from '../components/PortfolioTeaser';
import ClientsSection from '../components/ClientsSection';
import ContactTeaser from '../components/ContactTeaser';

function Home() {
  return (
    <div className="space-y-20">
      <Hero />
      <ServicesOverview />
      <PortfolioTeaser />
      <ClientsSection />
      <ContactTeaser />
    </div>
  );
}

export default Home;