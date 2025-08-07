const str = [1,2,3,4,5,6,7,8,9,10,11,12,13];

arr.reduce((acc, cur) => {

    if(cur%2 == 1){
    if(acc["짝수"])
    {
        acc["짝수"] = acc["짝수"] + 1;

    }
    else{
        acc["짝수"] = 1;
    }

}
else{
    if(acc["짝수"])
    {
        acc["짝수"] = acc["짝수"] + 1;

    }
    else{
        acc["짝수"] = 1;
    }
}

    return acc;
})