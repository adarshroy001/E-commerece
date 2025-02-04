import useAuth from "./useAuth";

const useCart = () => {
    const isAuth = useAuth();
    if (!isAuth) {
        return console.log('user Not Authenticated');
    }

}

export default useCart;