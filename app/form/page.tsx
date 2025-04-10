'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function FormPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vinNumber: '', // VIN number field
  });

  interface PackageDetails {
    packageTitle: string;
    price: string;
    features: string[];
    tier: string;
    priceId: string;  // Add Price ID
  }

  const [packageDetails, setPackageDetails] = useState<PackageDetails>({
    packageTitle: '',
    price: '',
    features: [],
    tier: '',
    priceId: '',  // Add Price ID
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Parse URL query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const packageTitle = urlParams.get('packageTitle');
    const price = urlParams.get('price');
    const features = urlParams.get('features');
    const tier = urlParams.get('tier');
    const priceId = urlParams.get('priceId');  // Get Price ID

    if (packageTitle && price && features && tier && priceId) {
      setPackageDetails({
        packageTitle,
        price,
        features: JSON.parse(features),
        tier,
        priceId,
      });
    } else {
      // Handle case if no data is passed in the query
      alert('Missing package information. Please go back and select a package.');
      window.location.href = '/pricing';
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Send form data to Sanity and Stripe checkout API
    const response = await fetch('/api/sanity', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...formData,
        package: packageDetails.packageTitle,
        price: packageDetails.price,
        tier: packageDetails.tier,
      }),
    });

    if (response.ok) {
      const { checkoutUrl } = await response.json();
      window.location.href = checkoutUrl;  // Redirect to Stripe checkout
    } else {
      alert('Failed to submit the form');
    }

    setLoading(false);
  };

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold mb-4">Complete Your Purchase</h1>
      <div className="bg-gray-800 p-8 text-white rounded-md mb-6">
        <h2 className="text-xl">{packageDetails.packageTitle || 'Package Title'}</h2>
        <p>{packageDetails.price || 'Price'}</p>
        <ul className="list-disc ml-6">
          {packageDetails.features.length > 0
            ? packageDetails.features.map((feature: string, index: number) => (
                <li key={index}>{feature}</li>
              ))
            : <li>No features available</li>}
        </ul>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Phone</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">VIN Number</label>
          <input
            type="text"
            value={formData.vinNumber}
            onChange={(e) => setFormData({ ...formData, vinNumber: e.target.value })}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>

        <Button type="submit" disabled={loading} className="w-full bg-red-700 hover:bg-red-800 text-white">
          {loading ? 'Processing...' : 'Proceed to Payment'}
        </Button>
      </form>
    </section>
  );
}
