import "./App.css"
import useRouteElements from "./useRoutesElements"
import Header from "../src/components/Header/Header"
function App() {
  const routeElements = useRouteElements()
  return (
    <>
      <Header />
      {routeElements}
    </>
  )
}

export default App
