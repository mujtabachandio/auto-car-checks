import Image from 'next/image';
import React from 'react';

const FastCarChecksUI = () => {
  return (
    <div className="w-full min-h-screen ">
      <div className="container mx-auto px-4 py-12">
        <div className="rounded-lg overflow-hidden ">
          <div className="flex flex-col md:flex-row">
            {/* Left Image Section */}
            <div className="md:w-2/5 relative">
              <Image
                width={474}
                height={476} 
                src="/about2.jpg" 
                alt="Mechanic inspecting a car" 
                className=" object-cover rounded-lg "
              />
            </div>

            {/* Right Content Section */}
            <div className="md:w-3/5 p-8 md:p-12">
              <div className="mb-8">
                <p className="text-red-600 font-bold text-sm uppercase tracking-wide">WHY CHOOSE US</p>
                <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mt-2">
                  Why Choose <span className="text-red-600">Auto Car Checks</span>
                </h1>
              </div>

              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                Auto Car Checks stands out by delivering unmatched accuracy, comprehensive data, 
                and exceptional customer service. Our VIN reports are sourced from reputable 
                institutions, ensuring you receive the most reliable information. With user-friendly, 
                detailed reports available within minutes, we make the process fast and convenient. 
                Our dedicated support team is always ready to assist you, providing peace of mind 
                and confidence in every automotive decision you make. Choose VHR Checks for a 
                seamless and trustworthy vehicle history reporting experience.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                {/* Feature 1 */}
                <div className="flex flex-col items-center text-center bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Accurate Reports</h3>
                  <p className="text-sm text-gray-600">
                    Get precise and comprehensive VIN reports sourced from trusted institutions.
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="flex flex-col items-center text-center bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Fast Service</h3>
                  <p className="text-sm text-gray-600">
                    Receive detailed vehicle history reports within minutes of your request.
                  </p>
                </div>

                {/* Feature 3 */}
                <div className="flex flex-col items-center text-center bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Reliable Support</h3>
                  <p className="text-sm text-gray-600">
                    Benefit from our dedicated customer support team, ready to assist you anytime.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FastCarChecksUI;
