import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import AboutMeSection from '../components/home/AboutMeSection';
import FavoriteToolsSection from '../components/home/FavoriteToolsSection';
import LatestProjectsSection from '../components/home/LatestProjectsSection';
import { Helmet } from 'react-helmet-async';

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
      <Helmet>
        <title>Harsh Rajput | Freelancer | Flutter, Android, iOS, React Developer</title>
        <meta name="description" content="Harsh Rajput - Freelancer, Flutter Developer, Android Developer, iOS Developer, React Developer, Website Developer. Expert in building fast, beautiful, and scalable mobile and web apps." />
        <meta name="keywords" content="Harsh Rajput, Freelancer, Flutter Developer, Android Developer, iOS Developer, React Developer, Website Developer, Mobile App Developer, Web Developer, Gujarat, India" />
        <meta property="og:title" content="Harsh Rajput | Portfolio" />
        <meta property="og:description" content="Freelancer specializing in Flutter, Android, iOS, React, and Website Development. Let's build something your users will love!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-portfolio-url.com" />
        <meta property="og:image" content="https://your-portfolio-url.com/preview.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Harsh Rajput | Portfolio" />
        <meta name="twitter:description" content="Freelancer specializing in Flutter, Android, iOS, React, and Website Development." />
        <meta name="twitter:image" content="https://your-portfolio-url.com/preview.png" />
      </Helmet>
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