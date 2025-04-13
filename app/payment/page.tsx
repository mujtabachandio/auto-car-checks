import { Suspense } from 'react';
import CheckoutClient from './PaymentClient';

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div>Loading checkout page...</div>}>
      <CheckoutClient />
    </Suspense>
  );
}
