function ArraySum(arr) {
    let sumValue = 0;

    for (let i = 0; i < arr.length; i++) {
        sumValue += arr[i];
    }

    return sumValue;
}

// Function call 
let n = 4; 
let arr = [1, 2, 7, 4];
console.log(ArraySum(arr)); 
