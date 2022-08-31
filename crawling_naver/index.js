const express = require("express");
const app = express();
const PORT = 8080;
const cors = require("cors");
const cheerio = require("cheerio");
const axios = require("axios");

app.use(cors());

app.listen(PORT, () => {console.log(`서버가 ${PORT}로 켜졌다`)})

app.get("/", (rep,res) => {
console.log("hello world");
})

const url  = "https://comic.naver.com/webtoon/weekdayList?week=mon"

app.get("/scraper", async(req, res)=>{

  const response = await axios.get(url);
  const html = response.data;
  const $ = cheerio.load(html);
  const infos = [];

  $('.daily_img li').each((i,el)=>{

    const text = $(el).find("dt a").text()
    const title = $(el).find("dt a").attr("title");
    const url = $(el).find("dt a").attr("href");
    infos.push({


        text: text,
        title:title,
        url:url
    })

  })

  return res.json(infos);
})