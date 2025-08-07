const str = "BTSMINBTSMINBTSKKOPSM";

let count = [];

let num = -1;

let c = 0;

while(1){

    num = str.indexOf("SM", num+1);

    if(num === -1)break;
    c++;
    
};
count.push(c);

num = -1;
c = 0;

while(1){

    num = str.indexOf("MIN", num+1);

    if(num === -1)break;

    c++;
    

};

count.push(c);
num = -1;
c = 0;
while(1){

    num = str.indexOf("OP", num+1);

    if(num === -1)break;

    c++;
    

};

count.push(c);
c = 0;
num = -1;
while(1){

    num = str.indexOf("VO", num+1);

    if(num === -1)break;

    c++;
    

};

count.push(c);
c = 0;
num = -1;
while(1){

    num = str.indexOf("TSM", num+1);

    if(num === -1)break;

    c++;
    

};

count.push(c);

count.sort();

alert(count);