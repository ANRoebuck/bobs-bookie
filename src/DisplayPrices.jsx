import React, { useEffect, useState } from "react";
import { getSomeRandomPrices } from "./GetSomeRandomPrices";
import League from "./League";

const DisplayPrices = () => {

  const [prices, setPrices] = useState([]);

  useEffect(() => setPrices(getSomeRandomPrices()), []);

  const leagues = [
    prices.filter(p => p.league === 'Flim League'),
    prices.filter(p => p.league === 'Flam League'),
  ]

  const table = leagues.map(league => <League league={league}/>);

  return (
    <div>
      {table}
    </div>
  )


}

export default DisplayPrices;