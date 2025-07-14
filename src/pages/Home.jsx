import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import AboutMeSection from '../components/home/AboutMeSection';
import FavoriteToolsSection from '../components/home/FavoriteToolsSection';
import LatestProjectsSection from '../components/home/LatestProjectsSection';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

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