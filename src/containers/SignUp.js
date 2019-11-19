import axios from "axios";
import React, { useState } from "react";
import CardInfoSignUp from "../components/CardInfoSignUp";
import Eye from "../images/eye.svg";
import Notif from "../images/notification.svg";
import Schedule from "../images/schedule.svg";

import "../App.css";
import "./SignUp.css";

const SignUp = () => {
  const [pseudo, setPseudo] = useState("jlum");
  const [mail, setMail] = useState("jlum@wanadoo.fr");
  const [pass1, setPass1] = useState("jel");
  const [pass2, setPass2] = useState("jel");

  const onAnswer = response => {
    const result = response.data;
    console.log("OnAnswer : ", result);
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

  const checkParams = () => {};

  const getToken = () => {
    axios
      .post(
        "https://leboncoin-api.herokuapp.com/api/user/sign_up",
        {
          email: mail,
          username: pseudo,
          password: pass1
        },
        {
          headers: { Accept: "application/json" }
        }
      )
      .then(onAnswer)
      .catch(onError);
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
              className="formPass"
              onSubmit={event => {
                console.log("submit signup");
                getToken();
                event.preventDefault();
              }}
            >
              <div className="signInput">
                <p>Pseudo *</p>
                <input
                  className="inputSU"
                  type="text"
                  value={pseudo}
                  onChange={e => {
                    setPseudo(e.target.value);
                  }}
                />
                <p>Adresse mail *</p>
                <input
                  className="inputSU"
                  type="text"
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
                      value={pass1}
                      onChange={e => {
                        setPass1(e.target.value);
                      }}
                    />
                  </div>
                  <div className="passLeft">
                    <p>Confirmer le mot de passe *</p>
                    <input
                      className="inputPass"
                      type="password"
                      value={pass2}
                      onChange={e => {
                        setPass2(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="inputCdg">
                <input type="checkbox" id="cdg" name="cdg"></input>
                <label htmlFor="cdg">
                  J’accepte les Conditions Générales de Vente et les Conditions
                  Générales d’Utilisation.
                </label>
              </div>

              <div className="flexBtn">
                <input
                  type="submit"
                  className="signBtn"
                  value="Créer mon Compte Personnel"
                ></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
