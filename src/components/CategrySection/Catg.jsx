import IndividualCatg from '../Header/IndividualCatg';
import AllCatg from '../Header/AllCatg';

function Catg() {
  return (
  <div className='border-b-[1px] sticky  top-0 z-30 bg-white'>
    <div className="container  flex  items-center justify-center xl:w-[85vw]  mt-0 sm:mt-1  pb-0 sm:pb-2 pt-0 sm:pt-2  overflow-y-visible overflow-x-scroll sm:overflow-x-visible scrollbar-hidden w-[90vw] mx-auto sm:w-[100%]">
    <AllCatg />
    <IndividualCatg />
    </div>
 </div>  
  )
}
export default Catg