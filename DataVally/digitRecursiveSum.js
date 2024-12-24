function digitSum(num){
    if(num < 10){
        return num
    } 

    else{
        return digitSum(num % 10) + digitSum(Math.floor(num / 10))
    }
}
// function call 

let num = 12;

console.log(digitSum(num))
