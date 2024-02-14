let date;
let time;
let defDate = document.getElementById('deftime')
setInterval(() => {
    date =  new Date();
    time= date.getHours()+":"+ date.getMinutes()+":"+date.getSeconds();
    day= date.toLocaleDateString();
    defDate.innerText=time+' on '+day    
}, 1000);