// app/payment/page.tsx

import React from 'react';

const packages = [
  {
    name: 'Silver Package',
    price: '$34.95',
    link: 'https://buy.stripe.com/5kA00yfVxgGug8gbJW',
  },
  {
    name: 'Gold Package',
    price: '$49.95',
    link: 'https://buy.stripe.com/cN2bJg9x9ai609i8xL',
  },
  {
    name: 'Platinum Package',
    price: '$64.95',
    link: 'https://buy.stripe.com/3csbJg10D2PE4py4hw',
  },
];

export default function PaymentPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">AutoCarChecks.com</h1>
      <p className="mb-4 text-gray-600">All payments are processed securely via Stripe. Descriptor: <strong>Accunex Digital</strong></p>

      <div className="space-y-6">
        {packages.map((pkg) => (
          <div key={pkg.name} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{pkg.name}</h2>
            <p className="text-gray-700 mb-2">{pkg.price}</p>
            <a
              href={pkg.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              Pay with Stripe
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
