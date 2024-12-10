let n = 10
let lowerLimit = 0 
let upperLimit = 1 
let resultsArray = [];

for(let i = 0; i <= n; i++){
    resultsArray.push(lowerLimit)
    let result = lowerLimit + upperLimit 
    console.log('lowerLimit ===<<<>>>>', lowerLimit)
    lowerLimit = upperLimit
    upperLimit = result
}

console.log('resultsArray ===>>>>', resultsArray)