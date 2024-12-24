function diaglonalDiffernce(ar){
    let n = ar.length;
    console.log('n ==<<>>', n)
    let firstDiaglonalSum = 0
    let secodDiglonalSum = 0;

    for (let i = 0; i < ar.length; i++){
        firstDiaglonalSum += ar[i][i]
        secodDiglonalSum += ar[i][n - i - 1]
    }
    let sumDiff = secodDiglonalSum > firstDiaglonalSum ? secodDiglonalSum - firstDiaglonalSum : firstDiaglonalSum - secodDiglonalSum;

    return sumDiff;
}

let n = 3 
let ar = [[11, 2, 4], [4, 5, 6], [10, 8, -12]]
console.log(diaglonalDiffernce(ar))