import React, { useState } from "react";
import { useSelector } from "react-redux";

const CartSummary = () => {
  const { items } = useSelector((state) => state.cart);
  const [shipping, setShipping] = useState(0);

  const subtotal = items.reduce((total, item) => total + item.productId.price * item.quantity, 0);
  const total = subtotal + shipping;

  return (
    <div className="cart-summary ">
      <h3 className="text-myblue">Cart Summary</h3>
      <div className="shipping-options">
        <label>
          <input type="radio" name="shipping" value="0" checked={shipping === 0} onChange={() => setShipping(0)} />
          Free Shipping - $0.00
        </label>
        <label>
          <input type="radio" name="shipping" value="15" checked={shipping === 15} onChange={() => setShipping(15)} />
          Express Shipping - $15.00
        </label>
      </div>
      
      <div className="cart-totals">
        <p>Subtotal: ${subtotal}.00</p>
        <p>Total: ${total}.00</p>
        <button className="bg-red-500 text-white px-6 py-2 rounded-md mt-4">Checkout</button>        
      </div>
    </div>
  );
};

export default CartSummary;
