let num = 23;
let tempNum = num;

let sumOfNum = 0; 

while(tempNum != 0){
    let r = tempNum % 10;
    sumOfNum += r;

    tempNum = Math.floor(tempNum / 10)
} 

console.log('sumOfNum ===<<<<>>>>', sumOfNum);