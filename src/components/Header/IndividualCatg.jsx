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
    <div className="itemCategries w-full z-50">
      <ul className="flex justify-evenly items-center text-[rgba(0,0,0,.5)] sm:text-[rgba(0,0,0,0.8)] font-bold capitalize lg:uppercase">
        <li className='active:scale-90'>
          <Link
            to="/Food"
            className="transition ease-in-out sm:hover:bg-[#f0faff] sm:hover:text-[#2bbef9] duration-200 !no-underline !rounded-3xl p-3 flex flex-col sm:flex-row gap-0.5 sm:gap-2 items-center"
          >
            <img src={food} className="w-7 h-7 sm:w-8 sm:h-8" />
             <p className='text-sm sm:text-sm md:text-base lg:text-md' >Food</p>
          </Link>
        </li>
        <li className='active:scale-90'>
          <Link
            to="/Cakes"
            className="transition ease-in-out sm:hover:bg-[#f0faff] sm:hover:text-[#2bbef9] duration-200 !no-underline !rounded-3xl p-3 flex flex-col sm:flex-row gap-0.5 sm:gap-2 items-center"
          >
              <img src={cake} className="w-7 h-7 sm:w-8 sm:h-8" />
              <p className='text-sm sm:text-sm md:text-base lg:text-md' >Cakes</p> 
          </Link>
        </li>
        <li className="relative group transition ease-in-out sm:hover:bg-[#f0faff] sm:hover:text-[#2bbef9] duration-200 rounded-3xl active:scale-90 ">
          <Link
            to="/Essential"
            className="!no-underline !rounded-full p-3 flex flex-col sm:flex-row gap-0.5 sm:gap-2 items-center justify-center"
          >
              <img src={Essential} className="w-7 h-7 sm:w-8 sm:h-8" />
                <p className='flex'><p className='text-sm sm:text-sm md:text-base lg:text-md' >College &nbsp;</p> <p className='text-sm sm:text-sm md:text-base lg:text-md' >Essential</p></p> 
          </Link>
          <div className="subdropdown w-[120px] lg:w-[150px] text-base font-medium absolute left-9 top-[100%] hidden active:block sm:active:hidden sm:group-hover:block bg-white rounded shadow-md pt-3 pb-3 ">
            <Link to="/Essential">
              <Button className="transition ease-in-out sm:hover:bg-[#f0faff] duration-200 !no-underline !rounded-sm w-full !text-[rgba(0,0,0,0.8)] !capitalize !justify-start">
                Calculator
              </Button>
            </Link>
            <Link to="/Essential">
              <Button className="transition ease-in-out sm:hover:bg-[#f0faff] duration-200 !no-underline !rounded-sm w-full !text-[rgba(0,0,0,0.8)] !capitalize !justify-start">
                Drafters
              </Button>
            </Link>
            <Link to="/Essential">
              <Button className="transition ease-in-out sm:hover:bg-[#f0faff] duration-200 !no-underline !rounded-sm w-full !text-[rgba(0,0,0,0.8)] !capitalize !justify-start">
                Tables
              </Button>
            </Link>
            <Link to="/Essential">
              <Button className="transition ease-in-out sm:hover:bg-[#f0faff] duration-200 !no-underline !rounded-sm w-full !text-[rgba(0,0,0,0.8)] !capitalize !justify-start">
                Others
              </Button>
            </Link>
          </div>
        </li>
        <li className='relative group active:scale-90'>
          <Link
            to="/Fashion"
            className="transition ease-in-out sm:hover:bg-[#f0faff] sm:hover:text-[#2bbef9] duration-200 !no-underline !rounded-3xl p-3 flex flex-col sm:flex-row gap-0.5 sm:gap-2 items-center"
          >
              <img src={Fashion} className="w-7 h-7 sm:w-8 sm:h-8" />
               <p className='text-sm sm:text-sm md:text-base lg:text-md' >Fashion</p>
          </Link>
          <div className="subdropdown w-[120px] lg:w-[150px] !text-xl !font-bold absolute left-[-15px] top-[100%] hidden active:block sm:active:hidden sm:group-hover:block bg-white rounded shadow-md pt-3 pb-3">
            <Link to="/Fashion">
              <Button className="transition ease-in-out sm:hover:bg-[#f0faff] duration-200 !no-underline !rounded-sm w-full !text-[rgba(0,0,0,0.8)] !capitalize !justify-start">
                Mens
              </Button>
            </Link>
            <Link to="/Fashion">
              <Button className="transition ease-in-out sm:hover:bg-[#f0faff] duration-200 !no-underline !rounded-sm w-full !text-[rgba(0,0,0,0.8)] !capitalize !justify-start">
                Womens
              </Button>
            </Link>
            <Link to="/Fashion">
              <Button className="transition ease-in-out sm:hover:bg-[#f0faff] duration-200 !no-underline !rounded-sm w-full !text-[rgba(0,0,0,0.8)] !capitalize !justify-start">
              Accessories
              </Button>
            </Link>
            
          </div>
        </li>
        <li className='active:scale-90'>
          <Link
            to="/Bags"
            className="transition ease-in-out sm:hover:bg-[#f0faff] sm:hover:text-[#2bbef9] duration-200 !no-underline !rounded-3xl p-3 flex flex-col sm:flex-row gap-0.5 sm:gap-2 items-center"
          >
              <img src={Bag} className="w-7 h-7 sm:w-8 sm:h-8" />
               <p className='text-sm sm:text-sm md:text-base lg:text-md' >Bags</p>
          </Link>
        </li>
        <li className='active:scale-90'>
          <Link
            to="/Footware"
            className="transition ease-in-out sm:hover:bg-[#f0faff] sm:hover:text-[#2bbef9] duration-200 !no-underline !rounded-3xl p-3 flex flex-col sm:flex-row gap-0.5 sm:gap-2 items-center"
          >
              <img src={Footware} className="w-7 h-7 sm:w-8 sm:h-8" />
              <p className='text-sm sm:text-sm md:text-base lg:text-md' >Footware</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default IndividualCatg;

