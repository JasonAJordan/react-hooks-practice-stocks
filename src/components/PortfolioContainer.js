import React from "react";
import Stock from "./Stock";

function PortfolioContainer({stocks, removeStock}) {


  const stocksMapped = stocks.map((stock) => (
    <Stock 
    stock={stock}
    key={stock.id}
    onClickStock={removeStock}
    />
  ))

  return (
    <div>
      <h2>My Portfolio</h2>
      {stocksMapped}
    </div>
  );
}

export default PortfolioContainer;
