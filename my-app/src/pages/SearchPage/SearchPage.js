import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import ProductList from "../../components/ProductList/ProductList"
import {
  fetchAsyncSearchProduct,
  getSearchProducts,
  getSearchProductsStatus,
  clearSearch,
} from "../../store/searchSlice"
import { STATUS } from "../../constants/status"

const SearchPage = () => {
  const dispatch = useDispatch()
  const searchProducts = useSelector(getSearchProducts)
  const searchProductsStatus = useSelector(getSearchProductsStatus)

  const { searchTerm } = useParams()
  const resultSearch = searchTerm ? searchTerm : ""

  useEffect(() => {
    dispatch(clearSearch())
    dispatch(fetchAsyncSearchProduct(resultSearch))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm])

  if (searchProducts.length === 0) {
    return (
      <div>
        <h3>No Products found.</h3>
      </div>
    )
  }

  return (
    <>
      {searchProductsStatus === STATUS.LOADING ? null : <ProductList products={searchProducts} />}
    </>
  )
}

export default SearchPage
