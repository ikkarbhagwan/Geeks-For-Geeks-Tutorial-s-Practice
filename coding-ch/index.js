// const string = ["this is my house make it beautiful.."];

import { number } from "prop-types";

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

// const arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const outputResult = arrNum.map(num => num % 2 === 0 ? num - 1 : num + 1);
// console.log(outputResult);


// // 5. sum of Num which is less than 40

// let givenData = [12, 45, 87, 10, 23, 99];

// let findSum = givenData.reduce((acc, curr) => curr < 40 ? acc + curr : acc, 0);
// console.log(findSum);


// // 5 .

// const obj5 = [
//     {
//         name: "ikkar",
//         age : 35,
//     },
//     {
//         name: "kadam",
//         age : 23,
//     },
//     {
//         name: "kitale",
//         age : 56,
//     }
// ]


// // find only names 


// const findAns = obj.filter(obj => obj.age>30).map(obj => obj.name);
// console.log(findAns);


// //  sum of even and odd num 

// let getData = [1,2,3,4,5,6,7];

// let goodOutput = getData.reduce



// let name = "this is Bhagwan";

// let withoutSpacesString = name.replace(/ /g, "");
// console.log(withoutSpacesString);

// ///////////////////////////////////////////////////////////////////////////////////////////////

// let a = "this is row string";
// let ans = a.replace(/ /g, "");
// console.log(ans);


// ///////////////////////////////////////////////////////////////////////////////////////////////

//  let string = "this is row string";

//  let stringb = string.split(' ').join('');
//  console.log(stringb);

//  //////////////////////////////////////////////////////////////////////////////////////////////



//  let bat = "this is row room";

//  let batAns = bat.split(' ').filter( (char) => { char !== " " }).join('');

//  console.log(batAns);


// //////////////////////////////////////////////////////////////////////////////////////////////
  
// let obj = { name: "Prakash", age: 111, hairColor: "black", likes: "food" };
// let invertedObject = invertObject(obj);

// function invertObject(obj) {
//     let invertedObj = {};
  
//     for (let key in obj) {
//       invertedObj[obj[key]] = key;
//     }
  
//     return invertedObj;
//   }

  
//   console.log(invertedObject);


//////////////////////////////////////////////////////////////////////////////////////////////

const numbers = [1, 2, 3, 4, 5, 4, 3, 4, 3, 2, 1, 6, 7, 5];

const uniqueNumbers = new Set(numbers);

console.log(uniqueNumbers);

//////////////////////////////////////////////////////////////////

console.log('Start');

setTimeout(() => {
  console.log('Timeout callback');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise resolved');
});

console.log('End');


console.log("start");

setTimeout(() => {
    console,log("Timeout callback");

}, 2000);

  Promise.resolve.then( () => {
    console.log("promise resolved");

  })

  console.log("End");


  /////////////////////////////////////////////////////////


  function fetchData() {
    return new Promise((resolve, reject) => {
      // Simulating an asynchronous operation
      setTimeout(() => {
        const data = 'Data from the server';
        // Resolve the promise with the data
        resolve(data);
      }, 2000);
    });
  }
  
  fetchData()
    .then(data => console.log(data))
    .catch(error => console.error(error));

///////////////////////////////////////////////////////////////

const link = document.getElementById('myLink');

link.addEventListener('click', function(event){

    event.preventDefault();
    console.log("Link copied but default behavior prevented.");


});

/////////////////////////////////////////////////////////////////////

const button = document.getElementById('button');

button.addEventListener('click', function(event){
    event.preventDefault();
    console.log("this is prevent default")
})
