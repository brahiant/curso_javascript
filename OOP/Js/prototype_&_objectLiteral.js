
//Object literal
const natalia = {
  // 
  name: "Natalia",
  age: 20,
  //Array List
  cursosAprobados: [
    "Curso Definitivo de HTML y CSS",
    "Curso Práctico de HTML y CSS",
  ],
  //Method 
  aprobarCurso(nuevoCursito) {//parameter
    this.cursosAprobados.push(nuevoCursito); // argument for new value in the array. 
  },
};

//prototype
function Student(name, age, cursosAprobados) {
  this.name = name;
  this.age = age;
  this.cursosAprobados = cursosAprobados;
 
  /** 
   * can create method from prototype of the as follows
  */

  // this.aprobarCurso = function (nuevoCursito) {
  //   this.cursosAprobados.push(nuevoCursito);
  // }
}

/**
 * call prototype for create method extern
 **/
Student.prototype.cursoCertificado = function (nuevoCursito) {
  this.cursosAprobados.push(nuevoCursito);
}

/**
 * Instance of prototype
 */
const juanita = new Student(
  "Juanita Alejandra",
  15,
  [
    "Curso de Introducción a la Producción de Videojuegos",
    "Curso de Creación de Personajes",
  ],
);

// Prototype with the syntaxis of class

/**
 * class in javascript
 */
class Student2 {

  /**
   * when using braces in parentheses({}) can have an object
   * @param {name,cursosAprobados} param0 
   */
  constructor({
    name,
    cursosAprobados = [],
    age,
    email,
  }) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
  }

  //method 
  aprobarCurso(nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
  }
}

/** 
 * using braces in parentheses for create instance 
 * of class student2
 * */ 
const miguelito = new Student2({
  name: "Miguel",
  age: 28,
  email: "miguelito@platzi.com",
});