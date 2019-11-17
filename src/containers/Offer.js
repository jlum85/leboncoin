import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../App.css";
import "./Offer.css";
import axios from "axios";

const Offer = () => {
  const obj = useParams();
  const [offer, setOffer] = useState({});

  console.log(offer);

  const fetchData = async () => {
    const response = await axios.get(
      "https://leboncoin-api.herokuapp.com/api/offer/" + obj.id
    );
    setOffer({ ...response.data });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const getFormattedDate = () => {
    const dateCreated = new Date(offer.created);
    return (
      dateCreated.toLocaleDateString() +
      " à " +
      dateCreated.toLocaleTimeString()
    );
  };

  return (
    <section className="offer">
      <div className="container">
        <article>
          <div className="offer-content">
            <div className="offer-detail box-shadow">
              <div className="bg-silver center">
                {offer.pictures && offer.pictures.length > 0 ? (
                  <img
                    className="offerImg"
                    src={offer.pictures[0]}
                    alt="Offre"
                  ></img>
                ) : (
                  <h3>No image </h3>
                )}
              </div>
              <div className="offer-infos">
                <div className="offer-inf">
                  <div className="offer-title">{offer.title}</div>
                  <div className="offer-price">{offer.price}</div>
                </div>
                <div className="offer-created">{getFormattedDate()}</div>
              </div>
            </div>
            <div className="offer-description">
              <div className="offer-title">Description</div>
              <div>{offer.description}</div>
            </div>
          </div>
        </article>
        <aside className="userInfos box-shadow">
          <div className="user-detail">
            {offer.creator ? offer.creator.account.username : ""}
            <div className="user-count"> 17 annonces en lignes </div>
          </div>
          <div className="puchaseFlex">
            <button className="puchaseBtn">Acheter</button>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Offer;
