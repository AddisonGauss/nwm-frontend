import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from "./pages"
import ShowProductPage from "./pages/ShowProductPage"
//import ShowProductPage from './pages'

function App() {
  return (
    <>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/product/:id" component={ShowProductPage} />
      </Router>
    </>
  )
}

export default App
