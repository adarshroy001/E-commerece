import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart, removeFromCart, updateCart, clearCart } from "../../store/CartSlice";
import CartSummary from "../../components/Cart/cart-summary";
import Cartoffer from "../../components/Cart/cart-offer";

const Cart = () => {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  const handleRemoveItem = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleQuantityChange = (productId, quantity) => {
    if (quantity > 0) {
      dispatch(updateCart({ productId, quantity }));
    }
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-16 py-8">
      <h2 className="text-3xl font-bold mb-6 text-myblue">Cart</h2>
      {loading ? (
        <p className="text-center text-lg">Loading...</p>
      ) : items.length === 0 ? (
        <p className="text-center text-lg">Your cart is empty.</p>
      ) : (
        <div className="flex flex-col  gap-8 ">
          {/* Cart Items */}
          <div className="flex-1">
            {items.map((item) => (
              <div key={item.productId._id} className="flex items-center border-b pb-4 mb-4">
                <img src={item.productId.images[0]} alt={item.productId.name} className="w-20 h-20 object-cover rounded-md bg-gray-200" />
                <div className="ml-4 flex-1">
                  <h3 className="text-lg font-semibold">{item.productId.name}</h3>
                  <p className="text-gray-500 text-sm">Size: 24L, Clean Green</p>
                  <button className="text-red-500 text-sm font-medium mt-1" onClick={() => handleRemoveItem(item.productId._id)}>Remove</button>
                </div>
                {/* Quantity Controls */}
                <div className="flex items-center gap-2">
                  <button onClick={() => handleQuantityChange(item.productId._id, item.quantity - 1)}
                    className="w-8 h-8 border rounded-md text-lg font-semibold">
                    -
                  </button>
                  <span className="text-lg font-medium">{item.quantity}</span>
                  <button onClick={() => handleQuantityChange(item.productId._id, item.quantity + 1)}
                    className="w-8 h-8 border rounded-md text-lg font-semibold">
                    +
                  </button>
                </div>
                {/* Price */}
                <p className="ml-6 text-lg font-semibold">${item.productId.price * item.quantity}.00</p>
              </div>
            ))}
            <button className="bg-blue-500 text-white px-6 py-2 rounded-md mt-4" onClick={handleClearCart}>Clear Cart</button>
          </div >
          <div className="grid gap-4 lg:grid-cols-5 lg:w-[100%] w-[90%]">
            <div className=' col-span-2 h-full w-full'>
             <Cartoffer  />
            </div>
            <div className=' col-span-3'>
             <CartSummary  />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
