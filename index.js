// "use strict";
//ES MODULES use strict - always on
// Some DOM elements
// const functionBtn = document.querySelector(".function-btn");
// const arrowFunctionBtn = document.querySelector(".arrow-function-btn");

// THIS WITH WINDOW

// function showThisWithFunction() {
//   console.log(this);
// }

// const showThisWithArrowFunction = () => {
//   console.log(this);
// };

// console.log("Normal function");
// showThisWithFunction();
// console.log("Arrow function");
// showThisWithArrowFunction();

// THIS IN EVENT LISTENERS

// functionBtn.addEventListener("click", function () {
//   console.log("Button with Function as callback");
//   console.log(this);
// });

// arrowFunctionBtn.addEventListener("click", () => {
//     console.log("Button with Arrow Function as callback");
//     console.log(this);
// });

// THIS IN OBJECT
// FUNCTION IN OBJECT - THIS WILL POINT OBJECT

// const person = {
//   name: "Tom",
//   sayHi() {
//     console.log("sayHi: " + this.name);
//   },
//   sayHiFunction: function () {
//     console.log("sayHiFunction: " + this.name);
//   },
//   sayHiArrowFunction: () => {
//     console.log("sayHiArrowFunction: " + this.name);
//   },
// };

// THIS IN ES6 CLASSES

// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   sayHi() {
//     console.log("sayHi: " + this.name);
//   }

//   sayHiFunction = function () {
//     console.log("sayHiFunction: " + this.name);
//   };

//   sayHiArrowFunction = () => {
//     console.log("sayHiArrowFunction: " + this.name);
//   };
// }

// const personUsingClass = new Person("Tom");

// console.log("Person using object".toUpperCase());
// person.sayHi();
// person.sayHiFunction();
// person.sayHiArrowFunction();
// console.log("Person using class".toUpperCase());
// personUsingClass.sayHi();
// personUsingClass.sayHiFunction();
// personUsingClass.sayHiArrowFunction();

// CALL, APPLY

// const carA = {
//   getCarBrand() {
//     console.log(`Brand: ${this.brand}`);
//   },
//   getCarInfo(model) {
//     console.log(`Brand: ${this.brand}, Model: ${model}`);
//   },
// };

// const cars = [
//   { brand: "Volskwagen", model: "Golf" },
//   { brand: "Audi", model: "A6" },
//   { brand: "BMW", model: "E46" },
// ];

// cars.forEach((car) => {
//   const { model } = car;
//   carA.getCarInfo.apply(car, [model]);
// });

// BIND

// const volskwagenGolfInfo = carA.getCarInfo.bind(cars[0], cars[0].model);
// volskwagenGolfInfo();
