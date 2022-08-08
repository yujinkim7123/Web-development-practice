let str = "AB[100]T[41]ABS[1][5]BTS";

let index1 = -1;
let index2 = -1;

let sum = 0;

while(1){
    
 index1 = str.indexOf('[', index1 + 1);
 index2 = str.indexOf( ']',index2 + 1);

if(index1 === -1)break;

let result = str.substring(index1 + 1, index2);


sum += Number(result);

}

console.log(sum);