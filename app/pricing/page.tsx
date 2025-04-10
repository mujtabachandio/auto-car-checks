'use client';

import { FaCheck as Check } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function PricingPage() {

  // Price Map with Stripe Price IDs (just pass the price ID to Stripe)
  // const packagePriceMap = {
  //   'Silver Package': 'price_1RC0bpHT4DUIY4yQ1Q6g3xxL',   
  //   'Gold Package': 'price_1RC0eKHT4DUIY4yQeHPyvfle',  
  //   'Platinum Package': 'price_1RC0jlHT4DUIY4yQDdpqQBBc',  
  // };
 
  const plans = [
    {
      title: 'Silver Package',
      price: '$44.99',  // Display price in dollars
      priceId: 'price_1RC0bpHT4DUIY4yQ1Q6g3xxL',  // Use the Price ID for Stripe
      features: ['1 Vehicle Report', 'Ownership Costs', 'Market Value Range', "Owner's History"],
      tier: 'basic',
    },
    {
      title: 'Gold Package',
      price: '$64.99',
      priceId: 'price_1RC0eKHT4DUIY4yQeHPyvfle',
      features: ['1 Vehicle Report', 'Ownership Costs', 'Market Value Range', "Owner's History", 'Vehicle Specifications', 'Safety Recall Status'],
      tier: 'standard',
      popular: true,
    },
    {
      title: 'Platinum Package',
      price: '$84.99',
      priceId: 'price_1RC0jlHT4DUIY4yQDdpqQBBc',
      features: ['1 Vehicle Report', 'Ownership Costs', 'Market Value Range', "Owner's History", 'Vehicle Specifications', 'Safety Recall Status', 'Warranties'],
      tier: 'premium',
    },
  ];

  return (
    <>
     <Navbar />
      <section className="relative bg-cover bg-center h-[40rem] flex items-center" style={{ backgroundImage: "url('/pricing1.jpg')" }}>
        <div className="absolute inset-0 bg-black/70" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Pricing Plan</h1>
            <p className="text-white text-lg">
              Explore our flexible pricing plans designed to fit your needs. Choose the perfect option for comprehensive and accurate VIN reports.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div className="flex flex-col h-full relative" key={index}>
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-red-700 text-white text-xs px-3 py-1 rounded-sm transform translate-x-2 -translate-y-2">
                    POPULAR
                  </div>
                )}
                <div className="bg-red-700 text-white text-center py-4 rounded-t-sm">
                  <h3 className="text-xl font-bold">{plan.title}</h3>
                </div>
                <div className="bg-gray-800 p-8 shadow-md flex-grow flex flex-col rounded-b-sm">
                  <div className="text-center mb-6">
                    <span className="text-5xl font-bold">{plan.price}</span>
                  </div>
                  <ul className="space-y-4 mb-8 text-gray-200">
                    {plan.features.map((f, i) => (
                      <li className="flex items-center" key={i}>
                        <Check className="h-5 w-5 text-green-400 mr-3" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <Link
                      href={{
                        pathname: '/form',
                        query: {
                          packageTitle: plan.title,
                          price: plan.price,
                          priceId: plan.priceId,  // Passing the Stripe Price ID
                          features: JSON.stringify(plan.features),
                          tier: plan.tier,
                        },
                      }}
                      passHref
                    >
                      <Button
                        className="w-full bg-red-700 hover:bg-red-800 text-white duration-300"
                      >
                        Purchase Now
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
