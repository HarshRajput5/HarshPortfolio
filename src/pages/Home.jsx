import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import AboutMeSection from '../components/home/AboutMeSection';
import FavoriteToolsSection from '../components/home/FavoriteToolsSection';
import LatestProjectsSection from '../components/home/LatestProjectsSection';

const Home = () => {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <AboutMeSection />
      <FavoriteToolsSection />
      <LatestProjectsSection />
    </main>
  );
};

export default Home; 