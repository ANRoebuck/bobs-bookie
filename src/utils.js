

export const rawJson = {
  price: "0.54",
  competition: "UZBEKISTAN CUP",
  teams: [
    "FK Andijon",
    "Nasaf Qarshi"
  ],
  betType: "HDP : 0.5 @ 0-0",
}

export const prettyJson = (obj) => JSON.stringify(obj)
    .split(',').join(',\n')
  // .split('[').join('\n   [')
  // .split(']').join('\n]')


export const isValidJson = (str) => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}
