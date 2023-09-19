import { createSlice } from "@reduxjs/toolkit"

const fetchFromLocalStorage = () => {
  let cart = localStorage.getItem("cart")
  if (cart) {
    return JSON.parse(localStorage.getItem("cart"))
  } else {
    return []
  }
}
const storeInLocalStorage = (data) => {
  localStorage.setItem("cart", JSON.stringify(data))
}
const initialState = {
  carts: fetchFromLocalStorage(),
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isItemInCart = state.carts.find((item) => item.id === action.payload.id)

      if (isItemInCart) {
        const tempCart = state.carts.map((item) => {
          if (item.id === action.payload.id) {
            let tempQty = item.quantity + action.payload.quantity
            let tempTotalPrice = tempQty * item.price
            return {
              ...item,
              quantity: tempQty,
              totalPrice: tempTotalPrice,
            }
          } else {
            return item
          }
        })
        state.carts = tempCart
        storeInLocalStorage(state.carts)
      } else {
        state.carts.push(action.payload)
        storeInLocalStorage(state.carts)
      }
    },
    removeFromCart: (state, action) => {
      const tempCart = state.carts.filter((item) => item.id !== action.payload)
      state.carts = tempCart
      storeInLocalStorage(state.carts)
    },
    clearCart: (state) => {
      state.carts = []
      storeInLocalStorage(state.carts)
    },
  },
})

export const { addToCart, removeFromCart, clearCart, getCartTotal } = cartSlice.actions
export const getAllCarts = (state) => state.cart.carts
export const getCartItemsCount = (state) => state.cart.itemsCount
export const getCartMessageStatus = (state) => state.cart.isCartMessageOn

export default cartSlice.reducer