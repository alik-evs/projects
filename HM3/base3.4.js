// 4.
//  Написати функцію compact() яка має приймати на вхід масив, а на вихід має повертати значення нового масиву без повторень.
//  приклад:
//  const arr = [5, 3, 4, 5,6,7,3];
//const arr2 = compact(arr);
//console.log(arr2) ; // [5,3,4,6,7]

function compact(arr) {
    let localArr = arr.slice();
    
    for (let i = 0; i < localArr.length; i++) {
      for (let j = i + 1; j < localArr.length; j++) {
        if (localArr[i] === localArr[j]) {
          localArr.splice(j, 1);
          j--;
        }
      }
    }
    
    return localArr;
  }
  
  const arr2 = [5, 3, 4, 5, 6, 7, 3];
  const arr3 = compact(arr2);
  console.log(arr3); 
