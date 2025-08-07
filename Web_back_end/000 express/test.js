const express = require("express")
const app = express()
const PORT = 8080;

const cors = require("cors")
app.use(cors())

app.get("/", (req,res) => {
  return res.sendFile(__dirname + "/views/index.html")
})
app.get("/login", (req,res) => {
  return res.sendFile(__dirname + "/views/login.html")
})
app.get("/whoami", (req,res) => {
  return res.sendFile(__dirname + "/views/whoami.html")
})

const infos = [
  {
    name: "나나",
    age: 12
  },{
    name: "유진",
    age: 8,
  },{
    name: "재범",
    age: 40
  }
]

app.get("/infos", (req,res) => {
  return res.json(infos)
})

app.get("/infos/names", (req,res) => {
  const names = infos.map(e => e.name)
  return res.json(names);
})
app.get("/infos/ages", (req,res) => {
  const ages = infos.map(e => e.age)
  return res.json(ages);
})
app.get("/infos/", (req,res) => {
  return res.json(infos[0]);
})
app.get("/infos/1", (req,res) => {
  return res.json(infos[1]);
})
app.get("/infos/2", (req,res) => {
  return res.json(infos[2]);
})


app.listen(PORT, () => console.log(`이 서버는 ${PORT}로 켜졌습니다`))