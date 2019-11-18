import axios from "axios";
import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import "../App.css";
import "./Modal.css";

const Modal = props => {
  const [mail, setMail] = useState("jlum@wanadoo.fr");
  const [password, setPassword] = useState("jel");
  const history = useHistory();

  const onAnswer = response => {
    console.log("onAnswer");
    console.log(response);
    const result = response.data;
    if (result && result.token) {
      props.logIn({
        token: result.token,
        username: result.account.username,
        _id: result._id
      });
      history.push("/offers");
    }
    return result;
  };

  const onError = error => {
    const result = error.response;
    if (result) {
      console.log(result.status);
      console.log(result.statusText);
      if (result.data) {
        console.log(result.data);
      } else {
        console.log(result);
      }
    } else {
      console.log(error);
    }
  };

  const getLogin = () => {
    axios
      .post(
        "https://leboncoin-api.herokuapp.com/api/user/log_in",
        {
          email: mail,
          password: password
        },
        {
          headers: { Accept: "application/json" }
        }
      )
      .then(onAnswer)
      .catch(onError);
  };

  return (
    <div className={props.showModal ? "modal-show" : "modal-hide"}>
      <p
        className="modal-show-close"
        onClick={() => {
          props.setShowModal(false);
          history.push("/offers");
        }}
      >
        X
      </p>
      <div className="modal-content">
        <form
          className="formConnect"
          onSubmit={event => {
            getLogin();
            event.preventDefault();
          }}
        >
          <h2 className="connexion">Connexion</h2>
          <div className="signInput">
            <p>Adresse email</p>
            <input
              className="inputSU"
              type="text"
              value={mail}
              onChange={e => setMail(e.target.value)}
            />
            <p>Mot de passe</p>
            <input
              className="inputSU"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          <div className="flexBtn">
            <button className="signBtn">Se connecter</button>
          </div>
          <div className="flexBtn">
            <h2>Vous n'avez pas de compte ?</h2>
            <button
              className="createAccountBtn"
              onClick={() => {
                console.log("créer un compte");
                props.setShowModal(false);
                history.push("/sign_up");
              }}
            >
              Créer un compte
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
