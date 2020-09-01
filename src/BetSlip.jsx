import React, { useState } from "react";
import './betslip.scss';

const BetSlip = ({selectedPrice, setShowBetslip}) => {

  const [stake, setStake] = useState(null);

  const {team, price, game} = selectedPrice;

  const backing = team === 'Draw' ?
    `${game.teamA} and ${game.teamB} to DRAW` : `${team} to WIN`;

  const odds = `at ${price}`;

  const match = `${game.teamA} (${game.teamAscore}) vs ${game.teamB} (${game.teamBscore}) \n ${game.league}`

  const handleChange = (e) => setStake(e.target.value);

  const mockPlaceBet = (e) => {
    e.preventDefault();
    window.location.reload(true);
    alert("bet placed");
    setShowBetslip(false);
  }

  return (
    <div className="bet-slip">
      <div className="backing">{backing}</div>
      <div className="odds">{odds}</div>
      <input
        className="stake-field"
        type="text" value={stake}
        onChange={(e) => handleChange(e)}
        data-qb-uuid="ff126b42-e2ee-11ea-87d0-0242ac130003"/>
      <button
        type="button"
        onClick={() => mockPlaceBet()}
        data-qb-uuid="2be4cc5a-e2ef-11ea-87d0-0242ac130003"
      >
        Place Bet
      </button>
      <button
        className="button-with-animation"
        type="button"
        onClick={() => mockPlaceBet()}
        data-qb-uuid="4cffc416-ec41-11ea-adc1-0242ac120002"
      >
        Place Bet With Animation
      </button>
      <div className="description">{match}</div>
      <button
        type="button"
        onClick={() => setShowBetslip(false)}
        data-qb-uuid="811d25a0-e2ef-11ea-87d0-0242ac130003"
      >
        Cancel
      </button>
    </div>
  )

}

export default BetSlip;