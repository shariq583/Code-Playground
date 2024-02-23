// var i=1;
// let Arr = [];
// for (let index = 1; index <=5; index++) {
//     Arr.push(index);
//     console.log(Arr);
// }
// for loop 
// for (let index = 0; index < Arr.length; index++) {
//     console.log(Arr[index]);
    
// }

// // for of loop 
// for (let el of Arr) {
//     console.log(el);
// }


// for each loop 
// Arr.forEach(element => {
//     console.log(element);
// });

/* *********************Practise Questions******************* */
// Qn 1:
    // let marks = [95 , 65 , 85 , 65 , 42 , 45];
    // var totMarks= 0 ;
    // for (let index = 0; index < marks.length; index++) {
    //     totMarks += marks[index]
    // }
    // let avg = totMarks/marks.length;
    // console.log(`The averrage of ${marks} is: ${avg}%`);
// Qn 2 :
    // let price =[250,645,300,900,50];
        // let disArr = []
        // for (let item of price) {
        //     item=(item*(10/100));
        //     disArr.push(item);
        // }
        // for (let index = 0; index < price.length; index++) {
        //     price[index]=price[index]-disArr[index];        
        // }
        // console.log(price);
// Array Methods Qno 1
let techcomp=["Bloomberg" , "Microsoft" , "Uber" , "google" , "IBM" ,"Netflix"]
techcomp.shift();
techcomp.splice(2,1,"Ola");
techcomp.push("amazon");
console.log(techcomp);