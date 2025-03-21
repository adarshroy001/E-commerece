import { useSelector } from "react-redux";

const useAuth = () => {
    const isLoggedIn = useSelector((state) => state.auth.userLogedIn); // Use correct key
    return isLoggedIn;
};

export default useAuth;