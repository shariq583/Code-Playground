let date;
let time;
let defDate = document.getElementById('deftime')
setInterval(() => {
    date =  new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const d = new Date();
    let month = months[d.getMonth()];
    time= date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric',second :'2-digit', hour12: true })
    day= date.getDay();
    let Ndate = date.getDate();
    let year = date.getFullYear();
    defDate.innerText=`${time}    \n \t Date : ${Ndate}/${month}/${year}`
 
}, 1000);
