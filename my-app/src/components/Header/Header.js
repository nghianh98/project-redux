import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { fetchAsyncSearchProduct } from "../../store/searchSlice"

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const dispatch = useDispatch()

  const handleSearchTerm = (e) => {
    e.preventDefault()
    setSearchTerm(e.target.value)
    dispatch(fetchAsyncSearchProduct(e.target.value))
  }
  return (
    <header>
      <Link to="/">Home</Link>
      <input
        type="text"
        placeholder="Search your items here"
        onChange={(e) => handleSearchTerm(e)}
      />
      <Link to={`search/${searchTerm}`}>Search</Link>
    </header>
  )
}

export default Header
