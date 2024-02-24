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
let famArr = ["Kamran", "Sundus","Shariq","Shayan" , "Rayan"];
famArr.forEach((val)=>
{
    console.log(val+"1");
})