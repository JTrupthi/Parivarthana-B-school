import React from 'react';
import { Users, Award, BookOpen, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

interface AboutSectionProps {
  onNavigate: (page: string) => void;
}

const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate }) => {
  const stats = [
    { icon: Users, value: '500+', label: 'Students Enrolled' },
    { icon: BookOpen, value: '5', label: 'Premier Degree Programs' },
    { icon: Award, value: '100%', label: 'Placement Support' },
    { icon: Users, value: '25+', label: 'Distinguished Faculty' },
  ];

  return (
    <section className="py-16 bg-white font-sans border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Content Column */}
          <div className="lg:col-span-7">
            {/* Section Badge & Title */}
            <div className="mb-4">
              <span className="text-xs font-black text-[#2e3192] uppercase tracking-widest bg-[#eeeded] px-3 py-1 rounded inline-block">
                Welcome to PBS
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-black text-[#2e3192] leading-tight mb-4">
              About Parivarthana Business School
            </h2>
            <div className="w-20 h-1 bg-[#fdb913] mb-6" />

            <p className="text-base text-[#37352f] mb-4 leading-relaxed font-normal">
              Parivarthana Business School (PBS), Mysuru, established under the aegis of <strong>Om Shreenikethana Trust (R)</strong>, is dedicated to academic rigor, intellectual vitality, and industry-oriented empowerment. Affiliated with the esteemed <strong>University of Mysore</strong> and approved by <strong>AICTE, New Delhi</strong>, we offer high-caliber education in Business Administration, Commerce, and Computer Applications.
            </p>
            <p className="text-sm text-gray-600 mb-8 leading-relaxed">
              Our comprehensive curriculum encompasses undergraduate courses including BBA, BCA, and B.Com alongside flagship postgraduate degrees MBA and MCA. Through rigorous corporate internships, modern research labs, and personality enhancement cells, PBS nurtures future leaders prepared for global markets.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-[#f8f9fa] border-t-2 border-[#2e3192] p-4 rounded text-center shadow-xs">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-[#fdb913] text-[#2e3192] rounded mb-2 shadow-xs">
                    <stat.icon className="h-5 w-5" />
                  </div>
                  <div className="text-xl font-black text-[#2e3192] mb-0.5">{stat.value}</div>
                  <div className="text-[11px] font-semibold text-gray-600 leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('AboutPBS')}
                className="inline-flex items-center space-x-2 bg-[#2e3192] text-white px-6 py-3 rounded text-xs font-black uppercase tracking-wider hover:bg-[#1b1e56] transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>Read Institutional Profile</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                onClick={() => onNavigate('AboutTrust')}
                className="inline-flex items-center space-x-2 bg-[#eeeded] text-[#37352f] hover:text-[#2e3192] hover:bg-gray-200 px-5 py-3 rounded text-xs font-black uppercase tracking-wider transition-all cursor-pointer"
              >
                <span>About The Trust</span>
              </button>
            </div>
          </div>

          {/* Image Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-[#eeeded]">
              <img
                src={getAssetUrl('about_institute.jpg')}
                alt="Parivarthana Business School Campus View"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              
              {/* Bottom Quote Banner on Image */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-lg shadow-lg border-l-4 border-[#fdb913]">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xl font-black text-[#2e3192]">100% Placement</div>
                    <div className="text-xs text-gray-600">Assistance with Top Corporates</div>
                  </div>
                  <span className="bg-[#2e3192] text-white text-[11px] font-bold px-2.5 py-1 rounded uppercase">
                    Mysuru
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
