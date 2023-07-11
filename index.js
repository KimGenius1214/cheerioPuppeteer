const axios = require("axios");
const cheerio = require("cheerio");
const $ = cheerio.load('<h2 class="title">Hello world</h2>');

$.html();
//=> <html><head></head><body><h2 class="title welcome">Hello there!</h2></body></html>

axios.get("https://tistory.com/category/life").then((res) => {
  const data = res.data;
  //   const $ = cheerio.load(res.data);
  //   $("h2.title").text("Hello there!");
  //   $("h2").addClass("welcome");
  //   $.html();
  //   const href = $("a").attr("href");
  console.log(data);
});
