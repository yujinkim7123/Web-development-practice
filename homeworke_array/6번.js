let bucketLists = [
  { id: 3, text : "여행가기", done:false},
  { id: 2, text : "치킨 먹기", done:true},
  { id: 1, text : "코딩 하기", done:false},
]

// function allTrue(){
//   bucketLists = bucketLists.map(bucketList => ({...bucketList, ...{done:true}}))
// }

function allTrue(){
  return bucketLists.reduce((acc,cur) => {
    cur.done = true;
    acc.push(cur)
    return acc
  },[])
}

allTrue()

console.log(bucketLists)