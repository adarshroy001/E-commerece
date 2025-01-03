import React, { useState } from 'react';
import { CartItem } from '../../components/Cart/CartItem';
import { CouponForm } from '../../components/Cart/CouponForm';
import { SAMPLE_ITEMS } from '../../data/sampleItems';
import { VALID_COUPONS } from '../../data/validCoupons';
import { BsBag } from "react-icons/bs";


function Cart() {
  const [items, setItems] = useState(SAMPLE_ITEMS);
  const [appliedCoupon, setAppliedCoupon] = useState(null);

  const updateQuantity = (id, newQuantity) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    ).filter(item => item.quantity > 0));
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleApplyCoupon = (code) => {
    const coupon = VALID_COUPONS.find(c => c.code === code.toUpperCase());
    if (coupon) {
      setAppliedCoupon(coupon.code);
    } else {
      alert('Invalid coupon code');
    }
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = appliedCoupon
    ? subtotal * (VALID_COUPONS.find(c => c.code === appliedCoupon)?.discount || 0)
    : 0;
  const total = subtotal - discount;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-2 mb-6">
            <BsBag size={24} className="text-blue-600" />
            <h1 className="text-2xl font-bold">Shopping Cart</h1>
          </div>

          {items.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500">Your cart is empty</p>
            </div>
          ) : (
            <>
              <div className="space-y-4">
                {items.map(item => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onUpdateQuantity={updateQuantity}
                    onRemove={removeItem}
                  />
                ))}
              </div>

              <div className="mt-8 border-t border-gray-200 pt-4">
                <CouponForm
                  onApplyCoupon={handleApplyCoupon}
                  appliedCoupon={appliedCoupon}
                />
              </div>

              <div className="mt-6 space-y-2">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount</span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <button
                className="w-full mt-8 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Proceed to Checkout
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;

