import { useRoutes } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import ProductPage from "./pages/ProductPage/ProductPage"
import SearchPage from "./pages/SearchPage/SearchPage"

export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/product/:id",
      element: <ProductPage />,
    },
    {
      path: "/search/:searchTerm",
      element: <SearchPage />,
    },
    {
      path: "/search/",
      element: <SearchPage />,
    },
  ])

  return routeElements
}
