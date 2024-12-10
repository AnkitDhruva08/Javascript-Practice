let rows = 5;

for (let i = 0; i < rows; i++) {
    let spaces = ""; // Initialize spaces
    let stars = "";  // Initialize stars

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
