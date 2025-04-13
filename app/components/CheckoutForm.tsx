'use client';
  // components/CheckoutForm.tsx

  import { useState, useEffect } from 'react';
  import { useRouter } from 'next/navigation';
  import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
  import axios from 'axios';

  export default function CheckoutForm() {
    const stripe = useStripe();
    const elements = useElements();
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [clientSecret, setClientSecret] = useState('');

    useEffect(() => {
      // Fetch the PaymentIntent client secret when the component mounts
      const fetchClientSecret = async () => {
        const response = await axios.post('/api/create-payment-intent', { amount: 1000 }); // Amount in cents
        setClientSecret(response.data.clientSecret);
      };
      fetchClientSecret();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      if (!stripe || !elements || !clientSecret) return;

      setLoading(true);

      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement)!,
        },
      });

      if (error) {
        console.error(error.message);
        alert('Payment failed');
      } else if (paymentIntent?.status === 'succeeded') {
        alert('Payment successful!');
        // Optionally, redirect to a success page
        router.push('/success');
      }

      setLoading(false);
    };

    return (
      <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white rounded shadow max-w-md mx-auto">
        <div>
          <label className="block text-sm font-medium text-gray-700">Card Details</label>
          <CardElement className="mt-1 p-2 border border-gray-300 rounded-md" />
        </div>
        <button
          type="submit"
          disabled={!stripe || loading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          {loading ? 'Processing...' : 'Pay'}
        </button>
      </form>
    );
  }
