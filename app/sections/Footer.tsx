"use client";
import React from 'react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, ArrowUp } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-[#222222] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Call to Action Banner */}
        <div className="py-8 bg-primary-red px-8 rounded-sm mb-10 flex flex-col md:flex-row justify-between items-center">
          <h3 className="text-2xl font-semibold text-white mb-4 md:mb-0 text-center md:text-left">
            Ready to care for your car?
          </h3>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-10">
          {/* Contact Information */}
          <div>
            <div className="mb-6">
              <div className="h-8 w-auto mb-4">
                <span className="text-white font-bold text-2xl">
                  <span className="text-white">AUTO</span>
                  <span className="text-primary-red">CAR</span>
                  <span className="text-white"> CHECKS</span>
                </span>
              </div>
            </div>
            <div className="space-y-4">
              {/* <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-primary-red" />
                <Link href="tel:+18886358907" className="hover:text-primary-red">+1 (888) 635-8907</Link>
              </div> */}
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-3 text-primary-red" />
                <span>United States</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-primary-red" />
                <Link href="mailto:info@fastcarchecks.com" className="hover:text-primary-red">autocarchecksss@gmail.com
                </Link>
              </div>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <div className="bg-gray-800 p-6 rounded-sm">
              <h3 className="text-xl font-semibold text-white mb-4">Newsletter</h3>
              <p className="text-gray-400 text-sm mb-4">Stay updated with the latest vehicle check reports and offers. Subscribe to our newsletter!</p>
              <div className="space-y-3">
                <Input
                  type="text"
                  placeholder="Your Name"
                  className="bg-transparent border-gray-600 text-white"
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="bg-transparent border-gray-600 text-white"
                />
                <Button className="w-full bg-primary-red hover:bg-red-700 text-white border-none">
                  SIGN UP
                </Button>
              </div>
            </div>
          </div>

          {/* Certification */}
          {/* Certification */}
<div className="flex flex-col items-center md:items-end text-center md:text-right">
  <div className="relative w-40 h-40 mb-4">
    <Image
      src="https://ext.same-assets.com/2314917573/219512541.png"
      alt="NMVTIS and DVLA certified"
      fill
      className="object-contain"
      sizes="(max-width: 968px) 200px, 260px"
    />
  </div>
  <p className="text-sm text-gray-400">
    Fast Car Checks is an Approved NMVTIS and DVLA Data Provider.
  </p>
</div>

        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-800 pt-6">
          <p className="text-center text-sm text-gray-400">
            Copyright © 2025 AUTO CAR CHECKS | All Rights Reserved.
          </p>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-primary-red rounded-full shadow-lg hover:bg-red-700 transition-all duration-300"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5 text-white" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
