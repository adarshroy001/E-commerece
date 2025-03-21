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
import CartPage from './pages/Cart/CartPage';
import Error from './pages/Error/Error';
import SignInForm from './pages/Auth/Login';
import SignUpForm from './pages/Auth/Signup';
import { useDispatch } from 'react-redux';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import ProtectedRoute from './protected/ProtectedRoute';
import { fetchProducts } from './store/ProductSlice';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setUser } from './store/authSlice';
import { setTotalQuantity } from './store/CartSlice'


const MyContext = createContext();
export const server = "http://localhost:4000";

function App() {
  const dispatch = useDispatch();
  dispatch(fetchProducts());

// Auth check by cheking is userInfo and dipatching userInfo and isLogedIn 
useEffect(() => {
  axios.get(`${server}/api/auth/getUserInfo`, { withCredentials: true })
    .then((res) =>{
      const userData =res.data.user ;      
      dispatch(setUser({
                      userLogedIn: true,
                      user: userData, 
                      userInfo: userData
                  }));
    } )
    .catch((e) => {
      dispatch(setUser({
                  userLogedIn: false,
                  user: null,
                  userInfo: null
              }));
    }); 
}, []);

//No of product in cart handling 
const [items, setItems] = useState([]);
  // Fetching Cart 
  useEffect(() => { 
    axios.get(`${server}/api/cart`, { withCredentials: true })
      .then((res) => {
        const cartItems = res.data.items || []; // Ensure it's always an array
        const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
        dispatch(setTotalQuantity(totalQuantity));
      })
      .catch((e) => {
        toast.error(e.response?.data?.message );
        console.error("Cart fetch error:", e);
      })
  }, []);

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
      <ToastContainer 
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
      />
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
        {/* Auth */}
          <Route path="/signup" exact={true} element={<SignUpForm/>}/>
          <Route path="/login" exact={true} element={<SignInForm/>}/>
        {/* ProductPage */}
          <Route path="/product/:id" exact={true} element={< Foodtype />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute/>}>
          <Route path="/Profile" exact={true} element={<ProfilePage/>}/>
          <Route path="/cart" exact={true} element={<CartPage/>} />
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
