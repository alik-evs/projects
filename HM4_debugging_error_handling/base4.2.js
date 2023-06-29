//2.
//Створіть функцію checkAge(), яка запитує у користувача його ім'я, вік та статус (адмін, модератор, користувач) 
//та генерує модальне вікно з помилкою, якщо:вік користувача менше 18 або більше 70 років (генерується помилка 
//типу RangeError).користувач не ввів жодних даних в будь-якому полі (виводиться повідомлення The field is empty! 
//Please enter your age з типом помилки Error). У полі статус введено неправильне слово (тип помилки EvalError).
//в полі вік введено нечислове значення. У всіх інших випадках користувач отримає доступ до перегляду фільму.
// У блоці catch передбачена можливість виведення назви та опису помилки.


function checkAge() {
    let name = undefined;
    let age = undefined;
    let status = undefined;
  
    try {
      while (!name) {
        name = prompt("Enter your name:");
  
        if (!name) {
          alert("Field cannot be empty!");
        }
      }
  
      while (!status || !["admin", "moderator", "user"].includes(status.toLowerCase())) {
        status = prompt("Enter your status:");
  
        if (!status) {
          alert("Field cannot be empty!");
        } else if (!["admin", "moderator", "user"].includes(status.toLowerCase())) {
          alert("Invalid status entered. Please try again.");
          status = undefined; // Сбрасываем значение статуса
        }
      }
  
      while (!age || typeof age !== 'number' || age < 18 || age > 70) {
        age = +prompt("Enter your age:");
  
        if (!age) {
          alert("Field cannot be empty!");
        } else if (typeof age !== 'number') {
          throw new TypeError("Age should be a number");
        } else if (age < 18 || age > 70) {
          throw new RangeError("Age is not valid");
        } 
      }
  
      alert("Access granted");
    } catch (error) {
      alert(`${error.name}: ${error.message}`);
    }
  }



function runCheckAge() {
    checkAge();
}