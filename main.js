//!1a//
// const form=`{
//     "name":"mayan elias",
//     "message":"your papers waiting for you",
//     "email":"eliasmayan@gmail.com"
// }`
// console.log(form);
// console.log(JSON.parse(form));
// //!2abc//
// const vehicles=`{
//     "cars":[{"brand":"mazda",
//     "price":10000,
//     "year":2007},
//     {"brand":"kia",
//     "price":20000,
//     "year":2012},
//     {"brand":"subaru",
//     "price":30000,
//     "year":2010}],
//     "ships":[{"name":"boat",
//     "year":2003,
//     "placeanchorage":"israel"},
//     {"name":"sidecar",
//     "year":2012,
//     "placeanchorage":"buenos-aires"},
//     {"name":"rowboat",
//     "year":2008,
//     "placeanchorage":"mexico"}]
// }`
// console.log(vehicles);
// console.log(JSON.parse(vehicles));
// let vehiclesJson=JSON.parse(vehicles);
// var p=document.getElementById("p");
// for (const iterator of vehiclesJson.ships) {
//  p.innerHTML+=`name:${iterator.name}<br>year:${iterator.year}<br>placeanchorage:${iterator.placeanchorage}<br>`   
// };
//!3ab//
// let form=document.getElementById("form");
// let input1=document.getElementById("name");
// let input2=document.getElementById("email");
// let input3=document.getElementById("text");
// let button=document.getElementById("but");
// button.addEventListener("click",function(event){    
// event.preventDefault(); 
// let object={name:input1.value,email:input2.value,text:input3.value};
// console.log(object);
// console.log(JSON.stringify(object));  
//     });
//!4//
// function object(name,age,city,year){
// return{name,age,city,year}
// }
// let person=object("gil",28,"jerusalem",1993);
// console.log(person);
// console.log(JSON.stringify(person));
// //!5//
// `"function" json("name","age,city,year){
// return{name,age,city,year}
// }`
// let person1=json("gil",28,"jerusalem",1993);
// console.log(JSON.parse(person1));
//!6//
// function ageMultipleByThree(age,name,email){
// return{age,name,email}
// }
// let person2=ageMultipleByThree(27*3,"mayan","eliasmayan@gmail.com");
// console.log(person2);
// console.log(JSON.stringify(person2));









