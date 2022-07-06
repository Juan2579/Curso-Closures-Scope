//declarar y asignar por separado
var firstName; //undefined
firstName = "Oscar"
console.log(firstName)

//declarar y asignar al mismo tiempo
var lastName = "David"
lastName = "Ana" //reasignacion
console.log(lastName)

//redeclaracion y reasignacion
var secondName = "David" //declarando y asignando
var secondName = "Ana" //redeclarando y reasignando
console.log(secondName)

// Let
let fruit = "Apple" // declarar y asignar
fruit = "Kiwi" // reasignar
console.log(fruit)

let fruit = "Banana" //no es posible redeclarar una variable con let
console.log(fruit)

//Const
const animal = "dog"; // declarar y asignar
animal = "cat"; // reasignar
const animal = "Snake"
console.log(animal)  //no podemos reasignar ni redeclarar usando una variable con const


const vehicles = [];
vehicles.push("Mazda")
console.log(vehicles)

vehicles.pop("Mazda")
