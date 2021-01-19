import React from "react";

function Stock({stock, onClickStock}) {


  // "ticker": "GOOG",
  // "name": "Google",
  // "type": "Tech",
  // "price": 1194.8

  function handleClick(event){
    console.log("adsf")
    onClickStock(stock)
  }
  
  return (
    <div onClick={handleClick}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">{stock.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
