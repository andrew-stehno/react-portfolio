import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import About from "./containers/About";
import Portfolio from "./containers/Portfolio";
import Contact from "./containers/Contact";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <header>
            <Navbar/>
          </header>
          <Switch>
            <Route exact path="/" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
