let str = "ABCDEF[1599]AAQ";

let index1 = str.indexOf('[', 0);
let index2 = str.indexOf( ']', 0);

str = str.substring(index1 + 1, index2);

console.log(Number(str) + 1);