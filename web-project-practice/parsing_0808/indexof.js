const a = "KFCOCOBBQMINMINC";

let g1 = a.indexOf('C');

alert(g1);

while(1){


    g1 = a.indexOf('C', g1 + 1);

    if(g1 === -1) break;

    alert(g1);

}


