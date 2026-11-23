import React, { useState, useEffect } from 'react';
import { Calendar, ArrowRight, ExternalLink } from 'lucide-react';
import { getApiUrl, getAssetUrl } from '../utils/assets';

interface NewsItem {
  id: string;
  title: string;
  content: string;
  published_date: string;
  category: string;
  image_url?: string;
  blog_url?: string;
}

const DEFAULT_NEWS: NewsItem[] = [
  {
    id: '1',
    title: 'Tarang & Management Conclave 2026 Celebrates Academic & Cultural Vibrancy at PBS',
    content: 'A premier three-day inter-collegiate festival providing management and IT students a vibrant platform to demonstrate innovation, business case analysis, and leadership.',
    published_date: '2026-11-20',
    category: 'Events',
    image_url: '/cultural.jpg',
  },
  {
    id: '2',
    title: 'Corporate Placement Drive: Top Tier MNCs Recruit MBA & MCA Graduates with Stellar Packages',
    content: 'Leading multinational corporations and financial institutions conducted campus recruitments with 100% placement milestones for graduating students.',
    published_date: '2026-11-12',
    category: 'Achievement',
    image_url: '/Placement1.jpg',
  },
  {
    id: '3',
    title: 'Orientation & Induction Programme for New UG & PG Batches 2026-27',
    content: 'PBS welcomed incoming students for BBA, BCA, B.Com, MBA, and MCA with inspiring addresses by industry dignitaries and university leadership.',
    published_date: '2026-10-28',
    category: 'Research',
    image_url: '/ExpertTalk.jpg',
  },
  {
    id: '4',
    title: 'NSS & Social Outreach Volunteers Conduct Community Green Plantation Drive in Mysuru',
    content: 'PBS students actively planted over 300 saplings in Hebbal and surrounding rural belts, fostering environmental awareness and civic responsibility.',
    published_date: '2026-10-15',
    category: 'Partnership',
    image_url: '/SocialService.jpg',
  },
];

interface NewsSectionProps {
  onNavigate?: (page: string) => void;
}

