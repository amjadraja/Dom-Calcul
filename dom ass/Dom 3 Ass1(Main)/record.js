// fill in javascript code here
let myForm = document.querySelector('form');
let inpEmployee = document.querySelector('#name')
let inpEmpId = document.querySelector('#employeeID')
let inpDept = document.querySelector('#department')
let inpExp = document.querySelector('#exp')
let inpEmail = document.querySelector('#email')
let inpMobile = document.querySelector('#mbl')
let thead = document.querySelector('thead')
let tbody = document.querySelector('tbody')

function createDeleteButton(row) {
    let deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.className = 'delete-button';
    deleteButton.onclick = function() {
        deleteRow(row);
    };
    return deleteButton;
}

function deleteRow(button) {
    let row = button.parentNode.parentNode;
    let index = row.rowIndex;
    document.querySelector('tbody').deleteRow(index);
}

let ArrData = [];
myForm.addEventListener('submit', function(e){
    e.preventDefault();

    let data = {};
    console.log(Number(inpExp.value))
    if(Number(inpExp.value) > 5){
      data.input7 = "Senior"
    }
    else if(Number(inpExp.value) >= 2 && Number(inpExp.value) <= 5){
        data.input7 = "Junior"
    }
    else if(Number(inpExp.value)<=1){
        data.input7 = "Fresher"
    }
    data.input1 = inpEmployee.value;
    data.input2 = inpEmpId.value
    data.input3 = inpDept.value
    data.input4 = inpExp.value
    data.input5 = inpEmail.value
    data.input6 = inpMobile.value;
    ArrData.push(data);
    console.log(ArrData);

    tbody.innerHTML = null

ArrData.map((ele)=>{
    let row = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');
    let td5 = document.createElement('td');
    let td6 = document.createElement('td');
    let td7 = document.createElement('td');
    let deleteButton = createDeleteButton(row);
    td1.innerText = ele.input1;
    td2.innerText = ele.input2;
    td3.innerText = ele.input3;
    td4.innerText = ele.input4;
    td5.innerText = ele.input5;
    td6.innerText = ele.input6;
    td7.innerText = ele.input7;
    row.append(td1,td2,td3,td4,td5,td6,td7,deleteButton)
    tbody.append(row)
    console.log(tbody);

})
})

    





