import React from "react";
import "../App.css";
import "./Header.css";
import PublishBtn from "../images/Publish.png";
import SearchBtn from "../images/Search.svg";
import logIn from "../images/Connect.svg";
import logOut from "../images/logOut.svg";

const Header = props => {
  console.log("Header : ", props);

  return (
    <header>
      <ul className="container menu">
        <li>
          <ul>
            <li className="logo">leboncoin</li>
            <li>
              <img src={PublishBtn} alt="publish"></img>
            </li>
            <li>
              <img src={SearchBtn} alt="Search"></img>
            </li>
          </ul>
        </li>
        <>
          {props.user ? (
            <li
              className="connect"
              onClick={() => {
                props.logOut();
              }}
            >
              <img src={logOut} alt="Connection"></img>
            </li>
          ) : (
            <li
              className="connect"
              onClick={() => {
                props.setShowModal(false);
              }}
            >
              <img src={logIn} alt="Connection"></img>
            </li>
          )}
        </>
      </ul>
    </header>
  );
};

export default Header;
