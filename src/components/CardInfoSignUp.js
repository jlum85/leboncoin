import React from "react";
import "./CardInfoSignUp.css";

const CardInfoSignUp = props => {
  return (
    <div className="signInfos">
      <div className="signUpImg">
        <img src={props.logo} alt=""></img>
      </div>
      <div className="signInfosDetail">
        <p className="signInfoTitle">{props.title}</p>
        <p className="signInfoDescription">{props.description}</p>
      </div>
    </div>
  );
};

export default CardInfoSignUp;
