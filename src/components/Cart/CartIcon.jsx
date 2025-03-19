import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartIcon = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <Link to="/cart" style={{ textDecoration: "none", color: "black" }}>
            🛒 Cart ({totalItems})
        </Link>
    );
};

export default CartIcon;
