import { Circle, CircleArrowRight } from "lucide-react";

const features = [
  {
    icon: <Circle className="text-[#FD7F23] w-6 h-6" />,
    title: "Hoodies Made for Every Moment",
    description:
      "Wrap yourself in comfort and style with our versatile hoodies, designed for every occasion.",
  },
  {
    icon: <Circle className="text-[#FD7F23] w-6 h-6" />,
    title: "Makeup, Redefined for Every Look",
    description:
      "Discover the power of makeup that enhances your natural beauty and elevates every look.",
  },
  {
    icon: <Circle className="text-[#FD7F23] w-6 h-6" />,
    title: "Step Into Style and Comfort",
    description:
      "Shoes are more than just an accessory—they're the foundation of every great outfit.",
  },
];

const Features = () => {
  return (
    <section className="relative py-20 px-2 md:px-0 bg-gradient-to-br from-[#FFF6F1] via-[#FFF9F4] to-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 relative z-10">
        {/* Left */}
        <div className="flex flex-col justify-center">
          {/* Pill Badge */}
          <div className="mb-6">
            <span className="flex items-center gap-2 px-4 py-1 rounded-full border border-[#fd7f2363] bg-white/70 text-[#fd7f23] font-semibold text-base w-fit shadow-sm">
              <Circle className="w-5 h-5 text-[#FD7F23]" />
              Embrace timeless elegance
            </span>
          </div>
          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
            <span className="text-[#FD7F23]">Style</span>{" "}
            that defines<br className="hidden md:block" /> your every move
          </h2>
          {/* Subtitle */}
          <p className="text-lg text-neutral-700 mb-7 max-w-xl">
            Your style is more than just what you wear; it’s an expression of who you are. With our making sure you look and feel.
          </p>
          {/* Imagery and chat */}
          <div className="flex flex-col space-y-3 relative">
            {/* Main image row */}
            <div className="flex gap-5 items-end">
              {/* Woman portrait */}
              <img
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?w=275&h=275&fit=facearea&facepad=3"
                alt="Woman with summer hat"
                className="w-44 h-44 rounded-2xl object-cover border-4 border-white shadow-lg"
                style={{ zIndex: 2 }}
              />
              {/* Overlay duo image and dots */}
              <div className="relative flex items-end">
                {/* Decorative dots background */}
                <div className="absolute left-2 top-4 z-0">
                  <svg width="60" height="60" fill="none">
                    <g>
                      {Array.from({ length: 36 }).map((_, i) => {
                        const x = (i % 6) * 10;
                        const y = Math.floor(i / 6) * 10;
                        return (
                          <circle
                            key={i}
                            cx={x}
                            cy={y}
                            r="1.5"
                            fill="#fd7f2322"
                          />
                        );
                      })}
                    </g>
                  </svg>
                </div>
                
                  
                 
              </div>
            </div>
            {/* App screenshot fake */}
          </div>
        </div>
        {/* Right (cards list) */}
        <div className="flex flex-col gap-6 justify-center">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="bg-white rounded-[28px] border border-[#F7DFD6] p-7 shadow hover:shadow-lg transition group flex items-start gap-5"
            >
              {/* Icon circle */}
              <div className="w-11 h-11 rounded-full bg-[#FD7F23] bg-opacity-80 flex items-center justify-center mt-1">
                {feature.icon}
              </div>
              {/* Text content */}
              <div className="flex-1">
                <h3 className="text-lg font-bold mb-1">{feature.title}</h3>
                <p className="text-neutral-700 text-base">{feature.description}</p>
                <a
                  href="#"
                  className="flex items-center gap-1 text-[#FD7F23] text-base font-semibold mt-3 group-hover:underline"
                >
                  Learn more
                  <CircleArrowRight
                    className="ml-1 w-4 h-4 text-[#FD7F23] group-hover:translate-x-1 transition"
                    strokeWidth={2.2}
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Faint background circle for extra softness */}
      <div className="absolute left-[-120px] top-[60px] w-[340px] h-[340px] rounded-full bg-[#fd7f2320] pointer-events-none blur-2xl z-0"></div>
    </section>
  );
};

export default Features;

