let n = 134;
let tempNum = n;
let result = 0

while(tempNum != 0){
    let r = tempNum % 10;
    result = result + r ** 3;
    tempNum = Math.floor(tempNum  / 10)
}

console.log('result ===<<<<>>>', result)
if(result === n){
    console.log('Yes Its a Armstrong Number')
}