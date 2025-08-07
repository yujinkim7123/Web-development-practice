function hello(value){
    
    console.log(value);
}

const hello2 = value => console.log(value);

const arr = [3,5,4,2];

arr.forEach(hello2);