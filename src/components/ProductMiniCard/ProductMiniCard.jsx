import React, { useEffect, useState } from 'react';
import { BsArrowsFullscreen } from "react-icons/bs";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { server } from '../../App';
import { useSelector , useDispatch } from 'react-redux';
import { setTotalQuantity } from '../../store/CartSlice'



function ProductMiniCard({ className = '', product }) {
  const [ProductData, SetProductData] = useState('');
  const noOfProduct  =  useSelector((state) => state.cart.totalQuantity) || 0; 
  const dispatch = useDispatch() ;


  useEffect(() => {
    if (product?.name) {
      SetProductData(product.name.length > 28 ? product.name.substring(0, 28) + '...' : product.name);
    }
  }, [product]);

  const addProductToCart = async () => {

    try {
      await axios.post(`${server}/api/cart/add`, 
        { productId: product._id, quantity: 1 }, 
        { withCredentials: true }
      );
      dispatch(setTotalQuantity(noOfProduct+1));
      toast.success("Item added to cart!");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to add item to cart.");
      console.error("Add to cart error:", error);

    }
  }

  return (
    <Link 
      state={{ product }}
      className={`w-full bg-white shadow-lg rounded-lg overflow-hidden group sm:hover:scale-[.99] sm:hover:border-[#c9dcde] sm:hover:border transition ${className}`}>
      <Link to={`/product/${product._id}`} className="relative">
        <div className="absolute top-2 left-2 bg-mypink text-white text-xs font-bold py-1 px-2.5 rounded">
          24%
        </div>
        <div className="absolute top-9 left-2 bg-[#71778e] text-white text-xs font-bold py-1 px-2.5 rounded">
          Best Seller
        </div>
        <div className="absolute top-1 right-1 sm:top-4 sm:right-2 sm:opacity-0 sm:invisible sm:translate-y-10 sm:group-hover:opacity-100 sm:group-hover:visible sm:group-hover:translate-y-0 transition-all duration-500 ease-in-out">
          <button
            className="absolute top-3 right-2 border border-[#f6f5f5] text-[#71778e] bg-white text-lg w-10 h-10 rounded-full flex justify-center items-center sm:hover:bg-myblue sm:hover:text-white sm:hover:border-myblue active:scale-95"
          >
            <BsArrowsFullscreen />
          </button>
          <button className="absolute top-14 right-2 border border-[#f6f5f5] text-[#71778e] bg-white text-lg w-10 h-10 rounded-full flex justify-center items-center sm:hover:bg-myblue sm:hover:text-white sm:hover:border-myblue active:scale-95">
            <FavoriteBorderIcon />
          </button>
        </div>
        <img
          src={product?.images?.[2]}
          alt={product?.name || "Product"}
          className="w-full h-[200px] object-cover rounded-t-lg sm:h-[250px]"
        />
      </Link>

      <div className="p-4">
        <Link to={`/product/${product._id}`}>
        <h3 className="text-sm sm:text-base md:text-base lg:text-lg font-semibold text-gray-800">
          {ProductData}
        </h3>
        <p className="text-xs text-green-600 font-bold mt-1">IN STOCK</p>
        <div className="flex items-center mt-2">
          <Rating name="half-rating-read" defaultValue={4.4} precision={0.1} readOnly />
        </div>
        <div className="mt-3">
          <span className="text-gray-400 line-through text-xs sm:text-sm">$4.29</span>
          <span className="text-red-500 text-sm sm:text-lg font-semibold ml-2">$3.29</span>
        </div>
        </Link>
        <button
          onClick={addProductToCart}
          className="mt-4 w-full select-none bg-mypink text-white sm:bg-white sm:text-mypink text-xs sm:text-sm font-semibold py-2 rounded-3xl sm:border border-mypink hover:text-white hover:bg-mypink transition active:scale-95">
          Add to cart
        </button>
      </div>
    </Link>
  );
}

export default ProductMiniCard;


