

// // map method 


// // let arr = [2,4,6,8,10];

// // let arrResult = arr.map((num) => num * 2);

// // console.log(arrResult);


// // filter method 

// let fill = [2, 4, 6, 8, 10];

// const output = fill.filter((x) => x % 3 === 0);

// console.log(output);


// // greater than 4 

// const output2 = fill.filter((num) => num > 4);


// console.log(output2);




// using reduce method find sum 

let array1 = [9, 5, 6, 7, 8, 6];

let sum = 0;

function findSum(array1) {

    let sum = 0;
    for (let i = 0; i < array1.length; i++) {

        sum = sum + array1[i];

    }
    return sum;

}
console.log(findSum(array1));



// more 

let array2 = [12, 45, 56, 45, 45, 89];

function findMax(array2) {
    let max = 0;
    for (let i = 0; i < array2.length; i++) {

        if (array2[i] > max) {

            max = array2[i];

        }

    }
    return max;

}


console.log(findMax(array2));


// 3. 

let num = [12, 12, 45, 65, 78];

function findSum(num) {
    let sum = 0;

    for (let i = 0; i < num.length; i++) {

        sum = sum + num[i];


    }
    return sum;


}
console.log(findSum(num));

// using reduce method 

let updateArr = num.reduce(function (acc, curr) {
    acc = acc + curr;
    return acc;

}, 0);


// 4. 

// chaining of methods 

const users = [

    { firstName: "bhagwan", lastName: "ikkar", age: 23 },
    { firstName: "suresh", lastName: "ikkar", age: 26 },
    { firstName: "kunal", lastName: "ikkar", age: 25 },
    { firstName: "ashok", lastName: "ikkar", age: 29 },

];

const outPut = users.filter((x) => x.age < 30)
    .map((x) => x.firstName);
console.log(outPut);


// 5. 

const value = [23, 45, 8, 8, 23, 556];

const updatedValue = value.reduce(function (acc, curr) {

    if (curr > acc) {
        acc = curr;

    }
    return acc;

}, 0);

console.log(updatedValue);