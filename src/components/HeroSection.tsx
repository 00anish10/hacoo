import { cn } from "@/lib/utils";
import DownloadButtons from "./DownloadButtons";
import PhoneMockup from "./PhoneMockup";
import { useInView } from "react-intersection-observer";

interface HeroSectionProps {
    className?: string;
}

const HeroSection = ({ className }: HeroSectionProps) => {
    const [badgeRef, badgeInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [headlineRef, headlineInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [subtitleRef, subtitleInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [buttonsRef, buttonsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section className={cn("w-full flex flex-col items-center mt-6 relative py-20 px-2 md:px-0 bg-gradient-to-br from-[#FFF6F1] via-[#FFF9F4] to-white", className)}>
            {/* Badge */}
            <div
                ref={badgeRef}
                className={cn(
                    "inline-flex items-center bg-white border border-gray-200 rounded-full px-4 py-1.5 mb-8 shadow-sm opacity-0 transition-all duration-700 transform translate-y-4",
                    badgeInView && "opacity-100 translate-y-0"
                )}
            >
                <div className="w-5 h-5 bg-orange-500 rounded-full text-white flex items-center justify-center mr-2 text-xs">🔥</div>
                Embrace timeless elegance
            </div>

            {/* Headline */}
            <div
                ref={headlineRef}
                className={cn(
                    "text-center opacity-0 transform translate-y-4 transition-all duration-700",
                    headlineInView && "opacity-100 translate-y-0"
                )}
            >
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Elevate Your Wardrobe with
                    <div className="flex justify-center items-center">
                        <span className="text-orange-500 relative">
                            Timeless
                            <svg className="absolute w-full h-3 left-0 -bottom-2" viewBox="0 0 200 20">
                                <path d="M0,10 Q100,30 200,10" stroke="currentColor" fill="none" strokeWidth="4" />
                            </svg>
                        </span>
                        <span className="ml-3">Trends</span>
                    </div>
                </h1>
            </div>

            {/* Subtitle */}
            <div
                ref={subtitleRef}
                className={cn(
                    "text-center max-w-xl mx-auto opacity-0 transform translate-y-4 transition-all duration-700",
                    subtitleInView && "opacity-100 translate-y-0"
                )}
            >
                <p className="text-gray-600 text-sm mt-6">
                    Transform your style with timeless fashion trends that never go out of season. Our
                    collection is designed to bring offering styled for any occasion.
                </p>
            </div>

            {/* Download buttons */}
            <div
                ref={buttonsRef}
                className={cn(
                    "mt-8 opacity-0 transform translate-y-4 transition-all duration-700",
                    buttonsInView && "opacity-100 translate-y-0"
                )}
            >
                <DownloadButtons />
            </div>

            {/* Phone Mockup */}
            <div className="mt-12">
                <PhoneMockup />
            </div>
        </section>
    );
};

export default HeroSection;