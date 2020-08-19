import React from "react";
import Game from "./Game";
import './league.scss';

const League = ({ league }) => {

  console.log(league);

  const games = league.map(game => <Game game={game}/>)
  const leagueName = league[0] && league[0].league;


  return (
    <div className="league">
      <div className="leagueName">{leagueName}</div>
      <table className="leagueTable">
        <tr className="tableRow">
          <th className="teamName">Team</th>
          <th className="score">Score</th>
          <th className="price">1x2</th>
        </tr>
        {games}
      </table>
    </div>
  )

}

export default League;