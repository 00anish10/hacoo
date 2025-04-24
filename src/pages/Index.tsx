import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import DownloadCTA from "@/components/DownloadCTA";
import Testimonials from "@/components/Testimonials";
import StyleSection from "@/components/StyleSection";
import AppShowcase from "@/components/AppShowcase";
import Features from "@/components/Features";

const Index = () => {
  return (
    <div className="min-h-screen w-full  bg-gradient-to-br from-[#FFF6F1] via-[#FFF9F4] to-white">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-8 relative  bg-gradient-to-br from-[#FFF6F1] via-[#FFF9F4] to-white">
        {/* Card-like container */}
        <div className="w-full mt-6 mb-6 bg-white  shadow-sm py-8 px-6 sm:px-10 lg:px-16  bg-gradient-to-br from-[#FFF6F1] via-[#FFF9F4] to-white">
          {/* Navbar */}
          <Navbar />

          {/* Hero Section */}
          <HeroSection />

          {/* Product Carousel */}
          <div className="mt-16">
            {/* TODO: Add Product Carousel Component */}
          </div>
        </div>
      </div>
      <Features/>
      <AppShowcase/>
      <StyleSection/>
      <Testimonials/>
      <DownloadCTA/>
      <Footer />
      
    </div>
  );
};

export default Index;
