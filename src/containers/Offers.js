import React, { useState, useEffect } from "react";
import Content from "../components/Content";
import axios from "axios";

const Offers = () => {
  // const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(0);
  const [offers, setOffers] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(
      "https://leboncoin-api.herokuapp.com/api/offer/with-count"
    );

    setCount(response.data.count);
    setOffers(response.data.offers);
  };

  // A la création
  useEffect(() => {
    fetchData();
    // setIsLoading(false);
  }, []);

  return (
    <div>
      {/* <h2>Offers, count = {count} </h2> */}
      {/* <Content offers={offers}> </Content> */}
    </div>
  );
};

export default Offers;

// import Content from "./components/Content";
// import Footer from "./components/Footer";

// <div className="App">
//   <Header />
//   <Content />
//   <Footer />
// </div>
