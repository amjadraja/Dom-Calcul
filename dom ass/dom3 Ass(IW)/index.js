let myForm = document.querySelector('form')
let inpTask = document.getElementById('task')
let priority = document.getElementById('priority')
let tbody = document.querySelector('tbody')
let ArrData = [];
myForm.addEventListener('submit',function(e){
e.preventDefault();
let Data = {};
Data.input1 = inpTask.value;
Data.input2 = priority.value;
ArrData.push(Data);
// console.log(ArrData);
tbody.innerHTML = null

ArrData.map((ele)=>{
    let row = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    td1.innerText = ele.input1;
    td2.innerText = ele.input2;
    row.append(td1,td2)
    tbody.append(row)
    console.log(tbody);
})
})
