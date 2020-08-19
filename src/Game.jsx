import React from "react";

const Game = ({ game, setShowBetslip, setSelectedPrice }) => {

  const handleClick = (team, price) => {
    console.log('click');
    setShowBetslip(true);
    setSelectedPrice({
      game,
      team,
      price,
    })
  }

  return (
    <div className="game">
      <tr className="tableRow">
        <th onClick={() => handleClick(game.teamA, game.teamAodds)} className="teamName">
          {game.teamA}
        </th>
        <th onClick={() => handleClick(game.teamA, game.teamAodds)} className="score">
          {game.teamAscore}
        </th>
        <th onClick={() => handleClick(game.teamA, game.teamAodds)} className="price">
          {game.teamAodds}
        </th>
      </tr>
      <tr className="tableRow">
        <th onClick={() => handleClick(game.teamB, game.teamBodds)} className="teamName">
          {game.teamB}
        </th>
        <th onClick={() => handleClick(game.teamB, game.teamBodds)} className="score">
          {game.teamBscore}
        </th>
        <th onClick={() => handleClick(game.teamB, game.teamBodds)} className="price">
          {game.teamBodds}
        </th>
      </tr>
      <tr className="tableRow">
        <th onClick={() => handleClick('Draw', game.drawOdds)} className="teamName">
          Draw
        </th>
        <th className="score"/>
        <th onClick={() => handleClick('Draw', game.drawOdds)} className="price">
          {game.drawOdds}
        </th>
      </tr>
    </div>
  )

}

export default Game;