import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import CardInfoSignUp from "../components/CardInfoSignUp";
import Eye from "../images/eye.svg";
import Notif from "../images/notification.svg";
import Schedule from "../images/schedule.svg";

import "../App.css";
import "./SignUp.css";

const SignUp = props => {
  const [pseudo, setPseudo] = useState("jlum");
  const [mail, setMail] = useState("jlum@wanadoo.fr");
  const [pass1, setPass1] = useState("jel");
  const [pass2, setPass2] = useState("jel");
  const [cdg, setCdg] = useState(true);
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
      props.logIn({
        token: result.token,
        username: result.account.username,
        _id: result._id
      });
      history.push("/offers");
    } else {
      setError("Bad Request");
    }
    return result;
  };

  const onError = error => {
    const result = error.response;
    let msg = "Bad Request";
    if (result) {
      if (result.data) {
        if (result.data.userMsg) {
          msg = result.data.userMsg;
        }
      } else {
        console.log(result);
      }
    } else {
      console.log(error);
    }
    setError(msg);
  };

  const checkParams = () => {
    let result = false;
    if (!pseudo) {
      setError("Pseudo non renseigné");
    } else if (!mail) {
      setError("Mail non renseigné");
    } else if (!pass1) {
      setError("Mot de passe non renseigné");
    } else if (pass1 !== pass2) {
      setError("les mots de passe ne sont pas identiques!!");
    } else if (!cdg) {
      setError("Vous devez accepter les conditions générales de vente");
    } else {
      setMsgError();
      setIsError(false);
      result = true;
    }
    return result;
  };

  const getToken = async () => {
    if (checkParams()) {
      const formData = new FormData();
      formData.append("email", mail);
      formData.append("username", pseudo);
      formData.append("password", pass1);

      axios
        .post("http://localhost:4000/user/sign_up", formData, {
          "Content-Type": "multipart/form-data"
        })
        .then(onAnswer)
        .catch(onError);
    }
  };

  return (
    <section>
      <div className="containerSignUp">
        <div className="signUp box-shadow">
          <div className="signLeft">
            <h2>Pourquoi créer un compte ?</h2>
            <CardInfoSignUp
              logo={Schedule}
              title="Gagnez du temps"
              description="Publiez vos annonces rapidement, avec vos informations pré-remplies chaque fois que vous souhaitez déposer une nouvelle annonce."
            />
            <CardInfoSignUp
              logo={Notif}
              title="Soyez les premiers informés"
              description="Créez des alertes Immo ou Emploi et ne manquez jamais l’annonce qui vous intéresse."
            />
            <CardInfoSignUp
              logo={Eye}
              title="Visibilité"
              description="Suivez les statistiques de vos annonces (nombre de fois où votre annonce a été vue, nombre de contacts reçus)."
            />
          </div>
          <div className="signRight">
            <h2>Créer un compte ? </h2>
            <form
              className="formSignUp"
              onSubmit={event => {
                console.log("submit signup");
                getToken();
                event.preventDefault();
              }}
            >
              <div className="formContainer">
                <div className="signUpInput">
                  <p>Pseudo *</p>
                  <input
                    className="inputSU"
                    type="text"
                    value={pseudo}
                    required
                    onChange={e => {
                      setPseudo(e.target.value);
                    }}
                  />
                  <p>Adresse mail *</p>
                  <input
                    className="inputSU"
                    type="text"
                    required
                    value={mail}
                    onChange={e => {
                      setMail(e.target.value);
                    }}
                  />

                  <div className="flexPass">
                    <div className="passLeft">
                      <p>Mot de passe *</p>
                      <input
                        className="inputPass"
                        type="password"
                        required
                        value={pass1}
                        onChange={e => {
                          setPass1(e.target.value);
                        }}
                      />
                    </div>
                    <div className="passRight">
                      <p>Confirmer le mot de passe *</p>
                      <input
                        className="inputPass"
                        type="password"
                        required
                        value={pass2}
                        onChange={e => {
                          setPass2(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className="inputCdg">
                  <input
                    type="checkbox"
                    id="cdg"
                    name="cdg"
                    checked={cdg}
                    onChange={e => {
                      if (isError) {
                        setIsError(false);
                      }
                      setCdg(e.target.checked);
                    }}
                  ></input>
                  <label htmlFor="cdg">
                    J’accepte les Conditions Générales de Vente et les
                    Conditions Générales d’Utilisation.
                  </label>
                </div>

                <div className="flexBtn">
                  <input
                    type="button"
                    className="signBtn"
                    value="Créer mon Compte Personnel"
                  ></input>
                </div>
              </div>
              <p className={"error " + (isError ? "error-show" : "error-hide")}>
                {msgError}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
