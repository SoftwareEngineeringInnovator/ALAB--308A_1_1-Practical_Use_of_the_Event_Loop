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