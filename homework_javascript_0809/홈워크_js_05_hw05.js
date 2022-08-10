axis.get('https://api.example/data')
.then(function(response){

    console.log(response);


})

//동기 : 상하 , 좌우 순서대로 처럼
//비동기 : 순서가 보장되지 않으면 시간이 걸리는 작업대신 다른 작업 먼저 처리 가능