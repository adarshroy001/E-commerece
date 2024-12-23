import React from 'react';
import { Link } from 'react-router-dom';
import food_5 from '../../assets/food_5.png';
import { BsArrowsFullscreen } from "react-icons/bs";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Rating from '@mui/material/Rating';

function ProductMiniCard() {
  return (
    <div className="w-[300px] bg-white shadow-lg  rounded-lg overflow-hidden m-1 mt-5 group  ">
      {/* Badge Section */}
      <div className="relative ">
        <div className="absolute top-2 left-2 bg-mypink text-white text-xs font-bold py-1 px-2.5 rounded  ">
          24%
        </div>
        <div className="absolute top-9 left-2 bg-[#71778e] text-white text-xs font-bold py-1 px-2.5 rounded">
          Best Seller
        </div>
        <div className='absolute top-4 right-2 opacity-0 invisible translate-y-10 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-500 ease-in-out ' >
          <div className="absolute FullScreen top-3 right-2 border border-[#f6f5f5] text-[#71778e] bg-white text-lg  w-10 h-10 font-bold  rounded-full flex justify-center items-center hover:bg-myblue hover:text-white hover:border-myblue active:scale-95 ">
           <BsArrowsFullscreen />
          </div>
          <div className="absolute WishList top-14 right-2 border border-[#f6f5f5] text-[#71778e] bg-white text-lg  w-10 h-10 font-bold  rounded-full flex justify-center items-center hover:bg-myblue hover:text-white hover:border-myblue active:scale-95">
            <FavoriteBorderIcon />
          </div>
          
        </div>
        <img
          src={food_5}
          alt="Product"
          className="w-[300px] h-[200px] object-fill rounded-t-lg"
        />
      </div>

      {/* Content Section */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">
          Angie’s Boomchickapop Sweet & Salty Kettle Corn
        </h3>
        <p className="text-xs text-green-600 font-bold mt-1">IN STOCK</p>
        <div className="flex items-center mt-2">
          <span className="text-yellow-400 text-sm">
          <Rating name="half-rating-read" defaultValue={4.4} precision={0.1} readOnly />
          </span>
        </div>
        <div className="mt-3">
          <span className="text-gray-400 line-through text-sm">$4.29</span>
          <span className="text-red-500 text-lg font-semibold ml-2">$3.29</span>
        </div>
        <button className="mt-4 w-full bg-white text-mypink text-sm font-semibold py-2 rounded-3xl border border-mypink hover:text-white hover:bg-mypink transition active:scale-95">
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductMiniCard;
