import React, { useState, useEffect } from "react";
import Content from "../components/Content";
import Search from "../components/Search";
import Footer from "../components/Footer";
import axios from "axios";
import "../App.css";

const offersByPage = 3;

const Offers = () => {
  // const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(0);
  const [offers, setOffers] = useState([]);
  const [numPage, setNumPage] = useState(1);

  const fetchData = async () => {
    const response = await axios.get(
      "https://leboncoin-api.herokuapp.com/api/offer/with-count?skip=" +
        (numPage - 1) * offersByPage +
        "&limit=" +
        offersByPage
    );

    setCount(response.data.count);
    setOffers(response.data.offers);
  };

  const onPagePrev = () => {
    if (numPage > 1) {
      setNumPage(numPage - 1);
    }
  };
  const onPageNext = () => {
    if (numPage < count) {
      setNumPage(numPage + 1);
    }
  };
  // A la création
  useEffect(() => {
    fetchData();
    // setIsLoading(false);
  }, []);

  // A chaque changement de page
  useEffect(() => {
    fetchData();
  }, [numPage]);

  return (
    <>
      {/* <Search></Search> */}
      <Content
        offers={offers}
        pageMax={Math.ceil(count / offersByPage)}
        numPage={numPage}
        onChangePage={setNumPage}
        onPageNext={onPageNext}
        onPagePrev={onPagePrev}
      ></Content>
      <Footer />
    </>
  );
};

export default Offers;
