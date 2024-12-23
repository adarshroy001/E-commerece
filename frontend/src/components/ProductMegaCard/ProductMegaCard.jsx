import React from 'react';
import Rating from '@mui/material/Rating';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ImageSection from './ImageSection'
import { IoMdClose } from "react-icons/io";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';



function ProductMegaCard() {

    return (
        <div className="Wrapper w-[1000px]  bg-white shadow-2xl rounded-lg overflow-hidden m-auto mt-32 pt-8 pb-8 mb-64 ">
            <div className="Title xl:w-[90%] lg:w-[90%] md:w-[90%] sm:w-full border-b  m-3  mx-auto relative">
                <p className="text-2xl font-semibold text-gray-800">
                    All Natural Italian-Style Chicken Meatballs
                </p>
                <span className="text-xl font-semibold text-gray-800">
                    Restarunt: &nbsp;
                </span>
                <span className="text-lg font-semibold text-gray-800">
                    Sayonara Motel &nbsp;
                </span>
                <Rating name="half-rating-read" defaultValue={4.5} precision={0.1} readOnly />
                <button className="absolute top-0 right-0 h-10 w-10 bg-[#edeef5]  text-sm font-semibold  rounded-full active:scale-90 transition flex justify-center items-center">
                    <IoMdClose />
                </button>
            </div>
            <div className="Bottom-half flex flex-wrap xl:w-[90%] lg:w-[90%] md:w-[90%] sm:w-full mx-auto">
                <ImageSection />
                <div className='text-part w-1/2 '>
                    <div className="mt-3 ml-5 mb-3">
                        <span className="text-gray-400 line-through text-lg font-semibold">$4.29</span>
                        <span className="text-red-500 text-2xl font-bold ml-2">$3.29</span>
                    </div>
                    <p className="text-sm px-[8px] w-fit py-[2px] text-center  bg-[#e5f8ed] rounded-full text-green-600 font-bold mt-2 ml-5">
                        IN STOCK
                    </p>
                    <p className='text-sm ml-5 mt-7'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sit dolorum est nihil molestias quis pariatur. Soluta facilis quae alias. Optio eaque labore provident harum nulla fugit voluptas? Ad obcaecati tempora distinctio iure totam doloribus rem odit commodi voluptas dolor facere quaerat, minima ducimus, ea mollitia magni omnis. Excepturi accusantium iure, amet dolor eveniet commodi in.
                    </p>
                    <div className="Buttons flex ml-5 mt-4 gap-3">
                        <button className="mt-4 h-11 w-11 bg-[#edeef5]  text-sm font-semibold  rounded-full active:scale-90 transition">
                            <RemoveIcon />
                        </button>
                        <p className='mt-4 h-11 w-11  flex justify-center items-center text-lg font-semibold'> 5</p>
                        <button className="mt-4 h-11 w-11 bg-[#edeef5]  text-sm font-semibold  rounded-full active:scale-90 transition">
                            <AddIcon />
                        </button>
                        <button className="mt-4 px-16 bg-myblue text-white text-sm font-semibold py-2 rounded-3xl border border-myblue active:scale-95 transition hover:bg-[#1d2d63]">
                            Add to cart
                        </button>
                    </div>
                    <div className="wishlistButton ml-5 mt-7">
                        <button className=" h-9  px-3 hover:bg-[#edeef5] border  border-[#e2e3eb]  rounded-3xl active:scale-95 transition">
                            <span><FavoriteBorderIcon className='!text-base !font-normal' /></span> <span className='text-sm font-normal'>ADD TO FAVOURITE </span>
                        </button>
                    </div>
                    <div className="Location mt-7 ml-5">
                        <div>
                            <span className="text-sm font-semibold text-gray-800">
                                Restarunt: &nbsp;
                            </span>
                            <span className="text-sm  text-gray-800">
                                Sayonara Motel ,Bus Stand ,Begusarai
                            </span>
                        </div>
                        <div>
                            <span className="text-sm font-semibold text-gray-800">
                                Delivery Time: &nbsp;
                            </span>
                            <span className="text-sm  text-gray-800">
                                20 - 35  min
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductMegaCard;
