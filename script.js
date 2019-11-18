function getInput() {
  const name = document.getElementById('usName').value;
  const city = document.getElementById('c_name').value;
  const emp = document.getElementById('eid').value;
  const ele = document.getElementById('tabData');
  let checks = validate(name, city, emp);
  if (checks) {
    let row = document.createElement(`tr`);
    row.addEventListener('click', remove);
    row.setAttribute('id', 'row');
    ele.appendChild(row);
    row.innerHTML = `<td>${name}</td><td>${city}</td><td>${emp}</td><button class="delButton" onclick="remove(this)">Delete</button>`;
  } else {
    alert(`Enter the valid input to add!`);
  }
}

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
function remove(e) {
  if (e.target.classList.contains('delButton')) {
    e.target.parentElement.remove('row');
  }
}
function removeAll() {
  for (let i = 0; i < row.length; i++) {
    row[i].innerHTML = '';
  }
}