const NewsSection: React.FC<NewsSectionProps> = ({ onNavigate }) => {
  const [newsItems, setNewsItems] = useState<NewsItem[]>(DEFAULT_NEWS);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await fetch(getApiUrl('api/news/manage.php'));
      const result = await response.json();
      if (result.success && Array.isArray(result.data) && result.data.length > 0) {
        setNewsItems(result.data);
      }
    } catch (error) {
      // Fallback data remains active
    } finally {
      setLoading(false);
    }
  };

  const parseDate = (dateStr: string) => {
    try {
      const d = new Date(dateStr);
      if (isNaN(d.getTime())) {
        return { day: '24', month: 'Nov', year: '2026' };
      }
      return {
        day: d.toLocaleDateString('en-US', { day: '2-digit' }),
        month: d.toLocaleDateString('en-US', { month: 'short' }),
        year: d.toLocaleDateString('en-US', { year: 'numeric' }),
      };
    } catch {
      return { day: '24', month: 'Nov', year: '2026' };
    }
  };

  const featured = newsItems[0] || DEFAULT_NEWS[0];
  const listItems = newsItems.slice(1, 4).length > 0 ? newsItems.slice(1, 4) : DEFAULT_NEWS.slice(1, 4);

  const featuredDate = parseDate(featured.published_date);

  return (
    <section className="bg-[#f8f9fa] py-14 border-b border-gray-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading Banner (NSAM PUC Signature Slate Tab) */}
        <div className="mb-10 flex items-center">
          <div className="bg-[#565950] text-white px-8 py-3.5 rounded-r-lg shadow-md border-l-8 border-[#fdb913]">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-wider m-0">
              News & Events
            </h2>
          </div>
          <div className="h-0.5 bg-gray-300 flex-1 ml-4 hidden sm:block" />
        </div>

        {/* 2-Column Split Layout matching NSAM PUC */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Featured News Card (.home-news-l-box) */}
          <div className="lg:col-span-6 bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 transition-all duration-300 hover:shadow-xl group">
            <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-gray-100">
              <img
                src={featured.image_url?.startsWith('/') ? getAssetUrl(featured.image_url) : featured.image_url || getAssetUrl('/cultural.jpg')}
                alt={featured.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Square Date Badge (NSAM PUC Signature) */}
              <div className="absolute top-4 left-4 bg-[#2e3192] text-white text-center p-2.5 rounded shadow-lg min-w-[65px] border-b-4 border-[#fdb913]">
                <span className="block text-2xl font-black leading-none">{featuredDate.day}</span>
                <span className="block text-xs font-bold uppercase mt-1 leading-none text-gray-200">
                  {featuredDate.month} <span className="text-[10px] opacity-80">{featuredDate.year}</span>
                </span>
              </div>

              <div className="absolute top-4 right-4 bg-[#fdb913] text-[#2e3192] text-[11px] font-black uppercase px-2.5 py-1 rounded shadow">
                Featured
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-lg sm:text-xl font-black text-[#37352f] group-hover:text-[#2e3192] transition-colors leading-snug mb-3">
                {featured.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 mb-6">
                {featured.content}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <button
                  onClick={() => onNavigate?.('Gallery')}
                  className="bg-[#fdb913] hover:bg-[#e5a50b] text-[#2e3192] text-xs font-black uppercase tracking-wider px-5 py-2.5 rounded transition-all shadow hover:shadow-md cursor-pointer"
                >
                  All News & Events
                </button>
                <span className="text-xs text-gray-400 font-medium">Campus News Desk</span>
              </div>
            </div>
          </div>

          {/* Right Column: News List (.home-news-r-box) */}
          <div className="lg:col-span-6 space-y-4">
            {listItems.map((item, idx) => {
              const itemDate = parseDate(item.published_date);
              return (
                <div
                  key={idx}
                  className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 hover:border-[#2e3192] hover:shadow-md transition-all duration-200 flex items-start space-x-4 group"
                >
                  {/* Square Date Box */}
                  <div className="bg-[#565950] group-hover:bg-[#2e3192] text-white text-center py-2 px-3 rounded shadow shrink-0 w-16 transition-colors border-b-2 border-[#fdb913]">
                    <span className="block text-xl font-black leading-none">{itemDate.day}</span>
                    <span className="block text-[11px] font-bold uppercase mt-1 leading-none text-gray-200">
                      {itemDate.month}
                    </span>
                    <span className="block text-[10px] opacity-75 mt-0.5">{itemDate.year}</span>
                  </div>

                  {/* News Content */}
                  <div className="flex-1 min-w-0">
                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#2e3192] mb-1">
                      {item.category || 'Announcement'}
                    </span>
                    <h4 className="text-sm font-bold text-[#37352f] group-hover:text-[#2e3192] transition-colors leading-snug line-clamp-2 mb-1.5">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* EXPLORE PBS COUNTERS RIBBON (.home-anouncements-counts-bg like NSAM PUC) */}
        <div className="mt-14 bg-[#565950] text-white rounded-xl shadow-lg p-6 lg:p-8 border-b-4 border-[#fdb913]">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center text-center">
            {/* Title Block */}
            <div className="col-span-2 md:col-span-1 text-center md:text-left border-b md:border-b-0 md:border-r border-white/20 pb-4 md:pb-0 md:pr-4">
              <span className="text-xs font-bold text-[#fdb913] uppercase tracking-widest block">At A Glance</span>
              <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">Explore PBS</h3>
            </div>

            {/* Counter 1 */}
            <div className="p-2">
              <div className="text-3xl sm:text-4xl font-black text-[#fdb913] flex items-center justify-center">
                <span>5</span>
                <span className="text-xl text-white ml-0.5">+</span>
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-gray-200 uppercase tracking-wide mt-1">
                Degree Programs
              </h4>
            </div>

            {/* Counter 2 */}
            <div className="p-2">
              <div className="text-3xl sm:text-4xl font-black text-[#fdb913] flex items-center justify-center">
                <span>25</span>
                <span className="text-xl text-white ml-0.5">+</span>
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-gray-200 uppercase tracking-wide mt-1">
                Distinguished Faculty
              </h4>
            </div>

            {/* Counter 3 */}
            <div className="p-2">
              <div className="text-3xl sm:text-4xl font-black text-[#fdb913] flex items-center justify-center">
                <span>500</span>
                <span className="text-xl text-white ml-0.5">+</span>
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-gray-200 uppercase tracking-wide mt-1">
                Students & Alumni
              </h4>
            </div>

            {/* Counter 4 */}
            <div className="p-2">
              <div className="text-3xl sm:text-4xl font-black text-[#fdb913] flex items-center justify-center">
                <span>100</span>
                <span className="text-xl text-white ml-0.5">%</span>
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-gray-200 uppercase tracking-wide mt-1">
                Placement Support
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
