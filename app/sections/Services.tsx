import React from "react";
import Link from "next/link";
import { Card, CardHeader, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const Services = () => {
  return (
    <>
      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              SERVICES WE PROVIDE
            </h2>
            <p className="mt-4 text-lg text-gray-600 w-[80%] mx-auto">

Comprehensive Vehicle History Reports for Informed Automotive Decisions <br />

This heading encapsulates the essence of your services, focusing on reliability, comprehensive details, and aiding informed decisions. It keeps the tone professional and concise.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service Card 1 */}
            <Card className="border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-105">
              <CardHeader className="pb-4 flex justify-center">
                <Image
                 width={100}
                 height={100} 
                  src="https://ext.same-assets.com/2314917573/2299423962.png"
                  alt="Ownership History"
                  className="w-full h-32 mb-4"
                />
                <CardTitle className="text-xl font-semibold text-gray-900">Ownership History</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-base">
                  Trace the journey of previous owners and tenure periods to understand the vehicles past ownership and usage.
                </p>
              </CardContent>
              <CardFooter className="pt-4">
                <Link
                  href="/pricing"
                  className="text-red-600 hover:text-red-700 font-medium hover:underline transition duration-200"
                >
                  VIEW DETAILS
                </Link>
              </CardFooter>
            </Card>

            {/* Service Card 2 */}
            <Card className="border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-105">
              <CardHeader className="pb-4 flex justify-center">
                <Image
                    width={100}
                    height={100}
                  src="https://ext.same-assets.com/2314917573/1941305284.png"
                  alt="Vehicle Specifications"
                  className="w-full h-32 mb-4"
                />
                <CardTitle className="text-xl font-semibold text-gray-900">Vehicle Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-base">
                  Vehicle specifications detail essential information such as engine type, transmission, dimensions, safety features, and technology options.
                </p>
              </CardContent>
              <CardFooter className="pt-4">
                <Link
                  href="/pricing"
                  className="text-red-600 hover:text-red-700 font-medium hover:underline transition duration-200"
                >
                  VIEW DETAILS
                </Link>
              </CardFooter>
            </Card>

            {/* Service Card 3 */}
            <Card className="border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-105">
              <CardHeader className="pb-4 flex justify-center">
              <Image
                 width={100}
                 height={100} 
                  src="https://ext.same-assets.com/2314917573/2865669651.png"
                  alt="Safety and Recall Information"
                  className="w-full h-32 mb-4"
                />
                <CardTitle className="text-xl font-semibold text-gray-900">Safety and Recall Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-base">
                  Stay informed about potential hazards and recalls related to your vehicle to ensure a safe and reliable driving experience.
                </p>
              </CardContent>
              <CardFooter className="pt-4">
                <Link
                  href="/pricing"
                  className="text-red-600 hover:text-red-700 font-medium hover:underline transition duration-200"
                >
                  VIEW DETAILS
                </Link>
              </CardFooter>
            </Card>

            {/* Service Card 4 */}
            <Card className="border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-105">
              <CardHeader className="pb-4 flex justify-center">
              <Image
                 width={100}
                 height={100} 
                  src="https://ext.same-assets.com/2314917573/596272668.png"
                  alt="Vehicle Inspection Report"
                  className="w-full h-32 mb-4"
                />
                <CardTitle className="text-xl font-semibold text-gray-900">Vehicle Inspection Report</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-base">
                  A thorough examination of the vehicles mechanical and cosmetic condition, identifying any existing issues or potential concerns.
                </p>
              </CardContent>
              <CardFooter className="pt-4">
                <Link
                  href="/pricing"
                  className="text-red-600 hover:text-red-700 font-medium hover:underline transition duration-200"
                >
                  VIEW DETAILS
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
