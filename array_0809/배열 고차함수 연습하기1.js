const buketList = [
    {
    id : 3,
    text: "여행 가기",
    done : false,
    },
    {
        id : 2,
        text: "치킨 먹기",
        done : true,
    },
    {
        id : 1,
        text: "코딩 하기",
        done : false,
    },

];


function render()
{
    let html = '';
    let arr = buketList.map((value) => {return([value.id, value.text])});
    console.log(arr);

    for(let i = 0; i < arr.length; i++){
        html += `<li id="${arr[i][0]}"><label><input type="checkbox">${arr[i][1]}</label>`;

    }
    return html;
}

console.log(render());