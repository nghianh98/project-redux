import React from "react"
import { Link } from "react-router-dom"
import TableCell from "@mui/material/TableCell"

const Product = ({ product }) => {
  return (
    <>
      <TableCell>{product.id}</TableCell>
      <TableCell align="right">
        <img src={product.thumbnail} alt="" style={{ width: "60px", height: "60px" }} />
      </TableCell>
      <TableCell align="left">
        <Link to={`/product/${product.id}`}>{product.title}</Link>
      </TableCell>
      <TableCell align="right">{product.price}$</TableCell>
      <TableCell align="right">{product.discountPercentage} %</TableCell>
      <TableCell align="center">{product.category}</TableCell>
      <TableCell align="center">{product.brand}</TableCell>
      <TableCell align="center">{product.rating}</TableCell>
      <TableCell align="center">{product.stock}</TableCell>
      <TableCell align="left">{product.description}</TableCell>
    </>
  )
}

export default Product
