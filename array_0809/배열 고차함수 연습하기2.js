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


function getValues(key)
{
    const arr = buketList.map(value => value[key]);

    return arr;
}

console.log(getValues('id'));
console.log(getValues('text'));
console.log(getValues('done'));