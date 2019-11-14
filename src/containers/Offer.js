import React from "react";
import { useParams } from "react-router-dom";
import "../App.css";

const Offer = () => {
  const obj = useParams();
  console.log("offer", obj);

  return <h1>Hello {obj.id}</h1>;
};

export default Offer;
