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
// Simple Async Validation Using Promises
// function giveName(name, getNxtName) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let arrayNames = ["Shariq", "Shayan", "Rayan"];
//       for (let index = 0; index < arrayNames.length; index++) {
//         const element = arrayNames[index];
//         if (element === name) {
//           console.log(`The name is ${name}`);
//           resolve("Name Job Done!");
//           break;
//         } else {
//           console.log(`The name is not ${name}`);
//           reject("Name Job Not Done!");
//         }
//       }
//       if (getNxtName) {
//         getNxtName();
//       }
//     }, 5000);
//   });
// }
// let dbResult = giveName("Shariq");
// Promises
// function giveName(name, getNxtName) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(`The name is ${name}`);
//       resolve("Name Job Done!");
//       if (getNxtName) {
//         getNxtName();
//       }
//     }, 5000);
//   });
// }

// let dbResult = giveName("Shariq");
// dbResult.then((res) => {
//   console.log(`Job Done with This result"${res}"`);
// });
// dbResult.catch((err) => {
//   console.log(`Job Failed With error "${err}"`);
// });
// function asyncFunc(data) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Some data:", data);
//       resolve("Done with data 1");
//     }, 4000);
//   });
// }
// // Promise Chaining
// asyncFunc("Shariq")
//   .then(() => {
//     return asyncFunc("Shayan");
//   })
//   .then(() => {
//     console.log("success");
//   });
// async-Await
async function printVal(dataPrint) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data Print Work...", dataPrint);
      resolve(200);
    }, 5000);
  });
}
(async function () {
  await printVal("1");
  await printVal("2");
})();
