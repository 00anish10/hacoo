import { cn } from "@/lib/utils";

interface DownloadButtonsProps {
  className?: string;
}

const DownloadButtons = ({ className }: DownloadButtonsProps) => {
  return (
    <div className={cn("flex space-x-4 ", className)}>
      {/* App Store Button */}
      <a 
        href="#" 
        className="bg-[#1A1A1A] text-white rounded-full flex items-center px-6 py-3 hover:bg-black/90 transition-all"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3">
          <path d="M17.0454 12.4686C17.0344 10.6198 17.9354 9.2248 19.7554 8.1454C18.7652 6.6664 17.2356 5.8882 15.1964 5.7886C13.2662 5.6912 11.1552 6.8902 10.3748 6.8902C9.5548 6.8902 7.694 5.848 6.2536 5.848C3.5122 5.886 0.6 8.1178 0.6 12.6572C0.6 13.934 0.8354 15.2532 1.3062 16.6148C1.9434 18.4218 3.9994 22.1564 6.1718 22.084C7.476 22.0468 8.3656 21.1448 10.0656 21.1448C11.7174 21.1448 12.5332 22.084 14.006 22.084C16.1982 22.0422 18.0436 18.6698 18.6434 16.8584C15.3342 15.3218 17.0454 12.5132 17.0454 12.4686ZM14.2258 3.7686C15.7504 1.9796 15.616 0.3 15.5824 0C14.2302 0.0842 12.688 0.9006 11.7768 1.9672C10.7784 3.0836 10.2738 4.478 10.3642 5.7674C11.8174 5.8858 13.15 5.06 14.2258 3.7686Z" fill="white"/>
        </svg>
        <div className="text-left">
          <p className="text-xs opacity-80">Download on the</p>
          <p className="text-base font-semibold">App Store</p>
        </div>
      </a>
      
      {/* Google Play Button */}
      <a 
        href="#" 
        className="bg-[#1A1A1A] text-white rounded-full flex items-center px-6 py-3 hover:bg-black/90 transition-all"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3">
          <path d="M4.97664 2.67073C4.67664 2.97073 4.5 3.44573 4.5 4.06573V19.9324C4.5 20.5524 4.67664 21.0274 4.97664 21.3274L5.0533 21.4041L13.5533 12.9041V12.8274L5.0533 4.32739L4.97664 2.67073Z" fill="white"/>
          <path d="M16.475 15.8275L13.55 12.9025V12.8258L16.475 9.90081L16.5517 9.97748L20.0517 11.9025C21.1 12.4775 21.1 13.3291 20.0517 13.9041L16.5517 15.8291L16.475 15.8275Z" fill="white"/>
          <path d="M16.5517 15.8274L13.55 12.8274L5.05005 21.3274C5.42505 21.7024 6.02505 21.7791 6.70005 21.4041L16.5517 15.8274Z" fill="white"/>
          <path d="M5.05005 4.32724L13.55 12.8272L16.5517 9.90058L6.70005 4.24724C6.02505 3.87224 5.42505 3.94891 5.05005 4.32724Z" fill="white"/>
        </svg>
        <div className="text-left">
          <p className="text-xs opacity-80">Download on</p>
          <p className="text-base font-semibold">Play Store</p>
        </div>
      </a>
    </div>
  );
};

export default DownloadButtons;
