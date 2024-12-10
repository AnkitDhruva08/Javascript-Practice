const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a number to reverse: ', (input) => {
    let n = parseInt(input);  
    let tempNum = n;
    let reverseNum = 0;

    while (tempNum !== 0) {
        reverseNum = (tempNum % 10) + (reverseNum * 10);
        tempNum = Math.floor(tempNum / 10);
    }

    console.log('Reversed Number:', reverseNum);
    rl.close();  
});
