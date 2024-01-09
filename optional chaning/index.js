

const obj1= {
    name:"a",
    age:23,
    city:"pune",
 adress:{
     area:"ab-1",
          turn:2

 },
}

console.log(obj1.adress.area);

if(obj1.adress !== undefined){
    console.log(obj1.adress.area);

}else{
    console.log("adress not found");
}
