const str = "React is a library";


function reverseWordsStr(str){

  let arrOfWords = str.split(" ");
  let reverseWords = arrOfWords.map((word) =>
    word.split("").reverse().join(""));


    return reverseWords.join(" ");



}

const result = reverseWordsStr(str);
console.log(result);