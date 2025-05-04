'use client';

import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function FormPage() {
  const searchParams = useSearchParams();
  const selectedPackage = searchParams.get('package') || '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    userPhone: '',
    vinNumber: '',
    package: selectedPackage,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      // Redirect based on package
      const links: Record<string, string> = {
        silver: 'https://buy.stripe.com/5kA00yfVxgGug8gbJW',
        gold: 'https://buy.stripe.com/cN2bJg9x9ai609i8xL',
        platinum: 'https://buy.stripe.com/3csbJg10D2PE4py4hw',
      };
      window.location.href = links[selectedPackage] || '/pricing';
    } else {
      alert('Submission failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Side: Important Information */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-black">Important Information</h2>
          <p className="text-lg text-black/70">
            Before proceeding with payment, please ensure you fill out your email, select your country, and provide your VIN number. This information is required for processing your payment and generating your VIN report.
          </p>
          <ul className="space-y-3 text-black/80">
            <li><strong>Email:</strong> For order confirmation and communication.</li>
            <li><strong>Contact Number:</strong> For urgent contact if needed.</li>
            <li><strong>VIN Number:</strong> Required to generate the VIN report.</li>
            <li><strong>Country:</strong> To ensure accurate shipping and regional customization of your VIN report.</li>
          </ul>
        </div>

        {/* Right Side: Form */}
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
          <h2 className="text-2xl font-semibold text-black">Enter Your Details</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-black">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 p-2 rounded-md mt-2"
                required
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-black">Full Name</label>
              <input
                id="name"
                type="text"
                placeholder="Your Full Name"
                className="w-full border border-gray-300 p-2 rounded-md mt-2"
                required
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="country" className="block text-sm font-medium text-black">Select Country</label>
              <select
                id="country"
                className="w-full border border-gray-300 p-2 rounded-md mt-2"
                required
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
              >
                <option value="" disabled selected>Select your country</option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
                <option value="Europe">Europe</option>
                <option value="Australia">Australia</option>
                <option value="New Zealand">New Zealand</option>
              </select>
            </div>

            <div>
              <label htmlFor="userPhone" className="block text-sm font-medium text-black">Contact Number</label>
              <input
                id="userPhone"
                type="tel"
                placeholder="Contact Number"
                className="w-full border border-gray-300 p-2 rounded-md mt-2"
                required
                onChange={(e) => setFormData({ ...formData, userPhone: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="vinNumber" className="block text-sm font-medium text-black">VIN Number</label>
              <input
                id="vinNumber"
                type="text"
                placeholder="VIN Number"
                className="w-full border border-gray-300 p-2 rounded-md mt-2"
                required
                onChange={(e) => setFormData({ ...formData, vinNumber: e.target.value })}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-black transition"
            >
              Continue to Payment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
