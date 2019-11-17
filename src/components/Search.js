import React from "react";
import "../App.css";
import "./Search.css";

const Search = props => {
  return (
    <div className="container pv-50">
      <div className="search-box box-shadow br-5 pv-50">
        <form
          className="formSearch"
          onSubmit={event => {
            console.log("chercher");
            event.preventDefault();
          }}
        >
          <div className="flexInput">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#8191A0"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              className="searchInput"
              type="text"
              value={props.search}
              placeholder="Que recherchez-vous ?"
              onChange={props.onChange}
            />
          </div>
          <div>
            <button className="searchBtn br-5">Rechercher</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
