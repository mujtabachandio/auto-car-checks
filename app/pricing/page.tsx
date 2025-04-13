'use client';

import { CheckIcon } from '@heroicons/react/20/solid';
import { useRouter } from 'next/navigation';

const tiers = [
  {
    name: 'Silver Package',
    id: 'tier-silver',
    price: 44.99,
    features: [
      '1 Vehicle Report',
      'Ownership Costs',
      'Market Value Range',
      'Owner\'s History',
    ],
  },
  {
    name: 'Gold Package',
    id: 'tier-gold',
    price: 64.99,
    features: [
      '1 Vehicle Report',
      'Ownership Costs',
      'Market Value Range',
      'Owner\'s History',
      'Vehicle Specifications',
      'Safety Recall Status',
    ],
  },
  {
    name: 'Platinum Package',
    id: 'tier-platinum',
    price: 84.99,
    features: [
      '1 Vehicle Report',
      'Ownership Costs',
      'Market Value Range',
      'Owner\'s History',
      'Vehicle Specifications',
      'Safety Recall Status',
      'Warranties',
    ],
  },
];

export default function PricingPage() {
  const router = useRouter();

  return (
    <div className="bg-gray-50">
      {/* Heading with background image */}
      <section className="relative bg-cover bg-center h-[46rem] flex items-center justify-center" style={{ backgroundImage: "url('/pricing1.jpg')" }}>
  <div className="absolute inset-0 bg-black/50" />
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Pricing Plans</h1>
      <p className="text-lg sm:text-xl opacity-80">
        Discover our flexible pricing options, designed for all your needs. Choose the right package for comprehensive and accurate VIN reports.
      </p>
      </div>
  </div>
</section>


      {/* Pricing Cards Section */}
      <section className="py-20 bg-white text-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((plan) => (
              <div key={plan.id} className="flex flex-col bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
                {/* Header with Red background */}
                <div className="bg-red-700 text-white text-center py-5 px-6">
                  <h3 className="text-2xl font-semibold">{plan.name}</h3>
                </div>

                {/* Features and Pricing */}
                <div className="bg-gray-50 p-8 flex-grow">
                  <ul className="space-y-4 text-base text-gray-600">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <CheckIcon className="h-6 w-6 text-indigo-600 mr-3" aria-hidden="true" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <p className="text-3xl font-bold text-gray-900">{`$${plan.price}`}</p>
                  </div>
                </div>

                {/* Buy Button */}
                <div className="bg-red-700 text-center py-4 hover:bg-red-900 duration-300">
                  <button
                    className="w-full rounded-md text-black  font-semibold text-lg transition-colors duration-300"
                    onClick={() => {
                      const query = new URLSearchParams({
                        name: plan.name,
                        price: plan.price.toString(),
                        features: JSON.stringify(plan.features),
                      }).toString();
                      router.push(`/checkout?${query}`);
                    }}
                  >
                    Buy {plan.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
