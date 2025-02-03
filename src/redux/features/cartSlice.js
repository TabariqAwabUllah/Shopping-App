import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        counter: 0
    },
    reducers:{
        addToCart: (state)=>{ state.counter += 1},
        removeToCart: (state) => {
            if(state.counter >0 ){
                state.counter-=1
            } }
    }
})
export const { addToCart, removeToCart} = cartSlice.actions
export default cartSlice.reducer