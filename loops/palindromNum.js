let n = 21

let tempNum = n 
let reverseNum = 0

while(tempNum != 0){
    reverseNum = tempNum % 10 + reverseNum * 10
    tempNum = Math.floor(tempNum / 10)
}

console.log('reverseNum ===<<<>>>', reverseNum)
