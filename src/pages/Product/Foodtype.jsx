import React, { useEffect, useState } from 'react';
import Rating from '@mui/material/Rating';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FoodtypeImg from './FoodtypeImg';
import { useLocation, useParams } from 'react-router-dom';
import { server } from '../../App';

function Foodtype() {
  const location = useLocation();
  const { id } = useParams(); // Extract product ID from URL
  const [product, setProduct] = useState(location.state?.product || null);
  const [loading, setLoading] = useState(!product);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1); // Moved before useEffect and conditionals

  useEffect(() => {
    if (!product) {
      setLoading(true);
      fetch(`${server}/api/products/${id}`)
        .then((res) => {
          if (!res.ok) throw new Error("Failed to fetch product");
          return res.json();
        })
        .then((data) => {
          setProduct(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }
  }, [id, location.state]);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error}</h2>;
  if (!product) return <h2>Product not found</h2>;

  const restaurantName = "Sayonara Motel";
  const deliveryInfo = {
    location: "Sayonara Motel, Bus Stand, Begusarai",
    time: "20 - 35 min",
  };

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => quantity > 1 && setQuantity(quantity - 1);

  return (
    <div className="w-full overflow-hidden m-auto mt-5 mb-10 pt-4 sm:pt-8 pb-4 sm:pb-8 z-10 relative">
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
        <div className="image w-full mt-0 sm:mt-4">
          <FoodtypeImg images={product.images} />
        </div>
        
        <div className="text-part ml-5 w-full">
          <div className="mt-3 mb-3 w-4/5">
            <span className="text-gray-400 line-through text-lg font-semibold">
              ${product.price + 1.00} {/* Example: Showing a discount effect */}
            </span>
            <span className="text-red-500 text-2xl font-bold ml-2">
              ${product.price}
            </span>
          </div>

          <p className={`text-sm mb-0 sm:mb-3 px-[8px] w-fit py-[2px] text-center rounded-full font-bold mt-2 ${product.stock > 0 ? 'bg-[#e5f8ed] text-green-600' : 'bg-red-300 text-red-600'}`}>
            {product.stock > 0 ? "IN STOCK" : "OUT OF STOCK"}
          </p>

          <p className="text-sm mt-3 sm:mt-7 mb-0 sm:mb-3 w-4/5">
            {product.description}
          </p>

          <div className="wishlistButton mt-5 sm:mt-7">
            <button className="h-9 px-3 sm:hover:bg-[#edeef5] border border-[#e2e3eb] rounded-3xl active:scale-95 transition">
              <FavoriteBorderIcon className="!text-base !font-normal" />
              <span className="text-sm font-normal"> ADD TO FAVOURITE </span>
            </button>
          </div>

          <div className="Buttons flex flex-wrap mr-10 mt-2 justify-start gap-1 sm:gap-5">
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

