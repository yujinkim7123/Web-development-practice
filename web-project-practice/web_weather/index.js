const key = "9e9b5ff22cd3fe22ef217e78ddbab598"
const url = "https://picsum.photos/1280/720"

// 위도 경도로 찾는방법
// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
// 도시명으로 찾는방법
// api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}




// 배경 이미지가 무작위로 변경된다
// 중앙에 시계가 동작한다(실시간)
// 중앙 하단에 메모할 수 있는 공간이 존재한다
// 우측 상단에 날씨 데이터를 가져올 수 있다

async function setRenderBackground(){
  const result = await axios.get(url, {responseType : "blob"})
  const domURL = URL.createObjectURL(result.data)
  const body = document.querySelector("body")
  body.style.backgroundImage = `url(${domURL})`
}

function setTime(){
  const timer = document.querySelector(".timer")
  setInterval(() => {
    const date = new Date()


    const timercontent = document.querySelector(".timer-content");

    const hours = "0" + date.getHours();

    console.log(date.getHours());

    if(12 <= Number(date.getHours()))
        timercontent.textContent = "good morning, ssafy";
    else
       timercontent.textContent = "good morning, ssafy";

    const Minutes = "0" + date.getMinutes();
    const Seconds = "0" + date.getSeconds();

    

    timer.textContent = `${hours.slice(-2)}:${Minutes.slice(-2)}:${Seconds.slice(-2)}`
    


  },1000)
}

function setMemo(){
  const memoInput = document.querySelector(".memo-input")
  // console.log(memoInput)
  memoInput.addEventListener("keyup", event => {
    // console.log(event)
    // console.log(event.code)
    // console.log(event.currentTarget.value)
    if(event.code === "Enter" && event.currentTarget.value){
      // const memo = document.querySelector(".memo")
      localStorage.setItem("todo", event.currentTarget.value)
      getMemo()
      memoInput.value = ""
      // const memoValue = localStorage.getItem("todo")
      // memo.textContent = memoValue
    }
  })
}

function getMemo(){
  const memo = document.querySelector(".memo")
  const memoValue = localStorage.getItem("todo")
  memo.textContent = memoValue
}

function deleteMemo(){
  document.addEventListener("click", (e) => {
    if(e.target.classList.contains("memo")){
      localStorage.removeItem("todo")
      e.target.textContent = ""
    }
  })
}

function getPosition(options){
  return new Promise(function (resolve,reject) {
    navigator.geolocation.getCurrentPosition(resolve,reject, options)
  })
}

async function renderWeather(){
  try {
    const position = await getPosition()
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude
    // console.log(latitude, longitude)
    const weatherResponse = await getWeather(latitude,longitude)
    const weatherData = weatherResponse.data
  
    // console.log(weatherData.list)
  
    const weatherList = weatherData.list.reduce((acc,cur) => {
      if(cur.dt_txt.indexOf("18:00:00") > 0){
        acc.push(cur)
      }
      return acc;
    }, [])
    // console.log(weatherList)
  
    const modalBody = document.querySelector(".modal-body")
    
    const modalbutton = document.querySelector(".modal-button");

    modalbutton.style.backgroundImage =`url(${matchIcon(weatherList[0].weather[0].main)})`

    modalBody.innerHTML = weatherList.map(e => weatherWrapperComponent(e)).join("")
    
  } catch (error) {
    alert(error)
  }
}
async function getWeather(latitude, longitude){
  if(latitude && longitude){
    const data = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${key}`)
    return data
  }
  const data = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=Seoul&appid=${key}`)
  return data
}

function weatherWrapperComponent(e){


  return `
  <div class="card bg-transparent flex-grow-1 m-2">
    <div class="card-header">
      ${e.dt_txt.split(" ")[0]}
    </div>
    <div class="card-body d-flex">
      <div class="flex-grow-1 d-flex flex-column justify-content-center align-items-center">
        <h5 class="card-title">${e.weather[0].main}</h5>
        <img class="weather-img" src="${matchIcon(e.weather[0].main)}">
        <p class="card-text">${changeToCelsius(e.main.temp)}</p>
      </div>
    </div>
  </div>
  `
}

function matchIcon(weather){
  if(weather === "Clouds") return "./images/001-cloud.png"
  if(weather === "Clear") return "./images/039-sun.png"
  if(weather === "Rain") return "./images/003-rainy.png"
  if(weather === "Snow") return "./images/006-snowy.png"
  if(weather === "Thunderstorm") return "./images/008-storm.png"
}

function changeToCelsius(temp){
  return (temp - 273.15).toFixed(1)
}

(function (){
  setRenderBackground()
  setTime()
  setMemo()
  getMemo()
  deleteMemo()
  renderWeather()

  setInterval(() => { setRenderBackground() }, 5000)
})()





