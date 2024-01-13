const str = "React is a library";


function reverseWordsStr(str){

  let arrOfWords = str.split(" ");
  let reverseWords = arrOfWords.map((word) =>
    word.split("").reverse().join(""));


    return reverseWords.join(" ");



}

const result = reverseWordsStr(str);
console.log(result);



// 2. 

let num = "1234548748546";

let numArray = num.split("").map(Number);
console.log(numArray);

let findAddition = numArray.reduce((acc, curr) => acc + curr, 0 );

console.log(findAddition);
 

2///////////////////////////////////////////////

// Assignment 2: Create an input field and take string input in it from the user. Render the input value on the viewport. Create a button and on click of the button reverse the input and display it on the view.

function reverseInput(){
  const inputField = document.getElementById("inputField");
  const userInput = inputField.value;


  const reversedInput = userInput.split('').reverse().join('');

  document.getElementById("DisplayInput").textContent = userInput;
  document.getElementById("displayReveredInput").textContent = reversedInput;



};


3. ///////////////////////////////////////////////////////////////////////////////////////////////////////

