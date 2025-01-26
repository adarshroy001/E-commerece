import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    items: [] , 
    totalQuantity: 0, 
    totalPrice: 0 
}

const cartSlice = createSlice({
    name: "cart",
    initialState , 
    reducers:{
        addToCart(state ,action ) {
            const item = action.payload ; 
            const exitingItem = state.items.find(i=>i.id === item.id)
            if(exitingItem){
                exitingItem.quantity = exitingItem.quantity + item.quantity  ; 
            }else{
                state.items.push(item) ;
            }
            state.totalQuantity = state.totalQuantity+item.quantity;
        } ,
        removeFromCart(state,action){
            
        }

    }
})