let obj = {
    name : "bhagwan",
    age: 23,
    city: "pune",
    adress:{
        area:"nagar",
        pin:431424,
    },

    courses :['html','css','javascript','react']
}

let {name,age,...rest} = obj;

console.log(name);
console.log(rest);