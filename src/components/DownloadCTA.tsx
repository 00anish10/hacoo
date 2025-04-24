import { Bell, Search } from "lucide-react";
import { useState, useEffect } from "react";

// Helper components
const CategoryItem = ({ icon, label, items, active = false }) => {
  return (
    <div className={`flex flex-col items-center transition-colors duration-300 ${active ? "text-orange-500" : "text-gray-500 hover:text-orange-400"}`}>
      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-1 transition-colors duration-300 ${active ? "bg-orange-100" : "bg-gray-100 hover:bg-orange-50"}`}>
        <span className="text-xl">{icon}</span>
      </div>
      <span className="text-xs font-medium">{label}</span>
      <span className="text-xs">{items}</span>
    </div>
  );
};

const ProductCarousel = () => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-3 px-1">
        <h3 className="font-medium text-lg">New Arrivals</h3>
        <span className="text-sm text-orange-500 cursor-pointer hover:underline">See All</span>
      </div>
      <div className="flex gap-3 overflow-x-auto pb-2 px-1 scroll-smooth">
        {/* Product items with hover effects */}
        <div className="w-32 flex-shrink-0 transform transition-transform duration-300 hover:scale-105">
          <div className="h-40 bg-gray-100 rounded-lg mb-2 overflow-hidden">
            <div className="w-full h-full bg-gray-200 animate-pulse"></div>
          </div>
          <div className="text-sm font-medium">Product Name</div>
          <div className="text-xs text-gray-500">$49.99</div>
        </div>
        <div className="w-32 flex-shrink-0 transform transition-transform duration-300 hover:scale-105">
          <div className="h-40 bg-gray-100 rounded-lg mb-2 overflow-hidden">
            <div className="w-full h-full bg-gray-200 animate-pulse" style={{ animationDelay: "0.2s" }}></div>
          </div>
          <div className="text-sm font-medium">Product Name</div>
          <div className="text-xs text-gray-500">$29.99</div>
        </div>
        <div className="w-32 flex-shrink-0 transform transition-transform duration-300 hover:scale-105">
          <div className="h-40 bg-gray-100 rounded-lg mb-2 overflow-hidden">
            <div className="w-full h-full bg-gray-200 animate-pulse" style={{ animationDelay: "0.4s" }}></div>
          </div>
          <div className="text-sm font-medium">Product Name</div>
          <div className="text-xs text-gray-500">$39.99</div>
        </div>
      </div>
    </div>
  );
};

const PhonePreview = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    // Show notification after a delay
    const notifyTimer = setTimeout(() => {
      setShowNotification(true);
    }, 2000);

    return () => {
      clearTimeout(timer);
      clearTimeout(notifyTimer);
    };
  }, []);

  return (
    <div className={`w-full h-full bg-white rounded-3xl overflow-hidden shadow-xl transform transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
      {/* Status Bar */}
      <div className="flex justify-between items-center px-5 py-2 text-xs text-black bg-white">
        <span className="font-medium">12:54</span>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.01 21.49L23.64 7C23.19 6.66 18.71 3 12 3C5.28 3 0.81 6.66 0.36 7L12.01 21.49Z" fill="black"/>
            </svg>
          </div>
          <div className="w-4 h-4">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 22h20V2z" fill="black"/>
            </svg>
          </div>
        </div>
      </div>

      {/* App Header with animation */}
      <div className={`flex justify-between items-center px-4 py-3 transform transition-transform duration-500 ${isLoaded ? "translate-y-0" : "translate-y-4"}`}>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
            <img src="/api/placeholder/40/40" alt="Profile" className="w-full h-full object-cover" />
          </div>
          <div className="flex items-center">
            <span className="font-bold text-lg">HACOO</span>
          </div>
        </div>
        <div className="relative">
          <Bell size={24} className={`transition-all duration-300 ${showNotification ? "text-orange-500" : ""}`} />
          <div className={`absolute -top-1 -right-1 w-2 h-2 bg-orange-500 rounded-full transition-all duration-300 ${showNotification ? "scale-100" : "scale-0"}`}></div>
        </div>
      </div>

      {/* Search Bar with animation */}
      <div className={`px-4 py-2 flex gap-2 transform transition-all duration-500 delay-100 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
        <div className="flex-1 flex items-center bg-gray-100 rounded-full px-4 py-2 hover:bg-gray-200 transition-colors duration-300">
          <Search size={16} className="text-gray-500 mr-2" />
          <span className="text-gray-500 text-sm">Search</span>
        </div>
        <button className="w-10 h-10 flex items-center justify-center bg-orange-500 rounded-full transform transition-transform duration-300 hover:scale-105 hover:bg-orange-600">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 01-8 0"/>
          </svg>
        </button>
        <button className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full transform transition-transform duration-300 hover:scale-105 hover:bg-gray-200">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
        </button>
      </div>

      {/* Winter Banner with animations */}
      <div className={`px-4 pt-2 transform transition-all duration-500 delay-200 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
        <div className="relative mb-4 flex gap-2">
          <div className="w-2/3 h-32 rounded-lg overflow-hidden relative group">
            <img src="/api/placeholder/200/150" alt="Winter Sale" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-3 text-white">
              <div className="flex flex-col">
                <span className="text-2xl font-bold">WINTER</span>
                <div className="flex items-center gap-2 mt-1">
                  <button className="bg-orange-500 text-white text-xs px-3 py-1 rounded-full transition-colors duration-300 hover:bg-orange-600">
                    SHOP NOW
                  </button>
                  <span className="text-xs">
                    UP TO <span className="font-bold">50% OFF</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-1/3">
            <div className="h-16 bg-gray-200 rounded-lg flex items-center justify-center transition-colors duration-300 hover:bg-gray-300">
              <span className="font-medium text-sm">PUREWHITE</span>
            </div>
            <div className="h-16 bg-gray-800 rounded-lg flex items-center justify-center text-white transition-colors duration-300 hover:bg-gray-900">
              <span className="text-2xl font-bold">9+</span>
            </div>
          </div>
        </div>

        {/* Categories with staggered animation */}
        <div className={`mb-4 transform transition-all duration-500 delay-300 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
          <h3 className="font-medium text-lg mb-3 px-1">Categories</h3>
          <div className="flex justify-between px-1">
            <CategoryItem icon="👕" label="Fashion" items="721" active />
            <CategoryItem icon="💄" label="Beauty" items="632" />
            <CategoryItem icon="👟" label="Shoes" items="247" />
            <CategoryItem icon="🛍️" label="More" items="1.2k" />
          </div>
        </div>

        {/* Product Carousel with staggered animation */}
        <div className={`transform transition-all duration-500 delay-400 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
          <ProductCarousel />
        </div>
      </div>
    </div>
  );
};

// App Store Icon Component
const AppStoreIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 mr-2" fill="currentColor">
    <path d="M17.9 19.2c-.4.9-.6 1.3-1.1 2.1-.7 1.1-1.7 2.4-3 2.5-1.1.1-1.4-.7-3-.7-1.5 0-1.9.7-3 .7-1.3 0-2.2-1.1-3-2.1-2-3-3.5-8.6-1.5-12.4.7-1.3 1.9-2.2 3.2-2.2 1.2 0 2 .8 3 .8 1 0 1.6-.8 3-.8 1.1 0 2.2.6 3 1.7-2.7 1.6-2.2 5.5.4 6.9-.6 1.3-1.5 2.6-1 3.5z" />
    <path d="M15.1 6c.4-1.3-.4-2.7-1.2-3.4-.8-.7-2.1-1.2-3.2-.9-.2 1.3.4 2.7 1.1 3.5.8.8 2.1 1.2 3.3.8z" />
  </svg>
);

// Google Play Icon Component
const GooglePlayIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 mr-2" fill="currentColor">
    <path d="M3.609 1.814L13.792 12 3.609 22.186c-.181-.181-.301-.425-.301-.707V2.521c0-.282.12-.526.301-.707zm10.89 8.322l2.657-1.535-9.449-5.356 6.792 6.891zm2.657 4.628l-2.657-1.535-6.792 6.891 9.449-5.356zM21 12l-3.75-2.165-2.798 1.614 2.798 1.614L21 12z" />
  </svg>
);

const DownloadCTA = () => {
  const [phoneLoaded, setPhoneLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPhoneLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-orange-500 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center overflow-hidden">
          <div className="md:w-2/3 mb-8 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Download mobile app for<br /> better performance
            </h2>
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-white text-sm">Personalized suggestions</p>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-white text-sm">Daily style updates</p>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-white text-sm">Easy shopping integration</p>
              </div>
            </div>
            <div className="flex gap-4">
              <a href="#" className="bg-black text-white px-4 py-2 rounded-full flex items-center transform transition-transform duration-300 hover:scale-105">
                <AppStoreIcon />
                <div>
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-medium">App Store</div>
                </div>
              </a>
              <a href="#" className="bg-black text-white px-4 py-2 rounded-full flex items-center transform transition-transform duration-300 hover:scale-105">
                <GooglePlayIcon />
                <div>
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-sm font-medium">Google Play</div>
                </div>
              </a>
            </div>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <div className={`w-56 h-96 transform transition-all duration-1000 ${phoneLoaded ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}>
              <PhonePreview />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadCTA;