import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

interface HeroSectionProps {
  onNavigate: (page: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHangOpen, setIsHangOpen] = useState(true);

  const slides = [
    {
      badge: "Admissions Open 2026-27",
      title: "Excellence in Higher Education",
      subtitle: "Shaping Future Leaders Through Knowledge, Innovation & Ethics",
      description: "Join Mysuru's premier business school offering industry-aligned MBA, MCA, BBA, BCA, and B.Com programs affiliated to University of Mysore.",
      cta: "Explore Programs",
      targetPage: "UnderGraduatePrograms",
      secondaryCta: "Apply Online",
      secondaryTarget: "UnderGraduateAdmission",
      image: "/building.jpg",
    },
    {
      badge: "AICTE & Govt. of Karnataka Approved",
      title: "Premier Management & IT Campus",
      subtitle: "Empowering Next-Generation Corporate Leaders & Tech Innovators",
      description: "Modern smart classrooms, state-of-the-art computer labs, and distinguished faculty driving holistic academic and professional excellence.",
      cta: "Postgraduate Studies",
      targetPage: "PostGraduatePrograms",
      secondaryCta: "Campus Facilities",
      secondaryTarget: "facilities",
      image: "/research.jpg",
    },
    {
      badge: "100% Placement Assistance",
      title: "Corporate Immersion & Placements",
      subtitle: "Over 100+ Leading Recruiters & MNC Hiring Partners",
      description: "Robust Training & Placement (TAP) Cell offering aptitude mastery, soft skills training, global corporate internships, and high-impact placement drives.",
      cta: "Placement Records",
      targetPage: "TrainingandPlacementCell(TAP)",
      secondaryCta: "About Trust",
      secondaryTarget: "AboutTrust",
      image: "/global.jpeg",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative overflow-hidden font-sans">
      {/* Hero Carousel Section */}
      <section className="relative min-h-[550px] lg:h-[620px] flex items-center overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Background Image with Deep Blue / NSAM Gradient */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-100 transition-transform duration-10000"
              style={{ backgroundImage: `url(${getAssetUrl(slide.image)})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#2e3192]/95 via-[#2e3192]/80 to-[#1b1e56]/65" />
            </div>

            {/* Slide Content */}
            <div className="relative z-20 h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-0 w-full">
                <div className="max-w-2xl space-y-5 animate-fade-in">
                  {/* Floating Badge */}
                  <div className="inline-flex items-center space-x-2 bg-[#fdb913] text-[#2e3192] px-3.5 py-1 rounded text-xs font-black uppercase tracking-wider shadow-sm">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>{slide.badge}</span>
                  </div>

                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight drop-shadow-sm">
                    {slide.title}
                  </h1>

                  <h2 className="text-lg sm:text-xl text-[#fdb913] font-bold leading-snug">
                    {slide.subtitle}
                  </h2>

                  <p className="text-sm sm:text-base text-gray-100 leading-relaxed max-w-xl font-normal">
                    {slide.description}
                  </p>

                  {/* CTA Buttons in NSAM PUC Style */}
                  <div className="flex flex-wrap items-center gap-4 pt-3">
                    <button
                      onClick={() => onNavigate(slide.targetPage)}
                      className="flex items-center space-x-2 bg-[#fdb913] hover:bg-[#e5a50b] text-[#2e3192] px-6 py-3 rounded text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
                    >
                      <span>{slide.cta}</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>

                    <button
                      onClick={() => onNavigate(slide.secondaryTarget)}
                      className="flex items-center space-x-2 bg-transparent hover:bg-white/15 text-white border-2 border-white px-6 py-3 rounded text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 cursor-pointer backdrop-blur-xs"
                    >
                      <span>{slide.secondaryCta}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-[#2e3192] text-white p-2.5 rounded transition-all duration-200"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-[#2e3192] text-white p-2.5 rounded transition-all duration-200"
          aria-label="Next Slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide Indicator Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center space-x-2 bg-black/40 px-3 py-1.5 rounded-full">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide ? 'w-6 h-2 bg-[#fdb913]' : 'w-2 h-2 bg-white/50 hover:bg-white'
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>

        {/* SIGNATURE RIGHT HANGING ACCREDITATION RIBBON (.slide-hang like NSAM PUC) */}
        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 z-30">
          <div className="bg-[#2e3192]/95 backdrop-blur-md text-white border-l-4 border-[#fdb913] shadow-2xl py-5 px-6 rounded-l-xl max-w-xs transition-transform duration-300">
            <div className="text-[11px] font-black uppercase tracking-widest text-[#fdb913] mb-3 pb-1 border-b border-white/20 flex items-center justify-between">
              <span>Accreditations</span>
              <Award className="h-3.5 w-3.5" />
            </div>
            <ul className="space-y-4">
              <li className="border-b border-white/10 pb-3">
                <h3 className="text-sm font-black text-white">University of Mysore</h3>
                <h4 className="text-xs text-gray-200 mt-0.5">Affiliated Premier College</h4>
              </li>
              <li className="border-b border-white/10 pb-3">
                <h3 className="text-sm font-black text-[#fdb913]">AICTE, New Delhi</h3>
                <h4 className="text-xs text-gray-200 mt-0.5">Approved Technical Programs</h4>
              </li>
              <li>
                <h3 className="text-sm font-black text-white">Govt. of Karnataka</h3>
                <h4 className="text-xs text-gray-200 mt-0.5">Higher Education Department</h4>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Accreditations & Recognitions Bar */}
      <section className="bg-white py-6 border-b border-gray-200 shadow-sm relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-4 p-4 rounded-lg bg-[#eeeded]/60 hover:bg-[#eeeded] border-l-4 border-[#2e3192] transition-all duration-300 hover:-translate-y-0.5 group">
              <div className="w-14 h-14 bg-white rounded p-1.5 flex items-center justify-center shadow-sm flex-shrink-0">
                <img src={getAssetUrl('uom_logo.svg')} alt="University of Mysore" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-[#2e3192] uppercase tracking-wider block">Affiliation</span>
                <h4 className="text-sm font-black text-[#37352f]">University of Mysore</h4>
                <p className="text-xs text-gray-500">Century-old academic prestige & standard</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 rounded-lg bg-[#eeeded]/60 hover:bg-[#eeeded] border-l-4 border-[#fdb913] transition-all duration-300 hover:-translate-y-0.5 group">
              <div className="w-14 h-14 bg-white rounded p-1.5 flex items-center justify-center shadow-sm flex-shrink-0">
                <img src={getAssetUrl('the-karnataka-government-kannada-seeklogo.png')} alt="Govt of Karnataka" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-[#e5a50b] uppercase tracking-wider block">Recognition</span>
                <h4 className="text-sm font-black text-[#37352f]">Govt. of Karnataka</h4>
                <p className="text-xs text-gray-500">Recognized by Dept of Higher Education</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 rounded-lg bg-[#eeeded]/60 hover:bg-[#eeeded] border-l-4 border-[#2e3192] transition-all duration-300 hover:-translate-y-0.5 group">
              <div className="w-14 h-14 bg-white rounded p-1.5 flex items-center justify-center shadow-sm flex-shrink-0">
                <img src={getAssetUrl('aicte_logo.png')} alt="AICTE Approved" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-[#2e3192] uppercase tracking-wider block">Approval</span>
                <h4 className="text-sm font-black text-[#37352f]">AICTE New Delhi</h4>
                <p className="text-xs text-gray-500">All India Council for Technical Education</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
