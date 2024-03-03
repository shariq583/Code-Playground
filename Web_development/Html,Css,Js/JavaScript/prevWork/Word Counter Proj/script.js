
function AskInp() {
    let inp = document.getElementById('InpTxt');
    let inptext = inp.value;
    let tPCount = inptext.replace(/\s+/g, '');
    let inpcount = tPCount.length;
    let precount =document.getElementById('count');
    precount.innerText = inpcount;
}