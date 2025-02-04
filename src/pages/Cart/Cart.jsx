import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CartItem } from '../../components/Cart/CartItem';
import { BsBag } from "react-icons/bs";
import { fetchCart, removeFromCart, updateCart, clearCart } from '../../store/CartSlice';

function Cart() {
  const dispatch = useDispatch();
  const { items = [], loading = false } = useSelector((state) => state.Cart || {});


  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleQuantityChange = (productId, quantity) => {
    dispatch(updateCart({ productId, quantity }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  if (loading) return <h2 className="min-h-screen mx-auto my-auto">Loading...</h2>;

  const subtotal = items.reduce((sum, item) => sum + item.quantity * 10, 0); // Placeholder price (adjust in backend)
  const total = subtotal;

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
                {items.map((item) => (
                  <CartItem
                    key={item.productId}
                    item={item}
                    onUpdateQuantity={handleQuantityChange}
                    onRemove={handleRemove}
                  />
                ))}
              </div>

              <div className="mt-6 space-y-2">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
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
