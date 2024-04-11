import wishSlice from "./wishslice"
import itemslice from "./itemslice";
import {configureStore} from "@reduxjs/toolkit"

const myntraStore = configureStore({
    reducer: {
        items: itemslice.reducer,
        wishlist: wishSlice.reducer
    }
})

export default myntraStore;