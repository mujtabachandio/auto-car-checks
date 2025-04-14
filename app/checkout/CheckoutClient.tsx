'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useState } from 'react';

export default function CheckoutClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const price = searchParams.get('price');
  // const name = searchParams.get('name');
  const featuresParam = searchParams.get('features');

  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');  // State for user's name
  const [country, setCountry] = useState('');
  const [vinNumber, setVinNumber] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const userData = { name: userName, email, price: parseFloat(price || '0'), country, vinNumber }; // Send user name

    const res = await fetch('/api/saveUserData', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });

    if (!res.ok) {
      alert('Failed to save data.');
      setLoading(false);
      return;
    }

    router.push(`/payment?price=${price}&name=${userName}&features=${featuresParam}`); // Send user name to payment page
  };

  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center py-12 px-6">
      <div className="container mx-auto flex flex-col md:flex-row gap-16 bg-white shadow-xl rounded-xl p-8 border-t-4 border-indigo-600">
        {/* Left Column - Important Information */}
        <div className="md:w-1/2 p-6 flex flex-col justify-between space-y-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Important Information</h2>
          <p className="text-lg text-gray-700">
            Before proceeding with payment, please ensure you fill out your email, select your country, and provide your VIN number. This information is required for processing your payment and generating your VIN report.
          </p>
          <ul className="space-y-4 text-lg text-gray-600">
            <li><strong>Email:</strong> For order confirmation and communication.</li>
            <li><strong>VIN Number:</strong> Required to generate the VIN report.</li>
            <li><strong>Country:</strong> To ensure accurate shipping and regional customization of your VIN report.</li>
          </ul>
        </div>

        {/* Right Column - Form */}
        <div className="md:w-1/2 bg-white p-8 shadow-lg rounded-lg space-y-6">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">Enter Your Details</h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-4 mt-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-lg"
                required
              />
            </div>

            {/* New input field for user's name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                id="name"
                placeholder="Your Full Name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-4 mt-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-lg"
                required
              />
            </div>

            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
              <select
                id="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-4 mt-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-lg"
                required
              >
                <option value="">Select Country</option>
                <option value="usa">USA</option>
                <option value="canada">Canada</option>
                <option value="australia">Australia</option>
                <option value="europe">Europe</option>
              </select>
            </div>

            <div>
              <label htmlFor="vinNumber" className="block text-sm font-medium text-gray-700">VIN Number</label>
              <input
                type="text"
                id="vinNumber"
                placeholder="VIN Number"
                value={vinNumber}
                onChange={(e) => setVinNumber(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-4 mt-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-lg"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-lg text-lg font-semibold transition duration-300 focus:outline-none"
            >
              {loading ? 'Processing...' : 'Continue to Payment'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
