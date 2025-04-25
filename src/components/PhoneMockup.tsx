import { useRef, useState, useEffect, memo } from "react";
import { cn } from "@/lib/utils";
import { useInView } from "react-intersection-observer";
import { Search, Bell, Heart, ShoppingBag, Mail, ChevronLeft, ChevronRight, Home, User } from "lucide-react";

// Enhanced types for better type safety
interface ProductCardProps {
    imageUrl: string;
    title: string;
    price: string;
    reviewCount: string;
    delay: number;
    className?: string;
}

interface CategoryItemProps {
    icon: string;
    label: string;
    items: string;
    active?: boolean;
}

// Memoized Product Card component with improved animations
const ProductCard = memo(({
    imageUrl,
    title,
    price,
    reviewCount,
    delay,
    className
}: ProductCardProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const [cardRef, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div
            ref={cardRef}
            className={cn(
                "w-36 flex-shrink-0 transition-all duration-500 bg-gradient-to-br from-[#FFF6F1] via-[#FFF9F4] to-white rounded-xl overflow-hidden shadow-sm hover:shadow-md",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
                className
            )}
            style={{ transitionDelay: `${delay}s` }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            role="article"
            aria-label={`${title} product card`}
        >
            <div className="relative h-44 w-full overflow-hidden">
                <img
                    src="/api/placeholder/400/320"
                    alt={`${title} product image`}
                    className={cn(
                        "h-full w-full object-cover transition-transform duration-700 will-change-transform",
                        isHovered && "scale-110"
                    )}
                />
                <button
                    className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm hover:bg-gray-50 transition-colors"
                    aria-label="Add to favorites"
                >
                    <Heart size={16} className="text-gray-700 hover:text-amber-600 transition-colors" />
                </button>
            </div>
            <div className="p-3">
                <h3 className="text-sm font-medium text-gray-800 line-clamp-1">{title}</h3>
                <div className="flex items-center justify-between mt-1">
                    <span className="text-sm font-bold text-amber-600">${price}</span>
                    <div className="flex items-center text-xs text-gray-500">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="mr-1 text-amber-500">
                            <path d="M12 2l2.4 7.2H22l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" />
                        </svg>
                        <span>{reviewCount}</span>
                    </div>
                </div>
            </div>
        </div>
    );
});

ProductCard.displayName = "ProductCard";

// Memoized Category Item component with improved hover effects
const CategoryItem = memo(({
    icon,
    label,
    items,
    active
}: CategoryItemProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="flex flex-col items-center cursor-pointer group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            role="button"
            aria-pressed={active}
            tabIndex={0}
        >
            <div className={cn(
                "w-12 h-12 rounded-full flex items-center justify-center mb-1 transition-all duration-300",
                active ? "bg-amber-600 text-white" : "bg-gray-100 group-hover:bg-gray-200"
            )}>
                <span className={cn(
                    "text-xl transition-transform duration-300 will-change-transform",
                    (isHovered || active) && "transform scale-110"
                )}>{icon}</span>
            </div>
            <span className="text-xs font-medium transition-colors duration-300 group-hover:text-amber-600">{label}</span>
            <span className="text-[10px] text-gray-500">{items} items</span>
        </div>
    );
});

CategoryItem.displayName = "CategoryItem";

