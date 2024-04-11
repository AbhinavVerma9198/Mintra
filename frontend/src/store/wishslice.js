import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    wishlistItems: []
}



export const wishSlice = createSlice({
    name: 'wishlists',
    initialState,
    reducers: {
        addToWishlist: (state, action) => {
            let exitItem = state.wishlistItems.findIndex((item) => item.id === action.payload.id);
            console.log(exitItem);
            if (exitItem == -1){
                let newItem = { ...action.payload }
                state.wishlistItems.push(newItem);    
            }
            else {
                alert("This Item Is already exits")
            }

        },
        removeToWishlist: (state, action) => {
            let filteredItems = state.wishlistItems.filter((item) => item.id !== action.payload)
            state.wishlistItems = filteredItems;
        },
    }
})

export const { addToWishlist, removeToWishlist } = wishSlice.actions

export default wishSlice