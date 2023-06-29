//3.
//Реалізуйте функцію calcRectangleArea(width, height), яка приймає 2 параметри ширина прямокутника width і висота 
//прямокутника height і обраховує його площу. Передбачити припинення виконання програми і генерацію винятку у 
//випадку, якщо функції передано не числові параметри.
//Напишіть код, який використовує цю функцію та обробляє можливі виняткові ситуації.


function calcRectangleArea(width, height) {

    if (typeof width !== 'number') {
        throw new TypeError("Width is not a number");
    }    

    if (width === undefined || width === null || width === "") {
        throw new Error("Width cannot be empty");
    }

    if (width == 0) {
        throw new Error("Width cannot be 0");
    }

    if (width < 0) {
        throw new Error("Width cannot be negative");
    }

    ////// height

    if (typeof height !== 'number') {
        throw new TypeError("Height is not a number");
    }

    if (height === undefined || height === null || height === "") {
        throw new Error("Height cannot be empty");
    }

    if (height == 0) {
        throw new Error("Height can not be 0");
    }

    if (height < 0) {
        throw new Error("Height cannot be negative");
    }

    let RectangleArea = width * height; 
    return RectangleArea;
}


try {
w = 3;
h = "1";

let s = calcRectangleArea(w, h);
console.log(s);
    } catch (error) {
        if (error instanceof TypeError) {
      console.log('TypeError:', error.message);
    } else {
      console.log('Error:', error.message);
    }
}
 
  
  
  
  
  
  
