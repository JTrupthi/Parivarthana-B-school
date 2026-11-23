import React from 'react';
import { MapPin, Phone, Mail, Instagram, Linkedin, Facebook, Youtube, MessageCircle, ArrowRight } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const aboutLinks = [
    { id: 'AboutTrust', label: 'Om Shreenikethana Trust' },
    { id: 'AboutPBS', label: 'About Parivarthana Business School' },
    { id: 'PrincipalsMessage', label: "Principal's Desk" },
    { id: 'BoardofTustees&Message', label: 'Board of Trustees' },
    { id: 'GoverningCouncilMembers', label: 'Governing Council' },
    { id: 'IQAC', label: 'Internal Quality Assurance Cell (IQAC)' },
  ];

  const quickLinks = [
    { id: 'UnderGraduateAdmission', label: 'Admissions 2026-27' },
    { id: 'UnderGraduatePrograms', label: 'Undergraduate (UG) Programs' },
    { id: 'PostGraduatePrograms', label: 'Postgraduate (PG) Programs' },
    { id: 'TrainingandPlacementCell(TAP)', label: 'Training & Placement (TAP)' },
    { id: 'facilities', label: 'Campus Infrastructure' },
    { id: 'StudentAchievers', label: 'Student Achievers' },
    { id: 'Gallery', label: 'Photo & Video Gallery' },
    { id: 'UGCDisclosure', label: 'UGC Public Self-Disclosure' },
    { id: 'MandatoryDisclosure', label: 'Essential Documents' },
  ];

  const studentLinks = [
    { id: 'Alumni', label: 'Alumni Association' },
    { id: 'StatutoryCells', label: 'Statutory Cells & Committees' },
    { id: 'CommunityServices', label: 'Community Outreach & NSS' },
    { id: 'Examination', label: 'Examination Guidelines' },
    { id: 'FeePayment', label: 'Online Fee Payment' },
    { id: 'admin-login', label: 'Staff / Admin Portal' },
  ];

  return (
    <footer className="bg-[#1b1e56] text-white font-sans relative overflow-hidden">
      {/* Top Footer Main Columns (NSAM PUC Footer Style) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Institutional Summary */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src={getAssetUrl('parivarthana-logo.png')}
                alt="Parivarthana Business School Logo"
                className="h-12 w-auto bg-white p-1 rounded"
              />
              <div>
                <h3 className="text-base font-black text-white leading-tight uppercase">
                  Parivarthana
                </h3>
                <span className="text-xs text-[#fdb913] font-bold block uppercase tracking-wider">
                  Business School
                </span>
              </div>
            </div>
            
            <p className="text-xs text-gray-300 leading-relaxed mb-6 font-normal">
              Premier institution established under Om Shreenikethana Trust (R), affiliated to University of Mysore and approved by AICTE, New Delhi. Dedicated to management and technology excellence.
            </p>

            <div className="text-xs text-gray-300 space-y-1 bg-white/5 p-3 rounded border border-white/10">
              <div className="font-bold text-[#fdb913]">Affiliation & Approvals:</div>
              <div>• Affiliated to University of Mysore</div>
              <div>• Approved by AICTE, New Delhi</div>
              <div>• Recognized by Govt. of Karnataka</div>
            </div>
          </div>

          {/* Column 2: About Us (with NSAM PUC gold underline) */}
          <div>
            <h3 className="text-sm font-black text-white uppercase tracking-wider mb-2">
              About Us
            </h3>
            <div className="w-10 h-0.5 bg-[#fdb913] mb-4" />
            <ul className="space-y-2 text-xs">
              {aboutLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-gray-300 hover:text-[#fdb913] transition-colors text-left flex items-center space-x-1 py-0.5"
                  >
                    <span>• {link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links & Academics */}
          <div>
            <h3 className="text-sm font-black text-white uppercase tracking-wider mb-2">
              Quick Links
            </h3>
            <div className="w-10 h-0.5 bg-[#fdb913] mb-4" />
            <ul className="space-y-2 text-xs">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-gray-300 hover:text-[#fdb913] transition-colors text-left flex items-center space-x-1 py-0.5"
                  >
                    <span>• {link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Socials */}
          <div>
            <h3 className="text-sm font-black text-white uppercase tracking-wider mb-2">
              Contact Us
            </h3>
            <div className="w-10 h-0.5 bg-[#fdb913] mb-4" />
            <address className="not-italic text-xs text-gray-300 space-y-3 leading-relaxed">
              <div className="flex items-start space-x-2.5">
                <MapPin className="h-4 w-4 text-[#fdb913] shrink-0 mt-0.5" />
                <span>
                  <strong>Parivarthana Business School</strong><br />
                  436/B, Hebbal, Mysuru,<br />
                  Karnataka - 570016, India
                </span>
              </div>

              <div className="flex items-center space-x-2.5">
                <Phone className="h-4 w-4 text-[#fdb913] shrink-0" />
                <span>9740119888 / 9740129888</span>
              </div>

              <div className="flex items-center space-x-2.5">
                <Mail className="h-4 w-4 text-[#fdb913] shrink-0" />
                <span>info@parivarthanabschool.in</span>
              </div>
            </address>

            {/* Circular Social Icons (.social-network like NSAM PUC) */}
            <div className="mt-6 pt-4 border-t border-white/10">
              <span className="text-[11px] font-bold text-gray-300 uppercase tracking-wider block mb-3">
                Connect With Us
              </span>
              <div className="flex items-center space-x-2">
                <a
                  href="https://www.instagram.com/pbs_mysuru?igsh=dXI3YTR6MDVyenc0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#fdb913] hover:text-[#2e3192] text-white flex items-center justify-center transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="https://www.linkedin.com/company/parivarthana-business-school/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#fdb913] hover:text-[#2e3192] text-white flex items-center justify-center transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=919740119888&text=Hello%20PBS%20Admissions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#fdb913] hover:text-[#2e3192] text-white flex items-center justify-center transition-all"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="h-4 w-4" />
                </a>
                <button
                  onClick={() => onNavigate('contact')}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#fdb913] hover:text-[#2e3192] text-white flex items-center justify-center transition-all"
                  aria-label="Contact Desk"
                >
                  <Mail className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SIGNATURE NSAM PUC BOTTOM COPYRIGHT BAR (.copy-bg in bright Golden Yellow #fdb913) */}
      <div className="bg-[#fdb913] text-[#1b1e56] py-3.5 px-4 text-center">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-xs font-bold">
          <div>
            © {new Date().getFullYear()} Parivarthana Business School, Mysuru. All Rights Reserved.
          </div>
          <div className="flex items-center space-x-4 mt-2 sm:mt-0 text-[11px]">
            <button onClick={() => onNavigate('MandatoryDisclosure')} className="hover:underline">
              Mandatory Disclosure
            </button>
            <span>•</span>
            <button onClick={() => onNavigate('UGCDisclosure')} className="hover:underline">
              UGC Disclosure
            </button>
            <span>•</span>
            <button onClick={() => onNavigate('admin-login')} className="hover:underline">
              Portal Access
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
