let n = 11;
let tempNum = n;

let result = 0;

while(tempNum != 0){
    let r = tempNum % 10;
    result = result * 10 + r;

    tempNum = Math.floor(tempNum / 10)
}

console.log('result ====<<<<<<>>>>>', result)
if(result === n){
    console.log(`${result} is palindrom number`)
}
