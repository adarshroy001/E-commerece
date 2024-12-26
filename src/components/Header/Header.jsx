import { useContext } from 'react'
import LocationButton from './LocationButtuon'
import { CiUser } from "react-icons/ci";
import { BsBag } from "react-icons/bs";
import SearchBox from './SearchBox';
import { MyContext } from '../../App';
import { IoMenuSharp } from "react-icons/io5";
import logo2 from '../../assets/logo2.png'

function Header() {
  const context = useContext(MyContext);

  return (
    <div className="topHeader w-full border-solid border-[rgba(0,0,0,.1)] bg-white   ">
      <div className="top-strip bg-myyellow ">
        <p className='mb-0 mt-0 text-center text-sm font-medium sm:text-base md:text-lg sm:font-semibold pt-2 pb-2  text-white'>
          Use Code : <span className='text-center text-sm font-semibold sm:text-base md:text-lg sm:font-semibold'>&quot;NITJSR&quot;</span> for additionally 10% off
        </p> 
      </div>
      <nav className="header w-full block lg:hidden  p-3  bg-white  ">
        <div className='flex justify-around items-center '>
         <div><IoMenuSharp className='text-4xl text-[#1d1d4b]'/></div>
         <div className='w-full flex justify-center'><img src={logo2} className='w-28' /></div>
         <div><button className='h-10 w-10 sm:h-[45px] sm:w-[45px]  sm:border rounded-full flex justify-center items-center bg-[#fff1ee] sm:active:bg-[#ffccc1] active:scale-[.95]  border-[rgba(0,0,0,0.2)]'>  <BsBag className='text-2xl sm:text-2xl text-[#ea2b0f]' /></button></div>
        </div>
      </nav>
      <nav className='navLarge p-3 hidden lg:block '>
        <div className='flex gap-6 xl:gap-16 items-center justify-center'>
         <div className='w-fit flex justify-center'><img src={logo2} className='w-28 lg:w-32 xl:w-32' /></div>
         <div className='w-fit'>{ context.countrylist.length !== 0 && <LocationButton />}  </div>
         <div className='w-2/5'> <SearchBox Width='w-[100%]'/></div>
          <div className='w-fit '>
             <button className='h-[45px] w-[45px] min-h-[45px] min-w-[45px]  border rounded-full flex justify-center items-center active:bg-gray-300  border-[rgba(0,0,0,0.2)]'>  <CiUser className='text-3xl active:text-2xl' /></button>
          </div>
          <div className='Price w-fit pl-1 pr-1  text-[18px] text-[rgba(0,0,0,0.8)] font-medium' >₹567</div>
          <div className="relative w-fit ">
              <button className='h-[45px] w-[45px] min-h-[45px] min-w-[45px]  border rounded-full flex justify-center items-center bg-[#fff1ee] active:bg-[#ffccc1]   border-[rgba(0,0,0,0.2)]'>  <BsBag className='text-2xl text-[#ea2b0f] active:text-xl ' /></button>
              <span className="count absolute top-[-0.4rem] right-[-0.5rem]  text-center  rounded-full bg-[#ea2b0f] text-white h-[1.5rem] w-[1.5rem] text-sm">01</span>
            </div>
        </div> 
      </nav>
    </div>
  )
}

export default Header