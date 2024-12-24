let arr = [2, 5,3, 8, 9]
let n = arr.length 
let median = 0;
if(n % 2 === 0){
    median = arr[Math.floor((Math.floor(n / 2) - 1) + (Math.floor(n / 2))) / 2]
}
else{
    median = arr[Math.floor(n / 2)]
}

console.log('median ===<<<>>>', median)