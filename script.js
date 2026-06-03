console.log("ALAB 308A.1.1 - Practical Use of the Event Loop");


// PART 1: STACK OVERFLOW

// This counter keeps track of how many times the function runs.
let stackCounter = 0;

// function causeStackOverflow() {
//     while (true) {
//         stackCounter++;
//     }
// }

// This function to be used as recursion.
function causeStackOverflow() {
    stackCounter++;
    causeStackOverflow();
}

// causeStackOverflow();

// Use the try/catch event method to avoid infinity loops

// try {
//     causeStackOverflow();
// } catch (error) {
//     console.log("Part 1: Stack Overflow Result");
//     console.log("Error message:", error.message);
//     console.log("The function called itself this many times:", stackCounter);

//     causeStackOverflow(); 
// }

// Aboce code will cause an infinity loop
try {
    causeStackOverflow();
} catch (error) {
    console.log("Part 1: Stack Overflow Result");
    console.log("Error message:", error.message);
    console.log("The function called itself this many times:", stackCounter);

 
    // This shows the full error object if I want to inspect it.
    // console.log(error);
}