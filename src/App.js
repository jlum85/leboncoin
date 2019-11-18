import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cookies from "js-cookie";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import Offers from "./containers/Offers";
import Offer from "./containers/Offer";
import SignUp from "./containers/SignUp";
import "./App.css";

function App() {
  const [user, setUser] = useState({
    token: Cookies.get("token") || "",
    username: Cookies.get("username") || "",
    _id: Cookies.get("_id") || ""
  });
  const [showModal, setShowModal] = useState(false);

  const logIn = user => {
    setShowModal(false);
    const newUser = { ...user };
    Cookies.set("user", newUser.username);
    Cookies.set("token", newUser.token);
    Cookies.set("_id", newUser._id);
    setUser(newUser);
  };

  const logOut = () => {
    Cookies.remove("user");
    Cookies.remove("token");
    Cookies.remove("_id");
    setUser(null);
    setShowModal(false);
  };

  return (
    <Router>
      <Header
        user={user}
        logIn={logIn}
        logOut={logOut}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      {showModal && (
        <Modal
          logIn={logIn}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}

      <Switch>
        <Route path="/offer/:id">
          <Offer user={user} />
        </Route>
        <Route path="/offers">
          <Offers user={user} />
        </Route>

        <Route path="/sign_up">
          <SignUp />
        </Route>

        <Route path="/">
          <Offers user={user} />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
