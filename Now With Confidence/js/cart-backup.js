function validateForm(){

// Get the form element
const form = document.querySelector('form');

// Get the input fields
const fullName = document.querySelector('fname');
const email = document.querySelector('email');
const address = document.querySelector('adr');
const city = document.querySelector('city');
const state = document.querySelector('state');
const zip = document.querySelector('zip');
const cardName = document.querySelector('cname');
const cardNumber = document.querySelector('ccnum');
const expMonth = document.querySelector('expmonth');
const expYear = document.querySelector('expyear');
const cvv = document.querySelector('cvv');

// Add a submit event listener to the form
form.addEventListener('submit', function(event) {
  // Prevent the form from submitting
  event.preventDefault();
  
  // Check if the Full Name field is empty
  if (fullName.value.trim() === '') {
    alert('Please enter your full name');
    fullName.focus();
    return;
  }
  
  // Check if the Email field is empty and is a valid email address
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value.trim() === '' || !emailRegex.test(email.value.trim())) {
    alert('Please enter a valid email address');
    email.focus();
    return;
  }
  
  // Check if the Address field is empty
  if (address.value.trim() === '') {
    alert('Please enter your address');
    address.focus();
    return;
  }
  
  // Check if the City field is empty
  if (city.value.trim() === '') {
    alert('Please enter your city');
    city.focus();
    return;
  }
  
  // Check if the State field is empty
  if (state.value.trim() === '') {
    alert('Please enter your state');
    state.focus();
    return;
  }
  
  // Check if the Zip field is empty
  if (zip.value.trim() === '') {
    alert('Please enter your zip code');
    zip.focus();
    return;
  }
  
  // Check if the Card Name field is empty
  if (cardName.value.trim() === '') {
    alert('Please enter the name on your card');
    cardName.focus();
    return;
  }
  
  // Check if the Card Number field is empty and is a valid credit card number
  const cardNumberRegex = /^[0-9]{4}\s?[0-9]{4}\s?[0-9]{4}\s?[0-9]{4}$/;
  if (cardNumber.value.trim() === '' || !cardNumberRegex.test(cardNumber.value.trim())) {
    alert('Please enter a valid credit card number');
    cardNumber.focus();
    return;
  }
  
  // Check if the Expiration Month field is empty and is a valid month
  const expMonthRegex = /^(0?[1-9]|1[0-2])$/;
  if (expMonth.value.trim() === '' || !expMonthRegex.test(expMonth.value.trim())) {
    alert('Please enter a valid expiration month (MM)');
    expMonth.focus();
    return;
  }
  
  // Check if the Expiration Year field is empty and is a valid year
  const expYearRegex = /^[0-9]{4}$/;
  if (expYear.value.trim() === '' || !expYearRegex.test(expYear.value.trim())) {
    alert('Please enter a valid expiration year (YYYY)');
    expYear.focus();
    return;
  }
  
  // Check if the CVV field is empty and is a valid CVV code
  const cvvRegex = /^[0-9]{3,4}$/;
  if (cvv.value.trim() === '' || !cvvRegex.test(cvv.value.trim())) {
   alert('Please enter a valid CVV code');
   cvv.focus();
   return;
  }
// If all fields are valid, submit the form
alert('Thank you for your Purchase!');
form.submit();
});