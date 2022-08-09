function hello(value){
    
    if(value%2 == 1)
        cnt++;
}

const hello2 = value => console.log(value);

let cnt = 0;

const arr = [3,5,4,2];

arr.forEach(hello);
console.log(cnt);