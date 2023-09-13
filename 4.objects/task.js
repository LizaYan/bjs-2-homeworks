function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = []; 
}

new Student('Пётр', 'мужчина', 26);
new Student('Инга','женщина', 30);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if (this.hasOwnProperty('marks')) {   
    this.marks.push(...marks);
  }
}

Student.prototype.getAverage = function () {
  let sum = 0;
  let average = 0; 
  if (this.hasOwnProperty('marks')) {
    for (i = 0; i < this.marks.length; i++) {    
      sum = sum + this.marks[i]; 
      average = sum/this.marks.length;
     }  
  } else {
    average = 0;
  }
  return average; 
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = String(reason);
}
