import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { FiMinus, FiPlus, FiTrash2 } from 'react-icons/fi';
import axios from "axios";
import { server } from "../../App";
import { toast } from "react-toastify";
import { setTotalQuantity ,increaseQuantity ,decreaseQuantity } from '../../store/CartSlice'

const Cart = () => {
  const shippingCost = 15 ;
  const dispatch = useDispatch();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [totalPrice , setTotalPrice] = useState(0) ;
  const [Allcharges , setAllcharges] = useState(0) ;
  const [delcharges , setdelcharges] = useState(0) ;
  
  
  // Fetching Cart 
  useEffect(() => {
    setLoading(true); 
    axios.get(`${server}/api/cart`, { withCredentials: true })
      .then((res) => {
        const cartItems = res.data.items || []; // Ensure it's always an array
        setItems(cartItems);
        setTotalPrice(res.data.totalPrice)
        // Calculate total quantity correctly
        const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
        dispatch(setTotalQuantity(totalQuantity));
      })
      .catch((e) => {
        toast.error(e.response?.data?.message );
        console.error("Cart fetch error:", e);
      })
     .finally(() => setLoading(false));
  }, []);
//handling remove -1 Item 
const handleDecrease = (productId,quantity) => {
  axios.put(`${server}/api/cart/update`, { productId, quantity }, { withCredentials: true })
    .then(()=>{
      axios.get(`${server}/api/cart`, { withCredentials: true })
      .then((res) => {
        const cartItems = res.data.items || []; // Ensure it's always an array
        setItems(cartItems);
        setTotalPrice(res.data.totalPrice)
        // Calculate total quantity correctly
        const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
        dispatch(setTotalQuantity(totalQuantity));
      })
    })
    .catch(() => toast.error("Failed to update quantity."));
}
//handling add +1 item
const handleIncrease = (productId,quantity) => {
  axios.put(`${server}/api/cart/update`, { productId, quantity }, { withCredentials: true })
  .then(()=>{
    axios.get(`${server}/api/cart`, { withCredentials: true })
    .then((res) => {
      const cartItems = res.data.items || []; // Ensure it's always an array
      setItems(cartItems);
      setTotalPrice(res.data.totalPrice)

      // Calculate total quantity correctly
      const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
      dispatch(setTotalQuantity(totalQuantity));
    })
  })
    .catch(() => toast.error("Failed to update quantity."));
}
//handle delete cart item 
const handleDelete = (productId)=>{
  axios.delete(`${server}/api/cart/remove/${productId}`,{ withCredentials: true })
    .then(()=>{
      axios.get(`${server}/api/cart`, { withCredentials: true })
      .then((res) => {
        const cartItems = res.data.items || []; // Ensure it's always an array
        setItems(cartItems);
        setTotalPrice(res.data.totalPrice)
  
        // Calculate total quantity correctly
        const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
        dispatch(setTotalQuantity(totalQuantity));
      })
    })
    .catch((e)=>{toast.error(e)})
}
//handling clear Cart
const handleClearCart = ()=>{
  axios.delete(`${server}/api/cart/clear`,{ withCredentials: true })
  .then(()=>{
    axios.get(`${server}/api/cart`, { withCredentials: true })
    .then((res) => {
      const cartItems = res.data.items || []; // Ensure it's always an array
      setItems(cartItems);
      setTotalPrice(res.data.totalPrice)

      // Calculate total quantity correctly
      const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
      dispatch(setTotalQuantity(totalQuantity));
    })
  })

}
//Promo code
  const promoCode = ''
  function setPromoCode(){

  }
  const [shippingMethod,setShippingMethod] = useState('free')

  useEffect(()=>{
    if (shippingMethod=='express') {
      setdelcharges(15)
      setAllcharges(totalPrice+15)
    }
    else{setAllcharges(totalPrice)}
  },[shippingMethod,setShippingMethod , totalPrice ,setAllcharges])
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow">
              {loading ?  <div className=" animate-spin h-6 w-6 border-t-4 border-blue-500 rounded-full"></div> : items.map((item) => (
                <div key={item.productId._id} className="p-6 border-b border-gray-200 last:border-0">
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.productId.images[0]}
                      alt={item.productId.name}
                      className="w-24 h-24 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-gray-900">{item.productId.name}</h3>
                      <p className="text-sm text-gray-500">{item.size}</p>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={ ()=> {
                               if (item.quantity<2) {
                                 item.quantity = item.quantity 
                               }
                               else{
                                item.quantity = item.quantity - 1 ;
                               }
                              handleDecrease(item.productId._id , item.quantity)}

                            }
                            className="p-1 rounded-full hover:bg-gray-100"
                          >
                            <FiMinus className="w-5 h-5" />
                          </button>
                          <span className="text-lg font-medium">{item.quantity}</span>
                          <button
                            onClick={ ()=> handleIncrease(item.productId._id ,item.quantity+1)}
                            className="p-1 rounded-full hover:bg-gray-100"
                          >
                            <FiPlus className="w-5 h-5" />
                          </button>
                        </div>
                        <div className="flex items-center space-x-4">
                          <span className="text-lg font-bold">
                            ${(item.productId.price * item.quantity).toLocaleString()}
                          </span>
                          <button
                            onClick={() => handleDelete(item.productId._id)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <FiTrash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {items.length > 0 && (
                <div className="p-6">
                  <button
                    onClick={handleClearCart}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Clear Cart
                  </button>
                </div>
              )}

              {items.length === 0 && (
                <div className="p-6 text-center text-gray-500">
                  Your cart is empty
                </div>
              )}
            </div>
          </div>

          {/* Cart Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6 space-y-6">
              <h2 className="text-xl font-semibold text-gray-900">Cart Summary</h2>
              
              {/* Promo Code */}
              <div>
                <label htmlFor="promo" className="block text-sm font-medium text-gray-700">
                  Promo Code
                </label>
                <div className="mt-1 flex space-x-2">
                  <input
                    type="text"
                    id="promo"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="flex-1 min-w-0 block w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter code"
                  />
                  <button className="bg-myblue text-white px-4 py-2 rounded-md hover:bg-[#22377b]">
                    Apply
                  </button>
                </div>
              </div>

              {/* Shipping Options */}
              <div className="space-y-2">
                <label className="flex items-center space-x-3">
                  <input
                    type="radio"
                    checked={shippingMethod === 'free'}
                    onChange={() => setShippingMethod('free')}
                    className="h-4 w-4 text-myblue bg-myblue"
                  />
                  <span>Free Shipping - $0.00</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input
                    type="radio"
                    checked={shippingMethod === 'express'}
                    onChange={() => setShippingMethod('express')}
                    className="h-4 w-4 text-myblue"
                  />
                  <span>Express Shipping - $15.00</span>
                </label>
              </div>

              {/* Summary Details */}
              <div className="border-t border-gray-200 pt-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${totalPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">${delcharges}</span>
                </div>
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>${Allcharges}</span>
                </div>
              </div>

              <button className="w-full bg-myblue text-white py-3 px-4 rounded-md hover:bg-[#22377b] font-medium">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
