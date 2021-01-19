import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, addStock}) {

  const stocksMapped = stocks.map((stock) => (
    <Stock 
    stock={stock}
    key={stock.id}
    onClickStock={addStock}
    />
  ))

  return (
    <div>
      <h2>Stocks</h2>
      {stocksMapped}
    </div>
  );
}

export default StockContainer;
