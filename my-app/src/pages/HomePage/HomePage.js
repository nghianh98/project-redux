import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import ProductList from "../../components/ProductList/ProductList"
import { fetchAsyncProducts, getAllProducts, getAllProductsStatus } from "../../store/productSlice"
import { STATUS } from "../../constants/status"
import Navigation from "../../components/Navigation/Navigation"

const HomePage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAsyncProducts(20))
  }, [dispatch])

  const products = useSelector(getAllProducts)
  const productStatus = useSelector(getAllProductsStatus)
  return (
    <>
      {productStatus === STATUS.LOADING ? "Loading" : <ProductList products={products} />}
      <Navigation />
    </>
  )
}

export default HomePage
