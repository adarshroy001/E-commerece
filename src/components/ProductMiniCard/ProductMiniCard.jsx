import React, { useState } from 'react';
import { BsArrowsFullscreen } from "react-icons/bs";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Rating from '@mui/material/Rating';
import food_5 from '../../assets/food_5.png';

function ProductMiniCard() {
  const [modelOpen, setModelOpen] = useState(false);
  const handleToggleDropdown = () => {
    setModelOpen((prev) => !prev);
  };

  return (
    <div className="w-[44%] sm:w-[46%] md:w-[300px] bg-white shadow-lg rounded-lg overflow-hidden m-1 sm:m-2 group hover:scale-[.99] hover:border-[#c9dcde] hover:border transition">
      {/* Badge Section */}
      <div className="relative">
        <div className="absolute top-2 left-2 bg-mypink text-white text-xs font-bold py-1 px-2.5 rounded">
          24%
        </div>
        <div className="absolute top-9 left-2 bg-[#71778e] text-white text-xs font-bold py-1 px-2.5 rounded">
          Best Seller
        </div>
        <div className="absolute top-4 right-2 opacity-0 invisible translate-y-10 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-500 ease-in-out">
          <button
            className="absolute top-3 right-2 border border-[#f6f5f5] text-[#71778e] bg-white text-lg w-10 h-10 rounded-full flex justify-center items-center hover:bg-myblue hover:text-white hover:border-myblue active:scale-95"
            onClick={handleToggleDropdown}
          >
            <BsArrowsFullscreen />
          </button>
          <button className="absolute top-14 right-2 border border-[#f6f5f5] text-[#71778e] bg-white text-lg w-10 h-10 rounded-full flex justify-center items-center hover:bg-myblue hover:text-white hover:border-myblue active:scale-95">
            <FavoriteBorderIcon />
          </button>
        </div>
        <img
          src={food_5}
          alt="Product"
          className="w-full h-[200px] object-cover rounded-t-lg sm:h-[250px]"
        />
      </div>

      {/* Content Section */}
      <div className="p-4">
        <h3 className="text-sm sm:text-base md:text-base lg:text-lg font-semibold text-gray-800">
          Angie’s Boomchickapop Sweet & Salty Kettle Corn
        </h3>
        <p className="text-xs text-green-600 font-bold mt-1">IN STOCK</p>
        <div className="flex items-center mt-2">
          <Rating name="half-rating-read" defaultValue={4.4} precision={0.1} readOnly />
        </div>
        <div className="mt-3">
          <span className="text-gray-400 line-through text-xs sm:text-sm">$4.29</span>
          <span className="text-red-500 text-sm sm:text-lg font-semibold ml-2">$3.29</span>
        </div>
        <button className="mt-4 w-full bg-white text-mypink text-xs sm:text-sm font-semibold py-2 rounded-3xl border border-mypink hover:text-white hover:bg-mypink transition active:scale-95">
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductMiniCard;

