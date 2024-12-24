let n = 246;
let tempNum = n; 
let reverseNum = '';
let resNum = 0

while(tempNum != 0){
    let r = tempNum % 10;
    reverseNum += r;

    resNum = resNum * 10 + r 

    tempNum = Math.floor(tempNum / 10)

}

console.log('resevresNum ===<<<>>>', reverseNum)
console.log('resNum ===<<<>>>', resNum)