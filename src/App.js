import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import NavBar from "./components/NavBar"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Career from "./components/Career"
import Blog from "./components/Blog"

const noLocation = ({ location }) => {
  return (
    <h5>
      No match for the path <code>{location.pathname}</code>
    </h5>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/career" component={Career} />
            <Route path="/blog" component={Blog} />
            <Route component={noLocation} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
