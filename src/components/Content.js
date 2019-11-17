import React from "react";
import CardOffer from "./CardOffer";
import NavPage from "./NavPage";
import "./Content.css";
import "../App.css";

const Content = props => {
  const elements = props.offers.map((item, index) => {
    return <CardOffer key={item._id} offer={item}></CardOffer>;
  });

  return (
    <div className="content container">
      {elements}
      <NavPage
        pageMax={props.pageMax}
        numPage={props.numPage}
        onChangePage={props.onChangePage}
        onPageNext={props.onPageNext}
        onPagePrev={props.onPagePrev}
      ></NavPage>
    </div>
  );
};

export default Content;
