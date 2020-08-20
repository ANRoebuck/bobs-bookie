import React from "react";

const Game = ({ game, setShowBetslip, setSelectedPrice }) => {

  const handleClick = (team, price) => {
    setSelectedPrice({
      game,
      team,
      price,
    })
    setTimeout(() => setShowBetslip(true), 500);
  }

  return (
    <div className="game">
      <tr className="tableRow">
        <td onClick={() => handleClick(game.teamA, game.teamAodds)} className="teamName">
          {game.teamA}
        </td>
        <td onClick={() => handleClick(game.teamA, game.teamAodds)} className="score">
          {game.teamAscore}
        </td>
        <td onClick={() => handleClick(game.teamA, game.teamAodds)} className="price" data-qb-uuid={game.teamAelementId}>
          {game.teamAodds}
        </td>
      </tr>
      <tr className="tableRow">
        <td onClick={() => handleClick(game.teamB, game.teamBodds)} className="teamName">
          {game.teamB}
        </td>
        <td onClick={() => handleClick(game.teamB, game.teamBodds)} className="score">
          {game.teamBscore}
        </td>
        <td onClick={() => handleClick(game.teamB, game.teamBodds)} className="price">
          {game.teamBodds}
        </td>
      </tr>
      <tr className="tableRow">
        <td onClick={() => handleClick('Draw', game.drawOdds)} className="teamName">
          Draw
        </td>
        <td className="score"/>
        <td onClick={() => handleClick('Draw', game.drawOdds)} className="price">
          {game.drawOdds}
        </td>
      </tr>
    </div>
  )

}

export default Game;