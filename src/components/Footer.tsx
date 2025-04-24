import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="border border-gray-200 rounded-lg">
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Join our newsletter
              </h2>
              <p className="text-gray-400 mb-4 md:mb-0">
                Get updates on our latest offers and promotions
              </p>
            </div>
            <div className="w-full md:w-auto">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full md:w-64 bg-gray-800 text-white px-4 py-3 rounded-full pr-12"
                />
                <button className="absolute right-1 top-1 bg-hacoo text-white px-3 py-2 rounded-full text-sm font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="pt-16 pb-8 px-6 bg-white border-t border-gray-100 bg-gradient-to-br from-[#FFF6F1] via-[#FFF9F4] to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <Link to="/" className="flex items-center mb-6">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-hacoo mr-1" fill="currentColor">
                  <path d="M12 2L4 7v10l8 5 8-5V7l-8-5z" />
                </svg>
                <span className="font-bold text-xl text-black uppercase">HACOO</span>
              </Link>
              <p className="text-sm text-gray-600 mb-4">
              Transform your style with timeless fashion trends that never go out of season. Our collection is designed to bring offering. 
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">About</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-600 hover:text-hacoo">Home </a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-hacoo">Features </a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-hacoo">Careers</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-hacoo">Pricing </a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-hacoo">Add to cart </a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-600 hover:text-hacoo">Blog </a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-hacoo">Careers </a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-hacoo">Contact us </a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-hacoo">Security </a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4 mb-6">
                {/* Social Icons */}
                <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-gray-600">
                    <path fill="currentColor" d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-gray-600">
                    <path fill="currentColor" d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-gray-600">
                    <path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 mb-4 md:mb-0">
              © 2023 HACOO. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-gray-500 hover:text-hacoo">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-500 hover:text-hacoo">Terms of Service</a>
              <a href="#" className="text-sm text-gray-500 hover:text-hacoo">Cookie Settings</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;