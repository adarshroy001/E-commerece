import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FoodtypeImg from './FoodtypeImg';
import { useLocation } from 'react-router-dom';

function Foodtype() {
  //Handling Dynamic Routing
  const location = useLocation();
  const product = location.state?.product;

  if (!product) return <h2>Product not found</h2>;


  const [quantity, setQuantity] = useState(5);
  const productTitle = "All ";
  const restaurantName = "Sayonara Motel";
  const productPrice = { original: 4.29, discounted: 3.29 };
  const productDescription =
    "Delicious Italian-style chicken meatballs made with all-natural ingredients.";
  const deliveryInfo = {
    location: "Sayonara Motel, Bus Stand, Begusarai",
    time: "20 - 35 min",
  };

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="w-full overflow-hidden m-auto mt-5  mb-10 pt-4 sm:pt-8 pb-4 sm:pb-8 z-10 relative">
      <div className="Title w-[85%] border-b sm:w-[90%] lg:w-[80vw] mx-auto relative">
        <p className="text-lg sm:text-2xl font-semibold text-gray-800 mx-3">
          {product.name}
        </p>
        <span className="text-base sm:text-lg font-semibold text-gray-800 mx-3">
          Restaurant:&nbsp;
        </span>
        <span className="text-base font-semibold text-gray-800">
          {restaurantName}&nbsp;
        </span>
        <Rating name="half-rating-read" defaultValue={4.5} precision={0.1} readOnly />
      </div>
      <div className="Bottom-half w-[90%] lg:w-[80vw] mx-auto mt-4 grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-2">
        <div className="image w-full mt-0 sm:mt-4 ">
          <FoodtypeImg images={product.images}/>
        </div>
        <div className="text-part ml-5 w-full">
          <div className="mt-3  mb-3 w-4/5">
            <span className="text-gray-400 line-through text-lg font-semibold">
              ${productPrice.original}
            </span>
            <span className="text-red-500 text-2xl font-bold ml-2">
              ${productPrice.discounted}
            </span>
          </div>
          <p className="text-sm mb-0 sm:mb-3 px-[8px] w-fit py-[2px] text-center bg-[#e5f8ed] rounded-full text-green-600 font-bold mt-2">
            IN STOCK
          </p>
          <p className="text-sm mt-3 sm:mt-7 mb-0 sm:mb-3 w-4/5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At ratione, temporibus hic perferendis praesentium quidem velit culpa quasi earum deleniti. Sint cumque quod, incidunt facilis magni quo quos dolore ipsum, vel voluptas porro consequatur. Aperiam itaque mollitia quibusdam, id culpa praesentium quasi eos ipsum, molestias quam explicabo aspernatur. Ab, enim aliquam, unde obcaecati quis commodi maiores facere reiciendis eius, placeat dolore molestias perferendis laborum? Est tempora voluptate aspernatur!
          </p>
          <div className="wishlistButton mt-5 sm:mt-7">
            <button className="h-9 px-3 sm:hover:bg-[#edeef5] border border-[#e2e3eb] rounded-3xl active:scale-95 transition">
              <FavoriteBorderIcon className="!text-base !font-normal" />
              <span className="text-sm font-normal"> ADD TO FAVOURITE </span>
            </button>
          </div>
          <div className="Buttons flex flex-wrap mr-10  mt-2 justify-start gap-1 sm:gap-5">
            <button
              onClick={handleDecrease}
              aria-label="Decrease quantity"
              className="mt-4 h-11 w-11 bg-[#edeef5] text-sm font-semibold rounded-full active:scale-90 transition"
            >
              <RemoveIcon />
            </button>
            <p className="mt-4 h-11 w-11 flex justify-center items-center text-lg font-semibold">
              {quantity}
            </p>
            <button
              onClick={handleIncrease}
              aria-label="Increase quantity"
              className="mt-4 h-11 w-11 bg-[#edeef5] text-sm font-semibold rounded-full active:scale-90 transition"
            >
              <AddIcon />
            </button>
          </div>
          <button className="mt-5 px-10 bg-myblue text-white text-sm font-semibold py-2 rounded-3xl border border-myblue active:scale-95 transition sm:hover:bg-[#1d2d63]">
            Add to cart
          </button>
          <div className="Location mt-4 sm:mt-7">
            <div>
              <span className="text-sm font-semibold text-gray-800">Restaurant:&nbsp;</span>
              <span className="text-sm text-gray-800">{deliveryInfo.location}</span>
            </div>
            <div>
              <span className="text-sm font-semibold text-gray-800">Delivery Time:&nbsp;</span>
              <span className="text-sm text-gray-800">{deliveryInfo.time}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Foodtype;
