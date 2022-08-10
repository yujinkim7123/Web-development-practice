console.log("점원: 어서오세요");
console.log("점원: 주문하시겠어요");


const promis = new Promise((resolve, reject) =>{

    setTimeout(() => {

        console.log("저 주문합니다");
        //resolve("치킨");
        reject("치킨");
    }, 3000);

});


promis.then((menu) => {

    console.log(menu);
    console.log("good");
}).catch(()=>{
    console.log("안됭");

});

console.log("다른일 다른일");