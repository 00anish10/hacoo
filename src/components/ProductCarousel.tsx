import { useEffect, useRef, useState } from "react";
import ProductCard from "./ProductCard";
import { cn } from "@/lib/utils";
import { useInView } from "react-intersection-observer";

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

  const products = [
    {
      imageUrl: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      title: "Nike Air Max",
      price: "179.99",
      reviewCount: "2.8k",
      delay: "0"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      title: "Air Jordan",
      price: "259.99",
      reviewCount: "1.4k",
      delay: "0.1"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      title: "Running Set",
      price: "189.99",
      reviewCount: "986",
      delay: "0.2"
    },
    {
        imageUrl: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        title: "Nike Air Max",
        price: "179.99",
        reviewCount: "2.8k",
        delay: "0"
      },
    {
      imageUrl: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      title: "Sport Collection",
      price: "299.99",
      reviewCount: "2.1k",
      delay: "0.3"
    }
  ];

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
        className="flex space-x-6 overflow-x-auto scrollbar-hide pb-6 px-4" 
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

export default ProductCarousel;
