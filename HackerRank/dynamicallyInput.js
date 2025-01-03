'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



function compareTriplets(a, b) {
    let alicePoint = 0;
    let bobPoint = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            alicePoint += 1;
        } else if (b[i] > a[i]) {
            bobPoint += 1;
        }
    }
    return [alicePoint, bobPoint]; // Return as an array
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));
    const b = readLine().replace(/\s+$/g, '').split(' ').map(bTemp => parseInt(bTemp, 10));

    const result = compareTriplets(a, b);

    ws.write(result.join(' ') + '\n'); 
    ws.end();
}
