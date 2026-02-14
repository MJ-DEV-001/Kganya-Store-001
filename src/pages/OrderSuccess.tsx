import { Link } from 'react-router-dom';

export default function OrderSuccess() {
  return (
    <div className="container mx-auto px-4 py-20 text-center">
      <div className="max-w-2xl mx-auto">
        <div className="w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <h1 className="text-4xl font-bold mb-4">Order Placed Successfully!</h1>
        
        <p className="text-xl text-gray-700 mb-8">
          Thank you for your order. We've received your request and will contact you 
          shortly via WhatsApp with payment instructions and delivery details.
        </p>

        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold mb-4">What's Next?</h2>
          <ul className="text-left space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1">✓</span>
              <span>You'll receive a WhatsApp message with payment details</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1">✓</span>
              <span>Once payment is confirmed, we'll process your order</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1">✓</span>
              <span>Your order will be shipped within 3-5 business days</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1">✓</span>
              <span>You'll receive tracking information once shipped</span>
            </li>
          </ul>
        </div>

        <div className="flex gap-4 justify-center">
          <Link
            to="/profile"
            className="bg-black text-white px-8 py-3 font-semibold hover:bg-gray-800 transition"
          >
            VIEW MY ORDERS
          </Link>
          <Link
            to="/shop"
            className="border-2 border-black px-8 py-3 font-semibold hover:bg-black hover:text-white transition"
          >
            CONTINUE SHOPPING
          </Link>
        </div>
      </div>
    </div>
  );
}
