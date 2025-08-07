function erase(str, index, n){

const a = str.substring(0, index);
let b = str.substring(index + n);

return a + b;

}

const str = "asdfasdf";

let result = erase(str, 2, 3);
alert(result);