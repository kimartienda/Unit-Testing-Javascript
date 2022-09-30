const exchangeRates = [
  {
    alias: "usd",
    name: "United States Dollar",
    ex: {
      peso: 50.73,
      won: 1187.24,
      yen: 108.63,
      yuan: 7.03,
    },
  },
  {
    alias: "yen",
    name: "Japanese Yen",
    ex: {
      peso: 0.47,
      usd: 0.0092,
      won: 10.93,
      yuan: 0.065,
    },
  },
  {
    alias: "php",
    name: "Philippine Peso",
    ex: {
      usd: 0.02,
      won: 23.39,
      yen: 2.14,
      yuan: 0.14,
    },
  },
  {
    alias: "yuan",
    name: "Chinese Yuan",
    ex: {
      peso: 7.21,
      usd: 0.14,
      won: 168.85,
      yen: 15.45,
    },
  },
  {
    alias: "won",
    name: "South Korean Won",
    ex: {
      peso: 0.043,
      usd: 0.00084,
      yen: 0.092,
      yuan: 0.0059,
    },
  },
];

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

const isDuplicate = (alias, rate) => {
  let result = rate.find((currency) => currency.alias === alias);
  return result === undefined ? true : false;
};

module.exports = {
  exchangeRates: exchangeRates,
  isEmpty: isEmpty,
  isDuplicate: isDuplicate,
};
