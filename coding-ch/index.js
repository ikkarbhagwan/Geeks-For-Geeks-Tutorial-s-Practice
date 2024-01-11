const string = ["this is my house make it beautiful.."];

function getStrNoVowels(str) {
    let result = "";

    for (let char of str[0]) { 
        let vowels = ["a", "e", "i", "o", "u"];
        if (!vowels.includes(char.toLowerCase())) {
            result += char;
        }
    }

    return result;
}

const updateStr = getStrNoVowels(string);
console.log(updateStr);

// 2. 

let str = "125487846543";

const maskChar = "#".repeat(4);
const resultedNum = str.slice(0, str.length - 4) + maskChar;

console.log(resultedNum);
