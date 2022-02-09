import "./App.css"
import Navbar from "./Components/Navbar/Navbar"
import Home from "./Components/pages/Home"
import About from "./Components/About/About"
import Gallery from "./Components/gallery/Gallery"
//import MainPage from "./Components/Destinations/MainPage"
import Destinations from "./Components/Destinations/Destinations"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import SinglePage from "./SinglePage/SinglePage"

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/gallery' exact component={Gallery} />
          <Route path='/destinations' exact component={Destinations} />
          {/*<Route path='/mainpage' exact component={MainPage} />*/}
          <Route path='/singlepage/:id' component={SinglePage} />
          {/*<Route path='/signlepage' exact component={SinglePage} />
          <Route path='/blog/:id' component={Blog} />*/}
        </Switch>
      </Router>
    </>
  )
}

export default App
