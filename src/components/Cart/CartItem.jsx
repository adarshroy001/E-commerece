import React from "react";
import { useDispatch } from "react-redux";
import { updateCart, removeFromCart } from "../redux/cartSlice";

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    return (
        <div style={{ borderBottom: "1px solid #ccc", padding: "10px 0" }}>
            <h4>{item.productId.name}</h4>
            <p>Price: ${item.productId.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => dispatch(updateCart({ productId: item.productId._id, quantity: item.quantity + 1 }))}>+</button>
            <button onClick={() => dispatch(updateCart({ productId: item.productId._id, quantity: item.quantity - 1 }))}>-</button>
            <button onClick={() => dispatch(removeFromCart(item.productId._id))}>Remove</button>
        </div>
    );
};

export default CartItem;
