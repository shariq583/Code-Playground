let Btn = document.getElementById("SubmitBtn");
Btn.addEventListener('click',() =>
{
    let title=document.getElementById('TaskT').value;
    let desc =document.getElementById('desc').value;
    let titArr = [];
    let descArr = [];
    console.log(titArr);
    console.log(descArr);
    do {
        titArr.push(title)
        descArr.push(desc)
        let table = document.getElementById("myTable").getElementsByTagName('tbody')[0];
        let newRow = table.insertRow(table.rows.length);
        let cell1 = newRow.insertCell(0);
        let cell2 = newRow.insertCell(1);
        let cell3 = newRow.insertCell(2);
        cell1.innerHTML = 2;
        cell2.innerHTML = titArr[0];
        cell3.innerHTML = descArr[0];
    }
    while (title== null && desc == null);
    console.log(titArr);
    console.log(descArr);

} )








