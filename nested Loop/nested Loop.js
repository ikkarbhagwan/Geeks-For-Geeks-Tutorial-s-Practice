for (let i = 1; i < 10; i++) {

    for (let j = 1; j < 12; j++) {

        let products = i * j;
        console.log(`${i} * ${j} = ${products} `);
    }

//  for of loop

const Fname = "Bhgawan Ikkar";
const stringLength = Fname.length;

for (let i = 0; i < stringLength; i++) {
    console.log(Fname[i]);
}

//  making start pattern
let symbol = "* ";

for (let i = 0; i <= 8; i++) {
    console.log(symbol.repeat(i));
}

let symbolN = "* ";

for (let i = 0; i <= 8; i++) {
    console.log(symbolN.repeat(i));
}

// reverse

let start = "* ";

for (let i = 6; i <= 6; i--) {
    console.log(start.repeat(i));

}

// find the no. of char
let myName = "Bhagwan Govindrao Ikkar";
let count = 0;

for (let i = 0; i < myName.length; i++) {
    count++;
}
console.log(`The number of characters in the string is ${count}`);

// using length
let myName1 = "Bhagwan Govindrao Ikkar";
let count1 = myName1.length;

console.log(`The number of characters in the string is ${count1}`);

// /find all the even No. from this


let reminder = 0;

for (i = 0; i <= 100; i++) {

    if (reminder = i % 2) {
        console.log(`${i} is an EVen Number`);
    } else {
        let odd = `${i} is an odd number`;
        console.log(odd);

    }
}


//  cheaking is Vovels 
let stringName = 'This is my space!';
let vowels = "aeiou";

for (let i = 0; i < stringName.length; i++) {
    if (vowels.includes(stringName[i])) {
        console.log(`${stringName[i]} is a vowel`);
    }
}
