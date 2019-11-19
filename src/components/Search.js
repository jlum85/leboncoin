import React from "react";
import "../App.css";
import "./Search.css";

const Search = props => {
  // console.log("Search");
  // console.log(props.paramApi);

  return (
    <div className="container pv-50">
      <div className="search-box box-shadow br-5 pv-50">
        <form
          className="formSearch"
          onSubmit={event => {
            console.log("chercher");
            props.fetchData();
            event.preventDefault();
          }}
        >
          <div className="custom-select">
            <select
              value={props.paramApi.sort}
              onChange={e => {
                console.log("priceMin : " + e.target.value);
                const newParam = { ...props.paramApi };
                if (newParam.sort !== e.target.value) {
                  newParam.sort = e.target.value;
                  props.setParamApi(newParam);
                }
              }}
            >
              <option value="default">Tri par défaut</option>
              <option value="price-desc">Prix décroissant</option>
              <option value="price-asc">Prix croissant</option>
              <option value="date-desc">Annonces les plus récentes</option>
              <option value="date-asc">Annonces les plus anciennes</option>
            </select>
          </div>

          <label htmlFor="priceMin">Prix Min</label>
          <input
            className="priceMin"
            type="number"
            value={props.paramApi.priceMin}
            onChange={e => {
              console.log("priceMin : " + e.target.value);
              const newParam = { ...props.paramApi };
              if (newParam.priceMin !== e.target.value) {
                newParam.priceMin = e.target.value;
                props.setParamApi(newParam);
              }
            }}
          />
          <label htmlFor="priceMax">Prix Max</label>
          <input
            className="priceMax"
            type="number"
            value={props.paramApi.priceMax}
            onChange={e => {
              console.log("priceMax : " + e.target.value);
              const newParam = { ...props.paramApi };
              if (newParam.priceMax !== e.target.value) {
                newParam.priceMax = e.target.value;
                props.setParamApi(newParam);
              }
            }}
          />
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
              value={props.paramApi.title}
              placeholder="Que recherchez-vous ?"
              onChange={e => {
                console.log("title : " + e.target.value);
                const newParam = { ...props.paramApi };
                if (newParam.title !== e.target.value) {
                  newParam.title = e.target.value;
                  props.setParamApi(newParam);
                }
              }}
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
