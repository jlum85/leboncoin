import React from "react";

const Search = () => {
  return (
    <div className="flexSearch">
      <div>
        <form
          className="searchBox"
          onSubmit={() => {
            console.log("chercher");
          }}
        >
          <input
            className="searchInput"
            placeholder="Que recherchez-vous ?"
            type="text"
            name="search"
            // value={email}
            //onChange={handleEmailChange}
          />

          <input className="searchBtn" type="submit" value="Rechercher" />
        </form>
      </div>
    </div>
  );
};

export default Search;
