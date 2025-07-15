import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import AboutMeSection from '../components/home/AboutMeSection';
import FavoriteToolsSection from '../components/home/FavoriteToolsSection';
import LatestProjectsSection from '../components/home/LatestProjectsSection';
import { Title, Meta } from 'react-head';

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
    <>
      <Title>Harsh Rajput | Freelancer | Flutter, Android, iOS, React Developer</Title>
      <Meta name="description" content="Harsh Rajput - Freelancer, Flutter Developer, Android Developer, iOS Developer, React Developer, Website Developer. Expert in building fast, beautiful, and scalable mobile and web apps." />
      <Meta name="keywords" content="Harsh Rajput, Freelancer, Flutter Developer, Android Developer, iOS Developer, React Developer, Website Developer, Mobile App Developer, Web Developer, Gujarat, India" />
      <Meta property="og:title" content="Harsh Rajput | Portfolio" />
      <Meta property="og:description" content="Freelancer specializing in Flutter, Android, iOS, React, and Website Development. Let's build something your users will love!" />
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content="https://your-portfolio-url.com" />
      <Meta property="og:image" content="https://your-portfolio-url.com/preview.png" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Harsh Rajput | Portfolio" />
      <Meta name="twitter:description" content="Freelancer specializing in Flutter, Android, iOS, React, and Website Development." />
      <Meta name="twitter:image" content="https://your-portfolio-url.com/preview.png" />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutMeSection />
        <FavoriteToolsSection />
        <LatestProjectsSection />
      </main>
    </>
  );
};

export default Home; 