export const getSomeRandomPrices = () => {
  let prices = [];
  const priceCount = randomIntBetween(5, 8);
  for (let i = 0; i < priceCount; i++) {
    prices.push(aRandomPrice());
  }

  // fix the first price
  prices[0].teamAelementId = 'ae1d54c6-e2d6-11ea-87d0-0242ac130003';
  prices[0].league = 'Flim League';

  return prices;
}

const aRandomPrice = () => {
  return {
    league: randomLeague(),
    teamA: randomTeam(),
    teamB: randomTeam(),
    teamAscore: randomScore(),
    teamBscore: randomScore(),
    teamAodds: randomPrice(),
    teamBodds: randomPrice(),
    drawOdds: randomPrice(),
  };
}

const randomIntBetween = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const randomString = () => Math.random().toString(36).substring(7);
const randomLeague = () => randomIntBetween(0, 1) % 2 === 0 ? 'Flim League' : 'Flam League';
const randomTeam = () => randomString() + ' ' + ['United', 'City', 'Athletic', 'Town'][randomIntBetween(0,3)];
const randomScore = () => randomIntBetween(0, 4);
const randomPrice = () => `${randomIntBetween(2, 8).toString()}/1`;