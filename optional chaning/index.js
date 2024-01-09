

const obj1 = {
    name: "a",
    age: 23,
    city: "pune",
    adress: {
        area: "ab-1",
        turn: 2

    },
    getCityName : function (){
        console.log("welcome bhagwan!");

    }
}

console.log(obj1.adress.area);

if (obj1.adress !== undefined) {
    console.log(obj1.adress.area);

} else {
    console.log("adress not found");
}
obj1.getCityName();
console.log(obj1.userMsg?.());



// optional chaining 

