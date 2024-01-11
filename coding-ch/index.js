// const string = ["this is my house make it beautiful.."];

// function getStrNoVowels(str) {
//     let result = "";

//     for (let char of str[0]) { 
//         let vowels = ["a", "e", "i", "o", "u"];
//         if (!vowels.includes(char.toLowerCase())) {
//             result += char;
//         }
//     }

//     return result;
// }

// const updateStr = getStrNoVowels(string);
// console.log(updateStr);

// // 2. 

// let str = "125487846543";

// const maskChar = "#".repeat(4);
// const resultedNum = str.slice(0, str.length - 4) + maskChar;

// console.log(resultedNum);


// // 3.

// const inputStr = "Bhagwan";

// let aToz = "abcdefghijklmnopqrstuvwxyz";
// let updated ="";



// for(let i = 0; i>inputStr.length.toLowerCase(inputStr); i++){
//     if(inputStr[i] =[i]){
//         aToz =i+2;
//         updated = aToz[i]

//     }
//     return updated;
// }

// 4. 

const arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const outputResult = arrNum.map(num => num % 2 === 0 ? num - 1 : num + 1);
console.log(outputResult);


// 5. sum of Num which is less than 40

let givenData = [12, 45, 87, 10, 23, 99];

let findSum = givenData.reduce((acc, curr) => curr < 40 ? acc + curr : acc, 0);
console.log(findSum);


// 5 .

const obj = [
    {
        name: "ikkar",
        age : 35,
    },
    {
        name: "kadam",
        age : 23,
    },
    {
        name: "kitale",
        age : 56,
    }
]


// find only names 


const findAns = obj.filter(obj => obj.age>30).map(obj => obj.name);
console.log(findAns);


//  sum of even and odd num 

let getData = [1,2,3,4,5,6,7];

let goodOutput = getData.reduce
