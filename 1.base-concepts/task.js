"use strict"

function solveEquation(a, b, c) {
  let discriminant = b**2 - 4 * a * c; 
  let root; 
  let secondroot;
  let arr = [];

  if (discriminant === 0) {
      root = -b/(2*a);  
      arr.push(root);
  } else if (discriminant > 0) {
      root = (-b + Math.sqrt(discriminant))/(2*a);
      secondroot = (-b - Math.sqrt(discriminant))/(2*a);
      arr.push(root, secondroot)
  }
 
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let s = amount - contribution;
  let p = (percent/100)/12;
  let monthlyPayment = s * (p + (p / (((1 + p)**countMonths) - 1)));
  let totalPayment = monthlyPayment * countMonths;
  return Number(totalPayment.toFixed(2));
}