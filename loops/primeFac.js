let n = 20;
let resultsArray = [];

for (let i = 2; i <= n; i++) {
    if (n % i === 0) {
        resultsArray.push(i);
        while (n % i === 0) {
            n = n / i;
        }
    }
}

console.log('Unique Prime Factors:', resultsArray);
