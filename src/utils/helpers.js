module.exports = {
  probabilityArrGenerator: (resultCountArray) => {
    const probArr = [];
    resultCountArray.forEach((winCount, number) => {
      const prob = winCount + 1;
      for (let i = 0; i < prob; i++) {
        probArr.push(number + 1);
      }
    });
    return probArr;
  },

  randomWithProbability: (probabilityArr) => {
    const randomIndex = Math.floor(Math.random() * probabilityArr.length);
    return probabilityArr[randomIndex];
  },
};
