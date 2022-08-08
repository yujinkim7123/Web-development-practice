let str = "bts@macdonald.co.kr||inho@mincoding.co.kr||jason@jyp.com";

str.replace(/com/g, 'net');
str.replace(/co.kr/g, 'net');

let res = str.split("||");

let result = [];

for(let i = 0; i < res.length; i++)
{
    let index = res[i].indexOf('@', 0);

    result[i] = res[i].substring(0,index);
    console.log(result[i]);    

}


