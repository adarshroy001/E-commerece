import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoBagCheckOutline } from "react-icons/io5";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';



function BottomNavv() {
    return (
            <nav className="bottomNav w-full flex justify-around items-center p-3 pb-5 border-t bg-white  border-[rgba(0,0,0,.1)] sticky z-50 bottom-0 lg:hidden">
                <div className='flex flex-col justify-center items-center'><IoHomeOutline className='text-2xl text-[rgba(0,0,0,.5)] '/> <p className='text-xs font-semibold text-[rgba(0,0,0,.5)]'>Home</p></div>
                <div className='flex flex-col justify-center items-center'><IoIosSearch className='text-3xl text-[rgba(0,0,0,.5)]'/><p className='text-xs font-semibold text-[rgba(0,0,0,.5)]'>Search</p></div>
                <div className='flex flex-col justify-center items-center'><IoIosHeartEmpty className='text-3xl text-[rgba(0,0,0,.5)]'/> <p className='text-xs font-semibold text-[rgba(0,0,0,.5)]'>WishList</p></div>
                <div className='flex flex-col justify-center items-center'><IoBagCheckOutline className='text-3xl text-[rgba(0,0,0,.5)]'/><p className='text-xs font-semibold text-[rgba(0,0,0,.5)]'>Orders</p></div>
                <div className='flex flex-col justify-center items-center'><PersonOutlineIcon className='!text-3xl text-[rgba(0,0,0,.5)]'/><p className='text-xs font-semibold text-[rgba(0,0,0,.5)]'>Account</p></div>
                
            </nav>
    )
}

export default BottomNavv