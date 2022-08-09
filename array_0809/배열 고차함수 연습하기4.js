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


function removeList(id)
{
    let index = 0;

    index = buketList.findIndex(value => value.id === id);

    buketList.splice(index, 1);


}

removeList(2);
console.log(buketList);