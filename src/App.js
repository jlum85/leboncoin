import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Offers from "./containers/Offers";
import Offer from "./containers/Offer";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route path="/offer/:id">
          <Offer />
        </Route>
        <Route path="/offers">
          <Offers />
        </Route>

        <Route path="/">
          <Offers />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
