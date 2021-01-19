import React, {useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [stocks, setStocks] = useState([]);
  const [myStocks, setMyStocks] = useState([]);
  const [sortBy, setSortBy] = useState("Alphabetically");
  const [filterBy, setFilterBy] = useState("Tech");

  useEffect(() => {
    fetch(`http://localhost:3001/stocks`)
    .then(r => r.json())
    .then(rStocks => setStocks(rStocks))
  },[])

  function handleAddStock(stockToAdd) {
    console.log("called")
    const stockInPortfolio = myStocks.find(
      (stock) => stock.id === stockToAdd.id
    );
    if (!stockInPortfolio) {
      setMyStocks([...myStocks, stockToAdd]);
    }
  }

  const sortedStocks = [...stocks].sort((stock1, stock2) => {
    if (sortBy === "Alphabetically"){
      return stock1.name.localeCompare(stock2.name)
    } else {
      return stock1.price - stock2.price
    }
  })

  function handleRemoveStock(stockToRemove) {
    setMyStocks((myStocks) =>
      myStocks.filter((stock) => stock.id !== stockToRemove.id)
    );
  }

  const filterStocks = sortedStocks.filter((stock) => (
    stock.type === filterBy
  ))

  return (
    <div>
      <SearchBar 
      filterBy={filterBy}
      setFilterBy={setFilterBy}
      sortBy={sortBy}
      setSortBy={setSortBy}
      />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={filterStocks} addStock={handleAddStock}/>
        </div>
        <div className="col-4">
          <PortfolioContainer stocks={myStocks} removeStock={handleRemoveStock}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
