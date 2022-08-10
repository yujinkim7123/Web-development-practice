
const promise  = new Promise((resolve, reject) => {
    
    setTimeout(() => {

        resolve("참깨 빵");
        console.log("산만 산만 어쩌라고");
        console.log("zzzz 알");
        

    }, 3000);

});

promise.then(data => {
    data += " 순쇠고기"
    console.log(data);
    return data})
.then(data => {
    data += " 패티 2장"
    console.log(data);
    return data})
.then(data => {
    data += " 특별한 소스"
    console.log(data);
    return data})
.then(data => {
    data += " 양상추"
    console.log(data);})


console.log("여러분 안녕하세요 오늘은 햄버거를 만들어 볼께요");