//5.
//Реалізуйте функцію showUser(id), яка приймає параметром користувацьке id і повертає об’єкт, 
//який містить значення переданої id. Також функція викидає помилку у разі якщо введено від’ємне id.
//Реалізуйте функцію showUsers(ids), яка приймає параметром масив користувацьких айді ids, перевіряє 
//з використанням функції showUser() кожен елемент масиву ids на коректність, в разі виключної 
//ситуації виводить повідомлення про помилку. Функція showUsers(ids) повертає масив об’єктів,
// де значеннями ключів є коректні елементи ids.

//Приклад роботи програми:
//showUsers([7, -12, 44, 22]);
// Error: ID must not be negative: -12
// [ {id: 7}, {id: 44}, {id: 22} ]


function showUser(id) {
    if (id <= 0) {
        throw new RangeError("Can not be 0 or negative");
    }

    if (!id) {
        throw new Error("id is empty");
    }

    if (typeof id !== 'number') {
        throw new TypeError("id not a number");
    }
    
    if (!Number.isInteger(id)) {
        throw new TypeError("id must be an integer");
      }
    


let userId = {
    'id': id
}
return userId;
}

try {
id = "3";
showUser(id);
console.log(showUser(id));
} catch (error) {
    if (error instanceof TypeError) {
        console.log('TypeError:', error.message);
    } else if (error instanceof RangeError) {
        console.log('RangeError:', error.message);
    } else {
        console.log('Error:', error.message);
    }
}

function showUsers(ids) {
    let validIds = [];
  
    for (let id of ids) {
      try {
        let user = showUser(id);
        validIds.push(user);
      } catch (error) {
        console.log("Error:", error.message);
      }
    }
    return validIds;
}

let newArr = [2, -4, 5, 3, 6, 0, "f", 2.5];

console.log(showUsers(newArr));
