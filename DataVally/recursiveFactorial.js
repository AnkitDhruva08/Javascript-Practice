function recursiveFactorial(num){
    if (num === 1){
        return num
    }
    else{
        return num * recursiveFactorial(num -1)
    }
} 

// function call 

let num = 5;
console.log(recursiveFactorial(num))