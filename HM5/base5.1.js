//1
//Напишіть клас Круг та реалізуйте функціонал:
//Визначте конструктор, який запитує координати центру кола, його радіус та ініціалізує об'єкт;
//Визначте метод отримання довжини кола для поточного об'єкта (L = 2 * π * R);
//Визначте статичний метод, який приймає радіус та повертає довжину кола для заданого радіусу;
//Визначте метод отримання об'єкта-кола, який повертає копію поточного об'єкта;
//Визначте статичний метод, який приймає координати центра кола, його радіус та повертає об'єкт кола із заданими параметрами;
//Визначте метод перевірки попадання крапки до кола;
//Визначте метод перетворення поточного стану об'єкта на символьний рядок (toString()).


class Circle {
    constructor(x, y, radius) {
      this.x = x;
      this.y = y;
      this.radius = radius;
    }
  
    getCircleLength() {
      return 2 * Math.PI * this.radius;
    }
  
    static getCircleLengthByRadius(radius) {
      return 2 * Math.PI * radius;
    }
  
    getCircle() {
      return new Circle(this.x, this.y, this.radius);
    }
  
    static createCircle(x, y, radius) {
      return new Circle(x, y, radius);
    }
  
    checkPoint(x, y) {
      const distance = Math.sqrt((x - this.x) ** 2 + (y - this.y) ** 2);
      return distance <= this.radius;
    }
  
    toString() {
      return `Circle - centre(${this.x}, ${this.y}), Radius - ${this.radius}`;
    }
  }
  
  const circle = new Circle(1, 2, 9);
  
  console.log(circle.getCircleLength());
  
  const circle2 = Circle.createCircle(0, 4, 7);
  
  console.log(circle2.checkPoint(2, 2));
  
  console.log(circle.toString());