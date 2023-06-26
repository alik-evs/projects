//3.
// Напишіть функцію randArray(k), яка заповнюватиме масив k випадковими цілими числами. Випадкові числа генеруються із діапазону 1-500.
//randArray(5);  // [399,310,232,379,40]

function randArray(k) {
    localArr = [];
    
    while (k >= 1) {
        let n = Math.floor(Math.random() * 500) + 1;
        localArr.push(n);
        --k;
    }
    return localArr;
    }
    randArray(5); 
    console.log(randArray(5))