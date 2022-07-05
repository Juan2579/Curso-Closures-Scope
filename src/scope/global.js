// variables

var a; //declarando
var b = "b"; //declaramos y asignamos
b = "bb"; //reasignacion
var a = "aa"; //redeclaración

//Global Scope
var fruit = "Apple" // global
console.log(fruit)

const bestFruit = (fruit) => {
    console.log(fruit)
}

bestFruit(fruit);

//Otra forma de crear una variable global
function countries(){
    country = "Colombia"  //No declaramos la variable, por lo tanto será (por defecto) global
    console.log(country)
}

countries();
console.log(country)