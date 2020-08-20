import React, { useState } from "react";

const BetSlip = ({selectedPrice, setShowBetslip}) => {

  const [stake, setStake] = useState(null);

  const {team, price, game} = selectedPrice;

  const backing = team === 'Draw' ?
    `${game.teamA} and ${game.teamB} to DRAW` : `${team} to WIN`;

  const odds = `at ${price}`;

  const match = `${game.teamA} (${game.teamAscore}) vs ${game.teamB} (${game.teamBscore}) \n ${game.league}`

  const handleChange = (e) => setStake(e.target.value);

  const mockPlaceBet = () => setTimeout(() => setShowBetslip(false), 1000);

  return (
    <div className="bet-slip">
      <div className="backing">{backing}</div>
      <div className="odds">{odds}</div>
      <input className="stake-field" type="text" value={stake} onChange={(e) => handleChange(e)}/>
      <button type="button" onClick={() => mockPlaceBet()}>Place Bet</button>
      <div className="description">{match}</div>
      <button type="button" onClick={() => setShowBetslip(false)}>Cancel</button>
    </div>
  )

}

export default BetSlip;