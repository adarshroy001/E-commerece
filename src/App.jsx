import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import BottomNavv from './components/bottomNav/BottomNavv';
import Catg from './components/CategrySection/Catg';
import Footer from './components/Footer/Footer';
import Food from './pages/Food/Food';
import Cakes from './pages/Cakes/Cakes';
import Essential from './pages/College-Essential/essential';
import Fashion from './pages/Fashion/Fashion';
import Bags from './pages/Bags/Bags';
import Footware from './pages/Footware/Footware';
import Foodtype from './pages/Product/Foodtype';
import Cart from './pages/Cart/Cart';
import Error from './pages/Error/Error';
import SignInForm from './pages/Auth/Login';
import SignUpForm from './pages/Auth/Signup';
import { useDispatch } from 'react-redux';
import { login } from './store/UserSlice';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import ProtectedRoute from './protected/ProtectedRoute';

const MyContext = createContext();

function App() {
// handlinf authentication 
const dispatch = useDispatch();
useEffect(() => {
  const storedUserInfo = JSON.parse(localStorage.getItem("userInfo"));
  const storedToken = localStorage.getItem("authToken");

  if (storedToken && storedUserInfo) {
      dispatch(
          login({
              userInfo: storedUserInfo,
              authToken: storedToken,
          })
      );
  }
}, [dispatch]);


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
          <Route path="/Food" exact={true} element={<Food />} />
          <Route path="/Cakes" exact={true} element={<Cakes />} />
          <Route path="/Essential" exact={true} element={<Essential />} />
          <Route path="/Fashion" exact={true} element={<Fashion />} />
          <Route path="/Bags" exact={true} element={<Bags />} />
          <Route path="/Footware" exact={true} element={<Footware />} />
          <Route path="/Foodtype" exact={true} element={< Foodtype />} />
          <Route path="/signup" exact={true} element={<SignUpForm/>}/>
          <Route path="/login" exact={true} element={<SignInForm/>}/>

        {/* Protected Routes */}
        <Route element={<ProtectedRoute/>}>
          <Route path="/Profile" exact={true} element={<ProfilePage/>}/>
          <Route path="/Cart" exact={true} element={<Cart/>} />

        </Route>





          <Route path="*" exact={true} element={<Error/>}/>
        </Routes>
        <Footer/>
        <BottomNavv />
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { MyContext };
