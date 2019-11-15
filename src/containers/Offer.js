import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../App.css";
import axios from "axios";

const Offer = () => {
  const obj = useParams();

  const [offer, setOffer] = useState({});

  const fetchData = async () => {
    const response = await axios.get(
      "https://leboncoin-api.herokuapp.com/api/offer/" + obj.id
    );
    setOffer({ ...response.data });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Hello {obj.id}</h1>
      <div>
        {offer.pictures && offer.pictures.length > 0 ? (
          <img className="offerImg" src={offer.pictures[0]} alt="Offre"></img>
        ) : (
          <h3>pas image </h3>
        )}
      </div>
    </>
  );
};

export default Offer;
// return (
//   <section>
//     <div className="container">
//       <article>
//         <div>
//           <img src="" alt=""></img>
//           <div className="infos"></div>
//         </div>
//         <div className="description"></div>
//       </article>
//     </div>
//   </section>
//);
