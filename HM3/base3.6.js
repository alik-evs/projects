//6.
//Напишіть функцію calc(a, b, op), яка виконує над числами a і b одну із арифметичних операцій та повертає її результат. 
//Вид операції визначається цілим числом op: 1 – віднімання, 2 – добуток, 3 – ділення, інші значення – додавання.
//calc(10, 3, 1); // => 7


function calc(a, b, op) {
    let result; 
    if (op === 1) {
      result = a - b;
    } else if (op === 2) {
      result = a * b;
    } else if (op === 3) {
      result = a / b;
    } else {
      result = a + b;
    }
    return result;
  }
  
  console.log(calc(4, 5, 3));