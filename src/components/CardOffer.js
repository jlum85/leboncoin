import React from "react";
import moment from "moment";
import "moment/locale/fr";
import { Link } from "react-router-dom";

const CardOffer = props => {
  const item = props.offer;
  let offerImg = "";
  if (item.pictures && item.pictures.length >= 0) {
    offerImg = item.pictures[0];
  }
  return (
    <Link className="cardLink" to={"offer/" + item._id}>
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
            <div className="pdt-price">
              {item.price ? item.price + " € " : ""}
            </div>
          </div>

          <div className="pdt-created">
            <span>
              {moment(item.created).format("L")} à{" "}
              {moment(item.created).format("LTS")}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardOffer;
