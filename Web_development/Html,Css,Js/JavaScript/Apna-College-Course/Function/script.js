// Qno1 :

    // function getVovel(inpString){
    //     let vovArr = [];
    //     for (const i of inpString) {
    //         if (i=="a" || i=="e" || i=="i"||i=="o"||i=="u") {
    //             vovArr.push(i);
    //         }
    //         else{
    //             console.log("No Vovel");
    //         }
    //     }
    //     return vovArr.toString();
    // }
    // let res = getVovel("Shariq");
    // console.log(res);


// Qno 1 With arrow function
// let res= (inpString)=>{
//             let vovArr = [];
//         for (const i of inpString) {
//             if (i=="a" || i=="e" || i=="i"||i=="o"||i=="u") {
//                 vovArr.push(i);
//             }
//             else{
//                 console.log("No Vovel");
//             }
//         }
//         return vovArr.toString();
// }
// console.log(res("Shariq"));

// For each loops and call back functions 
// let famArr = ["Kamran", "Sundus","Shariq","Shayan" , "Rayan"];
// famArr.forEach((val)=>
// {
//     console.log(val+"1");
// })

// for each loop question

// Qno1
// let numArr = [1,2,3,4,5,6,7,8,9];
// let resArr = [];
// numArr.forEach((val)=>{
//     resArr.push(val*val);
// })
// console.log(resArr);

// Map method in JS for arrays 
//  let numArr = [1,2,3,4,5,6,7,8,9];

// //    let resArr= numArr.map((val)=>{
// //         return val*val;
// //     })
// //     console.log(resArr);

// filter Method 
    // let numArr = [1,2,3,4,5,6,7,8,9];
    // let resArr = [];
    //     resArr = numArr.filter((val)=>{
    //         return val%2 !== 0 ;
    //     })
    //     console.log(numArr);
    // console.log(resArr);

// reduce method 

// let numArr = [1,2,3,4,5 , 5];
// let resArr = [];

// resArr = numArr.reduce((prev,curr)=>{
//     return prev = curr ? curr : prev
// })
// console.log(resArr);

// Questions 
    // let marks = [85,62,90,99,95,100];
    // let res ;
    // res = marks.filter((val)=>{
    //     return val > 90;
    // })
    // console.log(res);

// 1 to n array question    
let inpVal = prompt("Input a value :");
let Arr = [];

for (let index = 1; index <= inpVal; index++) {
        Arr.push(index);
    }
let sum = Arr.reduce((pre,cur)=>{
    return pre+cur
})

console.log(sum);
console.log(Arr);
    
    
// let Arr = [10,50,55,24,62];
// let res ;

// res  = Arr.reduce((prev,curr)=>
//     {
//         return prev*curr;
//     })
// console.log(res);
    


