let rows = 5;

// Upper Part (including the middle row)
for (let i = 0; i < rows; i++) {
    let spaces = "";
    let stars = "";

    // Construct spaces string
    for (let j = 0; j < rows - i - 1; j++) {
        spaces += " ";
    }

    // Construct stars string
    for (let k = 0; k < 2 * i + 1; k++) {
        stars += "*";
    }

    // Print the combined row
    console.log(spaces + stars);
}

// Lower Part (excluding the middle row)
for (let i = rows - 2; i >= 0; i--) { 
    let spaces = "";
    let stars = "";

    // Construct spaces string
    for (let j = 0; j < rows - i - 1; j++) {
        spaces += " ";
    }

    // Construct stars string
    for (let k = 0; k < 2 * i + 1; k++) {
        stars += "*";
    }

    // Print the combined row
    console.log(spaces + stars);
}
