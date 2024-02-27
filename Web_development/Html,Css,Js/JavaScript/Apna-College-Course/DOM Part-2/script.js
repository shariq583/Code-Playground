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