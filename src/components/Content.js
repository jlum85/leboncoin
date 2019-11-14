import React from "react";
import CardOffer from "./CardOffer";
import NavPage from "./NavPage";
import "./Content.css";

const Content = props => {
  const elements = props.offers.map((item, index) => {
    return <CardOffer key={item._id} offer={item}></CardOffer>;
  });

  return (
    <div className="content">
      {elements}
      <NavPage pageMax={props.pageMax} numPage={props.numPage}></NavPage>
    </div>
  );
};

export default Content;
