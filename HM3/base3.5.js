// 5.
//Є масив [5, “Limit”, 12, “a”, “3”, 99, 2, [2, 4, 3, “33”, “a”, “text”], “strong”, “broun”]
//Написати функцію яка виведе нові масиви які складаються із даних початкового масиву, але одного типу даних (не приводити тип стрінг в число навіть якщо там лише число)
//let  arr = [5, “Limit”, 12, “a”, “3”, 99, 2, [2, 4, 3, “33”, “a”, “text”], “strong”, “broun”];
//let arrNew = funcName(arr);
/* 
[
[5, 12, 99, 2, 2, 4, 3],
[”Limit”, “a”, “3”, “33”, “a”, “text”, “strong”, “broun”
] 
*/


function splitArrByTypes(arr) {
    let arrNumbers = [];
    let arrStrings = [];
    let arrOutput = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        let innerArr = splitArrByTypes(arr[i]);
        if (innerArr[0].length > 0) {
          arrNumbers.push(...innerArr[0]);
        }
        if (innerArr[1].length > 0) {
          arrStrings.push(...innerArr[1]);
        }
      } else if (typeof arr[i] === 'number') {
        arrNumbers.push(arr[i]);
      } else if (typeof arr[i] === 'string') {
        arrStrings.push(arr[i]);
      }
    }
  
    if (arrNumbers.length > 0) {
      arrOutput.push(arrNumbers);
    }
    if (arrStrings.length > 0) {
      arrOutput.push(arrStrings);
    }
  
    return arrOutput;
  }
  
  let arr1 = [5, 'Limit', 12, 'a', '3', 99, 2, [2, 4, 3, '33', 'a', 'text'], 'strong', 'broun'];
  let arrNew = splitArrByTypes(arr1);
  console.log(arrNew);




