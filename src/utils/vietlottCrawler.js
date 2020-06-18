const CheerioCrawl = require("./CheerioCrawl");
const Crawler = new CheerioCrawl();

const URL_645 =
  "https://vietlott.vn/vi/choi/mega-6-45/thong-ke-so-trung?fromdate=18/09/1997&todate=28/08/2028&sorttype=&nocatche=1";

const getMega645Result = async () => {
  try {
    let array = [];
    const $ = await Crawler.get(URL_645);
    let selectElements = $(".choi_thongke_kq_boloc_nd");
    await selectElements.each(async function (i, elem) {
      let comeoutCount = $(this).find($("p:not([class])")).text();
      array.push(Number(comeoutCount));
    });

    return array;
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = {
  getMega645Result,
};