function sleep(delay)
{

    const start = Date.now();
    let limit = start + delay;
    while(Date.now() < limit){};

}


console.log("빨래");
sleep(3000);
console.log("설거지");


setTimeout(()=>{console.log("바ㅣㄹㄹ")})