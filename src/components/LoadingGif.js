import React from "react";
import "../App.css";
import loadingRound from "../images/loading-round.gif";

const LoadingGif = (props) => {
  // Gif animé pour faire patentier le temps de la requête
  return (
    <div className="loadingBox">
      {props.title} <br></br>
      <img className="loadingRound" src={loadingRound} alt="Chargement"></img>
    </div>
  );
};

export default LoadingGif;
