let Task = document.getElementById('Task')
let index = document.getElementById('S.No')
function Addtask() {
    localStorage.setItem(Task.value , index.innerText)
}