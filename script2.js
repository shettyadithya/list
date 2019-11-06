$(document).ready(function() {
  $('#addTask').click(function() {
    let $names = $('#usName').val();
    let $emp = $('#eid').val();
    let $city = $('#c_name').val();
    let $checks = validate($names, $city, $emp);
    if ($checks === true) {
      let $res = $('<tr>', {
        id: 'row'
      }).appendTo('#tabData');
      $res
        .append(`<td>${$names}</td><td>${$city}</td><td>${$emp}</td>`)
        .append(`<button class="delButton">Delete</button>`);
      $('.delButton').click(function() {
        $(this)
          .parent()
          .empty();
      });
      $('.clr').click(function() {
        $res.empty();
      });
    } else {
      alert(`Enter the valid input to add!`);
    }
  });
});
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
