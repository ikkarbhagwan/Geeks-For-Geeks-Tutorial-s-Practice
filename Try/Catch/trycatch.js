

const userName = "Bhagwan";

try {
    console.log("this is")

} catch (errror) {
    console.log(error.name);

}


console.log(userName);

//  enter a number that is less than or equal to 50

let userNumber;

do {
    userNumber = prompt("Enter a number:");

    if (userNumber > 50) {
        alert("Please enter a number less than or equal to 50.");
    }
} while (userNumber > 50);

alert("Thank you! You entered a number less than or equal to 50.");


