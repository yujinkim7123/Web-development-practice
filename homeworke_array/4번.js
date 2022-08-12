let bucketLists = [
  { id: 3, text : "여행가기", done:false},
  { id: 2, text : "치킨 먹기", done:true},
  { id: 1, text : "코딩 하기", done:false},
]

// function removeList(id){
//   bucketLists = bucketLists.filter(bucketList => bucketList.id !== id)
// }

function removeList(id){
  bucketLists = bucketLists.reduce((acc,cur) => {
    if(cur.id !== id) acc.push(cur);
    return acc
  },[])
}

removeList(2)

console.log(bucketLists)