// const student = {
//   calcRes(marks) {
//     console.log("The result is :", marks);
//   },
// };
// const shariq = {
//   marks: 99,
// };
// shariq.__proto__ = student;
// class car {
//   constructor(brand) {
//     this.brand = brand;
//     console.log(`The brand of this car is ${brand}`);
//   }
//   start() {
//     console.log("Start!");
//   }
//   stop() {
//     console.log("Stop!");
//   }
// }
// class bike extends car {
//   constructor(brand) {
//     console.log(`The brand of this bike is ${brand}`);
//   }
// }
// let BMW = new bike("BMW");
// Practice Questions
// Q1
class user {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  viewData() {
    console.log(`The name of user is ${this.name}`);
    console.log(`The email of user is ${this.email}`);
  }
}
let shariq = new user("Shariq", "Gazdarshariq0@gmail.com");
