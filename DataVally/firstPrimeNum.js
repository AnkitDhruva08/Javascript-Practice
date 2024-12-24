let n = 5;
let arr = [];

let num = 2; 


while(arr.length < n){
    let isPrime = true;
    for(let i = 2; i < Math.floor(num / 2 + 1); i++){
        if(num % i === 0){
            isPrime = false;
            break
        }
    }
    if(isPrime){
        arr.push(num)
    }
    num += 1
}

console.log('arr ===<<<>>>', arr)