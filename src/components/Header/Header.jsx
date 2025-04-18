import { useContext } from 'react'
import LocationButton from './LocationButtuon'
import { CiUser } from "react-icons/ci";
import { BsBag } from "react-icons/bs";
import SearchBox from './SearchBox';
import { MyContext } from '../../App';
import { IoMenuSharp } from "react-icons/io5";
import cc from '../../assets/cc4.png'
import { Link, NavLink } from 'react-router-dom';
import { IoIosHeartEmpty } from 'react-icons/io';
import  useAuth  from '../../hooks/useAuth';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";


function Header() {
  const navigate = useNavigate();
  const context = useContext(MyContext);
  //Checking is loggedin
  const isLoggedIn = useAuth();   
  //hadling Name 
  const userInfo = useSelector((state) =>state.auth.userInfo)
  const letter = userInfo?.name ? userInfo.name.charAt(0).toUpperCase() : <CiUser />;

  //handling Cart page 
  const handleCartPage = ()=>{
    if (!isLoggedIn) {
      toast.error('Login First to access Cart')
    }
    else{
      return navigate("/Cart"); 
    }
  }

// Always call hooks at the top level, outside of conditions!
const items = useSelector((state) => state.cart.totalQuantity) || 0; 
var NumberofProductInCart = items;
if (NumberofProductInCart>99) {
  NumberofProductInCart = '99+'
}
  return (
    <div className="topHeader w-full border-solid border-[rgba(0,0,0,.1)] bg-white   ">
      <div className="top-strip bg-myyellow ">
        <p className='mb-0 mt-0 text-center text-sm font-medium sm:text-base md:text-lg sm:font-semibold pt-2 pb-2  text-white'>
          Use Code : <span className='text-center text-sm font-semibold sm:text-base md:text-lg sm:font-semibold'>&quot;NITJSR&quot;</span> for additionally 10% off
        </p>
      </div>
      <nav className="header w-full block lg:hidden  p-3  ">
        <div className='flex justify-around items-center '>
          <div><IoMenuSharp className='text-4xl text-[#1d1d4b]' /></div>
          <Link to={'/'} className='w-full flex justify-center'><img src={cc} className='w-44' /></Link>
          <div><button className='h-10 w-10 sm:h-[45px] sm:w-[45px]  sm:border rounded-full flex justify-center items-center bg-[#fff1ee] sm:active:bg-[#ffccc1] active:scale-[.95]  border-[rgba(0,0,0,0.2)]'>  <BsBag className='text-2xl sm:text-2xl text-[#ea2b0f]' /></button></div>
        </div>
      </nav>
      <nav className='navLarge p-3 hidden lg:block '>
        <div className='flex gap-6 xl:gap-16 items-center justify-center'>
          <Link to={'/'} className='w-fit flex justify-center'><img src={cc} className='w-44 lg:w-44 xl:w-44' /></Link>
          <div className='w-fit'>{context.countrylist.length !== 0 && <LocationButton />}  </div>
          <div className='w-2/5'> <SearchBox Width='w-[100%]' /></div>

          <div className='w-fit '>
            <button className='h-[45px] w-[45px] min-h-[45px] min-w-[45px]  border rounded-full flex justify-center items-center active:bg-gray-300 active:scale-95  border-[rgba(0,0,0,0.2)]'>  <IoIosHeartEmpty className='text-2xl' /> </button>
          </div>
          <div className="relative w-fit ">
            <button 
            onClick={handleCartPage}
            className='h-[45px] w-[45px] min-h-[45px] min-w-[45px]  border rounded-full flex justify-center items-center bg-[#fff1ee] active:bg-[#ffccc1] active:scale-95  border-[rgba(0,0,0,0.2)]'>  <BsBag className='text-2xl text-[#ea2b0f] ' /></button>
            <span className="count absolute top-[-0.6rem] right-[-0.7rem]  flex justify-center items-center  rounded-full bg-[#ea2b0f] text-white h-[2rem] w-[2rem] text-sm">{NumberofProductInCart}</span>
          </div>
          <div className='w-fit '>
            {
              isLoggedIn? (
                <Link  to={'/Profile'} className='h-[45px] w-[45px] min-h-[45px] min-w-[45px]  border rounded-full flex justify-center items-center active:bg-gray-300 active:scale-95  border-[rgba(0,0,0,0.2)] text-2xl font-semibold text-[#ea2b0f]'>{letter} </Link>
              ):(
                <NavLink to={'/login'} className={({isActive}) => isActive? 'text-[#ffffff] bg-[#ea2b0f] text-lg font-bold px-4 py-2 rounded-full ' : 'text-[#ea2b0f] text-lg font-bold px-4 py-2 rounded-full bg-[#fff1ee] '}>
                  LogIn
                </NavLink>
              )
            }

          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header