let n = 120

let tempNum = n 

armStrngNum = 0 

while (tempNum != 0){
    let num = tempNum % 10 
    armStrngNum += num ** 3
    tempNum = Math.floor(tempNum / 10)
}

if(tempNum === n){
    console.log('armStrngNum ===<<<<>>>>', armStrngNum);
}
else{
    console.log('Not A armstrong Number ===<<<<>>>>');

}