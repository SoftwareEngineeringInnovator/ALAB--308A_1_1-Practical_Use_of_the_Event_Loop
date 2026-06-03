// Reference:
// https://developer.mozilla.org/en-US/docs/Glossary/Recursion
// https://www.youtube.com/watch?v=E2ps53pkEAo
// https://www.youtube.com/watch?v=9aBXuEL7I5A
// https://www.youtube.com/watch?v=m6YaakNCQEc
// https://www.youtube.com/watch?v=cbHMQxOuIUw
// https://www.youtube.com/watch?v=fUJe3uKyJrs

console.log("ALAB 308A.1.1 - Practical Use of the Event Loop");


// PART 1: STACK OVERFLOW

// This counter keeps track of how many times the function runs.
let stackCounter = 0;

// This function to be used as recursion.

// function causeStackOverflow() {
//     while (true) {
//         stackCounter++;
//     }
// }


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

// Above code will cause an infinity loop
try {
    causeStackOverflow();
} catch (error) {
    console.log("Part 1: Stack Overflow Result");
    console.log("Error message:", error.message);
    console.log("The function called itself this many times:", stackCounter);

    // This shows the full error object if I want to inspect it.
    // console.log(error);
}

// PART 3: DEFERRED EXECUTION

// Cache the HTML elements inside the variables
const primeContainer = document.querySelector("#primeContainer");
const startButton = document.querySelector("#startButton");

// console.log(primeContainer);
// console.log(startButton);

// Function checks if a number is prime by dividing by itself and by 1

function isPrime(number) {
    if (number < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

// console.log("Is 2 prime?", isPrime(2));
// console.log("Is 7 prime?", isPrime(7));
// console.log("Is 10 prime?", isPrime(10));
// console.log("Is 13 prime?", isPrime(13));

// Create function displays prime numbers using recursion and setTimeout

// function displayPrimesNormally(maxNumber) {
//     primeContainer.textContent = "";

//     for (let number = 1; number <= maxNumber; number++) {
//         if (isPrime(number)) {
//             primeContainer.textContent += number + " ";
//         }
//     }
//     alert("Prime number calculation is finished!");
// }

// displayPrimesNormally(10000);

function displayPrimesWithDeferredExecution(currentNumber, maxNumber) {
    if (currentNumber > maxNumber) {
        alert("Prime number calculation is finished!");
        return;
    }

    if (isPrime(currentNumber)) {
        primeContainer.textContent += currentNumber + " ";

        // console.log("Prime found:", currentNumber);
    }

    setTimeout(function () {
        displayPrimesWithDeferredExecution(currentNumber + 1, maxNumber);
    }, 0);
}

startButton.addEventListener("click", function () {
    primeContainer.textContent = "";

    console.log("Prime calculation started.");

    // displayPrimesWithDeferredExecution(1, 10);
    // displayPrimesWithDeferredExecution(1, 100);
    // displayPrimesWithDeferredExecution(1, 1000);
    displayPrimesWithDeferredExecution(1, 10000);
});