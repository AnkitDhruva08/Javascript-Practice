let a = 0;
let b = 1;

let arr = [a, b];
console.log('arr ===<<<>>', arr);

let n = arr.length;

while (n <= 10){
    let c = a + b;
    a = b;
    b = c;
    arr.push(c);

    n += 1
}

console.log('arrr ====<<<>>>', arr)