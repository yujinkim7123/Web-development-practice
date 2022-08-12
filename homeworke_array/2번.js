const bucketLists = [
  { id: 3, text : "여행가기", done:false},
  { id: 2, text : "치킨 먹기", done:true},
  { id: 1, text : "코딩 하기", done:false},
]


function getValues(key){
  return bucketLists.map(bucketList => bucketList[key])
  // return bucketLists.map(e => e[key])
}

console.log(getValues("id"))
console.log(getValues("text"))
console.log(getValues("done"))

bucketLists.forEach(test)

function test(bucketList){

}
  
