let num = 6;
let result = 0; 

for(let i = 1; i <= Math.floor(num / 2 + 1); i++){
    if(num % i === 0){
        result += i
    }
}

console.log('result ===<<<>>>', result)
if(result === num){
    console.log('Number is Perfect Number')
}