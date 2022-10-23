/**
 * Napisz skrypt, który generuje losowy łańcuch o długości z zmiennej length składający się ze znaków alfabetu a-z i cyfr.
 * Wygenerowany Łańcuch umieść w zmiennej randomString  
 */

let length = 5;
let randomString = '';
const list=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','w','x','z']


function getRandomItem(arr){

    const randomIndex = Math.floor(Math.random()*arr.length);

    const item =  arr[randomIndex];
    return item
}

for(i=0;i<5;i++)
{
    let result= getRandomItem(list);
    randomString= randomString + result;
}
console.log(randomString);

