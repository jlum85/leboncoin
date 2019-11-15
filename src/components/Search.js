import React from "react";

const Search = () => {
  return (
    <div className="flexSearch">
      <form
        className="searchBox"
        onSubmit={() => {
          console.log("chercher");
        }}
      >
        <div className="search">
          <input
            className="searchInput"
            placeholder="Que recherchez-vous ?"
            type="text"
            name="search"
            // value={email}
            //onChange={handleEmailChange}
          />
        </div>

        <input className="searchBtn" type="submit" value="Rechercher" />
      </form>
    </div>
  );
};

export default Search;
