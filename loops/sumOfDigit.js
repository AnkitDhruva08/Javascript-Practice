
let n = 23 

let tempNum = n 

let sumOfDidgit = 0

while(tempNum != 0){
    sumOfDidgit = tempNum % 10 + sumOfDidgit;
    tempNum = Math.floor(tempNum / 10)
}

console.log('sumOfDidgit ===<<<>>>', sumOfDidgit)