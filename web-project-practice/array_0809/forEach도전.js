
const pplus = [];
const mminus = new Array();
const arr = [-5,3,4,2,-7, -2,-7];

arr.forEach(element => {
    

    if(element < 0)
        mminus.push(element);
    else
        pplus.push(element);

});

console.log(mminus)