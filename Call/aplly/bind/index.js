
let name = {

    firstName: "bhagwan",
    lastname: "ikkar",

}

printFullName = function (hometown) {
    console.log(this.firstName + " " + this.lastname + " from " + hometown);

}


printFullName.call(name, "dehradun");



let name2 = {

    firstName: 'krishna',
    lastname: "ikkar",

}

printFullName.call(name2, "mumbai");



// 2. 

let myName = {

    fName: "bhagwan",
    lName: "ikkar",

}
let logFullName = function(discrit,game){
    console.log(this.fName+" " + this.lName +" " + discrit + game);
}

logFullName.call(myName, "pune","hollyabaoll");

let hisName = {

    fName:"ramesh",
    lName:"sharma",

}
// call method 

logFullName.call(hisName, "selu","cricket");
// applay 
logFullName.apply(hisName, ["cricket", "lolo"]);




