'use client';
//app/payment/page.tsx

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import type { StripeElementsOptions } from '@stripe/stripe-js';
import { CreditCard, ShieldCheck, Check, AlertCircle, Lock, ChevronLeft } from 'lucide-react';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

// Custom styling for CardElement
const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: '#32325d',
      fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
      fontSmoothing: 'antialiased',
      fontSize: '16px',
      '::placeholder': {
        color: '#aab7c4',
      },
      ':-webkit-autofill': {
        color: '#32325d',
      },
    },
    invalid: {
      color: '#e53e3e',
      iconColor: '#e53e3e',
    },
  },
  hidePostalCode: true,
};

function CheckoutForm({ clientSecret }: { clientSecret: string }) {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');
  const [country, setCountry] = useState('');
  const [cardComplete, setCardComplete] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setIsProcessing(true);
    setError(null);

    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)!,
        billing_details: {
          name,
          email,
          address: {
            line1: address,
            city,
            postal_code: zip,
            country,
          },
        },
      },
    });

    if (error) {
      setError(error.message ?? 'An error occurred while processing your payment');
      setIsProcessing(false);
    } else if (paymentIntent?.status === 'succeeded') {
      setSuccess(true);
      setIsProcessing(false);
    } else {
      setIsProcessing(false);
    }
  };

  if (success) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
            <Check className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">Payment Successful!</h3>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Thank you for your purchase. A receipt has been sent to your email address.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => window.location.href = '/dashboard'}
              className="inline-flex justify-center px-6 py-3 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Go to Dashboard
            </button>
            <button
              onClick={() => window.location.href = '/'}
              className="inline-flex justify-center px-6 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Return to Homepage
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 md:p-8 rounded-lg shadow-md">
      <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-2">
        <h3 className="text-xl font-bold text-gray-900 flex items-center">
          <CreditCard className="mr-2 h-5 w-5 text-red-500" />
          Payment Details
        </h3>
        <div className="flex items-center text-gray-500 text-sm">
          <Lock className="h-4 w-4 mr-1" />
          Secure Checkout
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Email */}
        <div className="col-span-1 md:col-span-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full text-gray-700 px-4 py-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
            placeholder="your@email.com"
          />
        </div>

        {/* Name */}
        <div className="col-span-1 md:col-span-2">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Cardholder Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-2.5 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
            placeholder="John Smith"
          />
        </div>

        {/* Address */}
        <div className="col-span-1 md:col-span-2">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
            Billing Address <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            className="w-full px-4 py-2.5 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
            placeholder="123 Main St"
          />
        </div>

        {/* City */}
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
            City <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
            className="w-full px-4 py-2.5 border text-gray-700 border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
            placeholder="New York"
          />
        </div>

        {/* Postal Code */}
        <div>
          <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-1">
            Postal Code <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="zip"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            required
            className="w-full px-4 py-2.5 border text-gray-700 border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
            placeholder="10001"
          />
        </div>

        {/* Country */}
        <div className="col-span-1 md:col-span-2">
          <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
            Country <span className="text-red-500">*</span>
          </label>
          <select
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
            className="w-full px-4 py-2.5 border text-gray-700 border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors appearance-none bg-white"
          >
            <option value="">Select a country</option>
            <option value="PK">Pakistan</option>
            <option value="US">United States</option>
            <option value="GB">United Kingdom</option>
            <option value="CA">Canada</option>
            <option value="AU">Australia</option>
            <option value="DE">Germany</option>
            <option value="FR">France</option>
            <option value="IN">India</option>
          </select>
        </div>
      </div>

      {/* Card Element */}
      <div>
        <label htmlFor="card-element" className="block text-sm font-medium text-gray-700 mb-1">
          Card Information <span className="text-red-500">*</span>
        </label>
        <div className="p-4 border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-red-500 focus-within:border-red-500 transition-colors bg-white">
          <CardElement 
            id="card-element" 
            options={CARD_ELEMENT_OPTIONS} 
            onChange={(e) => setCardComplete(e.complete)}
          />
        </div>
        <div className="mt-2">
          <p className="text-xs text-gray-500">
            Card information is secured with SSL encryption
          </p>
        </div>
      </div>

      {/* Error message */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-md p-4 flex items-start">
          <AlertCircle className="text-red-400 w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-red-700">{error}</p>
        </div>
      )}

      {/* Security note */}
      <div className="bg-gray-50 border border-gray-200 rounded-md p-4 flex items-start">
        <ShieldCheck className="text-green-500 w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-medium text-gray-900">Secure Payment Processing</p>
          <p className="text-xs text-gray-700 mt-1">
            Your payment information is encrypted and secure. We do not store your card details on our servers.
          </p>
        </div>
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isProcessing || !stripe || !cardComplete || !email || !name || !address || !city || !zip || !country}
          className="w-full bg-red-600 text-white py-3 px-4 rounded-md hover:bg-red-700 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed font-medium text-base"
        >
          {isProcessing ? 'Processing...' : 'Complete Payment'}
        </button>
        <div className="mt-4 text-center">
          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex items-center text-sm text-gray-600 hover:text-red-600 transition-colors"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Return to previous page
          </button>
        </div>
      </div>
    </form>
  );
}

