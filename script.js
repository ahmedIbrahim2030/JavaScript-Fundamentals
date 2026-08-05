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

/*
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

*/

/*

//Type conversion VS Type coertion


// convertion : convert values manually
const inputYear = '1991';

console.log(Number(inputYear), inputYear);

console.log(Number(inputYear) + 18);

console.log(Number('Ahmed'));

console.log(typeof NaN);

console.log(String(23), 23);

//coercion : that js convert it automatically behind the scene

console.log('I am ' + 23 + ' Years old');

console.log("I am " + String(23) + " Years old");

console.log('23' + 10 - 3);

console.log('23' * '2');

// * , / , -  -->coercion
// + concatniation

let n = '1' + 1; // 11 
n = n - 1; // 11 - 1  = 10 
console.log(n); // 1 => {Number}

*/

// 5 falsy values : 0, '', undefined, null , NaN

//Falsy values will become to be false when you come to convert them into boolean

/*

console.log(Boolean(0));

console.log(Boolean(undefined));

console.log(Boolean('Ahmed'));

console.log(Boolean({}));

console.log(Boolean(''));

const money = 100;
if (money) {
  console.log("Don't spend it all ;");
  
}else {
  console.log("You should get a job");
}

let height = 0;

if (height) {
  console.log("YAY! height is defined");
  
}else {
  console.log("Height is UNDEFINED");
  
};


*/





const age = 18;


if (age === 18) console.log('You just became an adult (strict) :D');

if (age == 18) {
console.log("You just became an adult (loosly) :D"); 
}

const favourite = Number(prompt("What's your favourite number ?"));

console.log(typeof favourite);


if (favourite === 23) { // '23' == 23 type coercion
  console.log('cool! 23 is an amzing number');
  
}else if (favourite === 7) {
  console.log('7 is also a cool number ');
  
}else if (favourite === 9) {
  console.log("9 is also a cool number");
  
}else {
  console.log('Number is not 23 or 7');
  
}

if (favourite !== 23) {
  console.log("why not 23?");
  
}






