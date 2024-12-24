let a = 10;
let b = 12;

while(b != 0){
    let carry = a & b;
    console.log('carry ===<<<>>', carry);
    a = a ^ b;
    console.log('value of a <<<>>', a)
    b = carry << 1;
    console.log('b ===<<<>>', b)
} 

console.log('Sum of two number is ===<<<>>', a)