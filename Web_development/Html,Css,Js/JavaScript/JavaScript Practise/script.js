let Btn = document.getElementById("SubmitBtn");
var DltBtn = document.getElementById('DltBtn').innerHTML;
Btn.addEventListener('click', () => {
    let title = document.getElementById('TaskT').value;
    let desc = document.getElementById('desc').value;
    
    // Check if title and description are not empty
    if (title.trim() !== "" && desc.trim() !== "") {
        // Retrieve tasks from localStorage if they exist
        let titArr = JSON.parse(localStorage.getItem('titles')) || [];
        let descArr = JSON.parse(localStorage.getItem('descriptions')) || [];

        // Push new task and description
        titArr.push(title);
        descArr.push(desc);

        // Save tasks to localStorage
        localStorage.setItem('titles', JSON.stringify(titArr));
        localStorage.setItem('descriptions', JSON.stringify(descArr));

        // Clear the table
        let table = document.getElementById("myTable").getElementsByTagName('tbody')[0];
        table.innerHTML = "";

        // Populate table with tasks
        for (let i = 0; i < titArr.length; i++) {
            let newRow = table.insertRow(table.rows.length);
            let cell1 = newRow.insertCell(0);
            let cell2 = newRow.insertCell(1);
            let cell3 = newRow.insertCell(2);
            let cell4 = newRow.insertCell(3);
            cell1.innerHTML = i + 1; // Display task number
            cell2.innerHTML = titArr[i]; // Display task title
            cell3.innerHTML = descArr[i]; // Display task description
            
        }
    } else {
        console.log("Title and description cannot be empty.");
    }
});
let RestBtn = document.getElementById('Reset');
RestBtn.addEventListener('click',() =>{
    localStorage.clear();
}
)