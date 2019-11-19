import React from "react";
import "../App.css";
import "./Search.css";

const Search = props => {
  return (
    <div className="container pv-50">
      <div className="search-box box-shadow br-5">
        <form
          className="formSearch"
          onSubmit={event => {
            props.fetchData();
            event.preventDefault();
          }}
        >
          <div className="box br-5">
            <select
              value={props.paramApi.sort}
              onChange={e => {
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

            {/* <div className="boxR">
              <label htmlFor="priceMin">Prix Min</label>
              <input
                className="price"
                type="number"
                value={props.paramApi.priceMin}
                onChange={e => {
                  const newParam = { ...props.paramApi };
                  if (newParam.priceMin !== e.target.value) {
                    newParam.priceMin = e.target.value;
                    props.setParamApi(newParam);
                  }
                }}
              />
            </div> */}
            {/* <div className="boxR">
              <label htmlFor="priceMax">Prix Max</label>
              <input
                className="price"
                type="number"
                value={props.paramApi.priceMax}
                onChange={e => {
                  const newParam = { ...props.paramApi };
                  if (newParam.priceMax !== e.target.value) {
                    newParam.priceMax = e.target.value;
                    props.setParamApi(newParam);
                  }
                }}
              />
            </div> */}
          </div>
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
