const Testimonials = () => {
    return (
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Reviews that speak for<br /> themselves
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our customers feedback is the driving force behind our improvements. Here's what they have to say 
              about their journey with HACOO.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-lg hover:shadow-2xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="text-2xl font-bold mr-2">⭐️</div>
                <div className="text-2xl font-bold">4.9</div>
              </div>
              <p className="text-gray-700 mb-4">
                "I can't believe how much this app has transformed my wardrobe! The recommendations are spot-on and I've never felt more confident in my style."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=400&crop=faces&fit=crop" 
                  alt="User avatar" 
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="ml-4">
                  <p className="text-sm font-medium">Lisa Brown</p>
                  <p className="text-xs text-gray-500">Fashion Blogger</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-lg hover:shadow-2xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="text-2xl font-bold mr-2">⭐️</div>
                <div className="text-2xl font-bold">4.8</div>
              </div>
              <p className="text-gray-700 mb-4">
                "The app's suggestions perfectly match my style profile! It's like having a personal stylist in my pocket. The interface is clean and intuitive too."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=400&crop=faces&fit=crop" 
                  alt="User avatar" 
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="ml-4">
                  <p className="text-sm font-medium">Mark Wilson</p>
                  <p className="text-xs text-gray-500">Style Enthusiast</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Testimonials;
  