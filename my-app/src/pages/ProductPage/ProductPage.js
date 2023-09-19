import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { fetchAsyncProduct, getProduct } from "../../store/productSlice"

const ProductPage = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const product = useSelector(getProduct)

  useEffect(() => {
    dispatch(fetchAsyncProduct(id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  return (
    <>
      <img alt="" src={product.thumbnail} style={{ width: "150px", height: "150px" }} />
      <p>{product.title}</p>
      <p>Description: {product.description}</p>
      <p>Price: {product.price}</p>
    </>
  )
}
export default ProductPage
