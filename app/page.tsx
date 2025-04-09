import Link from "next/link";
import About from "./sections/About";
import Script from "next/script";
import Services from "./sections/Services";
import Offer from "./sections/Offer";
import Features from "./sections/Features";
import {Button} from "@/components/ui/button";
import Footer from "./sections/Footer";

export default function Example() {
  return (
    <>
     {/* Tawk.to Script */}
     <Script id="tawkto-script" strategy="afterInteractive">
        {`
          var Tawk_API = 67f6a0681340201907628c73 || {}, Tawk_LoadStart = new Date();
          (function() {
            var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
            s1.async = true;
            s1.src = 'https://embed.tawk.to/YOUR_PROPERTY_ID/1abcdef';
            s1.charset = 'UTF-8';
            s1.setAttribute('crossorigin', '*');
            s0.parentNode.insertBefore(s1, s0);
          })();
        `}
      </Script>
    <main
      className="bg-white bg-cover bg-center relative"
      style={{ backgroundImage: "url('/bg1.jpg')" }}
    >
      {/* Overlay for fade effect */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
          <div className="text-center relative z-10">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
              Unlock Your Vehicles True History
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
              Discover comprehensive and reliable VIN reports to make informed
              automotive decisions with confidence. Trust Auto Car Checks for
              detailed vehicle history and essential information.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="#"
                className="rounded-md bg-red-600 duration-300 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-red-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-900"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </main>
    <span id="about">
    <About />
      </span>
    <Services />
    <Offer />
    <Features />
     {/* CTA Section */}
     <section
      className="relative py-32 bg-cover bg-center"
      style={{ backgroundImage: "url('/bg2.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/70"></div> {/* Dark overlay for text readability */}
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Get Accurate and Reliable <span className="text-primary-red">Vehicle History Reports</span> with Auto Car Checks
        </h2>
        <p className="text-white text-lg sm:text-xl mb-8 max-w-3xl mx-auto">
          At Auto Car Checks, we are dedicated to providing you with comprehensive and accurate vehicle history reports. 
          Our commitment to excellence ensures you receive detailed and reliable information quickly, empowering you to 
          make informed automotive decisions with confidence. Trust Fast Car Checks for unparalleled service and expertise 
          in vehicle history reporting.
        </p>
        <Link href="/contact-us">
          <Button className="bg-primary-red bg-red-600 hover:bg-red-700 text-black font-medium py-3 px-8 rounded-lg transition duration-300 ease-in-out">
            CONTACT US
          </Button>
        </Link>
      </div>
    </section>
    
    <section className="py-16 bg-gray-50">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <span className="text-sm text-red-500 uppercase font-medium">ANY QUESTIONS?</span>
      <h2 className="text-3xl font-bold mt-2">FREQUENTLY ASKED QUESTIONS</h2>
    </div>

    <div className="max-w-3xl mx-auto divide-y divide-gray-200">
      <div className="py-5">
        <details className="group transition-all duration-300 ease-in-out">
          <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-lg hover:text-primary-red">
            <span>What is included in a VIN report?</span>
            <span className="transition group-open:rotate-180">
              <svg fill="none" height="24" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </span>
          </summary>
          <p className="text-gray-600 mt-3 max-h-0 overflow-hidden group-open:max-h-40 transition-all duration-300 ease-in-out">
            A VIN report includes details about the vehicles history, specifications, ownership, accidents, and recall information.
          </p>
        </details>
      </div>

      <div className="py-5">
        <details className="group transition-all duration-300 ease-in-out">
          <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-lg hover:text-primary-red">
            <span>Are your services available internationally?</span>
            <span className="transition group-open:rotate-180">
              <svg fill="none" height="24" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </span>
          </summary>
          <p className="text-gray-600 mt-3 max-h-0 overflow-hidden group-open:max-h-40 transition-all duration-300 ease-in-out">
            Yes, we provide services in the USA and Canada, and will cover many countries across Europe and beyond.
          </p>
        </details>
      </div>

      <div className="py-5">
        <details className="group transition-all duration-300 ease-in-out">
          <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-lg hover:text-primary-red">
            <span>What payment methods do you accept?</span>
            <span className="transition group-open:rotate-180">
              <svg fill="none" height="24" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </span>
          </summary>
          <p className="text-gray-600 mt-3 max-h-0 overflow-hidden group-open:max-h-40 transition-all duration-300 ease-in-out">
            We accept various payment methods, including credit/debit cards, Stripe, and other secure online payment options.
          </p>
        </details>
      </div>

      <div className="py-5">
        <details className="group transition-all duration-300 ease-in-out">
          <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-lg hover:text-primary-red">
            <span>How can I access my VIN report?</span>
            <span className="transition group-open:rotate-180">
              <svg fill="none" height="24" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </span>
          </summary>
          <p className="text-gray-600 mt-3 max-h-0 overflow-hidden group-open:max-h-40 transition-all duration-300 ease-in-out">
            You can access your VIN report by entering your vehicles VIN number on our website and purchasing a report.
          </p>
        </details>
      </div>

      <div className="py-5">
        <details className="group transition-all duration-300 ease-in-out">
          <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-lg hover:text-primary-red">
            <span>How accurate are your reports?</span>
            <span className="transition group-open:rotate-180">
              <svg fill="none" height="24" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </span>
          </summary>
          <p className="text-gray-600 mt-3 max-h-0 overflow-hidden group-open:max-h-40 transition-all duration-300 ease-in-out">
            Our reports are highly accurate, sourced from reliable databases, and regularly updated to ensure the most current information.
          </p>
        </details>
      </div>

      <div className="py-5">
        <details className="group transition-all duration-300 ease-in-out">
          <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-lg hover:text-primary-red">
            <span>How often should I get a VIN report?</span>
            <span className="transition group-open:rotate-180">
              <svg fill="none" height="24" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </span>
          </summary>
          <p className="text-gray-600 mt-3 max-h-0 overflow-hidden group-open:max-h-40 transition-all duration-300 ease-in-out">
            Its recommended to get a VIN report annually or before buying a used car to ensure you have all the necessary information.
          </p>
        </details>
      </div>
    </div>
  </div>
</section>


{/* Testimonials Section */}
<section className="py-16 bg-gray-50">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <span className="text-sm text-red-500 uppercase font-medium">WHY CHOOSE US</span>
      <h2 className="text-3xl font-bold mt-2">What They Say</h2>
    </div>

    <div className="flex flex-wrap justify-center gap-12">
      {/* Testimonial 1 */}
      <div className="flex flex-col items-center text-center max-w-sm">
        <p className="text-gray-600 mb-4">
          Auto Car Checks provided me with the most detailed and accurate vehicle history report I have seen. The service was fast, easy, and reliable. I highly recommend it to anyone buying a used car
        </p>
        <div className="mt-4">
          <p className="font-medium text-red-500">Sarah Wilson</p>
          <p className="text-sm text-gray-500">Marketing Manager</p>
        </div>
      </div>

      {/* Testimonial 2 */}
      <div className="flex flex-col items-center text-center max-w-sm">
        <p className="text-gray-600 mb-4">
          I have used other vehicle history report services before, but Auto Car Checks stands out. The process was quick, and I received all the crucial information in a neat and easy-to-read format.
        </p>
        <div className="mt-4">
          <p className="font-medium text-red-500">David Lee</p>
          <p className="text-sm text-gray-500">Operations Manager</p>
        </div>
      </div>

      {/* Testimonial 3 */}
      <div className="flex flex-col items-center text-center max-w-sm">
        <p className="text-gray-600 mb-4">
          Auto Car Checks made my car buying decision so much easier. The report was thorough, and it gave me peace of mind knowing I had all the important details about the vehicle.
        </p>
        <div className="mt-4">
          <p className="font-medium text-red-500">Emma Thompson</p>
          <p className="text-sm text-gray-500">Customer Service Executive</p>
        </div>
      </div>
    </div>
  </div>
</section>

<Footer />


    </>
  );
}
