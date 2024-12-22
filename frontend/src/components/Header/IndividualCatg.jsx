import React from 'react';
import { Link } from 'react-router-dom';
import food from '../../Assets/iconsforheader/cutlery.png';
import cake from '../../Assets/iconsforheader/birthday-cake.png';
import Essential from '../../Assets/iconsforheader/calculator.png';
import Fashion from '../../Assets/iconsforheader/dress.png';
import Bag from '../../Assets/iconsforheader/handbag.png';
import Footware from '../../Assets/iconsforheader/footware.png';
import Button from '@mui/material/Button';

function IndividualCatg() {
  return (
    <div className="itemCategries w-full max-w-[1000px]  xl:ml-[15px] z-50">
      <ul className="flex justify-evenly items-center text-[12px] text-[rgba(0,0,0,0.8)] font-bold uppercase">
        <li>
          <Link
            to="/Food"
            className="transition ease-in-out hover:bg-[#f0faff] hover:text-[#2bbef9] duration-200 !no-underline !rounded-3xl p-3 flex gap-2 items-center"
          >
            <div>
              <img src={food} className="w-8 h-8" />
            </div>
            Food
          </Link>
        </li>
        <li>
          <Link
            to="/Cakes"
            className="transition ease-in-out hover:bg-[#f0faff] hover:text-[#2bbef9] duration-200 !no-underline !rounded-3xl p-3 flex gap-2 items-center"
          >
            <div>
              <img src={cake} className="w-8 h-8" />
            </div>
            Cakes
          </Link>
        </li>
        <li className="relative group transition ease-in-out hover:bg-[#f0faff] hover:text-[#2bbef9] duration-200 rounded-3xl ">
          <Link
            to="/Essential"
            className="!no-underline !rounded-full p-3 flex gap-2 items-center"
          >
            <div>
              <img src={Essential} className="w-8 h-8" />
            </div>
            College Essential
          </Link>
          <div className="subdropdown w-[170px] text-base font-medium absolute left-9 top-[100%] hidden group-hover:block bg-white rounded shadow-md pt-3 pb-3 ">
            <Link to="/Essential">
              <Button className="transition ease-in-out hover:bg-[#f0faff] duration-200 !no-underline !rounded-sm w-full !text-[rgba(0,0,0,0.8)] !capitalize !justify-start">
                Calculator
              </Button>
            </Link>
            <Link to="/Essential">
              <Button className="transition ease-in-out hover:bg-[#f0faff] duration-200 !no-underline !rounded-sm w-full !text-[rgba(0,0,0,0.8)] !capitalize !justify-start">
                Drafters
              </Button>
            </Link>
            <Link to="/Essential">
              <Button className="transition ease-in-out hover:bg-[#f0faff] duration-200 !no-underline !rounded-sm w-full !text-[rgba(0,0,0,0.8)] !capitalize !justify-start">
                Tables
              </Button>
            </Link>
            <Link to="/Essential">
              <Button className="transition ease-in-out hover:bg-[#f0faff] duration-200 !no-underline !rounded-sm w-full !text-[rgba(0,0,0,0.8)] !capitalize !justify-start">
                Others
              </Button>
            </Link>
          </div>
        </li>
        <li className='relative group'>
          <Link
            to="/Fashion"
            className="transition ease-in-out hover:bg-[#f0faff] hover:text-[#2bbef9] duration-200 !no-underline !rounded-3xl p-3 flex gap-2 items-center"
          >
            <div>
              <img src={Fashion} className="w-8 h-8" />
            </div>
            Fashion
          </Link>
          <div className="subdropdown w-[150px] !text-xl !font-bold absolute left-[-15px] top-[100%] hidden group-hover:block bg-white rounded shadow-md pt-3 pb-3">
            <Link to="/Fashion">
              <Button className="transition ease-in-out hover:bg-[#f0faff] duration-200 !no-underline !rounded-sm w-full !text-[rgba(0,0,0,0.8)] !capitalize !justify-start">
                Mens
              </Button>
            </Link>
            <Link to="/Fashion">
              <Button className="transition ease-in-out hover:bg-[#f0faff] duration-200 !no-underline !rounded-sm w-full !text-[rgba(0,0,0,0.8)] !capitalize !justify-start">
                Womens
              </Button>
            </Link>
            <Link to="/Fashion">
              <Button className="transition ease-in-out hover:bg-[#f0faff] duration-200 !no-underline !rounded-sm w-full !text-[rgba(0,0,0,0.8)] !capitalize !justify-start">
              Accessories
              </Button>
            </Link>
            
          </div>
        </li>
        <li>
          <Link
            to="/Bags"
            className="transition ease-in-out hover:bg-[#f0faff] hover:text-[#2bbef9] duration-200 !no-underline !rounded-3xl p-3 flex gap-2 items-center"
          >
            <div>
              <img src={Bag} className="w-8 h-8" />
            </div>
            Bags
          </Link>
        </li>
        <li>
          <Link
            to="/Footware"
            className="transition ease-in-out hover:bg-[#f0faff] hover:text-[#2bbef9] duration-200 !no-underline !rounded-3xl p-3 flex gap-2 items-center"
          >
            <div>
              <img src={Footware} className="w-8 h-8" />
            </div>
            Footware
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default IndividualCatg;

