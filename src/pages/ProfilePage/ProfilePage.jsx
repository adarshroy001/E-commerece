import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/UserSlice";
import { useNavigate } from "react-router-dom";
import { FiMail, FiPhone, FiHeart, FiPackage, FiLogOut } from "react-icons/fi";

const UserProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // Get user info from Redux store
  const { userInfo } = useSelector((state) => state.user);
  
  // Local state to hold user data from Redux or localStorage
  const [userData, setUserData] = useState(userInfo);

  useEffect(() => {
    if (userInfo) {
      setUserData(userInfo); // If user info is in Redux, use it
    } else {
      const storedUserInfo = JSON.parse(localStorage.getItem("userInfo"));
      if (storedUserInfo) {
        setUserData(storedUserInfo); // Fallback to localStorage if available
      }
    }
  }, [userInfo]); // Update whenever userInfo in Redux changes

  const handleLogout = () => {
    dispatch(logout()); // Clear user data from Redux
    localStorage.removeItem("authToken"); // Remove token from localStorage
    localStorage.removeItem("userInfo"); // Remove user info from localStorage
    navigate("/"); // Redirect to home page
  };

  return (
    <div className="min-h-screen md:min-h-[80vh] bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden">
        {/* Profile Header */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center 
            backdrop-blur-sm border-2 border-white/30">
              <span className="text-3xl font-bold text-white">
                {userData?.name?.charAt(0).toUpperCase()}
              </span>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-white mb-1">{userData?.name || "User"}</h2>
          <p className="text-blue-100">{userData?.email}</p>
        </div>

        {/* User Details */}
        <div className="p-6 space-y-4">
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <FiMail className="w-5 h-5 text-gray-500" />
            <span className="text-gray-700">{userData?.email}</span>
          </div>

          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <FiPhone className="w-5 h-5 text-gray-500" />
            <span className="text-gray-700">
              {userData?.phone || "Phone number not provided"}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid gap-2 p-4 bg-gray-50">
          <button
            onClick={() => navigate("/wishlist")}
            className="flex items-center justify-between p-3 bg-white rounded-lg 
            hover:bg-gray-100 transition-all border border-gray-200 group"
          >
            <div className="flex items-center space-x-3">
              <FiHeart className="w-5 h-5 text-red-500" />
              <span className="font-medium">Wishlist</span>
            </div>
            <span className="text-gray-400 group-hover:text-gray-600 transition-colors">→</span>
          </button>

          <button
            onClick={() => navigate("/orders")}
            className="flex items-center justify-between p-3 bg-white rounded-lg 
            hover:bg-gray-100 transition-all border border-gray-200 group"
          >
            <div className="flex items-center space-x-3">
              <FiPackage className="w-5 h-5 text-green-500" />
              <span className="font-medium">Order History</span>
            </div>
            <span className="text-gray-400 group-hover:text-gray-600 transition-colors">→</span>
          </button>

          <button
            onClick={handleLogout}
            className="flex items-center justify-between p-3 bg-white rounded-lg 
            hover:bg-red-50 transition-all border border-red-200 group text-red-600"
          >
            <div className="flex items-center space-x-3">
              <FiLogOut className="w-5 h-5" />
              <span className="font-medium">Log Out</span>
            </div>
            <span className="text-red-400 group-hover:text-red-600 transition-colors">→</span>
          </button>
        </div>

        {/* Additional Info */}
        <div className="p-4 bg-white border-t border-gray-100">
          <p className="text-center text-sm text-gray-500">
            Member since {userData?.createdAt ? new Date(userData.createdAt).getFullYear() : "2023"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
