import React from "react";
import CardOffer from "./CardOffer";
import NavPage from "./NavPage";
import "./Content.css";
import "../App.css";

const Content = props => {
  const elements = props.offers.map((item, index) => {
    return <CardOffer key={item._id} offer={item}></CardOffer>;
  });

  return (
    <div className="content container">
      {elements}
      {/* on affiche la barre de navigation que si on a plus d'une page  */}
      {props.pageMax > 1 ? (
        <NavPage
          pageMax={props.pageMax}
          numPage={props.numPage}
          onChangePage={props.onChangePage}
          onPageNext={props.onPageNext}
          onPagePrev={props.onPagePrev}
        ></NavPage>
      ) : (
        <> </>
      )}
    </div>
  );
};

export default Content;
