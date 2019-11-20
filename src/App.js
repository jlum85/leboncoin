import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cookies from "js-cookie";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import Offers from "./containers/Offers";
import Offer from "./containers/Offer";
import SignUp from "./containers/SignUp";
import Publish from "./containers/Publish";
import "./App.css";

function App() {
  const [user, setUser] = useState({
    token: Cookies.get("token") || "",
    username: Cookies.get("username") || "",
    _id: Cookies.get("_id") || ""
  });
  const [isModal, setIsModal] = useState(false);

  const logIn = user => {
    setIsModal(false);
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
    setIsModal(false);
  };

  return (
    <Router>
      <Header
        user={user}
        logIn={logIn}
        logOut={logOut}
        isModal={isModal}
        setIsModal={setIsModal}
      />
      {isModal && (
        <Modal logIn={logIn} isModal={isModal} setIsModal={setIsModal} />
      )}
      <Switch>
        <Route path="/offer/:id">
          <Offer user={user} />
        </Route>
        <Route path="/offers">
          <Offers user={user} />
        </Route>

        <Route path="/sign_up">
          <SignUp logIn={logIn} />
        </Route>
        <Route path="/publish">
          <Publish user={user} />
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
