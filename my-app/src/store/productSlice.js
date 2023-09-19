import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { BASE_URL } from "../constants/apiURL"
import { STATUS } from "../constants/status"

const initialState = {
  products: [],
  productsStatus: STATUS.IDLE,
  product: [],
  productStatus: STATUS.IDLE,
}
export const fetchAsyncProducts = createAsyncThunk("products/fetch", async (limit) => {
  const response = await fetch(`${BASE_URL}products?limit=${limit}`)
  const data = await response.json()
  return data.products
})

export const fetchAsyncProduct = createAsyncThunk("product/fetch", async (id) => {
  const response = await fetch(`${BASE_URL}products/${id}`)
  const data = await response.json()
  return data
})

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncProducts.pending, (state) => {
        state.productsStatus = STATUS.LOADING
      })
      .addCase(fetchAsyncProducts.fulfilled, (state, action) => {
        state.products = action.payload
        state.productsStatus = STATUS.SUCCEEDED
      })
      .addCase(fetchAsyncProducts.rejected, (state) => {
        state.productsStatus = STATUS.FAILED
      })

      .addCase(fetchAsyncProduct.pending, (state) => {
        state.productStatus = STATUS.LOADING
      })
      .addCase(fetchAsyncProduct.fulfilled, (state, action) => {
        state.product = action.payload
        state.productStatus = STATUS.SUCCEEDED
      })
      .addCase(fetchAsyncProduct.rejected, (state) => {
        state.productStatus = STATUS.FAILED
      })
  },
})

export const getAllProducts = (state) => state.product.products
export const getAllProductsStatus = (state) => state.product.productsStatus
export const getProduct = (state) => state.product.product
export const getProductStatus = (state) => state.product.productStatus

export default productSlice.reducer
