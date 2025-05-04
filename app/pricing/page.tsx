'use client';

import { useRouter } from 'next/navigation';

export default function PricingPage() {
  const router = useRouter();

  const handleSelect = (pkg: string) => {
    router.push(`/form?package=${pkg}`);
  };

  const packages = [
    {
      name: 'Silver',
      price: '$34.95',
      features: [
        '1 Vehicle Report',
        'Ownership Costs',
        'Market Value Range',
        "Owner's History",
      ],
    },
    {
      name: 'Gold',
      price: '$49.95',
      features: [
        '1 Vehicle Report',
        'Ownership Costs',
        'Market Value Range',
        "Owner's History",
        'Vehicle Specifications',
        'Safety Recall Status',
      ],
    },
    {
      name: 'Platinum',
      price: '$64.95',
      features: [
        '1 Vehicle Report',
        'Ownership Costs',
        'Market Value Range',
        "Owner's History",
        'Vehicle Specifications',
        'Safety Recall Status',
        'Warranties',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner with Larger Image */}
      <section
        className="w-full h-[80vh] bg-cover bg-center flex items-center justify-center relative"
        style={{
          backgroundImage: "url('/pricing1.jpg')", // Replace with your desired image
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        <h1 className="text-white text-5xl md:text-6xl font-bold z-10 px-6 py-4 text-center">
          Pricing Plans
        </h1>
      </section>

      {/* Pricing Cards Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className="rounded-xl shadow-lg p-8 bg-white hover:shadow-xl transition duration-300 border-t-4 border-red-600"
            >
              <h2 className="text-2xl font-bold text-black mb-1">{pkg.name} Package</h2>
              <p className="text-xl text-red-600 font-semibold mb-4">{pkg.price}</p>
              <ul className="text-black/80 mb-6 space-y-2 text-sm">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="text-red-600 mr-2">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handleSelect(pkg.name.toLowerCase())}
                className="w-full bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-black transition"
              >
                Buy {pkg.name} Package
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
