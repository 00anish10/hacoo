import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ShoppingCart, Heart, Eye } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  ageRange?: string;
  isNew?: boolean;
  isBestSeller?: boolean;
  discount?: number;
}

// Globally accessible cart storage
export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

// Expose cart items globally
if (!window.cartItems) {
  window.cartItems = [];
}

export function ProductCard({ 
  id, 
  name, 
  price, 
  image, 
  ageRange, 
  isNew, 
  isBestSeller,
  discount 
}: ProductCardProps) {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const handleAddToCart = () => {
    setIsAddingToCart(true);
    
    // Get the current cart
    const cartItems = window.cartItems || [];
    
    // Check if item already exists
    const existingItemIndex = cartItems.findIndex(item => item.id === id);
    
    if (existingItemIndex >= 0) {
      // If item exists, increase quantity
      cartItems[existingItemIndex].quantity += 1;
      
      toast({
        description: "Item already in cart. Quantity increased!",
        duration: 2000,
      });
    } else {
      // Add new item to cart
      cartItems.push({ 
        id, 
        name, 
        price, 
        quantity: 1, 
        image 
      });
      
      toast({
        description: "Item added to cart!",
        duration: 2000,
      });
    }
    
    // Update global cart
    window.cartItems = cartItems;
    
    // If updateCart function is available (defined in CartPage)
    if (typeof window.updateCart === 'function') {
      window.updateCart(cartItems);
    }
    
    // Simulate adding to cart with animation
    setTimeout(() => {
      setIsAddingToCart(false);
    }, 750);
  };

  const handleViewCart = () => {
    navigate('/cart');
  };

  return (
    <Card 
      className="group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Quick actions that appear on hover */}
        <div 
          className={`absolute inset-0 flex items-center justify-center gap-2 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full bg-white text-black hover:bg-baby-mint hover:text-white"
          >
            <Heart className="h-5 w-5" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full bg-white text-black hover:bg-baby-mint hover:text-white"
            onClick={handleViewCart}
          >
            <Eye className="h-5 w-5" />
          </Button>
        </div>
        
        {/* Product tags */}
        <div className="absolute left-2 top-2 flex flex-col gap-1">
          {isNew && (
            <span className="rounded-full bg-baby-mint px-2 py-1 text-xs font-medium text-black">
              New
            </span>
          )}
          {isBestSeller && (
            <span className="rounded-full bg-baby-yellow px-2 py-1 text-xs font-medium text-black">
              Best Seller
            </span>
          )}
          {discount && (
            <span className="rounded-full bg-baby-coral px-2 py-1 text-xs font-medium text-white">
              {discount}% off
            </span>
          )}
        </div>
        
        {/* Age range */}
        {ageRange && (
          <div className="absolute bottom-2 right-2 rounded-full bg-white/80 px-2 py-1 text-xs font-medium">
            {ageRange}
          </div>
        )}
      </div>
      
      <CardContent className="p-4">
        <h3 className="mb-1 font-quicksand text-base font-medium line-clamp-2">{name}</h3>
        <div className="flex items-baseline gap-2">
          <span className="font-montserrat text-lg font-semibold">${price.toFixed(2)}</span>
          {discount && (
            <span className="text-sm text-gray-500 line-through">
              ${(price / (1 - discount / 100)).toFixed(2)}
            </span>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button 
          className={`w-full bg-baby-mint font-quicksand transition-all duration-300 hover:bg-baby-coral hover:text-white ${
            isAddingToCart ? "animate-celebrate" : ""
          }`}
          onClick={handleAddToCart}
        >
          <ShoppingCart className="mr-2 h-5 w-5" /> 
          {isAddingToCart ? "Added!" : "Add to Cart"}
        </Button>
      </CardFooter>
    </Card>
  );
}
