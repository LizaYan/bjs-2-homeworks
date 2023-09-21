function parseCount (a) {
  let b = Number.parseFloat(a);
  if (isNaN(b)) {
    throw new Error("Невалидное значение");
  }
  return b;
}
  
function validateCount (c) {
  try { 
    parseCount(c);
  } catch(error) {
    return error;
  } 
  return Number(c);
}

class Triangle {
  constructor (sideA, sideB, sideC) {
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
    this._perimeter = 0;
    this._area = 0;
    let sumAB = this.sideA + this.sideB;
    let sumBC = this.sideB + this.sideC;
    let sumAC = this.sideA + this.sideC;
    if ( sumAB < sideC || sumBC < sideA || sumAC < sideB) {
      throw new Error("Треугольник с такими сторонами не существует");
    }  
  }

  get perimeter() {
    this._perimeter = this.sideA + this.sideB + this.sideC;
    return this._perimeter;
  }

  get area() { 
    let p = this._perimeter / 2;
    this._area = Math.sqrt(p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC));
    return Number(this._area.toFixed(3));
  }
}
  function getTriangle (sideOne, sideTwo, sideTree) {
    try {
      return new Triangle(sideOne, sideTwo, sideTree);
    } catch (error) {
      return {
        get area() {
          return "Ошибка! Треугольник не существует";
        },

        get perimeter() {
          return "Ошибка! Треугольник не существует";
        }
      }
    }
  }
