import axios from "axios";
import React, { useState } from "react";

import "../App.css";
import "./Modal.css";

const Modal = props => {
  const [mail, setMail] = useState("jlum@wanadoo.fr");
  const [password, setPassword] = useState("jel");

  const onAnswer = response => {
    const result = response.data;
    console.log("OnAnswer : ", result);

    if (response.data && response.data.token) {
      props.logIn({
        token: response.data.token,
        username: response.data.account.username,
        _id: response.data._id
      });

      props.history.push("/");
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
    <div className="modal">
      <div className="modalContent">
        <form
          className="formPass"
          onSubmit={event => {
            getLogin();
            event.preventDefault();
          }}
        >
          <div className="signInput">
            <p>Adresse email</p>
            <input
              className="inputSU"
              type="text"
              value={mail}
              onChange={e => {
                setMail(e.target.value);
              }}
            />
            <p>Mot de passe</p>
            <input
              className="inputSU"
              type="password"
              value={password}
              onChange={e => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <div className="flexBtn">
            <button
              className="signBtn"
              onClick={() => {
                console.log("se conneter");
              }}
            >
              Se connecter{" "}
            </button>
          </div>
          <div className="flexBtn">
            <h2>Vous n'avez pas de compte ?</h2>
            <button
              className="createAccountBtn"
              onClick={() => {
                console.log("créer un compte");
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
