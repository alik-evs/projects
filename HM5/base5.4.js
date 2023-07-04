//4

/*А. Реалізувати клас, який описує простий маркер. У класі мають бути такі компоненти:
оле, яке зберігає колір маркера;
поле, яке зберігає кількість чорнила в маркері (у відсотках);
метод друку (метод приймає рядок і виводить текст відповідним кольором;
текст виводиться до тих пір, поки в маркері є чорнило; один не пробіловий символ – це 0,5% чорнила в маркері).
В. Реалізувати клас, що описує маркер, що заправляється, успадкувавши його від простого маркера і додавши метод для заправки маркера. Продемонструвати роботу написаних методів
5.
Створіть клас Worker який буде мати конструктор, який приймає наступні властивості: fullName (ім’я і прізвище), dayRate (ставка за день роботи), workingDays (кількість відпрацьованих днів). 
    1) клас повинен мати метод showSalary(), який буде виводити зарплату працівника. Зарплата - це добуток ставки dayRate на кількість відпрацьованих днів workingDays. 
    2) додати приватне поле experience і присвоїти йому значення 1.2 і використовувати його як додатковий множник при визначенні зарплати – створити метод showSalaryWithExperience(). Вивести значення зарплати з цим коефіцієнтом.
    3) додати гетери і сетери для поля experience. Встановити значення experience = 1.5 і вивести його на екран.
    4) Вивести значення зарплати з новим experience.
    5) Створити кілька екземплярів класу (працівників) з різними зарплатами, як показано в прикладі нижче. Посортувати зарплату працівників із найбільшим experience по зростанню і вивести результат в форматі:   worker_fullName: salary_value 
    6) Реалізувати динамічне сортування для будь-кої кількості працівників-екземплярів класу Worker.
Example usage:
let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);                 
worker1.showSalary();
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();

let worker2 = new Worker("Tom Tomson", 48, 22);


let worker3 = new Worker("Andy Ander", 29, 23); */




//a
class Marker {
    constructor(color, inkAmount) {
      this.color = color;
      this.inkAmount = inkAmount;
    }
  
    print(text) {
      let printedText = "";
      const inkPerSymbol = 0.5;
  
      for (let i = 0; i < text.length; i++) {
        const symbol = text[i];
        if (symbol !== " " && this.inkAmount >= inkPerSymbol) {
          printedText += symbol;
          this.inkAmount -= inkPerSymbol;
        } else if (symbol === " ") {
          printedText += " ";
        } else {
          break;
        }
      }
  
      console.log("%c" + printedText, `color: ${this.color}`);
      if (this.inkAmount >= inkPerSymbol && printedText.length < text.length) {
        this.print(text.slice(printedText.length));
      }
    }
  }
  
  const marker = new Marker("blue", 100);
  marker.print("Hello, World!");

  
  class Worker {
    constructor(fullName, dayRate, workingDays) {
      this.fullName = fullName;
      this.dayRate = dayRate;
      this.workingDays = workingDays;
      this.experience = 1.2;
    }
  
    showSalary() {
      const salary = this.dayRate * this.workingDays;
      console.log(`${this.fullName}'s salary: ${salary}`);
    }
  
    showSalaryWithExperience() {
      const salary = this.dayRate * this.workingDays * this.experience;
      console.log(`${this.fullName}'s salary with experience: ${salary}`);
    }
  
    get showExp() {
      return this.experience;
    }
  
    set setExp(value) {
      this.experience = value;
    }
  }
  
  const workers = [
    new Worker("Johnny Walker", 19, 29),
    new Worker("Tom Tompson", 34, 20),
    new Worker("Andy Ander", 18, 34)
  ];
  
  for (const worker of workers) {
    console.log(worker.fullName);
    worker.showSalary();
    console.log("New experience - " + worker.showExp);
    worker.showSalaryWithExperience();
    worker.setExp = 1.5;
    console.log("New experience - " + worker.showExp);
    worker.showSalaryWithExperience();
    console.log();
  }
  
  const sortedWorkers = [...workers].sort((a, b) => {
    const salaryA = a.dayRate * a.workingDays * a.experience;
    const salaryB = b.dayRate * b.workingDays * b.experience;
    return salaryA - salaryB;
  });
  
  console.log("Sorted salary - ");
  sortedWorkers.forEach((worker) => {
    const salary = worker.dayRate * worker.workingDays * worker.experience;
    console.log(`${worker.fullName}: ${salary}`);
  });