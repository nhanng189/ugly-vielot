const request = require("request-promise");
const cheerio = require("cheerio");

class CheerioCrawl {
  constructor() {
    this.config = {
      transform: function (body) {
        return cheerio.load(body);
      },
    };
  }
  get(domain) {
    this.config.uri = domain;
    return request(this.config);
  }
}

module.exports = CheerioCrawl;
