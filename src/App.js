import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Offers from "./containers/Offers";
import Offer from "./containers/Offer";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <hr />
      <Switch>
        <Route path="/offers">
          <Offers></Offers>
        </Route>

        <Route path="/offer/:id">
          <Offer></Offer>
        </Route>
        <Route path="/">
          {/* <Home /> */}
          <Offers></Offers>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
