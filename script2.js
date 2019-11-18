$(document).ready(function() {
  $('#addTask').click(function() {
    let $empNames = $('#usName').val();
    let $emp = $('#eid').val();
    let $city = $('#c_name').val();
    let $inputCheck = inputValidate($empNames, $city, $emp);
    if ($inputCheck) {
      let $res = $('<tr>', {
        id: 'row'
      }).appendTo('#tabData');
      $res
        .append(`<td>${$empNames}</td><td>${$city}</td><td>${$emp}</td>`)
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
function inputValidate(name, city, emp) {
  let empRegex = /^[0-9]+$/;
  let nameCheck = /^[a-z ,.'-]+$/i;
  if (
    nameCheck.test(name) == true &&
    nameCheck.test(city) == true &&
    empRegex.test(emp) == true
  ) {
    return true;
  }
}
