import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, ChevronRight, Search, Phone, Download, GraduationCap, ArrowRight } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';
import { SearchModal } from './SearchModal';

interface SubDropdownItem {
  id: string;
  label: string;
}

interface DropdownItem {
  id: string;
  label: string;
  hasSubDropdown?: boolean;
  subDropdownItems?: SubDropdownItem[];
}

interface NavigationItem {
  id: string;
  label: string;
  hasDropdown?: boolean;
  isMegaMenu?: boolean;
  dropdownItems?: DropdownItem[];
}

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onOpenEnquiry?: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate, onOpenEnquiry }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const hideTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const subHideTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems: NavigationItem[] = [
    { id: 'home', label: 'Home' },
    {
      id: 'about',
      label: 'About PBS',
      hasDropdown: true,
      dropdownItems: [
        { id: 'AboutTrust', label: 'Om Shreenikethana Trust' },
        { id: 'AboutPBS', label: 'About PBS' },
        { id: 'PrincipalsMessage', label: "Principal's Desk" },
        { id: 'BoardofTustees&Message', label: 'Board of Trustees & Message' },
        { id: 'GoverningCouncilMembers', label: 'Governing Council Members' },
        { id: 'IQAC', label: 'IQAC' },
        { id: 'Organogram', label: 'Organogram' },
        { id: 'UGCDisclosure', label: 'UGC Public Self-Disclosure' },
        { id: 'MandatoryDisclosure', label: 'Essential Documents' },
      ],
    },
    {
      id: 'programs',
      label: 'Programs',
      hasDropdown: true,
      isMegaMenu: true,
      dropdownItems: [
        {
          id: 'UnderGraduatePrograms',
          label: 'Undergraduate (UG)',
          hasSubDropdown: true,
          subDropdownItems: [
            { id: 'BBA', label: 'Bachelor of Business Administration (BBA)' },
            { id: 'BCom', label: 'Bachelor of Commerce (B.Com)' },
            { id: 'BCA', label: 'Bachelor of Computer Applications (BCA)' },
          ],
        },
        {
          id: 'PostGraduatePrograms',
          label: 'Postgraduate (PG)',
          hasSubDropdown: true,
          subDropdownItems: [
            { id: 'MBA', label: 'Master of Business Administration (MBA)' },
            { id: 'MCA', label: 'Master of Computer Applications (MCA)' },
          ],
        },
      ],
    },
    {
      id: 'campus-life',
      label: 'Campus Life',
      hasDropdown: true,
      dropdownItems: [
        { id: 'facilities', label: 'Campus Infrastructure' },
        { id: 'facilities#library', label: 'Library & Information Centre' },
        { id: 'facilities#sports', label: 'Sports & Gymnasium' },
        { id: 'facilities#transportation', label: 'Transportation & Bus Fleet' },
        { id: 'facilities#hostel', label: 'Hostel Facilities' },
      ],
    },
    {
      id: 'learning',
      label: 'Learning @ PBS',
      hasDropdown: true,
      dropdownItems: [
        { id: 'UnderGraduatePrograms', label: 'Academics & Curriculum' },
        { id: 'DepartmentOfLanguages', label: 'Department of Languages' },
        { id: 'Research', label: 'Research & Publications' },
        { id: 'TrainingandPlacementCell(TAP)', label: 'Training & Placement (TAP)' },
        { id: 'StudentAchievers', label: 'Student Achievers' },
      ],
    },
    {
      id: 'StudentCorner',
      label: 'Student Corner',
      hasDropdown: true,
      dropdownItems: [
        { id: 'Alumni', label: 'Alumni Association' },
        { id: 'StatutoryCells', label: 'Statutory Cells & Grievance' },
        { id: 'CommunityServices', label: 'Community Services & NSS' },
        { id: 'Examination', label: 'Examination & Evaluation' },
        { id: 'Gallery', label: 'Photo & Video Gallery' },
      ],
    },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavigation = (page: string) => {
    onNavigate(page);
    setIsMenuOpen(false);
    setActiveDropdown(null);
    setActiveSubDropdown(null);
  };

  const showDropdown = (id: string) => {
    if (hideTimeout.current) clearTimeout(hideTimeout.current);
    setActiveDropdown(id);
  };

  const hideDropdown = () => {
    if (hideTimeout.current) clearTimeout(hideTimeout.current);
    hideTimeout.current = setTimeout(() => {
      setActiveDropdown(null);
      setActiveSubDropdown(null);
    }, 280);
  };

  const showSub = (id: string) => {
    if (subHideTimeout.current) clearTimeout(subHideTimeout.current);
    setActiveSubDropdown(id);
  };

  const hideSub = () => {
    if (subHideTimeout.current) clearTimeout(subHideTimeout.current);
    subHideTimeout.current = setTimeout(() => setActiveSubDropdown(null), 250);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans shadow-md">
      {/* 1. TOP NOTICE MARQUEE TICKER (NSAM PUC Style) */}
      <div className="bg-[#f8f9fa] border-b border-[#e5e7eb] text-[#37352f] text-xs py-1.5 px-3 relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Marquee area */}
          <div className="overflow-hidden whitespace-nowrap flex-1 mr-4 flex items-center">
            <span className="bg-[#2e3192] text-white text-[11px] font-bold px-2 py-0.5 rounded mr-3 uppercase tracking-wider shrink-0">
              Notice
            </span>
            <div className="animate-marquee inline-block text-[13px] font-medium text-[#222]">
              <span className="mx-4">
                <strong>Admissions Open 2026-27:</strong> Apply now for MBA, MCA, BBA, BCA & B.Com programs.
              </span>
              <span className="mx-4 text-[#2e3192] font-semibold">
                For queries call:{' '}
                <a href="tel:9740119888" className="hover:underline">
                  9740119888
                </a>{' '}
                /{' '}
                <a href="tel:9740129888" className="hover:underline">
                  9740129888
                </a>
              </span>
              <span className="mx-4">
                Affiliation: University of Mysore | Approved by AICTE & Govt. of Karnataka
              </span>
              <span className="mx-4">
                <strong>100% Placement Assistance</strong> with leading corporates & MNCs.
              </span>
            </div>
          </div>

          {/* Quick Right Buttons */}
          <div className="hidden sm:flex items-center space-x-3 shrink-0">
            <button
              onClick={() => onOpenEnquiry?.() || handleNavigation('UnderGraduateAdmission')}
              className="bg-[#fdb913] hover:bg-[#e5a50b] text-[#2e3192] text-[11px] font-extrabold px-3 py-1 rounded transition-colors uppercase tracking-wider"
            >
              Enquire Now
            </button>
            <a
              href="tel:9740119888"
              className="flex items-center space-x-1 text-[#2e3192] hover:text-[#fdb913] font-semibold text-xs transition-colors"
            >
              <Phone className="h-3 w-3" />
              <span>9740119888</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER (NSAM PUC Dual-Tier Design) */}
      <div className={`transition-all duration-300 bg-[#eeeded] border-b border-[#dddddd] ${isScrolled ? 'py-1 shadow-md bg-white/98' : 'py-2'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo and Brand */}
            <div
              className="flex items-center space-x-3 cursor-pointer py-1 group"
              onClick={() => handleNavigation('home')}
            >
              <img
                src={getAssetUrl('parivarthana-logo.png')}
                alt="Parivarthana Business School Logo"
                className={`w-auto transition-all duration-300 ${isScrolled ? 'h-11 sm:h-12' : 'h-12 sm:h-14'}`}
              />
              <div className="flex flex-col">
                <span className="text-base sm:text-xl lg:text-2xl font-black text-[#2e3192] tracking-tight leading-tight group-hover:text-[#242775]">
                  PARIVARTHANA
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#37352f] tracking-wide leading-none">
                  BUSINESS SCHOOL, MYSURU
                </span>
                <span className="text-[10px] sm:text-[11px] text-[#565950] font-medium leading-none mt-1 hidden sm:block">
                  Affiliated to University of Mysore • Approved by AICTE, New Delhi
                </span>
              </div>
            </div>

            {/* Right Side Desktop Navigation (Dual Tier) */}
            <div className="hidden lg:flex flex-col items-end">
              {/* Top Utility Links */}
              <div className="flex items-center space-x-4 text-xs font-semibold pb-1.5 border-b border-gray-300/70 w-full justify-end">
                <span className="text-[#2e3192] font-bold text-[12px]">
                  Affiliation: University of Mysore
                </span>
                <span className="text-gray-300">|</span>
                <button
                  onClick={() => handleNavigation('UnderGraduateAdmission')}
                  className="text-[#37352f] hover:text-[#2e3192] transition-colors"
                >
                  Admissions
                </button>
                <button
                  onClick={() => handleNavigation('Research')}
                  className="text-[#37352f] hover:text-[#2e3192] transition-colors"
                >
                  Research
                </button>
                <button
                  onClick={() => handleNavigation('Gallery')}
                  className="text-[#37352f] hover:text-[#2e3192] transition-colors"
                >
                  Gallery
                </button>
                <button
                  onClick={() => handleNavigation('contact')}
                  className="text-[#37352f] hover:text-[#2e3192] transition-colors"
                >
                  Contact Us
                </button>
                <button
                  onClick={() => handleNavigation('admin-login')}
                  className="bg-[#2e3192] text-white hover:bg-[#1b1e56] px-2 py-0.5 rounded text-[11px] transition-colors font-bold"
                >
                  Portal Login
                </button>
              </div>

              {/* Main Menu Links (NSAM PUC Style with Royal Blue Hover & Arrow) */}
              <nav className="flex items-center space-x-0.5 pt-1.5">
                {navigationItems.map((item) => {
                  const isActive = currentPage === item.id || (item.hasDropdown && activeDropdown === item.id);
                  return (
                    <div
                      key={item.id}
                      className="relative"
                      onMouseEnter={() => item.hasDropdown && showDropdown(item.id)}
                      onMouseLeave={() => item.hasDropdown && hideDropdown()}
                    >
                      <button
                        onClick={() => {
                          if (item.hasDropdown) {
                            setActiveDropdown(activeDropdown === item.id ? null : item.id);
                          } else {
                            handleNavigation(item.id);
                          }
                        }}
                        className={`flex items-center space-x-1 px-3 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                          isActive
                            ? 'bg-[#2e3192] text-white'
                            : 'text-[#222222] hover:bg-[#2e3192] hover:text-white'
                        }`}
                      >
                        <span>{item.label}</span>
                        {item.hasDropdown && <ChevronDown className="h-3 w-3 ml-0.5 opacity-80" />}
                      </button>

                      {/* Mega Menu for Programs */}
                      {item.isMegaMenu && activeDropdown === item.id && (
                        <div
                          className="absolute right-0 top-full mt-0 w-[500px] bg-white shadow-2xl border-t-2 border-[#2e3192] p-5 z-[80] grid grid-cols-2 gap-6 animate-fade-in"
                          onMouseEnter={() => showDropdown(item.id)}
                          onMouseLeave={() => hideDropdown()}
                        >
                          <div>
                            <div className="text-xs font-black uppercase tracking-wider text-[#2e3192] border-b-2 border-[#fdb913] pb-1 mb-3">
                              Undergraduate (UG)
                            </div>
                            <ul className="space-y-2 text-xs">
                              <li>
                                <button
                                  onClick={() => handleNavigation('BBA')}
                                  className="w-full text-left text-gray-700 hover:text-[#2e3192] hover:font-bold transition-all py-1"
                                >
                                  • Business Administration (BBA)
                                </button>
                              </li>
                              <li>
                                <button
                                  onClick={() => handleNavigation('BCom')}
                                  className="w-full text-left text-gray-700 hover:text-[#2e3192] hover:font-bold transition-all py-1"
                                >
                                  • Commerce (B.Com)
                                </button>
                              </li>
                              <li>
                                <button
                                  onClick={() => handleNavigation('BCA')}
                                  className="w-full text-left text-gray-700 hover:text-[#2e3192] hover:font-bold transition-all py-1"
                                >
                                  • Computer Applications (BCA)
                                </button>
                              </li>
                            </ul>
                          </div>

                          <div>
                            <div className="text-xs font-black uppercase tracking-wider text-[#2e3192] border-b-2 border-[#fdb913] pb-1 mb-3">
                              Postgraduate (PG)
                            </div>
                            <ul className="space-y-2 text-xs">
                              <li>
                                <button
                                  onClick={() => handleNavigation('MBA')}
                                  className="w-full text-left text-gray-700 hover:text-[#2e3192] hover:font-bold transition-all py-1"
                                >
                                  • Master of Business Administration (MBA)
                                </button>
                              </li>
                              <li>
                                <button
                                  onClick={() => handleNavigation('MCA')}
                                  className="w-full text-left text-gray-700 hover:text-[#2e3192] hover:font-bold transition-all py-1"
                                >
                                  • Master of Computer Applications (MCA)
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      )}

                      {/* Standard Dropdown Menu */}
                      {!item.isMegaMenu && item.hasDropdown && activeDropdown === item.id && (
                        <div
                          className="absolute left-0 top-full mt-0 w-64 bg-white shadow-2xl border-t-2 border-[#2e3192] py-2 z-[80] animate-fade-in"
                          onMouseEnter={() => showDropdown(item.id)}
                          onMouseLeave={() => hideDropdown()}
                        >
                          {item.dropdownItems?.map((drop, idx) => (
                            <button
                              key={idx}
                              onClick={() => handleNavigation(drop.id)}
                              className="w-full text-left px-4 py-2.5 text-xs font-semibold text-gray-700 hover:bg-[#2e3192] hover:text-white transition-colors flex items-center justify-between group"
                            >
                              <span>{drop.label}</span>
                              <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* Search Trigger Button */}
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="p-2 ml-2 text-[#2e3192] hover:bg-[#2e3192] hover:text-white rounded transition-colors"
                  aria-label="Search"
                >
                  <Search className="h-4 w-4" />
                </button>
              </nav>
            </div>

            {/* Mobile Actions (Search + Hamburger) */}
            <div className="flex items-center space-x-2 lg:hidden">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-[#2e3192] hover:bg-white/50 rounded-lg transition-colors"
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-[#2e3192] hover:bg-white/50 rounded-lg transition-colors"
                aria-label="Toggle Menu"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 3. MOBILE DRAWER MENU */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-2xl max-h-[calc(100vh-100px)] overflow-y-auto">
          <div className="p-4 space-y-2">
            {/* Quick Action Top in Mobile */}
            <div className="grid grid-cols-2 gap-2 mb-3 pb-3 border-b border-gray-200">
              <button
                onClick={() => handleNavigation('UnderGraduateAdmission')}
                className="bg-[#2e3192] text-white py-2 text-xs font-bold rounded text-center uppercase"
              >
                Apply Online
              </button>
              <button
                onClick={() => handleNavigation('admin-login')}
                className="bg-gray-100 text-[#2e3192] py-2 text-xs font-bold rounded text-center uppercase"
              >
                Admin Portal
              </button>
            </div>

            {navigationItems.map((item) => (
              <div key={item.id} className="border-b border-gray-100 last:border-b-0 pb-1">
                <button
                  onClick={() => {
                    if (item.hasDropdown) {
                      setActiveDropdown(activeDropdown === item.id ? null : item.id);
                    } else {
                      handleNavigation(item.id);
                    }
                  }}
                  className={`w-full text-left px-3 py-2.5 text-xs font-bold uppercase tracking-wider rounded transition-colors flex items-center justify-between ${
                    currentPage === item.id ? 'bg-[#2e3192] text-white' : 'text-gray-800 hover:bg-gray-100'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && (
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        activeDropdown === item.id ? 'rotate-180 text-white' : 'text-gray-500'
                      }`}
                    />
                  )}
                </button>

                {item.hasDropdown && activeDropdown === item.id && (
                  <div className="pl-4 pr-2 py-2 space-y-1 bg-gray-50 rounded mt-1">
                    {item.isMegaMenu ? (
                      <>
                        <div className="text-[11px] font-black text-[#2e3192] uppercase pt-1">Undergraduate (UG)</div>
                        <button
                          onClick={() => handleNavigation('BBA')}
                          className="w-full text-left py-1 text-xs text-gray-700 hover:text-[#2e3192]"
                        >
                          • BBA - Business Administration
                        </button>
                        <button
                          onClick={() => handleNavigation('BCom')}
                          className="w-full text-left py-1 text-xs text-gray-700 hover:text-[#2e3192]"
                        >
                          • B.Com - Commerce
                        </button>
                        <button
                          onClick={() => handleNavigation('BCA')}
                          className="w-full text-left py-1 text-xs text-gray-700 hover:text-[#2e3192]"
                        >
                          • BCA - Computer Applications
                        </button>
                        <div className="text-[11px] font-black text-[#2e3192] uppercase pt-2">Postgraduate (PG)</div>
                        <button
                          onClick={() => handleNavigation('MBA')}
                          className="w-full text-left py-1 text-xs text-gray-700 hover:text-[#2e3192]"
                        >
                          • MBA - Master of Business Admin
                        </button>
                        <button
                          onClick={() => handleNavigation('MCA')}
                          className="w-full text-left py-1 text-xs text-gray-700 hover:text-[#2e3192]"
                        >
                          • MCA - Master of Computer Apps
                        </button>
                      </>
                    ) : (
                      item.dropdownItems?.map((drop, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleNavigation(drop.id)}
                          className="w-full text-left py-1.5 text-xs text-gray-700 hover:text-[#2e3192] flex items-center justify-between"
                        >
                          <span>{drop.label}</span>
                        </button>
                      ))
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={onNavigate}
      />
    </header>
  );
};

export default Header;
