const express = require("express");
const axios = require("axios");
const app = express();
const PORT = 8081;
const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");
app.use(cors());

const morgan = require("morgan");
app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({extended : false}));

const fs = require("fs");

app.get("/", async (req, res) => {
  return res.json({
    test: "OK",
  });
});

app.post("/data", async(req, res) =>{

  const URL  = "https://openapi.naver.com/v1/datalab/search"

  const {startDate,endDate,timeUnit,keywordGroups,device,gender, ages} = req.body;

  try{
  var request_body = {
    startDate,
      endDate,
      timeUnit,
      keywordGroups,
      device : device === "all" ? "" : device,
      gender : gender === "all" ? "" : gender,
      ages: ages
  };

const headers = {
  'X-Naver-Client-Id': process.env.CLIENT_ID,
  'X-Naver-Client-Secret': process.env.CLIENT_SECRET,
  'Content-Type': 'application/json'
}

console.log(request_body);

 const result = await axios.post(URL, request_body, {
    headers:headers
  });

  console.log(result.data);

  fs.writeFile("./uploads/chart.json", JSON.stringify(result.data['results']), function(error){
    console.log(error);
    if(error)throw error
  });

  return res.json(result.data);
  }catch(error){
    return res.json(error);
  }

})

app.get("/data", async(req, res)=>{

try{
 res.set('Content-Type', 'application/json; charset=utf-8');
 const temp =  fs.createReadStream('uploads/chart.json')

 return temp.pipe(res);

}catch(error)
{
  return res.json(error);
}
})

app.delete("/data", (req, res)=>{
  fs.unlink('uploads/chart.json', function(error){
    if(error){
      console.log(error);
      return res.json("Fail");
    }
  })

  return res.json("ok");
})

app.listen(PORT, () => console.log(`this server listening on ${PORT}`));
