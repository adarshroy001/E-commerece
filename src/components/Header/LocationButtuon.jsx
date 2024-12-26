import React, { useContext, useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import '../../App.css';
import { IoClose } from "react-icons/io5";
import Slide from '@mui/material/Slide';
import { MyContext } from '../../App';
import { CiSearch } from "react-icons/ci";


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function LocationButtuon() {
  const context = useContext(MyContext);
  const [isopen, setIsopen] = useState(false);
  const [selectTab, setSelectTab] = useState(null);
  const [countrylist, setCountryList] = useState(context.countrylist || []);

  
  const handleClose = () => { setIsopen(false) };

  useEffect(() => {
    if (context?.countrylist) {
      setCountryList(context.countrylist);
    }
  }, [context.countrylist]);
  
  const selectCountry = (index , country) =>{
    setSelectTab(index);
    context?.setSelectedCountry(country);

  } ;
  

  const filterList = (e) => {
    const keyword = e.target.value.toLowerCase();
    if(keyword!==""){
      const filteredList = context?.countrylist?.filter((item) =>
        item.country.toLowerCase().includes(keyword)
      );
      setCountryList(filteredList || []);
    }
    else{
      setCountryList(context.countrylist);
    }
    
  };
  return (
    <div className='Location flex border-[1px] h-[50px] rounded-md ml-5 border-[rgba(0,0,0,0.2)]' >
      <Button className='p-2 w-[160px]  min-w-[160px] !capitalize' onClick={() => { setIsopen(true)  ;setCountryList(context.countrylist);}}  >
        <div className="locationName flex flex-col text-left w-full ">
          <span className='text-[12px] text-[rgba(0,0,0,0.5)] leading-4 '>Your Location</span>
          <span className='text-[12px] text-[#233a95] font-[700] leading-4'>{context.selectedCountry===''?'Select Location': context.selectedCountry.length>10?
          context.selectedCountry.substr(0,10) +'...' : context.selectedCountry
          
        }</span>
        </div>
      </Button>
      < Dialog 
      open={isopen} 
      onClose={handleClose} 
      TransitionComponent={Transition}
        sx={{ "& .MuiDialog-paper": { padding: "2rem", } }}>
        <p className='text-2xl font-bold text-left pb-2'>Choose Your Location</p>
        <p className=' text-left pb-2'>Enter your address  we will specify the offer for your area.</p>
        <Button 
        style={{ position: 'absolute', top: '20px', right: '20px', borderRadius: '100%', }}
          className="closeBtn !h-10 !min-w-10 !w-10 !bg-[#f3f4f7]"
           onClick={() => { setIsopen(false) }}
           >
          <IoClose className="!text-5xl text-black " />
        </Button>

        {/* SearchBox */}
        <div className='search  bg-[#f3f4f7] ml-0 h-[50px] border rounded-md border-[rgba(0,0,0,0.2)] flex justify-evenly items-center w-[350px] mb-3'>
          <div className='w-[80%]'>
            <input
             type="text"
              className='bg-transparent w-full outline-none h-[30px] text-[16px] text-[rgba(0,0,0,0.8)]'
               placeholder='Search for your area.....'
              onChange={filterList} 
              />
          </div>
          <div className=' h-[40px] w-[40px] rounded-full  flex justify-evenly items-center active:bg-gray-300 '>
            <button className='z-50  overflow-hidden '> <CiSearch className=' text-2xl active:text-xl' /></button>
          </div>
        </div>
        {/* SearchBox */}
        <ul className='countrylist p-0 pt-2 !max-h-[400px] overflow-y-scroll overflow-x-hidden '>
          {
            countrylist?.length >0 && countrylist.map((item, index) => {
              return (
                <li key={index} className='list-none w-[100%] hover:bg-[#f3f4f7]'>
                  <Button
                    className={`!text-[12px] font-medium font-sans w-full !text-black !flex !justify-start active:!bg-[#f3f4f7] ${selectTab === index ? 'active' : ''}`}
                    onClick={() => { selectCountry(index ,item.country); setIsopen(false) }} >{item.country}
                  </Button></li>
              )
            })
          }
        </ul>
      </Dialog>

    </div>
  )
}

export default LocationButtuon