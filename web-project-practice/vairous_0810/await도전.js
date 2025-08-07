
function delay(ms)
{

return new Promise((resolve, reject )=> setTimeout(resolve, ms));

}

async function bread()
{

   await delay(5000);
   console.log("참깨빵 1에");
   await delay(2000);
   console.log("참깨빵 2에");
   await delay(1000);
   console.log("참깨빵 3에");


}

bread();