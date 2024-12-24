let n = 10;

let flag = true
for(i = 2; i <= n /2 + 1; i++){
    if(n % i === 0){
        flag = false;
        break
    } 
}

console.log(flag)
if(flag){
    console.log('fyes its a prime number ===<<<>>', n)
}
