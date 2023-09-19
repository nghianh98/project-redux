import { configureStore } from "@reduxjs/toolkit"
import productReducer from "./productSlice"
import searchReducer from "./searchSlice"
import cartReducer from "./cartSlice"

const store = configureStore({
  reducer: {
    product: productReducer,
    search: searchReducer,
    cart: cartReducer,
  },
})

export default store
