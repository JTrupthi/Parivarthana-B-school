import React from "react";
import {
  TrendingUp,
  BookOpen,
  Code,
  Users,
  ArrowRight,
  CheckCircle2,
  GraduationCap
} from "lucide-react";

interface HomeProgramsProps {
  onNavigate: (page: string) => void;
}

const HomePrograms: React.FC<HomeProgramsProps> = ({ onNavigate }) => {
  const ugPrograms = [
    {
      title: "Bachelor of Business Administration (BBA)",
      code: "BBA",
      degree: "Undergraduate • 3 Years",
      icon: TrendingUp,
      description:
        "Affiliated to University of Mysore, preparing students for managerial leadership, corporate finance, market intelligence, and entrepreneurship.",
      features: [
        "Strategic Business Planning & Corporate Leadership",
        "Business Analytics, FinTech & Capital Markets",
        "Digital Marketing & Brand Management",
        "Corporate Internship with Leading MNCs",
      ],
      page: "BBA",
    },
    {
      title: "Bachelor of Commerce (B.Com)",
      code: "B.Com",
      degree: "Undergraduate • 3 Years",
      icon: BookOpen,
      description:
        "Rigorous commerce curriculum mastering corporate accounting, direct/indirect taxation, banking laws, auditing standards, and financial analysis.",
      features: [
        "Advanced Financial & Management Accounting",
        "Corporate Taxation & GST Framework",
        "Investment Banking, Insurance & Financial Markets",
        "Tally ERP, Advanced Excel & Audit Analytics",
      ],
      page: "BCom",
    },
    {
      title: "Bachelor of Computer Applications (BCA)",
      code: "BCA",
      degree: "Undergraduate • 3 Years",
      icon: Code,
      description:
        "Industry-geared computer science education equipping students with full-stack development, database architecture, AI basics, and cloud systems.",
      features: [
        "Full-Stack Web Development & Modern Frameworks",
        "Object-Oriented Programming (Java, Python, C++)",
        "Database Architecture & SQL Optimization",
        "Cloud Computing, Cybersecurity & DevOps Essentials",
      ],
      page: "BCA",
    },
  ];

  const pgPrograms = [
    {
      title: "Master of Business Administration (MBA)",
      code: "MBA",
      degree: "Postgraduate • 2 Years • AICTE Approved",
      icon: Users,
      description:
        "Flagship AICTE approved management program offering dual specializations in Finance, Marketing, Human Resources, and Business Analytics.",
      features: [
        "Executive Leadership, Global Strategy & Decision Making",
        "Financial Engineering & Corporate Investment Modeling",
        "Omnichannel Marketing Dynamics & Consumer Analytics",
        "High-Impact Corporate Internships & 100% Placement Drives",
      ],
      page: "MBA",
    },
    {
      title: "Master of Computer Applications (MCA)",
      code: "MCA",
      degree: "Postgraduate • 2 Years • AICTE Approved",
      icon: Code,
      description:
        "Advanced software engineering curriculum designed for Artificial Intelligence, Machine Learning, Enterprise Cloud Systems, and Distributed Computing.",
      features: [
        "Artificial Intelligence & Machine Learning Architectures",
        "Enterprise Full-Stack Cloud & Microservices Engineering",
        "Data Engineering, Big Data & Advanced Algorithms",
        "Real-Time Industry Capstone Projects & Placement Drives",
      ],
      page: "MCA",
    },
  ];

  return (
    <section className="py-16 bg-[#eeeded] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* NSAM PUC Signature Programs Box (.home-programs-bg) */}
        <div className="bg-[#2e3192] text-white rounded-2xl p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle background crest / texture */}
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-white/5 transform skew-x-12 pointer-events-none" />

          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-10 relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#fdb913] tracking-tight uppercase mb-3">
              Programs
            </h2>
            <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
              Explore university-affiliated UG and AICTE-approved PG programs designed in collaboration with corporate leaders.
            </p>
          </div>

          {/* Grid Layout: UG & PG Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 relative z-10">
            {/* Column 1: Undergraduate Programs */}
            <div>
              <div className="flex items-center justify-between border-b-2 border-[#fdb913] pb-2 mb-6">
                <h3 className="text-xl sm:text-2xl font-black text-[#fdb913] uppercase tracking-wide flex items-center space-x-2">
                  <GraduationCap className="h-6 w-6 text-[#fdb913]" />
                  <span>Undergraduate Programs</span>
                </h3>
                <button
                  onClick={() => onNavigate("UnderGraduateAdmission")}
                  className="text-xs text-white hover:text-[#fdb913] font-bold uppercase transition-colors"
                >
                  Apply UG →
                </button>
              </div>

              <div className="space-y-4">
                {ugPrograms.map((prog, idx) => {
                  const Icon = prog.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-white/10 hover:bg-white/15 backdrop-blur-md rounded-xl p-5 border border-white/15 transition-all duration-300 hover:border-[#fdb913]/60 group"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-[#fdb913] text-[#2e3192] rounded-lg">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <h4 className="text-base sm:text-lg font-black text-white group-hover:text-[#fdb913] transition-colors leading-tight">
                              {prog.title}
                            </h4>
                            <span className="text-xs text-gray-300">{prog.degree}</span>
                          </div>
                        </div>
                        <span className="bg-[#fdb913] text-[#2e3192] text-[11px] font-black px-2.5 py-0.5 rounded uppercase">
                          {prog.code}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-gray-200 mt-3 leading-relaxed">
                        {prog.description}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4 pt-3 border-t border-white/10">
                        {prog.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-center space-x-2 text-xs text-gray-200">
                            <CheckCircle2 className="h-3.5 w-3.5 text-[#fdb913] shrink-0" />
                            <span className="truncate">{feat}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-4 pt-2 flex items-center justify-between">
                        <button
                          onClick={() => onNavigate(prog.page)}
                          className="text-xs font-bold text-[#fdb913] hover:text-white flex items-center space-x-1.5 transition-colors uppercase tracking-wider"
                        >
                          <span>Curriculum & Details</span>
                          <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button
                          onClick={() => onNavigate("UnderGraduateAdmission")}
                          className="bg-white text-[#2e3192] hover:bg-[#fdb913] hover:text-[#2e3192] text-[11px] font-black uppercase px-3 py-1.5 rounded transition-colors"
                        >
                          Apply Now
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Column 2: Postgraduate Programs */}
            <div>
              <div className="flex items-center justify-between border-b-2 border-[#fdb913] pb-2 mb-6">
                <h3 className="text-xl sm:text-2xl font-black text-[#fdb913] uppercase tracking-wide flex items-center space-x-2">
                  <Users className="h-6 w-6 text-[#fdb913]" />
                  <span>Postgraduate Programs</span>
                </h3>
                <button
                  onClick={() => onNavigate("PostGraduateAdmission")}
                  className="text-xs text-white hover:text-[#fdb913] font-bold uppercase transition-colors"
                >
                  Apply PG →
                </button>
              </div>

              <div className="space-y-4">
                {pgPrograms.map((prog, idx) => {
                  const Icon = prog.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-white/10 hover:bg-white/15 backdrop-blur-md rounded-xl p-5 border border-white/15 transition-all duration-300 hover:border-[#fdb913]/60 group"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-[#fdb913] text-[#2e3192] rounded-lg">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <h4 className="text-base sm:text-lg font-black text-white group-hover:text-[#fdb913] transition-colors leading-tight">
                              {prog.title}
                            </h4>
                            <span className="text-xs text-gray-300">{prog.degree}</span>
                          </div>
                        </div>
                        <span className="bg-[#fdb913] text-[#2e3192] text-[11px] font-black px-2.5 py-0.5 rounded uppercase">
                          {prog.code}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-gray-200 mt-3 leading-relaxed">
                        {prog.description}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4 pt-3 border-t border-white/10">
                        {prog.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-center space-x-2 text-xs text-gray-200">
                            <CheckCircle2 className="h-3.5 w-3.5 text-[#fdb913] shrink-0" />
                            <span className="truncate">{feat}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-4 pt-2 flex items-center justify-between">
                        <button
                          onClick={() => onNavigate(prog.page)}
                          className="text-xs font-bold text-[#fdb913] hover:text-white flex items-center space-x-1.5 transition-colors uppercase tracking-wider"
                        >
                          <span>Curriculum & Details</span>
                          <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button
                          onClick={() => onNavigate("PostGraduateAdmission")}
                          className="bg-white text-[#2e3192] hover:bg-[#fdb913] hover:text-[#2e3192] text-[11px] font-black uppercase px-3 py-1.5 rounded transition-colors"
                        >
                          Apply Now
                        </button>
                      </div>
                    </div>
                  );
                })}

                {/* Additional Callout Box inside PG section */}
                <div className="bg-[#1b1e56]/80 rounded-xl p-5 border border-white/15 text-center">
                  <h4 className="text-sm font-black text-[#fdb913] uppercase tracking-wide">
                    Admissions Enquiry Desk 2026-27
                  </h4>
                  <p className="text-xs text-gray-300 mt-1 mb-3">
                    Scholarships and financial support available for meritorious students across Karnataka.
                  </p>
                  <button
                    onClick={() => onNavigate("contact")}
                    className="bg-[#fdb913] hover:bg-[#e5a50b] text-[#2e3192] text-xs font-black uppercase tracking-wider px-6 py-2 rounded transition-colors shadow"
                  >
                    Contact Admission Office
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePrograms;
