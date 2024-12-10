function* countValue(n){
   let i = 1 
   while (i <= n) {
        yield i 
        i++
   }
}
let n = 5
const generator = countValue(n)
for(let i = 0; i < n; i++){
    console.log('first value <<>>>', generator.next().value)
}

// console.log('secod value <<>>>', generator.next().value)
// console.log('third value <<>>>', generator.next().value)