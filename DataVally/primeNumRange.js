let n = 20;
let arr = [];

for(let i = 2; i < n + 1; i++ ){
    let isPrime = true;
    for(let j = 2; j < Math.floor(i / 2 + 1); j++){
        if(i % j === 0){
            isPrime = false;
            break
        }
    }
    if(isPrime){
        arr.push(i)
    }
}

console.log('arr ===<<<>>>', arr)