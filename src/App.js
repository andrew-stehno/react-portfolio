import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import About from "./containers/About";
import Portfolio from "./containers/Portfolio";
import Contact from "./containers/Contact";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={About}/>
            <Route exact path="/portfolio" component={Portfolio}/>
            <Route exact path="/contact" component={Contact}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
