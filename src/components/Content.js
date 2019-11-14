import React from "react";
import CardOffer from "./CardOffer";

const Content = props => {
  const elements = props.offers.map((item, index) => {
    return <CardOffer key={item._id} offer={item}></CardOffer>;
  });

  return (
    <div className="content">
      <h2>offers</h2>
      {elements}
    </div>
  );
};

export default Content;