// Optimized Product Carousel component with improved scroll animation
const ProductCarousel = memo(({ className }: { className?: string }) => {
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
            delay: 0
        },
        {
            imageUrl: "/api/placeholder/400/320",
            title: "Air Jordan",
            price: "259.99",
            reviewCount: "1.4k",
            delay: 0.1
        },
        {
            imageUrl: "/api/placeholder/400/320",
            title: "Running Set",
            price: "189.99",
            reviewCount: "986",
            delay: 0.2
        },
        {
            imageUrl: "/api/placeholder/400/320",
            title: "Nike Air Max",
            price: "179.99",
            reviewCount: "2.8k",
            delay: 0.3
        },
        {
            imageUrl: "/api/placeholder/400/320",
            title: "Sport Collection",
            price: "299.99",
            reviewCount: "2.1k",
            delay: 0.4
        }
    ];

    // Debounced scroll handler for better performance
    useEffect(() => {
        if (carouselRef.current) {
            setMaxScroll(carouselRef.current.scrollWidth - carouselRef.current.clientWidth);
        }

        const handleResize = () => {
            if (carouselRef.current) {
                setMaxScroll(carouselRef.current.scrollWidth - carouselRef.current.clientWidth);
            }
        };

        let scrollTimeout: ReturnType<typeof setTimeout>;
        const handleScroll = () => {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                if (carouselRef.current) {
                    setScrollPosition(carouselRef.current.scrollLeft);
                }
            }, 50);
        };

        carouselRef.current?.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleResize);

        return () => {
            carouselRef.current?.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
            clearTimeout(scrollTimeout);
        };
    }, []);

    const scrollTo = (direction: 'left' | 'right') => {
        if (carouselRef.current) {
            const scrollAmount = carouselRef.current.clientWidth / 2;
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
            aria-label="Product carousel"
        >
            {/* Scroll buttons */}
            <button
                onClick={() => scrollTo('left')}
                disabled={scrollPosition <= 0}
                className={cn(
                    "absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full flex items-center justify-center transform -translate-x-5 shadow-lg hover:bg-white transition-all duration-300",
                    scrollPosition <= 0 ? "opacity-0 pointer-events-none" : "opacity-100"
                )}
                aria-label="Scroll left"
            >
                <ChevronLeft size={20} />
            </button>

            <button
                onClick={() => scrollTo('right')}
                disabled={scrollPosition >= maxScroll}
                className={cn(
                    "absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full flex items-center justify-center transform translate-x-5 shadow-lg hover:bg-white transition-all duration-300",
                    scrollPosition >= maxScroll ? "opacity-0 pointer-events-none" : "opacity-100"
                )}
                aria-label="Scroll right"
            >
                <ChevronRight size={20} />
            </button>

            <div
                ref={carouselRef}
                className="flex space-x-4 overflow-x-auto scrollbar-hide pb-6 px-1 snap-x"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                aria-roledescription="carousel"
                aria-live="polite"
            >
                {products.map((product, index) => (
                    <div key={index} className="snap-start" role="group">
                        <ProductCard {...product} />
                    </div>
                ))}

                {/* View all button */}
                <div className="snap-start flex items-center justify-center w-24 h-full">
                    <button
                        className="flex flex-col items-center justify-center h-44 w-full rounded-xl border-2 border-dashed border-gray-300 text-gray-500 hover:border-amber-600 hover:text-amber-600 transition-colors"
                        aria-label="View all products"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5v14" />
                        </svg>
                        <span className="text-xs mt-2">View All</span>
                    </button>
                </div>
            </div>
        </div>
    );
});

ProductCarousel.displayName = "ProductCarousel";

// Status Bar component
const StatusBar = memo(() => {
    return (
        <div className="flex justify-between items-center px-5 py-2 text-xs text-black bg-white z-20">
            <span className="font-medium">12:54</span>
            <div className="flex items-center space-x-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.01 21.49L23.64 7C23.19 6.66 18.71 3 12 3C5.28 3 0.81 6.66 0.36 7L12.01 21.49Z" />
                </svg>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2a10 10 0 0 1 10 10c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 3c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7z" />
                    <path d="M17 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0z" />
                </svg>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 6V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H2v13c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6h-6zm-6-2h4v2h-4V4z" />
                </svg>
            </div>
        </div>
    );
});

StatusBar.displayName = "StatusBar";

// App Header component
const AppHeader = memo(({ inView }: { inView: boolean }) => {
    return (
        <div className="flex justify-between items-center px-4 py-3">
            <div className="flex items-center gap-2">
                <div className={cn(
                    "w-8 h-8 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 overflow-hidden transform transition-transform duration-700 will-change-transform",
                    inView && "animate-pulse-slow"
                )}>
                    <img src="/api/placeholder/400/320" alt="Profile" className="w-full h-full object-cover mix-blend-overlay" />
                </div>
                <div className="flex items-center">
                    <span className="font-bold text-lg bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">HACOO</span>
                </div>
            </div>
            <div className="relative">
                <Bell size={22} className="text-gray-800" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
            </div>
        </div>
    );
});

AppHeader.displayName = "AppHeader";

// Search Bar component
const SearchBar = memo(() => {
    return (
        <div className="px-4 py-2 flex gap-2">
            <div className="flex-1 flex items-center bg-gray-100 rounded-full px-4 py-2.5 hover:bg-gray-200 transition-colors duration-300"
                role="search">
                <Search size={18} className="text-gray-500 mr-2" />
                <span className="text-gray-500 text-sm">Search</span>
            </div>
            <button
                className="w-10 h-10 flex items-center justify-center bg-amber-500 rounded-full hover:bg-amber-600 transition-colors shadow-md hover:shadow-lg"
                aria-label="Shopping bag"
            >
                <ShoppingBag size={18} className="text-white" />
            </button>
            <button
                className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                aria-label="Mail"
            >
                <Mail size={18} className="text-gray-800" />
            </button>
        </div>
    );
});

SearchBar.displayName = "SearchBar";

// Winter Banner component
const WinterBanner = memo(() => {
    return (
        <div className="mb-4 flex gap-2">
            <div className="w-2/3 h-[120px] rounded-lg overflow-hidden relative group">
                <img src="/api/placeholder/400/320" alt="Winter Sale"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 will-change-transform" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-3 text-white">
                    <div className="flex flex-col">
                        <span className="text-4xl font-bold">WINTER</span>
                        <div className="flex items-center gap-2 mt-1">
                            <button
                                className="bg-amber-500 text-white text-xs px-3 py-1 rounded-full transform transition-transform duration-300 hover:scale-105 hover:bg-amber-600"
                                aria-label="Shop winter sale"
                            >
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
                <div className="h-[58px] bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg flex items-center justify-center transition-transform duration-300 hover:scale-[1.02]">
                    <span className="font-medium text-sm bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">PUREWHITE</span>
                </div>
                <div className="h-[58px] bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg flex items-center justify-center text-white transition-transform duration-300 hover:scale-[1.02]">
                    <span className="text-3xl font-bold">9+</span>
                </div>
            </div>
        </div>
    );
});

