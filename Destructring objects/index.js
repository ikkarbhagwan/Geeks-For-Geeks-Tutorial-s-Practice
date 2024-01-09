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


let {engineers:{game}} = engineers;
console.log(game);