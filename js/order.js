$(document).ready(function(){
  M.AutoInit();
   $('.sidenav').sidenav();

//when cards get clickked, add item and add update Total
$(".card-action").on("click", "a", addItem);
$(".card-action").on("click", "a", updateTotal);


let subtotal= $(".subtotal");
let tax = $(".tax");
let total = $(".total");
let runningTotal = 0


function addItem(event) {
  const $row = $('<tr>');

$row.append(addDetail(event, "span").addClass("item"));
$row.append(addDetail(event, "p").addClass("right price"));
$(".striped tbody").append($row);
}

function addDetail(event, tagType) {
  const detail = $(event.target).parent().prev().children(tagType).text();
  const newCell = $("<td>");
  return newCell.text(detail);
}

function updateTotal(event) {
 let price = addDetail(event, 'p').text();
 price = Number(price.replace('$', ''));
  runningTotal += price;
  subtotal.text(`${runningTotal.toFixed(2)}`);
  tax.text(`${(runningTotal * 0.1).toFixed(2)}`);
  total.text(`${(runningTotal * 1.1).toFixed(2)}`);
}
//validate form
$('.order-button').on('click', validateName);
$('.order-button').on('click', validatePhone);
$('.order-button').on('click', validateAddress);

 function validateName() {
  const $name = $('input[id="name"]').val();
  if($name === "") {
    Materialize.toast('Please enter a name.', 5000);
  }
 }

 function validatePhone() {
   let $phone = $('input[id ="phone"]').val();
   if(!/[0-9]{10}/.test($phone)) {
     Materialize.toast("Please enter a 10-digit phone number.", 5000);
   }
  }

  function validateAddress() {
    let $address = $('input[id="address"]').val();
    if($address === "") {
      Materialize.toast("Please enter an address.", 5000);
    }
  }

 });
