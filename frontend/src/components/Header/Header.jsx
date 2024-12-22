import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Assets/logo.png'
import LocationButton from './LocationButtuon'
import { CiUser } from "react-icons/ci";
import { BsBag } from "react-icons/bs";
import SearchBox from './SearchBox';
import IndividualCatg from './IndividualCatg';
import AllCatg from './Allcatg';
import { MyContext } from '../../App';

function Header() {
    const context = useContext(MyContext) ;

  return (
    <div className="topHeader w-full  bottom-1 border-solid border-[rgba(0,0,0,.1)]">
      <div className="top-strip container bg-myyellow text-[12px] font-semibold pt-2 pb-2 min-w-[100%] text-white">
        <p className='mb-0 mt-0 text-center'>
          Use Code : "<b>NITJSR</b>"  for additionally 10% off
        </p>
      </div>
      <div className="header w-full flex mt-4 bg-white">
        <div className="firstHalf w-[20%] h-[50px] flex justify-end">
          <div className='w-1/2 h-full'><Link to={'/'}> <img src={logo} className='h-full p-1' /> </Link> </div>
        </div>
        <div className="midHalf flex w-[60%] items-center">
            {
            context.countrylist.length!==0 && <LocationButton />
            }
            <SearchBox  Width="w-[60%]"/>
        </div>
        <div className="lastHalf w-[20%] flex items-center justify-start  gap-7">
          <button className='h-[45px] w-[45px] min-h-[45px] min-w-[45px]  border rounded-full flex justify-center items-center active:bg-gray-300  border-[rgba(0,0,0,0.2)]'>  <CiUser className='text-3xl active:text-2xl' /></button>
          <div className="cartTab flex justify-center items-center gap-1">
            <div className='Price  inline-block text-[18px] text-[rgba(0,0,0,0.8)] font-medium' >₹567</div>
            <div className="relative">
              <button className='h-[45px] w-[45px] min-h-[45px] min-w-[45px]  border rounded-full flex justify-center items-center bg-[#fff1ee] active:bg-[#ffccc1]   border-[rgba(0,0,0,0.2)]'>  <BsBag className='text-2xl text-[#ea2b0f] active:text-xl ' /></button>
              <span className="count absolute top-[-0.4rem] right-[-0.5rem]  text-center  rounded-full bg-[#ea2b0f] text-white h-[1.5rem] w-[1.5rem] text-sm">01</span>
            </div>
          </div>
        </div>

      </div>
        <div className="container flex  items-center mt-4  pb-2 pt-2  border-b-[1px]  w-[100%]  min-w-[100%]">
          <AllCatg />
          <IndividualCatg />
        </div>
    </div>
  )
}

export default Header