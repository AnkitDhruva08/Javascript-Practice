let lowerLimit = 10;
let upperLimit = 100;

for(let i = lowerLimit; i <= upperLimit + 1; i++){
    let isPrime = true 
    for(let j = 2; j <= Math.floor(i/2 + 1); j++){
        if(i % j === 0){
            isPrime = false 
            break
        }
    }
    if(isPrime){
        console.log('prime number is :::', i)
    }
}