//7
//Напишіть функцію findUnique(arr), яка приймає масив arr і перевіряє на унікальність його елементи. Якщо всі елементи масиву унікальні (не мають дублів), то функція поверне true, інакше - false.
//findUnique([1, 2, 3, 5, 3]);  // => false
//findUnique([1, 2, 3, 5, 11]); // => true



function findUnique(arr) {
    for (let i = 0; i < arr.length; ++i) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          return false;
        }
      }
    }
    return true;
  }
let arrn1 = [1, 2, 3, 5, 3];
let arrn2 = [1, 2, 3, 5, 11];
findUnique(arrn1);  // => false
findUnique(arrn2); // => true

console.log(findUnique(arrn1));
console.log(findUnique(arrn2));