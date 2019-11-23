import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../App.css";
import "./Modal.css";

// back local : "http://localhost:4000/user/sign_in"
const API_BACK = "https://jl-back-leboncoin.herokuapp.com/user/sign_in";

const Modal = props => {
  const [mail, setMail] = useState("jlum@wanadoo.fr");
  const [password, setPassword] = useState("jel");
  const [isError, setIsError] = useState(false);
  const [msgError, setMsgError] = useState("error");
  const history = useHistory();

  const setError = msgError => {
    setMsgError(msgError);
    setIsError(true);
  };

  const onAnswer = response => {
    const result = response.data;
    if (result && result.token) {
      // console.log(result);
      props.logIn({
        token: result.token,
        username: result.account.username,
        _id: result._id
      });
    } else {
      setError("Utilisateur ou mot de passe incorrect");
    }
    return result;
  };

  const onError = error => {
    const result = error.response;
    if (result) {
      if (result.data) {
        console.log(result.data);
      } else {
        console.log(result);
      }
    } else {
      console.log(error);
    }
    setError("Utilisateur ou mot de passe incorrect");
  };

  const checkParams = () => {
    let result = false;
    if (!mail) {
      setError("Mail non renseigné");
    } else if (!password) {
      setError("Mot de passe non renseigné");
    } else {
      setMsgError();
      setIsError(false);
      result = true;
    }
    return result;
  };

  const getLogin = () => {
    if (checkParams()) {
      const data = new FormData();
      data.append("email", mail);
      data.append("password", password);

      axios
        .post(API_BACK, data, { headers: { Accept: "application/json" } })
        .then(onAnswer)
        .catch(onError);
    }
  };

  return (
    <div className={props.isModal ? "modal-show" : "modal-hide"}>
      <p className="modal-close" onClick={() => props.setIsModal(false)}>
        X
      </p>
      <div className="modal-content">
        <form
          className="formConnect"
          onSubmit={event => {
            event.preventDefault();
            getLogin();
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
                history.push("/sign_up"); // on peut aussi passer par <Link to="/sign-up"
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
