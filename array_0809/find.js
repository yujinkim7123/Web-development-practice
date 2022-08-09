const arr = [

    {name : "날개", quantity: 1},
    {name : "머리", quantity: 2},
    {name : "닭다리", quantity: 2},
    {name : "닭가슴살", quantity: 1},
    {name : "닭발", quantity: 2},
    
];

let index =  arr.findIndex((element) => element.name == '닭다리');
console.log(index, arr[index]);