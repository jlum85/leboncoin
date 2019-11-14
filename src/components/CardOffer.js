import React from "react";
import moment from "moment";
import "moment/locale/fr";

const CardOffer = props => {
  const item = props.offer;
  let offerImg = "";
  if (item.pictures.length > 0) {
    offerImg = item.pictures[0];
  }
  return (
    <div className="pdtCard">
      <div className="pdt-Image">
        {offerImg ? (
          <img className="offerImg" src={offerImg} alt="Offre"></img>
        ) : (
          <></>
        )}
      </div>

      <div className="pdtInfo">
        <div className="pdtInfo-top">
          <div className="pdt-title"> {item.title}</div>
          <div className="pdt-price"> {item.price}</div>
        </div>

        <div className="pdt-created">
          <span>
            {moment(item.created).format("L")} à{" "}
            {moment(item.created).format("LTS")}{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardOffer;
