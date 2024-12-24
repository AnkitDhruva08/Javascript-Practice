let n = 12;

let arr = [];

for( let i = 2;  Math.floor(i <= n /2); i ++){
    if(n % i === 0){
        let flag = true;
        for(let j = 2; j < Math.floor(i / 2 + 1); j++){
            if(i % j === 0){
                flag = false;
                break
            }
        }
        if(flag){
            arr.push(i)
        }
    }
}

console.log(arr)