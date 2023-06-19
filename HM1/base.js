alert("Yevsieieva");


// #3
let a;
let b;
a = 1;
b = 5;
alert(`a = ${a} and b = ${b}`);
a = b;
alert(`a = ${a} and b = ${b}`);

//4
let dataObject  = {
    String: "Apple",
    Number: 2,
    Boolean: false,
    Undefined: undefined,
    Null: null
    };


//5
isAdult = confirm("Are you 18+?");
console.log(`User is adult - ${isAdult}`);


//6
let firstName = "Alya";
let surname = "Yevsieieva";
let course = "JS Fundamentals";
let birthYear = 1997;
let isMerried = false;

console.log(`birthYear: ${birthYear} type is ${typeof(birthYear)}`);
console.log(`isMerried: ${isMerried} type is ${typeof(isMerried)}`);
console.log(`firstName: ${firstName} type is ${typeof(firstName)}`);
console.log(`surname: ${surname} type is ${typeof(surname)}`);
console.log(`course: ${course} type is ${typeof(course)}`);

let hobby = null;
let undefinedValueTask6 = undefined;

console.log(`hobby: ${hobby} type is ${typeof(hobby)}`);
console.log(`undefinedValueTask6: ${undefinedValueTask6} type is ${typeof(undefinedValueTask6)}`);

//7
let login = prompt("Enter you login:");
let email = prompt("Enter your email:");
let password = prompt("Enter your password:");
alert(`Dear user your login is ${login}, your email is ${email}, your password is ${password}`);


//8

let hour = +prompt("Enter any hours quantity to get its conversion into sec:");
alert(`There are ${hour * (60 ** 2)} sec in ${hour} hour(s)`);


let day = +prompt("Enter any day quantity to get its conversion into sec:");
alert(`There are ${day * 24 * (60 ** 2)} sec in ${day} day(s)`);


let month = +prompt("Enter any month quantity to get its conversion into sec:");
alert(`There are ${month * 24 * 30 * (60 ** 2)} sec in ${month} month(s)`);