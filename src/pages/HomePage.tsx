import React, { useState, useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import NewsSection from '../components/NewsSection';
import AboutSection from '../components/AboutSection';
import LifeAtPBS from '../components/LifeAtPBS';
import HomePrograms from '../components/HomePrograms';
import AdmissionEnquiryPopup from '../components/AdmissionEnquiryPopup';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show enquiry popup after 3 seconds on first visit
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <HeroSection onNavigate={onNavigate} />
      <NewsSection onNavigate={onNavigate} />
      <AboutSection onNavigate={onNavigate} />
      <HomePrograms onNavigate={onNavigate} />
      <LifeAtPBS onNavigate={onNavigate} />

      <AdmissionEnquiryPopup 
        isOpen={showPopup} 
        onClose={handleClosePopup} 
      />
    </>
  );
};

export default HomePage;
