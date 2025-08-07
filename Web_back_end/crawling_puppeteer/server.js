const puppeteer = require("puppeteer")

const main = async () => {
  const browser = await puppeteer.launch({
    headless : true
  })
  const page = await browser.newPage()
  await page.goto("https://comic.naver.com/webtoon/weekdayList?week=mon")

  const data = await page.evaluate(() => {
    const webtoonList = document.querySelectorAll(".img_list li dl dt a")
    const titles = Array.from(webtoonList).map(e => e.getAttribute('title').trim())
    return titles
  })
  console.log(data)
  await browser.close()
}

main()