//4.
//Створіть клас MonthException, конструктор якого приймає параметр message і ініціалізує поле name значенням MonthException.
//Реалізуйте функцію showMonthName(month), в якій параметр month – це порядковий номер місяця в році. Функція повертає назву
// місяця відповідно до введеного номера місяця. У випадку некоректного вводу кидається ексепшн у 
//вигляді об’єкта класу MonthException з повідомленням Incorrect month number.
//Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.
//Приклад роботи програми:
//console.log(showMonthName(5));  // May
//console.log(showMonthName(14)); // MonthException Incorrect month number


class MonthException extends Error {
    constructor(message) {
      super(message);
      this.name = "MonthException";
    }
  }
  
  function showMonthName(month) {
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
  
    if (typeof month !== "number" || isNaN(month) || !Number.isInteger(month)) {
      throw new MonthException("Invalid month number");
    }
  
    if (month < 1 || month > 12) {
      throw new MonthException("Incorrect month number");
    }
  
    return months[month - 1];
  }
  
  try {
    console.log(showMonthName(5));
  } catch (error) {
    if (error instanceof MonthException) {
      console.log(error.name + " " + error.message);
    } else {
      console.log("Error:", error.message);
    }
  }
  
  try {
    console.log(showMonthName(14));
  } catch (error) {
    if (error instanceof MonthException) {
      console.log(error.name + " " + error.message);
    } else {
      console.log("Error:", error.message);
    }
  }
  
  try {
    console.log(showMonthName(0));
  } catch (error) {
    if (error instanceof MonthException) {
      console.log(error.name + " " + error.message);
    } else {
      console.log("Error:", error.message);
    }
  }
  
  try {
    console.log(showMonthName("3"));
  } catch (error) {
    if (error instanceof MonthException) {
      console.log(error.name + " " + error.message);
    } else {
      console.log("Error:", error.message);
    }
  }
  
  
      
      
      
 
  
  
  
  