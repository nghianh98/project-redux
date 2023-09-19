import Product from "../Product/Product"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"

export default function ProductList({ products }) {
  return (
    <>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center">ID</TableCell>
                <TableCell align="center">Thumbnail</TableCell>
                <TableCell align="center">Title</TableCell>
                <TableCell align="center">Price</TableCell>
                <TableCell align="center">Discount Percentage</TableCell>
                <TableCell align="center">Category</TableCell>
                <TableCell align="center">Brand</TableCell>
                <TableCell align="center">Rating</TableCell>
                <TableCell align="center">Stock</TableCell>
                <TableCell align="center">Description</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <Product product={product}></Product>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  )
}
