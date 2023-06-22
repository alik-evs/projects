
// 1. a<b<c

a = 1;
b = 2;
c = 3;
let isTrue = a < b && b < c && a < c;
console.log(Boolean(isTrue) == true);


// 2.

let x = 1;
let y = 2;

let res1 = x.toString() + y.toString(); // Допишіть код, необхідно використовувати змінні x і y
console.log(res1); // ""12""
console.log(typeof res1); // ""string""

let res2 = Boolean(x) + y.toString(); // Допишіть код, необхідно використовувати змінні x і y
console.log(res2); // ""true2""
console.log(typeof res2); // ""string""

let res3 = y > x;// Допишіть код, необхідно використовувати змінні x і y
console.log(res3); // true
console.log(typeof res3); // ""boolean""

let res4 = Math.sqrt * (--y - x); // Допишіть код, необхідно використовувати змінні x і y
console.log(res4); // NaN
console.log(typeof res4); // ""number""




// 3 Використовуючи функцію prompt() задайте користувачу питання про досягнення ним повнолітнього віку. Результат запишіть в змінну isAdult. В залежності від отриманого значення виведіть відповідне повідомлення про статус особи. Наприклад: при виконанні умови вік більше 18 вивести “Ви досягли повнолітнього віку”. Якщо вік менше 18 років вивести “Ви ще надто молоді”.

let isAdult = +prompt("How old are you?");
if (isAdult >= 18) {
    alert("you are an adult");
}
else {
    alert("You're too young(");
}



// 4. Користувач вводить три довжини сторін трикутника (використовуйте prompt () три рази для введення 
//кожної сторони).
//Необхідно 
//a) визначити і вивести в консоль площу трикутника 
//b) перевірити чи цей трикутник є прямокутним і вивести в консоль результат перевірки.
//Здійснювати перевірку чи введені користувачем значення коректні, в іншому випадку вивести 
//'Incorrect data‘. Результат обчислення площі трикутника виводити в консоль з точністю 
//3 знаки після коми (наприклад:  8.42355465 =>  8.424).

let sideA = +prompt("Enter a length of A side");
if (!isNaN(sideA)) {
    console.log();
} 
else {
    console.log("Incorrect data");
}

let sideB = +prompt("Enter a length of B side");
if (!isNaN(sideB)) {
    console.log();
} 
else {
    console.log("Incorrect data");
}

let sideC = +prompt("Enter a length of C side");
if (!isNaN(sideC)) {
    console.log();
} 
else {
    console.log("Incorrect data");
}

let p = (sideA + sideB + sideC) / 2;
let s = Math.sqrt(p * (p - sideA) * (p - sideB) * (p - sideC));
alert(`Area of triangle = ${s.toFixed(3)}`); // здесь скорее всего стоит показать результат юзеру
console.log(`${s.toFixed(3)}`); // а дальше по таске в консоль


let alphaCos = Math.acos((sideB**2 + sideC**2 - sideA**2) / (2 * sideB * sideC));
let betaCos = Math.acos((sideA**2 + sideC**2 - sideB**2) / (2 * sideA * sideC));
let gammaCos = Math.acos((sideA**2 + sideB**2 - sideC**2) / (2 * sideA * sideB));

let alphaAngle = (alphaCos * 180) / Math.PI;
//console.log(`${alphaAngle}`);
let betaAngle = (betaCos * 180) / Math.PI;
//console.log(`${betaAngle}`);
let gammaAngle = (gammaCos * 180) / Math.PI;
//console.log(`${gammaAngle}`);

if (alphaAngle == 90 || betaAngle == 90 || gammaAngle == 90) {
    console.log("This triangle is right-angle");
}
    else {
        console.log("It's not a right-angle triangle");
    }





    
// 5.1


let currentTime = new Date();
let hrs = currentTime.getHours();
console.log(hrs);

if (currentTime >= 23 || currentTime < 5) {
    alert("Доброї ночі");
}
else if (currentTime >= 5 && currentTime < 11) {
    alert("Доброго ранку");
}
else if (currentTime >= 11 && currentTime < 17) {
    alert("Доброго дня");
}
else if (currentTime >= 17 && currentTime < 23) {
    alert("Доброго вечора");
}
else {
    console.log();
}



//5.2

switch (true) {
    case currentTime >= 23 || currentTime < 5:
    alert("Доброї ночі");
    break;
    case currentTime >= 5 || currentTime < 11:
    alert("Доброго ранку");
    break;
    case currentTime >= 11 || currentTime < 17:
    alert("Доброго дня");
    break;
    case currentTime >= 17 || currentTime < 23:
    alert("Доброго вечора");
    break;
    default:
    console.log();
    break;
    }
    
    
    
    
//6. Задано масив чисел, знайти число яке найбільш часто входить в масив, занести це число 
// в новий масив і видалити всі входження цього числа із поточного масиву.

let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5];

let sortedArr = arr.slice().sort(); 
let frequentNum = sortedArr.reduce((prev, curr) =>
  (sortedArr.lastIndexOf(curr) - sortedArr.indexOf(curr) > prev[1]) ? [curr, sortedArr.lastIndexOf(curr) - sortedArr.indexOf(curr)] : prev,
  [null, 0]
)[0];
console.log(frequentNum);

arr = arr.filter(num => num !== frequentNum);
console.log(arr) // [4, 2, 1, 6, 3, 2]
    
    