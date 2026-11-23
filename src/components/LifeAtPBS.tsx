import React from 'react';
import { getAssetUrl } from '../utils/assets';
import { ArrowRight, Building, Bus, BookOpen, Award, Sparkles, HeartHandshake, CheckCircle } from 'lucide-react';

interface LifeAtPBSProps {
  onNavigate?: (page: string) => void;
}

const LifeAtPBS: React.FC<LifeAtPBSProps> = ({ onNavigate }) => {
  const galleryItems = [
    { id: 1, title: 'Expert Talks & Seminars', image: 'ExpertTalk2.jpg' },
    { id: 2, title: 'Cultural Festivals', image: 'cultural.jpg' },
    { id: 3, title: 'Corporate Placement Offers', image: 'offerLetter..jpg' },
    { id: 4, title: 'Sports & Athletics', image: 'sportsPBS.jpg' },
    { id: 5, title: 'Industrial Visits', image: 'IndustryVisit.jpg' },
    { id: 6, title: 'Advanced Research & Library', image: 'research.jpg' },
  ];

  return (
    <div className="font-sans">
      {/* 1. CAMPUS LIFE SPLIT SECTION (.home-life-bg like NSAM PUC) */}
      <section className="py-16 bg-[#f8f9fa] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Image (.home-life-left) */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src={getAssetUrl('building.jpg')}
                  alt="PBS Campus Infrastructure"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-[#2e3192] text-white p-4 rounded-xl shadow-lg border-2 border-[#fdb913]">
                <span className="block text-xl font-black text-[#fdb913]">Mysuru Campus</span>
                <span className="text-xs text-gray-200">Modern Higher Education Hub</span>
              </div>
            </div>

            {/* Right Campus Life Lists (.home-life-right) */}
            <div className="lg:col-span-7">
              {/* Golden Yellow Header Tab (.home-life-right h2 like NSAM PUC) */}
              <div className="bg-[#fdb913] text-[#37352f] text-center py-3.5 px-6 rounded-lg shadow-sm mb-8">
                <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-wider m-0">
                  Campus Life
                </h2>
              </div>

              {/* Categorized Life Lists */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {/* List 1: Facilities */}
                <div>
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#2e3192] border-b-2 border-[#2e3192] pb-1.5 mb-3 flex items-center space-x-1.5">
                    <Building className="h-4 w-4 text-[#2e3192]" />
                    <span>Facilities</span>
                  </h3>
                  <ul className="space-y-2 text-xs text-gray-700">
                    <li>
                      <button
                        onClick={() => onNavigate?.('facilities#library')}
                        className="text-left hover:text-[#2e3192] hover:font-bold transition-colors py-0.5"
                      >
                        • Library & Digital Centre
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => onNavigate?.('facilities#hostel')}
                        className="text-left hover:text-[#2e3192] hover:font-bold transition-colors py-0.5"
                      >
                        • In-House Hostel
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => onNavigate?.('facilities#transportation')}
                        className="text-left hover:text-[#2e3192] hover:font-bold transition-colors py-0.5"
                      >
                        • Transport & Bus Fleet
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => onNavigate?.('facilities#sports')}
                        className="text-left hover:text-[#2e3192] hover:font-bold transition-colors py-0.5"
                      >
                        • Sports & Athletics
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => onNavigate?.('facilities')}
                        className="text-left hover:text-[#2e3192] hover:font-bold transition-colors py-0.5"
                      >
                        • Computer & IT Labs
                      </button>
                    </li>
                  </ul>
                </div>

                {/* List 2: Activities & Cells */}
                <div>
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#2e3192] border-b-2 border-[#2e3192] pb-1.5 mb-3 flex items-center space-x-1.5">
                    <Award className="h-4 w-4 text-[#2e3192]" />
                    <span>Student Cells</span>
                  </h3>
                  <ul className="space-y-2 text-xs text-gray-700">
                    <li>
                      <button
                        onClick={() => onNavigate?.('TrainingandPlacementCell(TAP)')}
                        className="text-left hover:text-[#2e3192] hover:font-bold transition-colors py-0.5"
                      >
                        • Training & Placement (TAP)
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => onNavigate?.('CommunityServices')}
                        className="text-left hover:text-[#2e3192] hover:font-bold transition-colors py-0.5"
                      >
                        • NSS & Social Outreach
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => onNavigate?.('StatutoryCells')}
                        className="text-left hover:text-[#2e3192] hover:font-bold transition-colors py-0.5"
                      >
                        • Anti-Ragging Committee
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => onNavigate?.('StatutoryCells')}
                        className="text-left hover:text-[#2e3192] hover:font-bold transition-colors py-0.5"
                      >
                        • Grievance Redressal
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => onNavigate?.('StudentAchievers')}
                        className="text-left hover:text-[#2e3192] hover:font-bold transition-colors py-0.5"
                      >
                        • Student Achievers Club
                      </button>
                    </li>
                  </ul>
                </div>

                {/* List 3: Resources */}
                <div>
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#2e3192] border-b-2 border-[#2e3192] pb-1.5 mb-3 flex items-center space-x-1.5">
                    <BookOpen className="h-4 w-4 text-[#2e3192]" />
                    <span>Quick Access</span>
                  </h3>
                  <ul className="space-y-2 text-xs text-gray-700">
                    <li>
                      <button
                        onClick={() => onNavigate?.('Gallery')}
                        className="text-left hover:text-[#2e3192] hover:font-bold transition-colors py-0.5"
                      >
                        • Photo & Video Gallery
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => onNavigate?.('UnderGraduateAdmission')}
                        className="text-left hover:text-[#2e3192] hover:font-bold transition-colors py-0.5"
                      >
                        • Online Applications
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => onNavigate?.('FeePayment')}
                        className="text-left hover:text-[#2e3192] hover:font-bold transition-colors py-0.5"
                      >
                        • Online Fee Payment
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => onNavigate?.('Alumni')}
                        className="text-left hover:text-[#2e3192] hover:font-bold transition-colors py-0.5"
                      >
                        • Alumni Association
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => onNavigate?.('contact')}
                        className="text-left hover:text-[#2e3192] hover:font-bold transition-colors py-0.5"
                      >
                        • Admissions Help Desk
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. HEAR FROM OUR STUDENTS (NSAM PUC Testimonial Modern Speech Bubbles) */}
      <section className="py-16 bg-[#fafafa] border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-[#37352f] tracking-tight">
              Hear From Our Students
            </h2>
            <div className="w-16 h-1 bg-[#fdb913] mx-auto mt-3" />
          </div>

          <div className="space-y-10">
            {/* Testimonial 1 (Left - Blue Bubble) */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#2e3192] shadow-md shrink-0">
                <img
                  src={getAssetUrl('Swiggy_Logo_2024.webp')}
                  alt="Student Ananya Sharma"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-[#2e3192] text-white p-6 sm:p-7 rounded-2xl shadow-lg relative flex-1">
                <p className="text-sm sm:text-base leading-relaxed text-gray-100 italic">
                  "I would like to express my heartfelt gratitude to the faculty and management of Parivarthana Business School. The rigorous curriculum, case-study methodologies, and placement mock interviews provided direction to my career. PBS prepared me for competitive corporate challenges and helped me secure an executive placement."
                </p>
                <div className="mt-4 text-right">
                  <span className="font-extrabold text-[#fdb913] text-sm block">
                    — Ananya Sharma
                  </span>
                  <span className="text-xs text-gray-300">MBA (Batch 2024-26)</span>
                </div>
              </div>
            </div>

            {/* Testimonial 2 (Right - Yellow Bubble) */}
            <div className="flex flex-col sm:flex-row-reverse items-center sm:items-start gap-6">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#fdb913] shadow-md shrink-0">
                <img
                  src={getAssetUrl('Infosys_logo.svg.png')}
                  alt="Student Chethan Kumar"
                  className="w-full h-full object-contain p-2 bg-white"
                />
              </div>
              <div className="bg-[#fdb913] text-[#2e3192] p-6 sm:p-7 rounded-2xl shadow-lg relative flex-1">
                <p className="text-sm sm:text-base leading-relaxed text-[#1b1e56] font-medium italic">
                  "Parivarthana Business School has provided me with a rock-solid foundation in computer applications and modern software design. The professors and lab instructors are always helpful, knowledgeable, and approachable. The coding bootcamps and tech fests made my college journey unforgettable."
                </p>
                <div className="mt-4 text-right">
                  <span className="font-extrabold text-[#2e3192] text-sm block">
                    — Chethan Kumar M.
                  </span>
                  <span className="text-xs text-gray-700 font-semibold">BCA Graduate</span>
                </div>
              </div>
            </div>

            {/* Testimonial 3 (Left - Blue Bubble) */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#2e3192] shadow-md shrink-0">
                <img
                  src={getAssetUrl('Asian_Paints_Logo.svg.png')}
                  alt="Student Sonal Khandelwal"
                  className="w-full h-full object-contain p-2 bg-white"
                />
              </div>
              <div className="bg-[#2e3192] text-white p-6 sm:p-7 rounded-2xl shadow-lg relative flex-1">
                <p className="text-sm sm:text-base leading-relaxed text-gray-100 italic">
                  "PBS Mysuru is an exceptional center of learning, cultural activities, and personal growth. The teachers gave their utmost support throughout our academic sessions. Beyond academics, the seminars, industrial visits, and corporate networking helped me build confidence to excel in finance and management."
                </p>
                <div className="mt-4 text-right">
                  <span className="font-extrabold text-[#fdb913] text-sm block">
                    — Sonal Khandelwal
                  </span>
                  <span className="text-xs text-gray-300">BBA Graduate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CAMPUS GALLERY HIGHLIGHTS */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-gray-200">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-[#2e3192]">Moments & Achievements</span>
              <h3 className="text-2xl font-black text-[#37352f]">Campus Gallery</h3>
            </div>
            <button
              onClick={() => onNavigate?.('Gallery')}
              className="text-xs font-bold text-[#2e3192] hover:text-[#fdb913] uppercase tracking-wider flex items-center space-x-1 transition-colors"
            >
              <span>View All Photos</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                onClick={() => onNavigate?.('Gallery')}
                className="group relative h-40 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <img
                  src={getAssetUrl(item.image)}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2e3192]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2.5">
                  <span className="text-[11px] font-bold text-white leading-tight">{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LifeAtPBS;
