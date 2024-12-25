import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import  Home from './pages/Home/Home';
import Header from './components/Header/Header';
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import BottomNavv from './components/bottomNav/BottomNavv';


const MyContext = createContext();


function App() {
  const [countrylist,setCountryList] = useState([]) ;
  const [selectedCountry, setSelectedCountry] = useState('');
  
  const getCountry = async(url)=>{
    const responsive = await axios.get(url).then((res)=>{
      setCountryList(res.data.data);
      console.log(res.data.data);
      
    })
  }
  useEffect(()=>{
    getCountry("https://countriesnow.space/api/v0.1/countries/")
  },[])

  const values = {
    countrylist ,
    selectedCountry,
    setSelectedCountry,
  }

  return (
  <BrowserRouter> 
  <MyContext.Provider value={values}>
    <Header/>
    <Routes>
      <Route path='/' exact={true} element={<Home/>}/>
    </Routes>
    <BottomNavv/>
    </MyContext.Provider>
  </BrowserRouter>
  );
}

export default App;
export {MyContext} ;