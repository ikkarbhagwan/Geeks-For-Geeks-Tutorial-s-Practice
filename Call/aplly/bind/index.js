
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