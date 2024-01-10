let obj = {
    name: "bhagwan",
    age: 23,
    city: "pune",
    adress: {
        area: "nagar",
        pin: 431424,
    },

    courses: ['html', 'css', 'javascript', 'react']
}

let { name, age, ...rest } = obj;

console.log(name);
console.log(rest);

//  nested objects 

let employeee = {

    engineers: {

        emp2: {
            game: "mumbai",
            age: 45,
            city: "selu"





        },

        emp5: {
            game: "arjun",
            age: 45,
            city: "parbhani"





        }






    },

    youtube: {

        emp3: {

            game: "suresh",
            age: 45,
            city: "delhi"




        },
        emp4: {

            game: "damu",
            age: 45,
            city: "mombai"




        }



    }





}


let person = {


    fisrtName: 'john',
    lastName: 'sharma'

};

let { firstName: fName, lastName: lName } = person;


// in this exmaple, the firstname and lasname properties are assinged to fanem and lname variable srespectively


let { firstName, lastName, middleName } = person;
console.log(middleName); // undefined
// In this example, the middleName property doesn’t exist in the person object, therefore, the middleName variable is undefined.

