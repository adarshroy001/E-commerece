import { CiSearch } from "react-icons/ci";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function SearchBox({Width , marginLeft = 'ml-3',searchWhat = 'products',marginBottom}) {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();  
    const handleSearch = (e) => {
      e.preventDefault();
      navigate(`/search?query=${query}`);
      setQuery(""); 
    };
  
  return (
    <div className = {`search  bg-[#f3f4f7] ${marginLeft} h-[50px] border rounded-md border-[rgba(0,0,0,0.2)] flex justify-evenly items-center ${Width} ${marginBottom}`}>
      <div className='w-[80%]'>
        <input 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text" className='bg-transparent w-full outline-none h-[30px] text-[16px] text-[rgba(0,0,0,0.8)]' placeholder={`Search for ${searchWhat}.....`} />
      </div>
      <div className=' h-[40px] w-[40px] rounded-full  flex justify-evenly items-center active:bg-gray-300 '>
        <button  onClick={handleSearch} className='z-50  overflow-hidden '> <CiSearch className=' text-2xl active:text-xl' /></button>
      </div>
    </div>

  )
}

SearchBox.propTypes = {
  Width: PropTypes.string,            
  marginLeft: PropTypes.string,        
  searchWhat: PropTypes.string,         
  marginBottom: PropTypes.string,       
};

export default SearchBox