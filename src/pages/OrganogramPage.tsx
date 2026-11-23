import React from 'react';
import { Users, Crown, Award, BookOpen, Settings, Shield, TrendingUp } from 'lucide-react';

const OrganogramPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      {/* Hero Section */}
      <section className="relative bg-[#2e3192] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Organogram</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Organizational structure and hierarchy of Parivarthana Business School
            </p>
          </div>
        </div>
      </section>

      {/* Visual Organogram */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2e3192] mb-4">Institutional Hierarchy</h2>
            <p className="text-xl text-[#747488] max-w-3xl mx-auto">
              Visual representation of our organizational structure and reporting relationships
            </p>
          </div>

          {/* Organogram Structure */}
          <div className="flex flex-col items-center space-y-8">
            
            {/* Board of Trustees */}
            <div className="flex flex-col items-center">
              <div className="bg-[#2e3192] text-white px-8 py-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Crown className="h-6 w-6" />
                  <span className="text-lg font-bold">Board of Trustees</span>
                </div>
              </div>
              {/* Connecting Line */}
              <div className="w-1 h-8 bg-[#fdb913]"></div>
            </div>

            {/* Governing Council */}
            <div className="flex flex-col items-center">
              <div className="bg-[#fdb913] text-[#2e3192] px-8 py-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6" />
                  <span className="text-lg font-bold">Governing Council</span>
                </div>
              </div>
              {/* Connecting Line */}
              <div className="w-1 h-8 bg-[#fdb913]"></div>
            </div>

            {/* Managing Director */}
            <div className="flex flex-col items-center">
              <div className="bg-blue-600 text-white px-8 py-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="h-6 w-6" />
                  <span className="text-lg font-bold">Managing Director</span>
                </div>
              </div>
              {/* Connecting Lines to Branches */}
              <div className="w-1 h-8 bg-[#fdb913]"></div>
              <div className="w-80 h-1 bg-[#fdb913]"></div>
              <div className="flex justify-between w-80">
                <div className="w-1 h-8 bg-[#fdb913]"></div>
                <div className="w-1 h-8 bg-[#fdb913]"></div>
              </div>
            </div>

            {/* Two Main Branches */}
            <div className="grid lg:grid-cols-2 gap-16 w-full max-w-6xl">
              
              {/* Principal Branch */}
              <div className="flex flex-col items-center space-y-6">
                <div className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-2">
                    <BookOpen className="h-5 w-5" />
                    <span className="font-bold">Principal</span>
                  </div>
                </div>
                
                {/* Connecting Line */}
                <div className="w-1 h-6 bg-[#fdb913]"></div>
                
                {/* HODs */}
                <div className="bg-[#f8f9fa] px-6 py-3 rounded-lg shadow-md">
                  <div className="text-center">
                    <div className="font-semibold text-[#2e3192] mb-2">Heads of Departments</div>
                    <div className="text-sm text-[#747488] space-y-1">
                      <div>HOD - MBA</div>
                      <div>HOD - MCA</div>
                      <div>HOD - B.Com</div>
                      <div>HOD - BBA</div>
                      <div>HOD - BCA</div>
                    </div>
                  </div>
                </div>
                
                {/* Connecting Line */}
                <div className="w-1 h-6 bg-[#fdb913]"></div>
                
                {/* Teaching Staff */}
                <div className="bg-[#f8f9fa] px-6 py-3 rounded-lg shadow-md">
                  <div className="text-center">
                    <div className="font-semibold text-[#2e3192]">Teaching Staff</div>
                  </div>
                </div>
                
                {/* Connecting Line */}
                <div className="w-1 h-6 bg-[#fdb913]"></div>
                
                {/* Academic Services */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white px-4 py-2 rounded-lg shadow-md text-center">
                    <div className="text-sm font-medium text-[#2e3192]">Admissions</div>
                  </div>
                  <div className="bg-white px-4 py-2 rounded-lg shadow-md text-center">
                    <div className="text-sm font-medium text-[#2e3192]">Examination</div>
                  </div>
                  <div className="bg-white px-4 py-2 rounded-lg shadow-md text-center">
                    <div className="text-sm font-medium text-[#2e3192]">Library</div>
                  </div>
                  <div className="bg-white px-4 py-2 rounded-lg shadow-md text-center">
                    <div className="text-sm font-medium text-[#2e3192]">PED</div>
                  </div>
                </div>
                
                {/* Connecting Line */}
                <div className="w-1 h-6 bg-[#fdb913]"></div>
                
                {/* Non-Teaching Staff */}
                <div className="bg-[#f8f9fa] px-6 py-3 rounded-lg shadow-md">
                  <div className="text-center">
                    <div className="font-semibold text-[#2e3192]">Non-Teaching Staff</div>
                  </div>
                </div>
              </div>

              {/* Accounts Branch */}
              <div className="flex flex-col items-center space-y-6">
                <div className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-2">
                    <Settings className="h-5 w-5" />
                    <span className="font-bold">Accounts</span>
                  </div>
                </div>
                
                {/* Connecting Line */}
                <div className="w-1 h-6 bg-[#fdb913]"></div>
                
                {/* Administrative Services */}
                <div className="space-y-4">
                  <div className="bg-white px-6 py-3 rounded-lg shadow-md text-center">
                    <div className="font-medium text-[#2e3192]">HR</div>
                    <div className="text-xs text-[#747488]">Human Resources</div>
                  </div>
                  
                  <div className="bg-white px-6 py-3 rounded-lg shadow-md text-center">
                    <div className="font-medium text-[#2e3192]">IT</div>
                    <div className="text-xs text-[#747488]">Information Technology</div>
                  </div>
                  
                  <div className="bg-white px-6 py-3 rounded-lg shadow-md text-center">
                    <div className="font-medium text-[#2e3192]">Security</div>
                  </div>
                  
                  <div className="bg-white px-6 py-3 rounded-lg shadow-md text-center">
                    <div className="font-medium text-[#2e3192]">Transport</div>
                  </div>
                  
                  <div className="bg-white px-6 py-3 rounded-lg shadow-md text-center">
                    <div className="font-medium text-[#2e3192]">Hostel</div>
                  </div>
                  
                  <div className="bg-white px-6 py-3 rounded-lg shadow-md text-center">
                    <div className="font-medium text-[#2e3192]">Placement</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrganogramPage;