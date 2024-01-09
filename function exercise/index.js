

function calculateSum(min, max) {
    let total = 0;


    for (let i = min; i <= max; i++) {

        total = total + i;

    }
    console.log(total);


}
const result = calculateSum(1,20);
// console.log(result);

//  arrow functions 

const calcFun = (x,y) =>{
    return x % y;

}

console.log(calcFun(10,65));


//  for of - For in loop



// 2.

const arrayName = ['a','c','c'];

for(let element of arrayName)
{
    console.log(element);

}


// 3. 

let obj1 = {
    name : "bhagwan",
    lName : "Ikkar",
    age :25
}

const obj2 = obj1;

obj1.name = "aashish";
obj1.age = 12;

console.log(obj2);
console.log(obj1);

// here  we made shallow copy 



