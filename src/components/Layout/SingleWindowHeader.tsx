import React, { useState } from 'react';
import { Menu, Search, Eye, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SingleWindowHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      {/* Top Utility Row */}
      <div className="bg-white border-b border-gray-200">
        <div className="container-wide mx-auto px-4">
          <div className="flex justify-between items-center h-10 text-sm" dir="rtl">
            {/* Right side - utility items */}
            <div className="flex items-center gap-4">
              <button className="text-black hover:text-[#19407F] transition-colors">
                تسجيل الدخول
              </button>
              <button className="flex items-center gap-1 text-black hover:text-[#19407F] transition-colors">
                <Globe className="h-4 w-4" />
                <span>English</span>
              </button>
              <button className="text-black hover:text-[#19407F] transition-colors">
                <Eye className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="bg-white">
        <div className="container-wide mx-auto px-4">
          <div className="flex justify-between items-center h-20" dir="rtl">
            {/* Right side - Logo */}
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/d8e3e6e5-e0e5-4e8e-8e5e-5e5e5e5e5e5e.png" 
                alt="Single Window Logo" 
                className="h-16"
              />
            </div>

            {/* Left side - Menu and Search */}
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="text-[#19407F] hover:text-[#FDC300] transition-colors"
              >
                <Search className="h-6 w-6" />
              </button>
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-[#19407F] hover:text-[#FDC300] transition-colors"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Blue Pattern Banner Strip */}
      <div 
        className="h-12 relative overflow-hidden"
        style={{ backgroundColor: '#19407F' }}
      >
        {/* Geometric pattern overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '30px 30px'
          }}
        />
      </div>

      {/* Breadcrumb Row */}
      <div className="bg-white border-b border-gray-200">
        <div className="container-wide mx-auto px-4">
          <div className="flex items-center h-12" dir="rtl">
            {/* Yellow accent line */}
            <div className="w-1 h-8 bg-[#FDC300] ml-3"></div>
            <div className="text-sm text-gray-600">
              <span className="hover:text-[#19407F] cursor-pointer">الرئيسية</span>
              <span className="mx-2">/</span>
              <span className="text-black font-medium">خريطة الأعمال</span>
            </div>
          </div>
        </div>
      </div>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 p-4">
          <div className="container-wide mx-auto">
            <input
              type="text"
              placeholder="ابحث..."
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#19407F]"
              dir="rtl"
              autoFocus
            />
          </div>
        </div>
      )}

      {/* Mobile Menu Slide-out */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Slide-out Menu */}
          <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 overflow-y-auto" dir="rtl">
            <div className="p-6">
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="mb-6 text-[#19407F]"
              >
                <Menu className="h-6 w-6" />
              </button>
              
              {/* Menu items would go here */}
              <nav className="space-y-4">
                <a href="#" className="block text-lg text-gray-800 hover:text-[#19407F] py-2">الرئيسية</a>
                <a href="#" className="block text-lg text-gray-800 hover:text-[#19407F] py-2">الخدمات</a>
                <a href="#" className="block text-lg text-gray-800 hover:text-[#19407F] py-2">عن النافذة الواحدة</a>
              </nav>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default SingleWindowHeader;

