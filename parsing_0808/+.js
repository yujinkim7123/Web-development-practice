const a = "abcminmin";
const b = "bbqcoco";

const c = a + b;

let result = [];

for(let i =0 ; i < c.length; i++)
{
    if(i%2 == 0)
    result.push(c[i]);
}

alert(result);