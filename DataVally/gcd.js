let num1 = 15;
let num2 = 5;

let hcf 

let minimum;
if(num1 < num2){
    minimum = num1
}

else{
    minimum = num2
}

for(let i = 1; i < minimum + 1; i++){
    if(num1 % i === 0 & num2 % i === 0){
        hcf = i
    }
} 

console.log('minimum ===<<<>>>', hcf)
