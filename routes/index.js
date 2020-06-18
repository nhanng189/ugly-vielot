var express = require('express');
var router = express.Router();

const { getMega645Result, randomMega645 } = require("../src/controller/vietlott");

router.get("/645", async (req, res, next) => {
  const mega645Result = await getMega645Result();
  const resultArr = randomMega645(mega645Result);
  const historyArr = [];

  mega645Result.forEach((count, index) => {
    historyArr.push({
      number: index + 1,
      count: count,
    });
  });

  let printStr = "Tien tri: ";
  resultArr.forEach((winNum) => {
    printStr += `${winNum}  `;
  });

  const resultObjSorted = historyArr.sort((a, b) =>
    a.count < b.count ? 1 : -1
  );
  let resultObjSortedHtml = "";
  resultObjSorted.forEach((item) => {
    resultObjSortedHtml += `<tr><td style="border: 1px solid #dddddd; width: 100px;">${item.number}</td><td style="border: 1px solid #dddddd; width: 100px;">${item.count}</td></tr>`;
  });

  res.send(
    `<h2 style="color: red;">${printStr}</h2><br/><table style="border-collapse: collapse;"><tr><th>Số</th><th>Số lần xuất hiện</th></tr>${resultObjSortedHtml}</table>`
  );
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
