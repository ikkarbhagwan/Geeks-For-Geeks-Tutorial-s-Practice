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
