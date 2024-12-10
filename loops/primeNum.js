n = 8

let numLen = (Math.floor(n/2+1))
let isPrime = true
for(let i = 2; i < Math.floor(n / 2 + 1); i++){

   if(n % i === 0 ){
    isPrime = false 
    break
   }

}

if(isPrime){
    console.log('isPrime ===<<<>>>', isPrime)
}
else{
    console.log('not a prime number')
}