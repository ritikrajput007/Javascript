/* Primitive (call by value)  
7 types
string, number, bigInt, boolean, symbol, null, undefined
*/

// *** No need to define the datatype of the variable *** because js is a dynamically typed language

let a = 12;  //datatype=  number
let b= "12";  //datatype= string
let c = true;  //datatype= boolean
let a1 = 12.2;  //datatype= number
let bigInt = 12339898n;  //datatype= bigInt
let d = undefined;  //datatype= undefined
let e = null;  //datatype= object
let id = Symbol['123'];  //datatype= symbol
let anotherId = Symbol['123'];  //datatype= symbol


/* Non-Primitive
3 types
object, function, array
*/

const heros = ["Ritik", "Ankit", "Sanchit"]; //datatype= object

let myObj = {   
    n : "ritik",
    age : 23,
    city : "Kanina",     // datatype= object
}

const myFun = function(){
    console.log("Hello World"); //datetype = object function
}