WinterBanner.displayName = "WinterBanner";

// Categories Section component
const CategoriesSection = memo(() => {
    return (
        <div className="mb-6">
            <h3 className="font-medium text-lg mb-3 px-1">Categories</h3>
            <div className="flex justify-between px-1">
                <CategoryItem icon="👕" label="Fashion" items="721" active />
                <CategoryItem icon="💄" label="Beauty" items="632" />
                <CategoryItem icon="👟" label="Shoes" items="247" />
                <CategoryItem icon="🛍️" label="More" items="1.2k" />
            </div>
        </div>
    );
});

CategoriesSection.displayName = "CategoriesSection";

// Recently Viewed component
const RecentlyViewed = memo(() => {
    return (
        <div className="mt-6 mb-4">
            <div className="flex justify-between items-center mb-3 px-1">
                <h3 className="font-medium text-lg">Recently Viewed</h3>
                <button className="text-sm text-amber-500 font-medium" aria-label="See all recently viewed items">See All</button>
            </div>

            <div
                className="flex space-x-3 overflow-x-auto scrollbar-hide pb-6"
                aria-label="Recently viewed items"
            >
                {[1, 2, 3].map((_, index) => (
                    <div
                        key={index}
                        className="w-24 h-24 rounded-lg bg-gray-100 flex-shrink-0 flex items-center justify-center overflow-hidden"
                        aria-label={`Recently viewed item ${index + 1}`}
                    >
                        <img src="/api/placeholder/200/200" alt={`Recently viewed item ${index + 1}`} className="w-full h-full object-cover" />
                    </div>
                ))}
            </div>
        </div>
    );
});

RecentlyViewed.displayName = "RecentlyViewed";

// Bottom Navigation component
const BottomNavigation = memo(() => {
    return (
        <div
            className="absolute bottom-0 left-0 right-0 h-16 bg-white border-t border-gray-100 flex justify-around items-center px-4"
            role="navigation"
            aria-label="Main navigation"
        >
            <button
                className="flex flex-col items-center justify-center py-1"
                aria-label="Home"
                aria-current="page"
            >
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-amber-500 text-white">
                    <Home size={20} />
                </div>
            </button>
            <button
                className="flex flex-col items-center justify-center py-1"
                aria-label="Search"
            >
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-gray-500">
                    <Search size={20} />
                </div>
            </button>
            <button
                className="flex flex-col items-center justify-center py-1"
                aria-label="Favorites"
            >
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-gray-500">
                    <Heart size={20} />
                </div>
            </button>
            <button
                className="flex flex-col items-center justify-center py-1"
                aria-label="Profile"
            >
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-gray-500">
                    <User size={20} />
                </div>
            </button>
        </div>
    );
});

BottomNavigation.displayName = "BottomNavigation";

// FIXED: Enhanced Phone Mockup component with working animations
const PhoneMockup = ({ className }: { className?: string }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div
            ref={ref}
            className={cn(
                "relative transform scale-95 opacity-0 transition-all duration-1000",
                inView && "scale-100 opacity-100 animate-float",
                className
            )}
            role="img"
            aria-label="Phone mockup displaying shopping app"
        >
            <div className="relative w-[300px] h-[600px] bg-black rounded-[40px] p-3 overflow-hidden shadow-2xl">
                <div className="absolute inset-0 z-0 rounded-[40px] bg-gradient-to-tr from-black/40 to-transparent pointer-events-none"></div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[30%] h-6 bg-black rounded-b-xl z-10"></div>
                {/* Screen */}
                <div className="w-full h-full bg-white rounded-[32px] overflow-hidden relative">
                    <StatusBar />
                    <AppHeader inView={inView} />
                    <SearchBar />
                    <div className="px-4 pt-2 overflow-y-auto h-[calc(100%-120px)]">
                        <WinterBanner />
                        <CategoriesSection />
                        <div className="flex justify-between items-center mb-3 px-1">
                            <h3 className="font-medium text-lg">Featured</h3>
                            <button className="text-sm text-amber-500 font-medium" aria-label="See all featured products">See All</button>
                        </div>
                        <ProductCarousel />
                        <RecentlyViewed />
                    </div>
                    <BottomNavigation />
                </div>
            </div>
        </div>
    );
};

// Add necessary animation keyframes style
const style = document.createElement('style');
style.textContent = `
  @keyframes float {
    0%, 100% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-10px) scale(1); }
  }
  
  @keyframes pulse-slow {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.8; }
  }
  
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  
  .animate-pulse-slow {
    animation: pulse-slow 3s ease-in-out infinite;
  }
`;
document.head.appendChild(style);

export default PhoneMockup;