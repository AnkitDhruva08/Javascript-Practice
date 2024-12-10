const sumValue = async function (a, b) {
    return a + b
    
}


async function calculateData(a, b){
    const responce = await sumValue(a, b)
    const array = a*b 
    const result = await [responce, array]
    return result
} 

//  function calll 
calculateData(5,7).then(result => (console.log(result)))

