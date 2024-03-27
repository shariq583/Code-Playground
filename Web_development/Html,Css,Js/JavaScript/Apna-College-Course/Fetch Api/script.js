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

// Project Code :-
let baseUrl =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024.3.26/v1/currencies/";
let fromImg = document.querySelector("#fromImg");
let toImg = document.querySelector("#toImg");
let dropDowns = document.querySelectorAll(".dropDown select ");
let fromTxtBox = document.querySelector("#fromField");
let toTxtBox = document.querySelector("#toField");
let msgTxt = document.querySelector("#msgTxt");
// dropDown Update :
dropDowns.forEach((opt) => {
  for (code in countryList) {
    let newOpt = document.createElement("option");
    newOpt.innerText = code;
    newOpt.value = code;
    opt.append(newOpt);
  }
  opt.addEventListener("change", (evt) => {
    changeFlag(evt);
  });
});
// flagUpdate :
const changeFlag = (element) => {
  let inpCurr = element.target.value;
  var countCode = countryList[inpCurr];
  let imgUrl = `https://flagsapi.com/${countCode}/flat/32.png`;
  console.log(element.target.id);
  if (element.target.id == "fromVal") {
    fromImg.src = imgUrl;
  } else if (element.target.id == "toVal") {
    toImg.src = imgUrl;
  }

  logCode(inpCurr);
};

const logCode = (code) => {
  console.log(code);
  let currUrl = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${code.toLowerCase()}.json`;
  fromTxtBox.addEventListener("keyup", () => {
    let currRate = fetch(currUrl);
    console.log(currRate);
  });
};
