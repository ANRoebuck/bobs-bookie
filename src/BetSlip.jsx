import React from "react";

const BetSlip = ({selectedPrice, setShowBetslip}) => {

  const {team, price, game} = selectedPrice;

  const backing = team === 'Draw' ?
    `${game.teamA} and ${game.teamB} to DRAW` : `${team} to WIN`;

  const odds = `at ${price}`;

  const match = `${game.teamA} (${game.teamAscore}) vs ${game.teamB} (${game.teamBscore}) \n ${game.league}`

  return (
    <div className="bet-slip">
      <div className="backing">{backing}</div>
      <div className="odds">{odds}</div>
      <input type="text" />
      <button type="button">Place Bet</button>
      <div className="description">{match}</div>
      <button type="button" onClick={() => setShowBetslip(false)}>Cancel</button>
    </div>
  )

}

export default BetSlip;