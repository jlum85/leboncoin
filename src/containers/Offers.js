import React, { useState, useEffect } from "react";
import Content from "../components/Content";
import Search from "../components/Search";
import axios from "axios";
import "../App.css";

const offersByPage = 3;
const API = "https://leboncoin-api.herokuapp.com/api/offer/with-count";
const tabSort = ["price-desc", "price-asc", "date-desc", "date-asc"];

const Offers = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(0);
  const [offers, setOffers] = useState([]);
  const [numPage, setNumPage] = useState(1);
  const [paramApi, setParamApi] = useState({
    title: "cd",
    priceMin: 0,
    priceMax: 0,
    sort: "price-asc",
    skip: (numPage - 1) * offersByPage,
    limit: offersByPage
  });

  // console.log("Offers : ");
  // console.log(isLoading);
  // console.log(count);
  // console.log(offers);
  // console.log(numPage);
  // console.log(paramApi);

  const getUrl = () => {
    let firstParam = true;
    const getSeparator = () => {
      if (firstParam) {
        firstParam = false;
        return "?";
      } else {
        return "&";
      }
    };
    let url = API;

    if (paramApi.title !== "") {
      url += getSeparator() + "title=" + paramApi.title;
    }
    if (paramApi.priceMin > 0) {
      url += getSeparator() + "priceMin=" + paramApi.priceMin;
    }
    if (paramApi.priceMax > 0) {
      url += getSeparator() + "priceMax=" + paramApi.priceMax;
    }
    if (paramApi.sort !== "" && tabSort.includes(paramApi.sort)) {
      url += getSeparator() + "sort=" + paramApi.sort;
    }
    if (paramApi.skip >= 0) {
      url += getSeparator() + "skip=" + paramApi.skip;
    }
    if (paramApi.limit > 0) {
      url += getSeparator() + "limit=" + paramApi.limit;
    }
    // console.log(url);
    return url;
  };

  const fetchData = async () => {
    const response = await axios.get(getUrl());
    setCount(response.data.count);
    setOffers(response.data.offers);
    setIsLoading(false);
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
    // console.log("fetch create");
    fetchData();
  }, []);

  // A chaque changement de page
  useEffect(() => {
    // console.log("fetch page");
    fetchData();
  }, [numPage]);

  return (
    <section>
      <Search
        paramApi={paramApi}
        setParamApi={setParamApi}
        fetchData={fetchData}
      ></Search>
      {isLoading ? (
        <p> Chargement en cours</p>
      ) : (
        <Content
          offers={offers}
          pageMax={Math.ceil(count / offersByPage)}
          numPage={numPage}
          onChangePage={setNumPage}
          onPageNext={onPageNext}
          onPagePrev={onPagePrev}
        ></Content>
      )}
    </section>
  );
};

export default Offers;
