import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../App.css";
import "./Modal.css";

const Modal = props => {
  const [mail, setMail] = useState("jlum@wanadoo.fr");
  const [password, setPassword] = useState("jel");
  const [isError, setIsError] = useState(false);
  const [msgError, setMsgError] = useState("error");
  const history = useHistory();

  const onAnswer = response => {
    const result = response.data;
    if (result && result.token) {
      props.logIn({
        token: result.token,
        username: result.account.username,
        _id: result._id
      });
      history.push("/offers");
    } else {
      setMsgError("Utilisateur ou mot de passe incorrect");
      setIsError(true);
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
    setMsgError("Utilisateur ou mot de passe incorrect");
    setIsError(true);
  };

  const checkParams = () => {
    if (mail === "") {
      setMsgError("Mail non renseigné");
      setIsError(true);
      return false;
    } else if (password === "") {
      setMsgError("Mot de passe non renseigné");
      setIsError(true);
      return false;
    } else {
      setMsgError();
      setIsError(false);
      return true;
    }
  };

  const getLogin = () => {
    if (checkParams()) {
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
    }
  };

  return (
    <div className={props.isModal ? "modal-show" : "modal-hide"}>
      <p
        className="modal-close"
        onClick={() => {
          props.setIsModal(false);
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
              type="email"
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
            <p className={"error " + (isError ? "error-show" : "error-hide")}>
              {msgError}
            </p>
          </div>
          <div className="flexBtn2">
            <h2>Vous n'avez pas de compte ?</h2>
            <button
              className="createAccountBtn"
              onClick={() => {
                props.setIsModal(false);
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
