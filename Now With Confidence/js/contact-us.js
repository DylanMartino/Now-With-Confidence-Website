const contactForm = document.getElementById('contact-form');
// Add a submit event listener to the form
contactForm.addEventListener('submit', function(event) {
  // Prevent the form from submitting
  event.preventDefault();

  validateForm();
});

function validateForm() {
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
 
  // Check if the Full Name field is empty
  if (name.value.trim() === '') {
    alert('Please enter your full name');
    name.focus();
    return false;
  }
  
  // Check if the Email field is empty and is a valid email address
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value.trim() === '' || !emailRegex.test(email.value.trim())) {
    alert('Please enter a valid email address');
    email.focus();
    return false;
  }

  // Check if the Message field is empty or greater than 15 characters.
  if (message.value.trim() === '' || message.value.length < 15) {
    alert('Please write a longer message.');
    message.focus();
    return false;
  }

  // If all fields are valid, submit the form
  alert('Thank you! We will get back to you as soon as possible.');
  return true;
}