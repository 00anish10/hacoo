import { Circle, CircleArrowRight } from "lucide-react";
import { useRef, useEffect, useState } from "react";

// Define the cn utility function for conditional classes
const cn = (...classes) => {
    return classes.filter(Boolean).join(" ");
};

const features = [
    {
        icon: <Circle className="text-white w-6 h-6" />,
        title: "Hoodies Made for Every Moment",
        description:
            "Wrap yourself in comfort and style with our versatile hoodies, designed for every occasion.",
    },
    {
        icon: <Circle className="text-white w-6 h-6" />,
        title: "Makeup, Redefined for Every Look",
        description:
            "Discover the power of makeup that enhances your natural beauty and elevates every look.",
    },
    {
        icon: <Circle className="text-white w-6 h-6" />,
        title: "Step Into Style and Comfort",
        description:
            "Shoes are more than just an accessory—they're the foundation of every great outfit.",
    },
];

const Features = () => {
    // Refs for animation
    const badgeRef = useRef(null);
    const [badgeInView, setBadgeInView] = useState(false);

    // Simple intersection observer for animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setBadgeInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (badgeRef.current) {
            observer.observe(badgeRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <section className="relative py-20 px-4 md:px-8 bg-gradient-to-br from-orange-50 via-orange-50 to-white overflow-hidden">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 relative z-10">
                {/* Left */}
                <div className="flex flex-col justify-center">
                    {/* Pill Badge */}
                    <div
                        ref={badgeRef}
                        className={cn(
                            "inline-flex items-center bg-white border border-gray-200 rounded-full px-4 py-1.5 mb-8 shadow-sm opacity-0 transition-all duration-700 transform translate-y-4",
                            badgeInView && "opacity-100 translate-y-0"
                        )}
                    >
                        <div className="w-5 h-5 bg-orange-500 rounded-full text-white flex items-center justify-center mr-2 text-xs">🔥</div>
                        <span className="text-sm font-medium">Embrace timeless elegance</span>
                    </div>

                    {/* Heading */}
                    <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
                        <span className="text-orange-500">Style</span>{" "}
                        that defines<br className="hidden md:block" /> your every move
                    </h2>

                    {/* Subtitle */}
                    <p className="text-lg text-neutral-700 mb-10 max-w-xl">
                        Your style is more than just what you wear; it's an expression of who you are.
                        With our collection, we're making sure you look and feel your absolute best.
                    </p>

                    {/* Imagery */}
                    <div className="flex flex-col space-y-3 relative">
                        {/* Main image row */}
                        <div className="flex gap-5 items-end">
                            {/* Image placeholder */}
                            <div className="w-44 h-44 rounded-2xl bg-orange-100 border-4 border-white shadow-lg flex items-center justify-center">

                                <img src="/public/img.jpeg" alt="" />
                            </div>

                            {/* Decorative dots background */}
                            <div className="relative flex items-end">
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
                                                        fill="rgba(253, 127, 35, 0.2)"
                                                    />
                                                );
                                            })}
                                        </g>
                                    </svg>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>

                {/* Right (cards list) */}
                <div className="flex flex-col gap-6 justify-center">
                    {features.map((feature, i) => (
                        <div
                            key={feature.title}
                            className="bg-white rounded-2xl border border-orange-100 p-7 shadow hover:shadow-lg transition group flex items-start gap-5"
                        >
                            {/* Icon circle */}
                            <div className="w-11 h-11 rounded-full bg-orange-500 flex items-center justify-center mt-1">
                                {feature.icon}
                            </div>

                            {/* Text content */}
                            <div className="flex-1">
                                <h3 className="text-lg font-bold mb-1">{feature.title}</h3>
                                <p className="text-neutral-700 text-base">{feature.description}</p>
                                <a
                                    href="#"
                                    className="flex items-center gap-1 text-orange-500 text-base font-semibold mt-3 group-hover:underline"
                                >
                                    Learn more
                                    <CircleArrowRight
                                        className="ml-1 w-4 h-4 text-orange-500 group-hover:translate-x-1 transition"
                                        strokeWidth={2.2}
                                    />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Background decoration */}
            <div className="absolute left-0 top-20 w-64 h-64 rounded-full bg-orange-100 opacity-50 blur-3xl pointer-events-none z-0"></div>
            <div className="absolute right-0 bottom-20 w-80 h-80 rounded-full bg-orange-100 opacity-30 blur-3xl pointer-events-none z-0"></div>
        </section>
    );
}; export default Features;