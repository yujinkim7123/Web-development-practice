const nums = [1, 2, 3, 4]

//map :  배열.map((요소, 인덱스, 배열) => {return 요소}); 반복문을 돌리며 배열 안의 요소들을 1대1로 짝지어주는 것 입니다. 
//some : 하나의 조건만 충족해도 turer가 반환된다.
//every :  모든 조건을 충족해야 true가 반환된다.
//find 해당조건을 만족하는 첫번째 요소의 값을 반환한다.
//findindex 해당조건을 만족하는 첫번째 요소의 인덱스를 반환한다.
//filter : 배열에서 특정 조건을 만족하는 값들만 따로 추출
//reduce : 


const arr = nums.map(value => (value*value*value));

console.log(arr);