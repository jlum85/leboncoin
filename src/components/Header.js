import React from "react";
import { useHistory, Link } from "react-router-dom";
import "../App.css";
import "./Header.css";
import PublishBtn from "../images/Publish.png";
import SearchBtn from "../images/Search.svg";
import logIn from "../images/Connect.svg";
import logOut from "../images/logOut.svg";

const Header = props => {
  const history = useHistory();
  return (
    <header>
      <ul className="container menu">
        <li>
          <ul>
            <li
              className="logo"
              onClick={() => {
                props.setIsModal(false);
                history.push("/offers");
              }}
            >
              leboncoin
            </li>
            <Link to={"publish"}>
              <img src={PublishBtn} alt="publish"></img>
            </Link>
            <li>
              <Link to={"offers"}>
                <img src={SearchBtn} alt="Search"></img>
              </Link>
            </li>
          </ul>
        </li>
        <>
          {props.user && props.user.token ? (
            <li
              className="connect"
              onClick={() => {
                console.log("disconnect");
                props.logOut();
              }}
            >
              <img src={logOut} alt="Connection"></img>
            </li>
          ) : (
            <li
              className="connect"
              onClick={() => {
                if (!props.isModal) {
                  console.log("connect");
                  props.setIsModal(true);
                }
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
