'use client';

import { useState } from 'react';

const PRICING_CARDS = [
  {
    tier: 'basic',
    title: 'Basic',
    price: '$44.99',
    priceId: 'price_1RC0bpHT4DUIY4yQ1Q6g3xxL',
    features: [
      ' 1 Vehicle Report',
      'Ownership Costs',
      'Market Value Range',
      'Owners History',
    ],
  },
  {
    tier: 'standard',
    title: 'Standard',
    price: '$64.99',
    priceId: 'price_1RC0eKHT4DUIY4yQeHPyvfle',
    features: [
      ' 1 Vehicle Report',
      'Ownership Costs',
      'Market Value Range',
      'Owners History',
      'Vehicle Specifications',
      ' Safety Recall Status',
    ],
  },
  {
    tier: 'premium',
    title: 'Premium',
    price: '$84.99',
    priceId: 'price_1RC0jlHT4DUIY4yQDdpqQBBc',
    features: [
      '1 Vehicle Report',
      'Ownership Costs',
      'Market Value Range',
      'Owners History',
      'Vehicle Specifications',
      'Safety Recall Status',
      'Warranties',
    ],
  },
  {
    tier: 'testing',
    title: 'testing',
    price: '$0.50',
    priceId: 'price_1RC0xrHT4DUIY4yQIUYgnCoc',
    features: [
      '1 Vehicle Report',
      'Ownership Costs',
      'Market Value Range',
      'Owners History',
      'Vehicle Specifications',
      'Safety Recall Status',
      'Warranties',
    ],
  }
];

export default function PricingPage() {
  const [loading, setLoading] = useState<string | null>(null);

  const handleCheckout = async (priceId: string, tier: string) => {
    setLoading(tier);

    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ priceId }),
    });

    const data = await res.json();

    if (data.url) {
      window.location.href = data.url;
    } else {
      alert('Error: ' + data.error);
      setLoading(null);
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900 py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          Designed for business teams like yours
        </h2>
        <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
          Here at Flowbite, we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.
        </p>
      </div>

      <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
        {PRICING_CARDS.map(({ tier, title, price, priceId, features }) => (
          <div
            key={tier}
            className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white"
          >
            <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              Best option for {tier} use cases.
            </p>

            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-5xl font-extrabold">{price}</span>
            </div>

            <ul role="list" className="mb-8 space-y-4 text-left">
              {features.map((feature, i) => (
                <li key={i} className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button
              className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-blue-900"
              onClick={() => handleCheckout(priceId, tier)}
              disabled={loading === tier}
            >
              {loading === tier ? 'Redirecting...' : 'Get Started'}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
