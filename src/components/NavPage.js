import React from "react";
import ArrowBack from "../images/arrow_back.svg";
import ArrowForward from "../images/arrow_forward.svg";
import "../App.css";
import "./NavPage.css";

const NavPage = props => {
  const counter = Array(props.pageMax).fill(1);
  const currentPage = props.numPage;

  const elements = counter.map((item, index) => {
    return (
      <span
        onClick={e => {
          props.onChangePage(index + 1);
        }}
        className={index + 1 === currentPage ? "numPage activePage" : "numPage"}
        key={index}
      >
        {index + 1}
      </span>
    );
  });

  return (
    <div className="flexPage">
      <div className="navPage">
        <img
          onClick={() => {
            props.onPagePrev();
          }}
          className={currentPage === 1 ? "disableArrow" : ""}
          src={ArrowBack}
          alt="Précédent"
        ></img>
        {elements}
        <img
          onClick={() => {
            props.onPageNext();
          }}
          className={currentPage === props.pageMax ? "disableArrowa" : ""}
          src={ArrowForward}
          alt="Suivant"
        ></img>
      </div>
    </div>
  );
};

export default NavPage;
