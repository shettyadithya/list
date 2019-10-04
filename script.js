function getInput() {
  const name = document.getElementById('usName').value;
  const city = document.getElementById('c_name').value;
  const emp = document.getElementById('eid').value;
  const ele = document.getElementById('tabData');
  let checks = validate(name, city, emp);
  if (checks === true) {
    let row = document.createElement(`tr`);
    row.addEventListener('click', remove);
    row.setAttribute('id', 'row');
    ele.appendChild(row);
    // console.log(row);
    row.innerHTML = `<td>${name}</td><td>${city}</td><td>${emp}</td><button class="delButton" onclick="remove(this)">Delete</button>`;
    // let row = ele.insertRow(1);
    // let cell1 = row.insertCell(0);
    // let cell2 = row.insertCell(1);
    // let cell3 = row.insertCell(2);
    // let cell4 = row.insertCell(3);
    // cell1.innerHTML = name;
    // cell2.innerHTML = city;
    // cell3.innerHTML = emp;
    // cell4.innerHTML = `<button id="rmb" ">remove<button>`;
    // let clBtn = document.getElementById("clrBtn");
    // clBtn.addEventListener(`click`,removeAll);
  } else {
    alert(`Enter the valid input to add!`);
  }
}
//-------------------------validate user input----------------
function validate(name, city, emp) {
  let empregex = /^[0-9]+$/;    
  let namecheck = /^[a-z ,.'-]+$/i;
  if (
    namecheck.test(name) == true &&
    namecheck.test(city) == true &&
    empregex.test(emp) == true
  ) {
    return true;
  }
  return false;
}

//----------------remove rows-------------------------
function remove(e) {
  if (e.target.classList.contains('delButton')) {
    e.target.parentElement.remove('row');
  }
}

//------------------remove all the row--------------------
function removeAll() {
  for (let i = 0; i < row.length; i++) {
    // for (var i = 0, len = row.length; i < len; i++) {
    row[i].innerHTML = '';
  }
}
