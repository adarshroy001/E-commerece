import React, { useState } from 'react';
import { Button } from '@mui/material';
import { IoMdMenu } from "react-icons/io";
import { GoTriangleDown } from "react-icons/go";
import { Link } from 'react-router-dom';
import food from '../../Assets/iconsforheader/cutlery.png';
import cake from '../../Assets/iconsforheader/birthday-cake.png';
import Essential from '../../Assets/iconsforheader/calculator.png';
import Fashion from '../../Assets/iconsforheader/dress.png';
import Bag from '../../Assets/iconsforheader/handbag.png';
import Footware from '../../Assets/iconsforheader/footware.png';

function AllCatg() {
  const [isClicked, setIsClicked] = useState(false);
  const handleToggleDropdown = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <div className="allCategories w-full max-w-[200px] flex justify-end relative   xl:ml-[150px] z-50">
      <Button className="!bg-mypink !rounded-3xl relative" onClick={handleToggleDropdown}>
        <div className="flex gap-2 pt-[2px] pb-[2px] items-center">
          <IoMdMenu className="text-white text-xl font-semibold ml-1" />
          <span className="text-white font-semibold text-[12px]"> All Categories</span>
          <GoTriangleDown className="text-white text-lg mr-1" />
        </div>
      </Button>
      {isClicked && (
        <div className="subdropdown w-[200px] font-medium absolute left-2 top-[120%] bg-white  border border-solid border-[rgba(0,0,0,.1)] pt-4 pb-4 shadow-md">
          <Link to="/Food">
            <Button className="transition ease-in-out hover:bg-[#f0faff] hover:!text-[#2bbef9] duration-200 !no-underline !text-base w-full !text-[rgba(0,0,0,0.8)] !capitalize !justify-start">
              <img src={food} className="w-6 h-6 m-1" /> Food
            </Button>
          </Link>
          <Link to="/Cakes">
            <Button className="transition ease-in-out hover:bg-[#f0faff] hover:!text-[#2bbef9] duration-200 !no-underline !text-base w-full !text-[rgba(0,0,0,0.8)] !capitalize !justify-start">
              <img src={cake} className="w-6 h-6 m-1" /> Cakes
            </Button>
          </Link>
          <Link to="/Essential" className='relative group'>
            <Button className="transition ease-in-out hover:bg-[#f0faff] hover:!text-[#2bbef9] duration-200 !no-underline !text-base w-full !text-[rgba(0,0,0,0.8)] !capitalize !justify-start">
              <img src={Essential} className="w-6 h-6 m-1" /> College Essential
            </Button>
             <div className="subdropdown w-[170px]  absolute left-[100%] top-[-100%] hidden group-hover:block pt-3  bg-white shadow-md  ">
                        <Link to="/Essential">
                          <Button className="transition ease-in-out hover:bg-[#f0faff] duration-200 !font-medium !text-[13px]  !no-underline !rounded-sm w-full !text-[rgba(0,0,0,0.8)] !capitalize !justify-start">
                            Calculator
                          </Button>
                        </Link>
                        <Link to="/Essential">
                          <Button className="transition ease-in-out hover:bg-[#f0faff] duration-200 !font-medium !text-[13px] !no-underline !rounded-sm w-full !text-[rgba(0,0,0,0.8)] !capitalize !justify-start">
                            Drafters
                          </Button>
                        </Link>
                        <Link to="/Essential">
                          <Button className="transition ease-in-out hover:bg-[#f0faff] duration-200 !font-medium !text-[13px] !no-underline !rounded-sm w-full !text-[rgba(0,0,0,0.8)] !capitalize !justify-start">
                            Tables
                          </Button>
                        </Link>
                        <Link to="/Essential">
                          <Button className="transition ease-in-out hover:bg-[#f0faff] duration-200 !font-medium !text-[13px] !no-underline !rounded-sm w-full !text-[rgba(0,0,0,0.8)] !capitalize !justify-start">
                            Others
                          </Button>
                        </Link>
                      </div>
          </Link>
          <Link to="/Fashion" className='relative group'>
            <Button className="transition ease-in-out hover:bg-[#f0faff] hover:!text-[#2bbef9] duration-200 !no-underline !text-base w-full !text-[rgba(0,0,0,0.8)] !capitalize !justify-start">
              <img src={Fashion} className="w-6 h-6 m-1" /> Fashion
            </Button>
            <div className="subdropdown w-[150px]  absolute left-[100%] top-[-100%]  hidden group-hover:block pt-2 bg-white  shadow-md">
                        <Link to="/Fashion">
                          <Button className="transition ease-in-out hover:bg-[#f0faff] duration-200 !font-medium !text-[13px] !no-underline !rounded-sm w-full !text-[rgba(0,0,0,0.8)] !capitalize !justify-start">
                            Mens
                          </Button>
                        </Link>
                        <Link to="/Fashion">
                          <Button className="transition ease-in-out hover:bg-[#f0faff] duration-200 !font-medium !text-[13px] !no-underline !rounded-sm w-full !text-[rgba(0,0,0,0.8)] !capitalize !justify-start">
                            Womens
                          </Button>
                        </Link>
                        <Link to="/Fashion">
                          <Button className="transition ease-in-out hover:bg-[#f0faff] duration-200 !font-medium !text-[13px] !no-underline !rounded-sm w-full !text-[rgba(0,0,0,0.8)] !capitalize !justify-start">
                          Accessories
                          </Button>
                        </Link>
                        
                      </div>
          </Link>
          <Link to="/Bags">
            <Button className="transition ease-in-out hover:bg-[#f0faff] hover:!text-[#2bbef9] duration-200 !no-underline !text-base w-full !text-[rgba(0,0,0,0.8)] !capitalize !justify-start">
              <img src={Bag} className="w-6 h-6 m-1" /> Bags
            </Button>
          </Link>
          <Link to="/Footware">
            <Button className="transition ease-in-out hover:bg-[#f0faff] hover:!text-[#2bbef9] duration-200 !no-underline !text-base w-full !text-[rgba(0,0,0,0.8)] !capitalize !justify-start">
              <img src={Footware} className="w-6 h-6 m-1" /> Footware
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default AllCatg;
