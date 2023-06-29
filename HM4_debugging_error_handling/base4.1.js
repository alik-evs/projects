//1.
//Напишіть функцію sumSliceArray(arr, first, second), яка приймає масив arr і два числа (first и second) – 
//порядкові номери елементів масиву, які необхідно скласти. Наприклад, якщо ввели 3 та 5 – сумуються 3-й та 
//5-й елементи.Функція повинна генерувати винятки, якщо були введені не числа, і коли одне з чисел або обидва 
//більшого розміруза довжину масиву. Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.

function sumSliceArray(arr, first, second) {
    let sum = arr[first] + arr[second];
    return sum;
  } 
  
  let arr1 = [2, 6, 7, 3, 9];
  let firstIndex = 1;
  let secondIndex = 3;
  
  try {
    if (typeof firstIndex !== 'number') {
      throw new TypeError("First index is not a number");
    }
  
    if (firstIndex >= arr1.length) {
      throw new RangeError("First index is not within the range");
    }
  
    if (typeof secondIndex !== 'number') {
      throw new TypeError("Second index is not a number");
    }
  
    if (secondIndex >= arr1.length) {
      throw new RangeError("Second index is not within the range");
    }
  
    let sumByIndex = sumSliceArray(arr1, firstIndex, secondIndex);
    console.log(sumByIndex);

  } catch (error) {
    if (error instanceof RangeError) {
      console.log('RangeError:', error.message);
    } else if (error instanceof TypeError) {
      console.log('TypeError:', error.message);
    } else {
      console.log('Error:', error.message);
    }
  }