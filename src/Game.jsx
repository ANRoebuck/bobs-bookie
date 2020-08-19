import React from "react";

const Game = ({ game, setShowBetslip, setSelectedPrice }) => {

  return (
    <div className="game">
      <tr className="tableRow">
        <th className="teamName">{game.teamA}</th>
        <th className="score">{game.teamAscore}</th>
        <th className="price">{game.teamAodds}</th>
      </tr>
      <tr className="tableRow">
        <th className="teamName">{game.teamB}</th>
        <th className="score">{game.teamBscore}</th>
        <th className="price">{game.teamBodds}</th>
      </tr>
      <tr className="tableRow">
        <th className="teamName">Draw</th>
        <th className="score"/>
        <th className="price">{game.drawOdds}</th>
      </tr>
    </div>
  )

}

export default Game;