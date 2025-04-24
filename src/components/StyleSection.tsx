import React, { useEffect, useState } from "react";

export default function HacooLanding() {
  // Animation states
  const [fadeIn, setFadeIn] = useState(false);
  const [slideUp, setSlideUp] = useState(false);
  const [cardReveal, setCardReveal] = useState(false);
  const [buttonPulse, setButtonPulse] = useState(false);

  useEffect(() => {
    // Trigger animations in sequence
    setFadeIn(true);
    
    const slideUpTimer = setTimeout(() => {
      setSlideUp(true);
    }, 300);
    
    const cardRevealTimer = setTimeout(() => {
      setCardReveal(true);
    }, 600);
    
    const buttonTimer = setTimeout(() => {
      setButtonPulse(true);
    }, 1200);
    
    return () => {
      clearTimeout(slideUpTimer);
      clearTimeout(cardRevealTimer);
      clearTimeout(buttonTimer);
    };
  }, []);

  return (
    <div className="bg-white p-6 md:p-16 font-sans text-gray-900">
      {/* Header Section */}
      <div className={`flex flex-col md:flex-row justify-between items-center gap-8 mb-12 transition-opacity duration-700 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex flex-col gap-4 max-w-xl">
          <div className={`flex items-center gap-2 text-sm font-medium text-orange-500 border border-orange-200 px-3 py-1 rounded-full w-fit transition-all duration-500 ${slideUp ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <span className="text-orange-600">🧡</span>
            Embrace timeless elegance
          </div>
          <h1 className={`text-4xl font-bold leading-snug transition-all duration-700 ${slideUp ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`} style={{ transitionDelay: '200ms' }}>
            Revolutionizing your <span className="text-orange-600">Style</span> <br />
            with hacoo
          </h1>
          <p className={`text-gray-600 text-base mt-2 transition-all duration-700 ${slideUp ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: '400ms' }}>
            Hacoo Fashion is your ultimate style companion, bringing the latest trends and timeless pieces to your fingertips.
          </p>
        </div>
        <button className={`bg-orange-600 text-white px-6 py-3 rounded-full hover:bg-orange-700  ${buttonPulse ? 'animate-pulse' : ''}`}>
          Download app
        </button>
      </div>
      
      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Card */}
        <div className={`rounded-3xl overflow-hidden shadow-lg transition-all duration-700 ${cardReveal ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="bg-gray-200 h-[500px] relative">
            <img
              src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=400&q=80"
              alt="Left card"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 text-white font-semibold text-sm">HACOO</div>
          </div>
        </div>
        
        {/* Middle Card (Orange Info) */}
        <div className={`bg-orange-600 text-white rounded-3xl p-6 flex flex-col justify-between h-[500px] shadow-lg transition-all duration-700 ${cardReveal ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '200ms' }}>
          <div>
            <div className="text-sm font-bold mb-4">HACOO</div>
            <h2 className={`text-2xl font-semibold mb-4 leading-tight transition-all duration-700 ${cardReveal ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} style={{ transitionDelay: '600ms' }}>
              Hacoo is an innovative and open content-sharing.
            </h2>
            <p className={`text-sm leading-relaxed transition-all duration-700 ${cardReveal ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} style={{ transitionDelay: '800ms' }}>
              Community we are dedicated to creating a dynamic interactive space for our users.
              Here, you can freely express yourself, share your and connect with like mind friends.
            </p>
          </div>
          <div className="mt-8">
            <div className={`flex gap-2 transition-all duration-1000 ${cardReveal ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '1000ms' }}>
              <div className="w-8 h-8 bg-white rotate-45 animate-pulse" style={{ animationDuration: '3s' }} />
              <div className="w-8 h-8 bg-white rotate-[30deg] animate-pulse" style={{ animationDuration: '3.5s' }} />
              <div className="w-8 h-8 bg-white rotate-[-30deg] animate-pulse" style={{ animationDuration: '4s' }} />
            </div>
          </div>
        </div>
        
        {/* Right Card */}
        <div className={`rounded-3xl overflow-hidden shadow-lg transition-all duration-700 ${cardReveal ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '400ms' }}>
          <div className="bg-gray-200 h-[500px] relative">
            <img
              src="https://images.unsplash.com/photo-1587614382346-4ecf1230c399?auto=format&fit=crop&w=400&q=80"
              alt="Right card"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 text-white font-semibold text-sm">HACOO</div>
            <div className={`absolute bottom-4 left-4 right-4 text-white text-base font-medium transition-all duration-700 ${cardReveal ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '1200ms' }}>
              Whether you're a fashion enthusiast or someone who enjoys capturing and sharing unique moments.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}