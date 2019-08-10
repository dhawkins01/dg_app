import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from "./components/pages/Welcome";
import CourseSearch from "./components/pages/CourseSearch";
import Nav from "./components/Nav.js";
import "./App.css";


class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/search" component={CourseSearch} />
          {/* <Route exact path="/books" component={Books} /> */}
          {/* <Route exact path="/books/:id" component={Detail} /> */}
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </div>
    </Router>
      
    );
  }
}

export default App;
