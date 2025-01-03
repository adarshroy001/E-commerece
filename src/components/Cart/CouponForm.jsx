import React, { useState } from 'react';
import { FaTag } from "react-icons/fa";


export function CouponForm({ onApplyCoupon, appliedCoupon }) {
  const [couponCode, setCouponCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (couponCode.trim()) {
      onApplyCoupon(couponCode.trim());
      setCouponCode('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <FaTag size={20} className="text-gray-500" />
        <input
          type="text"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
          placeholder="Enter coupon code"
          className="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Apply
        </button>
      </div>
      {appliedCoupon && (
        <p className="text-green-600 text-sm">
          Coupon "{appliedCoupon}" applied successfully!
        </p>
      )}
    </form>
  );
}
