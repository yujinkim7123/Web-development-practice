const togglebutton = document.querySelector(".toggle-button");
const body = document.querySelector("body");
const text = document.querySelector(".header-nav");
const text2 = document.querySelector(".bookbark-wrapper");

togglebutton.addEventListener('click',function(){

    togglebutton.textContent = "다크모드";
   
    togglebutton.classList.toggle("toggle-button-darkmode");
    body.classList.toggle("body-background-darkmode");
    text.classList.toggle("text-darkmode");
    text2.classList.toggle("text-darkmode");
    if(togglebutton.classList.contains("toggle-button-darkmode"))
    {
        togglebutton.textContent = "일반모드"
    }

})

const serarch = document.querySelector(".search-input");

serarch.addEventListener('keyup', function(e){
    if(e.code === "Enter")
    {
        if(e.target.value === "")
        {
        alert("검색어를 입력하지 않았습니다.");
        }
        else{
            
            const address = "https://www.google.com/search?q="
            location.href = address + e.target.value;
        
        }
    }

})