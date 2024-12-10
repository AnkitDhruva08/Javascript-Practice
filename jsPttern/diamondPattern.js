let rows = 5 


for(let i = 0; i < rows ; i++){
    let spaces = ''
    let stars = ''

    for (let j = 0; j < rows  - i - 1; j++){
        spaces += " "

    }

    for(let k = 0; k  < 2 * i + 1; k++){
        stars += '*'
    }
    console.log(spaces + stars)

   
}

for(let i = rows - 2; i <= 0 ; i--){
    let spaces = ''
    let stars = ''

    for(let l = 0 ; l <= rows - i -1; l ++){
        spaces += ''
    }
    for(let m = 0;  m <= 2 * i + 1; m ++){
        stars += '*'
    }

    console.log(spaces + stars)

}

