function compareTheTriplate(a, b){
    let alicePoint = 0;
    let bobPoint = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            alicePoint += 1;
        } else if (b[i] > a[i]) {
            bobPoint += 1;
        }
    }
    return alicePoint + " " + bobPoint;
}

// function call 
let a = [17, 28 ,30]
let b = [99, 16, 8]
console.log(compareTheTriplate(a,b))