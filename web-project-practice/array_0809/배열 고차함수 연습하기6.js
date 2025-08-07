let buketList = [

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
    }

];


function allTrue()
{

    buketList.reduce((acc, cur) =>{

        if(cur.done == false){
            cur.done = true;
          

        }
    }, {} )



}

allTrue();
console.log(buketList);