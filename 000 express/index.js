const express = require("express")
const app = express()
const PORT = 8080;

app.get("/api/info", ((req,res) => {
  return res.json({
    name: "jony",
    job:" tutor"
  })

}))

app.listen(PORT, () => console.log(`이 서버는 ${PORT}로 켜졌습니다`))