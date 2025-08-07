const a = "ABCABCABCABCABCABCAMCCBBQABC";

let g1 = a.indexOf("ABC");

let count =0 ;

while(1){


    g1 = a.indexOf("ABC", g1 + 1);

    if(g1 === -1) break;

    count++;

}

alert(count);