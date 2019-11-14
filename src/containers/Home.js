import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      Users :<br />
      <Link to={"/offer/Farid"}>Farid</Link>
      <br />
      <Link to="/offer/Xavier">Xavier</Link>
      <br />
    </div>
  );
};

export default Home;
