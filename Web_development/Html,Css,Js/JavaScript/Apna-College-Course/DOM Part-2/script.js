let heading =document.querySelector("h2");
let str = "DOM Part-2";
heading.innerText=(`${heading.innerText} ${str} `);
let div = document.querySelectorAll(".box");
idx= 1;
for (const i of div) {
    i.innerText = `Some unique text for div ${idx}`;
    idx++;
}
console.log(`${div[0].getAttribute("class")}`);
let btn = document.querySelector("#txtCntr");
btn.addEventListener("click",()=>{
    for (const i of div) {
        i.setAttribute("class","txtCntr")
    }
})

let pinfo = document.createElement("p");
pinfo.innerText="The Quick Brown Fox Jumps Over The Lazy Dog!";
btn.after(pinfo);
let btnn = document.createElement("button");
btnn.innerText="Click me BTN!";
pinfo.after(btnn);
btnn.style.backgroundColor="red";
btnn.style.color="white";

let Q2Para = document.querySelector(".Pclass")
Q2Para.classList.add("txtCntr")