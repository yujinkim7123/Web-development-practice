let bucketLists = [
  { id: 3, text : "여행가기", done:false},
  { id: 2, text : "치킨 먹기", done:true},
  { id: 1, text : "코딩 하기", done:false},
]

// map 1번
// function toggle(id){
//   return bucketLists.map(bucketList =>{
//     if(bucketList.id === id){
//       bucketList.done = !bucketList.done
//       return bucketList
//     }
//     return bucketList
//   })
// }

// map version 2

// function toggle(id){
//   return bucketLists.map(bucketList =>{
//     if(bucketList.id === id){
//       console.log({ ...bucketList, done: !bucketList.done})
//       return { ...bucketList, done: !bucketList.done}
//     }
//     return bucketList
//   })
// }

// bucketLists = toggle(2)


function toggle(id){
  bucketLists.forEach((bucketList, index, array) => {
    bucketList.id === id && (array[index] = { ...bucketList, done: !bucketList.done})
  })
}

toggle(2)

console.log(bucketLists)