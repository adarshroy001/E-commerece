import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import ResPhoto from './ResPhoto';

function ImageCard() {
    const initialDescription =
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sit dolorum est nihil molestias quis pariatur. Soluta facilis quae alias. Optio eaque labore provident harum nulla fugit voluptas? Ad obcaecati tempora distinctio iure totam doloribus rem odit commodi voluptas dolor facere quaerat, minima ducimus, ea mollitia magni omnis. Excepturi accusantium iure, amet dolor eveniet commodi in.';
    const [productData, setProductData] = useState(initialDescription);
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggleDescription = () => {
        setIsExpanded(!isExpanded);
    };

    const shortenedDescription =
        productData.length > 120
            ? productData.substring(0, 120) + '...'
            : productData;

    return (
        <div className="w-full lg:min-h-[92%] border border-gray-200 sm:border-gray-50 shadow-md sm:shadow-2xl rounded-lg overflow-hidden m-auto mt-5 pt-4 sm:pt-4 pb-4 sm:pb-8 z-10 relative">
            <div className='m-1 mb-3'>
                <p className='text-center text-2xl font-semibold text-gray-800 sm:hidden lg:block '>
                Sayonara Motel
                </p>
            </div>
            <div className="mx-auto mt-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1">
                <div className="image w-full mt-0 h-full">
                    <ResPhoto />
                </div>
                <div className="text-part w-full">
                    <div className="mt-3 ml-8 mb-3 w-4/5">
                            <p className="text-lg sm:text-2xl font-semibold text-gray-800 flex justify-between ">
                                <p className='hidden sm:block lg:hidden'>Sayonara Motel <p><Rating name="half-rating-read flex justify-center items-center" defaultValue={4.5} precision={0.1} readOnly /></p></p> 
                                <p className="text-sm px-3 !h-10  mb-0 min:w-fit flex justify-center items-center bg-[#e5f8ed] rounded-full text-green-600 font-bold ">
                                 Status:  Open</p>
                            </p>
                    </div>
                    <div className="Location mt-4 sm:mt-1 ml-8">
                        <div className=''>
                            <span className="text-sm font-semibold text-gray-800">
                                Address:&nbsp;
                            </span>
                            <span className="text-sm text-gray-800">
                                Sayonara Motel, Bus Stand, Begusarai
                            </span>
                        </div>
                        <div>
                            <span className="text-sm font-semibold text-gray-800">
                                Delivery Time:&nbsp;
                            </span>
                            <span className="text-sm text-gray-800">20 - 35 min</span>
                        </div>
                    </div>
                    
                    <div className="Buttons flex  mt-2 xl:mt-6 justify-center gap-1 sm:gap-3">
                        <button className="px-20  bg-myblue text-white text-sm font-semibold py-2 rounded-3xl border border-myblue active:scale-95 transition sm:hover:bg-[#1d2d63]">
                           Explore
                        </button>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    );
}

export default ImageCard;