export default function PaymentPage() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name') ?? 'Premium Package';
  const priceParam = searchParams.get('price') ?? '49.99';
  const featuresParam = searchParams.get('features');

  const features = featuresParam ? JSON.parse(featuresParam) : [
    "Full access to premium features",
    "Ad-free experience",
    "Priority customer support",
    "Early access to updates",
    "Unlimited downloads"
  ];

  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const price = parseFloat(priceParam);
    fetch('/api/createPaymentIntent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ price }),
    })
      .then(res => res.json())
      .then(data => {
        setClientSecret(data.clientSecret);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error creating PaymentIntent:', err);
        setLoading(false);
      });
  }, [priceParam]);

  const options: StripeElementsOptions = {
    clientSecret: clientSecret ?? '',
    appearance: { theme: 'stripe' },
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Complete Your Purchase</h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500">
            You&apos;re one step away from unlocking premium features
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left - Plan Details */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md sticky top-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-gray-900">{name}</h2>
                <div className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-1 rounded-full">
                  One-time payment
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-red-600">${priceParam}</span>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-6 mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Package includes:</h3>
                <ul className="space-y-3">
                  {features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <Check className="text-green-500 h-5 w-5 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="rounded-md bg-gray-50 p-4 border border-gray-200">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <ShieldCheck className="h-5 w-5 text-green-500" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-sm font-medium text-gray-900">100<span className='text-red-600'>%</span> guarantee</h4>
                    <p className="mt-1 text-sm text-gray-600">
                      THANKS FOR USING <span className='te  xt-red-600'>AUTO CAR CHECKS</span>
                    </p>
                  </div>
                </div>
              </div>
              
              
            </div>
          </div>

          {/* Right - Payment Form */}
          <div className="w-full lg:w-2/3">
            {loading ? (
              <div className="flex items-center justify-center bg-white p-12 rounded-lg shadow-md h-96">
                <div className="flex flex-col items-center">
                  <div className="animate-spin h-10 w-10 border-4 border-red-600 border-t-transparent rounded-full mb-4"></div>
                  <p className="text-gray-600">Loading secure checkout...</p>
                </div>
              </div>
            ) : (
              clientSecret && (
                <Elements options={options} stripe={stripePromise}>
                  <CheckoutForm clientSecret={clientSecret} />
                </Elements>
              )
            )}
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <span>© {new Date().getFullYear()} AUTO CAR CHECKS</span>
              <a href="#" className="hover:text-red-600">Terms</a>
              <a href="#" className="hover:text-red-600">Privacy</a>
            </div>
            <div className="flex items-center">
              <ShieldCheck className="h-4 w-4 mr-1" />
              <span>Secure payments by Stripe</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}