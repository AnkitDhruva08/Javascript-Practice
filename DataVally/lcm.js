let num1 = 4;
let num2 = 6;
let greater = 1;
if(num1 > num2){
    greater = num1
}
else{
    greater = num2
}

while(true){
    if((greater % num1 === 0) & (greater % num2 === 0)){
        let lcm = greater 
        break
    }
    greater += 1
} 

console.log('lcm of num1 and num2 ===<<<>>', greater)