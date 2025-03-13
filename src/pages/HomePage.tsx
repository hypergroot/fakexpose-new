import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturedSection from '../components/FeaturedSection';
import LatestSection from '../components/LatestSection';
import TrendingSection from '../components/TrendingSection';
import MostSearchedSection from '../components/MostSearchedSection';
import QuizPromo from '../components/QuizPromo';
import AboutSection from '../components/AboutSection';

function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedSection />
      <LatestSection />
      <TrendingSection />
      <QuizPromo />
      <MostSearchedSection />
      <AboutSection />
    </>
  );
}

export default HomePage;