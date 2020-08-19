import React, { useEffect, useState } from "react";
import { getSomeRandomPrices } from "./GetSomeRandomPrices";
import League from "./League";
import BetSlip from "./BetSlip";

const DisplayPrices = () => {

  const [prices, setPrices] = useState([]);
  const [showBetslip, setShowBetslip] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState({});

  useEffect(() => setPrices(getSomeRandomPrices()), []);

  const leagues = [
    prices.filter(p => p.league === 'Flim League'),
    prices.filter(p => p.league === 'Flam League'),
  ]

  const table = leagues.map(league =>
    <League league={league}
            setShowBetslip={setShowBetslip}
            setSelectedPrice={setSelectedPrice}/>);

  return (
    <div>
      { showBetslip ?
        <BetSlip selectedPrice={selectedPrice} setShowBetslip={setShowBetslip}/>
        : null}
      {table}
    </div>
  )


}

export default DisplayPrices;