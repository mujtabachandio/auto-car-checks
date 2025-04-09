import Image from 'next/image';
import React from 'react';

const PromotionalSection = () => {
  return (
    <div className="relative w-full overflow-hidden py-16 md:py-24">
      {/* Background image with car headlight */}
      <div className="absolute inset-0 z-0">
        <div className="bg-gradient-to-r from-gray-200 to-gray-100 opacity-20 absolute inset-0"></div>
        <Image
          width={1920}    
          height={600}
          src="/offer1.jpg" 
          alt="Car headlight" 
          className="w-full h-full object-cover grayscale"
        />
      </div>
      
      {/* Container for positioning */}
      <div className="container mx-auto relative z-10">
        {/* Red box with content - positioned to overlap from top-left */}
        <div className="bg-red-600 text-white p-8 md:p-12 w-full max-w-md 
                      shadow-xl transform -translate-y-8 md:-translate-y-12 -translate-x-4 md:-translate-x-6
                      relative ml-0 md:ml-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            What <span className="font-normal">Sets Us</span> Apart?
          </h2>
          
          <div className="flex flex-col space-y-4">
            <button className="border-2 border-white py-2 px-4 text-white hover:bg-white hover:bg-opacity-10 transition duration-300 font-medium">
              DATA ACCURACY
            </button>
            
            <button className="border-2 border-white py-2 px-4 text-white hover:bg-white hover:bg-opacity-10 transition duration-300 font-medium">
              SPEEDY SERVICE
            </button>
            
            <button className="border-2 border-white py-2 px-4 text-white hover:bg-white hover:bg-opacity-10 transition duration-300 font-medium">
              RELIABLE SOURCES
            </button>
            
            <button className="border-2 border-white py-2 px-4 text-white hover:bg-white hover:bg-opacity-10 transition duration-300 font-medium">
              DETAILED ANALYSIS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionalSection;