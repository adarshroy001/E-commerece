import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import BottomNavv from './components/bottomNav/BottomNavv';
import Catg from './components/CategrySection/Catg';

const MyContext = createContext();

function App() {
  const [countrylist, setCountryList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');

  const getCountry = async (url) => {
    try {
      const res = await axios.get(url);
      setCountryList(res.data.data);
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries/");
  }, []);

  const values = {
    countrylist,
    selectedCountry,
    setSelectedCountry,
  };

  return (
    <BrowserRouter basename="/">
      <MyContext.Provider value={values}>
        <Header />
        <Catg />
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
        </Routes>
        <BottomNavv />
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { MyContext };
