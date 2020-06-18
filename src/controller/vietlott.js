const { getMega645Result } = require("../utils/vietlottCrawler");
const {
  probabilityArrGenerator,
  randomWithProbability,
} = require("../utils/helpers");

module.exports = {
  getMega645Result: async () => {
    return getMega645Result();
  },

  randomMega645: (mega645Results) => {
    const thisWillBeJackpot = [];
    while (thisWillBeJackpot.length < 6) {
      const random = randomWithProbability(
        probabilityArrGenerator(mega645Results)
      );
      if (!thisWillBeJackpot.includes(random)) {
        thisWillBeJackpot.push(random);
      }
    }
    return thisWillBeJackpot.sort((a, b) => a - b);
  },
};
