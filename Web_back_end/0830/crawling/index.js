const puppeteer = require("puppeteer")

// const a = b(c)
const main = async () => {
  const browser = await puppeteer.launch({
    headless:true
  })

  const page = await browser.newPage();

  await page.goto('https://www.naver.com')
  // await page.pdf({ path : "test.pdf", format: "A4"})
  await page.screenshot({ path : "screenshot.jpg", fullPage: true})

}

main()