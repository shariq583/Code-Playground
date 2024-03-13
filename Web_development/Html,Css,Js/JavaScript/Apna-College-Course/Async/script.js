// Call Back Functions
// function Multiply(a, b) {
// console.log("CallBack Called!");
// console.log(a * b);
// }
// function callFunc(a, b, proFunc) {
// proFunc(a, b);
// }
// callFunc(2, 3, Multiply);
// Call Back With setTimeout
// const printName = () => {
//   console.log("Shariq");
// };
// setTimeout(printName, 5000);
// function giveName(name, getNxtName) {
//   setTimeout(() => {
//     console.log(`The name is ${name}`);
//     if (getNxtName) {
//       getNxtName();
//     }
//   }, 2000);
// }

// Callback Hell :-
// giveName("Shariq", () => {
//   console.log("Getting name 2");
//   giveName("Ambani", () => {
//     console.log("Getting name 3");
//     giveName("Rayan", () => {
//       console.log("Getting name 4");
//       giveName("Mahesh ");
//     });
//   });
// });
// Promises
function giveName(name, getNxtName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`The name is ${name}`);
      resolve("Name Job Done!");
      if (getNxtName) {
        getNxtName();
      }
    }, 5000);
  });
}
let dbResult = giveName("Shariq");
