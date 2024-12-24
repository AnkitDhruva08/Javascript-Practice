function veryBigSum(arr){
    let sumValues = 0;

    for(let i = 0; i < arr.length; i++){
        sumValues += arr[i]
    }
    return sumValues
}

// function call 
let n = 5
let arr = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]
console.log(veryBigSum(arr))