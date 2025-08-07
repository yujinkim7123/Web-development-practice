// 1번
const nums = [1,2,3,4,5,6,7,8]

for (let i = 0; i < nums.length; i++) {
  console.log(typeof nums[i]);
}

//const는 변경이 불가하기 때문이다. let으로 하기


// for (const i = 0; i < nums.length; i++) {
//                                     ^

// TypeError: Assignment to constant variable.

// 2번
for (num in nums) {
  console.log(num, typeof Number(num))
}

//for in 은 객체의 프로퍼티를 반환 즉 string을 반환하게 되기에 형변환 필요
// 0 string
// 1 string
// 2 string
// 3 string
// 4 string
// 5 string
// 6 string
// 7 string
