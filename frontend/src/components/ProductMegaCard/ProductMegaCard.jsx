import React, { useEffect, useState } from 'react';
import Rating from '@mui/material/Rating';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ImageSection from './ImageSection'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Button } from '@mui/material';



function ProductMegaCard() {
    const [ProductData, SetProductData] = useState('Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sit dolorum est nihil molestias quis pariatur. Soluta facilis quae alias. Optio eaque labore provident harum nulla fugit voluptas? Ad obcaecati tempora distinctio iure totam doloribus rem odit commodi voluptas dolor facere quaerat, minima ducimus, ea mollitia magni omnis. Excepturi accusantium iure, amet dolor eveniet commodi in.')
    const handleProductdata =()=>{
        SetProductData(ProductData.substring(0,120) + ' read more ... ' + <Button> Hello ji </Button>)
    }
    useEffect(()=>{
        ProductData.length > 120 ? handleProductdata() : '' ;
    } , [ProductData])

    return (
        <div className="Wrapper min:w-[300px] w-[90vw] sm:w-[95%] lg:w-[65%] bg-white border border-gray-200 sm:border-gray-50 shadow-md sm:shadow-2xl rounded-lg overflow-hidden m-auto mt-6 pt-4 sm:pt-8 pb-4 sm:pb-8 mb-6 z-10 relative">
            <div className="Title w-[84%] border-b sm:w-[90%] mx-auto relative">
                <p className=" text-lg sm:text-2xl font-semibold text-gray-800 mx-3">
                    All Natural Italian-Style Chicken Meatballic
                </p>
                <span className="text-base sm:text-lg font-semibold text-gray-800 mx-3">
                    Restarunt : 
                </span>
                <span className="text-base font-semibold text-gray-800">
                Sayonara Motel &nbsp;
                </span>
                <Rating name="half-rating-read" defaultValue={4.5} precision={0.1} readOnly />
                
            </div>
            <div className="Bottom-half mx-auto mt-4 grid grid-cols-1 sm:grid-cols-2">
                <div className="image w-full  mt-0 sm:mt-4">
                  <ImageSection /> 
                </div>
                <div className='text-part w-full'>
                    <div className="mt-3 ml-12 mb-3 w-4/5">
                        <span className="text-gray-400 line-through text-lg font-semibold">$4.29</span>
                        <span className="text-red-500 text-2xl font-bold ml-2">$3.29</span>
                    </div>
                    <p className="text-sm ml-12  mb-0 sm:mb-3  px-[8px] w-fit py-[2px] text-center  bg-[#e5f8ed] rounded-full text-green-600 font-bold mt-2 ">
                        IN STOCK
                    </p>
                    <p className='text-sm mt-3 sm:mt-7 ml-12 mb-0 sm:mb-3 w-4/5'>
                        {
                              ProductData    
                        }
                    </p>
                    <div className="Buttons flex ml-12 mt-2 sm:mt-4 justify-start gap-1 sm:gap-3 ">
                        <button className="mt-4 h-11 w-11 bg-[#edeef5]  text-sm font-semibold  rounded-full active:scale-90 transition">
                            <RemoveIcon />
                        </button>
                        <p className='mt-4 h-11 w-11  flex justify-center items-center text-lg font-semibold'> 5</p>
                        <button className="mt-4 h-11 w-11 bg-[#edeef5]  text-sm font-semibold  rounded-full active:scale-90 transition">
                            <AddIcon />
                        </button>
                        <button className="mt-4 px-10 sm:px-4 md:px-10 bg-myblue text-white text-sm font-semibold py-2 rounded-3xl border border-myblue active:scale-95 transition sm:hover:bg-[#1d2d63]">
                            Add to cart
                        </button>
                    </div>
                    <div className="wishlistButton ml-12 mt-5 sm:mt-7">
                        <button className=" h-9  px-3 sm:hover:bg-[#edeef5] border  border-[#e2e3eb]  rounded-3xl active:scale-95 transition">
                            <span><FavoriteBorderIcon className='!text-base !font-normal' /></span> <span className='text-sm font-normal'>ADD TO FAVOURITE </span>
                        </button>
                    </div>
                    <div className="Location mt-4 sm:mt-7 ml-12">
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
