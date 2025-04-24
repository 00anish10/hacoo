import { cn } from "@/lib/utils";
import { useInView } from "react-intersection-observer";

interface ProductCardProps {
  className?: string;
  imageUrl: string;
  title?: string;
  price?: string;
  reviewCount?: string;
  delay?: string;
}

const ProductCard = ({ className, imageUrl, title, price, reviewCount, delay = "0" }: ProductCardProps) => {
  const [ref, inView] = useInView({ 
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref}
      className={cn(
        "relative w-[280px] h-[360px] rounded-2xl overflow-hidden shadow-sm group opacity-0 transform translate-x-8 transition-all duration-700", 
        inView && "opacity-100 translate-x-0",
        className
      )}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="w-full h-full overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title || "Product"} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Price tag */}
        {price && (
          <div className="absolute top-4 left-4 bg-white px-3 py-1.5 rounded-full text-sm font-medium">
            ${price}
          </div>
        )}
        
        {/* Review count */}
        {reviewCount && (
          <div className="absolute top-4 right-4 bg-white text-xs px-3 py-1.5 rounded-full flex items-center font-medium">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#1A1A1A" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>{reviewCount}</span>
          </div>
        )}
        
        {/* Bottom gradient and title */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 to-transparent"></div>
        
        {/* Title */}
        {title && (
          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="text-xl font-semibold mb-1">{title}</h3>
          </div>
        )}
        
        {/* See more button */}
        <div className="absolute inset-x-0 bottom-0 flex justify-center transition-transform duration-300 transform translate-y-full group-hover:translate-y-0">
          <button className="bg-white text-[#1A1A1A] w-full py-4 font-medium flex items-center justify-center">
            See more
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2">
              <path d="M9 18L15 12L9 6" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;