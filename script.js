/*

let js = "amazing";
if (js === "amazing") {
  alert("JavaScript is Fun");
}

 console.log(40 + 8 + 23 - 10);


console.log("Ahmed");

console.log(23);



let firstName = "Matilda";

let first = "Ahmed";


//nums , letters , underscors , dollar sign

let person = "Ahmed";

let PI = 3.1415;

let myFirstJob = "Coder" ;
let myCurrentJob = "Teacher";


//Variable name conventions
let job1 = "Programmer";
let job2 = "Teacher";

console.log(myFirstJob);

*/




// let javaScriptIsFun = true;

// console.log(javaScriptIsFun);




// console.log(typeof true);
// console.log(typeof javaScriptIsFun);


// console.log(typeof 23);

// console.log(typeof 'jonas');

/*

javaScriptIsFun = 'YES!'

console.log(typeof javaScriptIsFun);


let year;

console.log(year);

console.log(typeof year);


year = 1991;
console.log(typeof year);

console.log(typeof null);

*/

// let are used to decalare valraibles that will be changed later

// let age = 30;
// age = 31;

//const used used to declare a variables that will be not changed

// const birthYear = 1990;


// const job;
//var old way to declare a variable

/*
var job = "programmer";

job = "teacher"


lastName = "Ibrahim";

console.log(lastName);
*/

//Math operators
/*
const now = 2037;
const ageAhmed = now - 2020;
const ageSarah = now - 2018;

console.log(ageAhmed, ageSarah);

console.log(ageAhmed * 2 , ageSarah / 10, 2**3 );
// 2**3 mean 2 * 2 * 2 

const firstName = "Ahmed";
const lastName = "Ibrahim";

console.log(firstName + ' ' + lastName);


// Assingement Operators

let x = 10 + 5;
console.log(x);

x += 10; // x = x + 10
x *= 4 ; // x = x * 4
x++; // x = x + 1
x--; // x = x - 1 
console.log(x);


// comparison operators

console.log(ageAhmed > ageSarah); // > , < , >= , <=

console.log(ageSarah >= 18);



const isFullAge = ageSarah >= 18;


console.log(now - 1991 > now - 2018);

*/

/*
const now = 2037;
const ageAhmed = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5 );

let x = y = 25 - 10 -5 ; // x = y = 10 , x = 10
console.log(x , y);

const averageAge = (ageAhmed + ageSarah) / 2; 

console.log(ageAhmed , ageSarah , averageAge);


const firstName = "Ahmed";

const job = "teacher";

const birthYear = 1991;

const year = 2037;

const ahmed = "I'm "+firstName + ', a ' + (year - birthYear) + ' years old ' + job + "!";

console.log(ahmed);


const ahmedNew = `I'm ${firstName}, a ${year - birthYear} years old ${job} !`;

console.log(ahmedNew);

console.log(`Just a regular string...`);


console.log('String with \n multiple lines ');


console.log(`String
  multiple 
  lines`);

*/


const age = 19;

const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log('Sarah can start driving license ');
  
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
  
};

const birthYear = 2012;

let century;

if (birthYear <= 2000) {
   century = 20;
}else {
   century = 21;
}

console.log(century);




