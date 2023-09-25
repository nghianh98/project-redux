import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import ProductList from "../../components/ProductList/ProductList"
import { fetchAsyncProducts, getAllProducts, getAllProductsStatus } from "../../store/productSlice"
import { STATUS } from "../../constants/status"
import Navigation from "../../components/Navigation/Navigation"

const HomePage = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAsyncProducts(20)) // limit=20
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const products = useSelector(getAllProducts)
  const productStatus = useSelector(getAllProductsStatus)

  const [data, setData] = useState(products)
  const sortPrice = () => {
    setData([...data].sort((a, b) => (a.price < b.price ? 1 : -1)))
  }
  const sortRating = () => {
    setData([...data].sort((a, b) => (a.rating < b.rating ? 1 : -1)))
  }

  return (
    <>
      <button onClick={sortPrice}>Sort Price</button>
      <button onClick={sortRating}>Sort Rating</button>
      {productStatus === STATUS.LOADING ? "Loading" : <ProductList products={products} />}
      <Navigation />
    </>
  )
}

export default HomePage
