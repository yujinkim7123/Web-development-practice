const bucketLists = [
  { id: 3, text : "여행가기", done:false},
  { id: 2, text : "치킨 먹기", done:true},
  { id: 1, text : "코딩 하기", done:false},
]

function render(){
  let html = "";

  bucketList.forEach(bucketList => {
    html += `<li id="${bucketList.id}"><label>
    <input type="checkbox>${bucketList.text}<label>
    </li>
    `
  })

  return html;
}

console.log(render())