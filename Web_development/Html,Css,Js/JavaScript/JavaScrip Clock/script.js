let date;
let time;
let defDate = document.getElementById('deftime')
setInterval(() => {
    date =  new Date();
    time= date.getHours()+":"+ date.getMinutes()+":"+date.getSeconds();
    defDate.innerText=time    
}, 1000);