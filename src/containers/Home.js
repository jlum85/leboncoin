import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import Offers from "./Offers";
import Offer from "./Offer";

const Home = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/offers">
          <Offers></Offers>
        </Route>

        <Route path="/offer/:id">
          <Offer></Offer>
        </Route>
        <Route path="/">
          <Offers></Offers>
        </Route>
      </Switch>
    </Router>
  );
};

export default Home;
