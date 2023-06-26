// 2
// Задані цілі числа a і b (a < b). Виведіть усі цілі числа від a до b включно, при цьому a виводится 1 раз, число а+1 - два рази і т.д.
// 1,2,2,3,3,3...

function logIntegersInRange (a, b) {
    for (i = a; i <= b; ++i) {
        for (n = 1; n <= i; ++n)
    
        console.log(i);
        }
    }
    // console.log(logIntegersInRange(1, 6));
    