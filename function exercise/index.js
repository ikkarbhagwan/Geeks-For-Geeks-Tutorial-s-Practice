

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
