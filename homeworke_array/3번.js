let bucketLists = [
  { id: 3, text : "여행가기", done:false},
  { id: 2, text : "치킨 먹기", done:true},
  { id: 1, text : "코딩 하기", done:false},
]

function addList(List){
  // bucketLists.unshift(List) //1번
  // console.log([List, ...bucketLists]) // 2번
  bucketLists = [List].concat(bucketLists)
}

addList({id:4, text: "요리하기", done: true})

console.log(bucketLists)