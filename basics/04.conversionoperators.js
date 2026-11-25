let value = 3;
let newValue = -value;
// console.log(newValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);

let str1 = "hello";
let str2 = " Ritik";
let str3 = str1 + str2;
// console.log(str3);

let num1 = 10;
let num2 = 20;
let str = "30";
let total = num1 + num2 + str;
// console.log(total);
// console.log(typeof(total));
/*what happened here
num1 +num2 + str
10 + 20+ "30"
30 + "30"
3030  //string concatenation 
value returned is also a string
*/

let diff = str - num1 + num2;
// console.log(diff);
/*what happened here  
str - num1 +num2
"30" - 10 + 20
(30-10)+20
20 + 20
40
value returned in a number
*/

let score = 100; 
let newScore1 = score++; //post-increment
console.log(newScore1); //100
console.log(score); //101
// /* first used the current value of x and then increments


let count = 100;
let newCount = ++count; //pre-increment
console.log(newCount); //101
console.log(count); //101
// first increase the value by 1
