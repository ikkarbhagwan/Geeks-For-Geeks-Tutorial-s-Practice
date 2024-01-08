const hisAge = 25;
const hisWeight = 65;

if (hisAge >= 25 && hisWeight >= 65) {
    console.log("he is a perfect candidate");

    if (hisAge < 20 && hisWeight < 40) {
        console.log("he is under the rule");


    } else if (hisAge < 18 && hisWeight < 40) {
        console.log("he is too youngg");

    } else {
        console.log("try after some time")
    }


} else if (hisAge > 40 && hisWeight > 65) {
    console.log("go out of class");
}


// //////////////////////////////////////////////////////////////////////////////////

switch (new Date(12).getDay(12)) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}

//////////////////////////////////////////////////////////////////////////////////

//   ternary oprators 


// let totalMarkedScored = 20;

// let result = totalMarkedScored >60 ? "you cleared the exam" : "you not cleared the exam";

// console.log(result);

let studentScore = 93;

let updateScore =

    studentScore > 90 ? "A plus"

        : studentScore > 80 ? " B grade"

            : studentScore > 70 ? " C grade"

                : studentScore > 60 ? "Good"
                    : "Fail"

console.log(updateScore);

////////////////////////////////////////////////


let firstString = "banana";
let secondString = "banana";
let thirdString = "Watermelon";

let firstLength = firstString.length;
let secondLength = secondString.length;
let thirdLength = thirdString.length;

if (firstLength < secondLength && firstLength < thirdLength) {
    console.log(`${firstString} is smallest string`);
} else if (secondLength < firstLength && secondLength < thirdLength) {
    console.log(`${secondString} is smallest string`);

} else if (thirdLength < firstLength && thirdLength < secondLength) {
    console.log(`${thirdString} is smallest string`);

}else{
    console.log("found two or more string of same length")
}


