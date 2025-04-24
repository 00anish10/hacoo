import React, { useState, useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Bell, Search } from 'lucide-react';

// Utility function to combine classnames (replacing @/lib/utils import)
const cn = (...classes: any[]) => {
  return classes.filter(Boolean).join(' ');
};

const ProductCard = ({ 
  imageUrl, 
  title, 
  price, 
  reviewCount, 
  delay, 
  className 
}: { 
  imageUrl: string; 
  title: string; 
  price: string; 
  reviewCount: string; 
  delay: string;
  className?: string;
}) => {
  return (
    <div 
      className={cn(
        "w-36 flex-shrink-0 transition-all duration-700 bg-gradient-to-br from-[#FFF6F1] via-[#FFF9F4] to-white",
        className
      )}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="relative h-44 w-full overflow-hidden rounded-lg bg-gray-100">
        <img src="/api/placeholder/400/320" alt={title} className="h-full w-full object-cover" />
        <button className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>
      <div className="mt-2">
        <h3 className="text-sm font-medium">{title}</h3>
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold">${price}</span>
          <div className="flex items-center text-xs text-gray-500">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="mr-1">
              <path d="M12 2l2.4 7.2H22l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" />
            </svg>
            <span>{reviewCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Category Item component
const CategoryItem = ({ 
  icon, 
  label, 
  items, 
  active 
}: { 
  icon: string; 
  label: string; 
  items: string; 
  active?: boolean;
}) => (
  <div className="flex flex-col items-center">
    <div className={cn(
      "w-12 h-12 rounded-full flex items-center justify-center mb-1",
      active ? "bg-orange-500 text-white" : "bg-gray-100" // Changed hacoo-orange to orange-500
    )}>
      <span className="text-xl">{icon}</span>
    </div>
    <span className="text-xs font-medium">{label}</span>
    <span className="text-[10px] text-gray-500">{items} items</span>
  </div>
);

// Product Carousel component
interface ProductCarouselProps {
  className?: string;
}

const ProductCarousel = ({ className }: ProductCarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const [containerRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const products = [
    {
      imageUrl: "/api/placeholder/400/320",
      title: "Nike Air Max",
      price: "179.99",
      reviewCount: "2.8k",
      delay: "0"
    },
    {
      imageUrl: "/api/placeholder/400/320",
      title: "Air Jordan",
      price: "259.99",
      reviewCount: "1.4k",
      delay: "0.1"
    },
    {
      imageUrl: "/api/placeholder/400/320",
      title: "Running Set",
      price: "189.99",
      reviewCount: "986",
      delay: "0.2"
    },
    {
      imageUrl: "/api/placeholder/400/320",
      title: "Nike Air Max",
      price: "179.99",
      reviewCount: "2.8k",
      delay: "0"
    },
    {
      imageUrl: "/api/placeholder/400/320",
      title: "Sport Collection",
      price: "299.99",
      reviewCount: "2.1k",
      delay: "0.3"
    }
  ];

  useEffect(() => {
    if (carouselRef.current) {
      setMaxScroll(carouselRef.current.scrollWidth - carouselRef.current.clientWidth);
    }

    const handleResize = () => {
      if (carouselRef.current) {
        setMaxScroll(carouselRef.current.scrollWidth - carouselRef.current.clientWidth);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleScroll = () => {
    if (carouselRef.current) {
      setScrollPosition(carouselRef.current.scrollLeft);
    }
  };

  const scrollTo = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 300;
      const newPosition = direction === 'left' 
        ? Math.max(0, scrollPosition - scrollAmount)
        : Math.min(maxScroll, scrollPosition + scrollAmount);
      
      carouselRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div 
      ref={containerRef} 
      className={cn(
        "relative opacity-0 transform translate-y-8 transition-all duration-700", 
        inView && "opacity-100 transform-none", 
        className
      )}
    >
      {/* Left scroll button */}
      <button 
        onClick={() => scrollTo('left')} 
        disabled={scrollPosition <= 0}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white text-[#1A1A1A] rounded-full flex items-center justify-center transform -translate-x-6 shadow-lg hover:bg-gray-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      
      {/* Right scroll button */}
      <button 
        onClick={() => scrollTo('right')} 
        disabled={scrollPosition >= maxScroll}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white text-[#1A1A1A] rounded-full flex items-center justify-center transform translate-x-6 shadow-lg hover:bg-gray-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      
      <div 
        ref={carouselRef} 
        className="flex space-x-6 overflow-x-auto pb-6 px-4" 
        onScroll={handleScroll}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {products.map((product, index) => (
          <ProductCard 
            key={index} 
            {...product}
            className="flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
};

// Phone UI component (was missing)
const PhoneUI = () => {
  return (
    <div className="w-full h-full bg-white rounded-[32px] overflow-hidden">
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

      {/* App Header */}
      <div className="flex justify-between items-center px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
            <img src="/api/placeholder/400/320" alt="Profile" className="w-full h-full object-cover" />
          </div>
          <div className="flex items-center">
            <span className="font-bold text-lg">HACOO</span>
          </div>
        </div>
        <div className="relative">
          <Bell size={24} />
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-orange-500 rounded-full"></div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-4 py-2 flex gap-2">
        <div className="flex-1 flex items-center bg-gray-100 rounded-full px-4 py-2.5">
          <Search size={20} className="text-gray-500 mr-2" />
          <span className="text-gray-500 text-sm">Search</span>
        </div>
        <button className="w-10 h-10 flex items-center justify-center bg-orange-500 rounded-full">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 01-8 0"/>
          </svg>
        </button>
        <button className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
        </button>
      </div>

      {/* Winter Banner */}
      <div className="px-4 pt-2">
        <div className="relative mb-4 flex gap-2">
          <div className="w-2/3 h-[120px] rounded-lg overflow-hidden relative">
            <img src="/api/placeholder/400/320" alt="Winter Sale" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-3 text-white">
              <div className="flex flex-col">
                <span className="text-4xl font-bold">WINTER</span>
                <div className="flex items-center gap-2 mt-1">
                  <button className="bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
                    SHOP NOW
                  </button>
                  <span className="text-sm">
                    GET UP TO <span className="font-bold">50% OFF</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-1/3">
            <div className="h-[58px] bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="font-medium text-sm">PUREWHITE</span>
            </div>
            <div className="h-[58px] bg-gray-800 rounded-lg flex items-center justify-center text-white">
              <span className="text-3xl font-bold">9+</span>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-4">
          <h3 className="font-medium text-lg mb-3 px-1">Categories</h3>
          <div className="flex justify-between px-1">
            <CategoryItem icon="👕" label="Fashion" items="721" active />
            <CategoryItem icon="💄" label="Beauty" items="632" />
            <CategoryItem icon="👟" label="Shoes" items="247" />
            <CategoryItem icon="🛍️" label="More" items="1.2k" />
          </div>
        </div>

        {/* Product Carousel */}
        <ProductCarousel />
      </div>
    </div>
  );
};

// Main Phone Mockup component
interface PhoneMockupProps {
  className?: string;
}

const PhoneMockup = ({ className }: PhoneMockupProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <div 
      ref={ref} 
      className={cn(
        "relative transform scale-95 opacity-0 transition-all duration-1000", 
        inView && "scale-100 opacity-100", 
        className
      )}>
      {/* Phone Frame */}
      <div className="relative w-[300px] h-[600px] bg-black rounded-[40px] p-3 overflow-hidden shadow-2xl">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-black rounded-b-xl z-10"></div>
        
        {/* Screen */}
        <PhoneUI />
      </div>
    </div>
  );
};

const AppShowcase = ({ className = "" }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section className="py-16 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column - App Demo */}
          <div className="flex justify-center">
            <PhoneMockup className={className} />
          </div>
          
          {/* Right Column - Text Content */}
          <div>
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-orange-500">Unveil</span> your inner fashionista
            </h2>
            
            <p className="text-lg text-gray-700 mb-8">
              Discover the latest trends and express your unique style with HACOO's 
              personalized shopping experience. Our app makes finding your perfect look easier than ever.
            </p>
            
            <div className="bg-gray-100 p-6 rounded-xl mb-8">
              <h3 className="font-bold text-xl mb-3">Your fashion journey starts here</h3>
              <p className="text-gray-600">
                Discover your unique style identity with HACOO's personalized recommendations. 
                Access an extensive library of curated styles, tailored to your preferences.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-orange-100 p-4 rounded-lg">
                <div className="text-2xl mb-2">🛍️</div>
                <h4 className="font-semibold mb-1">Shop Smarter</h4>
                <p className="text-sm text-gray-600">Personalized recommendations based on your style profile</p>
              </div>
              <div className="bg-orange-100 p-4 rounded-lg">
                <div className="text-2xl mb-2">💯</div>
                <h4 className="font-semibold mb-1">Exclusive Deals</h4>
                <p className="text-sm text-gray-600">Get access to member-only discounts and sales</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;