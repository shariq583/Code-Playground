// const catUrl = "https://cat-fact.herokuapp.com/facts";
// const para = document.querySelector("#firstPara");
// let num = Math.floor(Math.random() * 5);

// const getInfo = async (num = 0) => {
//   try {
//     let result = await fetch(catUrl);
//     let resultTxt = await result.json();
//     para.innerText = resultTxt[num].text;
//   } catch (error) {
//     console.error("Error fetching cat facts:", error);
//   }
// };
// // const getInfo = (num = 0) => {
// //   fetch(catUrl)
// //     .then((response) => {
// //       return response.json();
// //     })
// //     .then((resultTxt) => {
// //       para.innerText = resultTxt[num].text;
// //     });
// // };
// getInfo(num);
let baseUrl =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024.3.26/v1/currencies/";
let dropDowns = document.querySelectorAll(".dropDown select ");
dropDowns.forEach((opt) => {
  for (code in countryList) {
    let newOpt = document.createElement("option");
    newOpt.innerText = code;
    newOpt.value = code;
    opt.append(newOpt);
  }
});
