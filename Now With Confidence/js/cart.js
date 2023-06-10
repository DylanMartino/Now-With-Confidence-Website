// Get the form element
const form = document.querySelector('form');

// Add a submit event listener to the form
form.addEventListener('submit', function(event) {
  // Prevent the form from submitting
  event.preventDefault();

  validateForm();
});


function validateForm() {

// Get the input fields
const fullName = document.getElementById('fname');
const email = document.getElementById('email');
const address = document.getElementById('adr');
const city = document.getElementById('city');
const state = document.getElementById('state');
const zip = document.getElementById('zip');
const cardName = document.getElementById('cname');
const cardNumber = document.getElementById('ccnum');
const cvv = document.getElementById('cvv');
	
// Validate the selected month and year
const expMonth = document.getElementById("expmonth").value;
const expYear = document.getElementById("expyear").value;
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth() + 1; // Add +1 because getMonth() returns a zero-based index
  
  // Check if the Full Name field is empty
  const fullNameRegex = /^[A-Za-z]+$/;
  if (fullName.value.trim() === '' || !fullNameRegex.test(fullName.value.trim())) {
    alert('Please enter your full name');
    fullName.focus();
    return false;
  }

  // Check if the Email field is empty and is a valid email address
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value.trim() === '' || !emailRegex.test(email.value.trim())) {
    alert('Please enter a valid email address');
    email.focus();
    return false;
  }

  // Check if the Address field is empty
  if (address.value.trim() === '') {
    alert('Please enter your address');
    address.focus();
    return false;
  }

  // Check if the City field is empty
  if (city.value.trim() === '') {
    alert('Please enter your city');
    city.focus();
    return false;
  }

  // Check if the State field is empty
  if (state.value.trim() === '') {
    alert('Please enter your state');
    state.focus();
    return false;
  }

  // Check if the Zip field is empty
  if (zip.value.trim() === '') {
    alert('Please enter your zip code');
    zip.focus();
    return false;
  }

  // Check if the Card Name field is empty
  if (cardName.value.trim() === '') {
    alert('Please enter the name on your card');
    cardName.focus();
    return false;
  }

  // Check if the Card Number field is empty and is a valid credit card number
  const cardNumberRegex = /^[0-9]{4}\s?[0-9]{4}\s?[0-9]{4}\s?[0-9]{4}$/;
  if (cardNumber.value.trim() === '' || !cardNumberRegex.test(cardNumber.value.trim())) {
    alert('Please enter a valid credit card number: \n1234 1234 1234 1234');
    cardNumber.focus();
    return false;
  }

  // Check if the Expiration Month and Year are in date.
  if (expYear < currentYear) {
    alert("The credit card has already expired.");
    return false;
  }
  else if (expYear == currentYear && expMonth < currentMonth) {
    alert("The credit card has already expired!\nPlease enter a valid Month and Year.");
    return false;
  }

  // Check if the CVV field is empty and is a valid CVV code
  const cvvRegex = /^[0-9]{3,4}$/;
  if (cvv.value.trim() === '' || !cvvRegex.test(cvv.value.trim())) {
    alert('Please enter a valid CVV code');
    cvv.focus();
    return false;
  }

  // If all fields are valid, submit the form
  alert('Thank you for your Purchase!');
  //form.submit();
  return true;
}