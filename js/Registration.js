document.getElementById('userForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const fullName = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const gender = document.getElementById('gender').value;
  const country = document.getElementById('country').value;
  const terms = document.getElementById('terms').checked;

  const isValid = validateForm(fullName, email, phone, password, confirmPassword, terms);

  if (isValid) {
    displayData(fullName, email, phone, gender, country);
    displayConfirmation();
  }
});

document.querySelectorAll('#userForm input, #userForm select').forEach(input => {
  input.addEventListener('input', function() {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const gender = document.getElementById('gender').value;
    const country = document.getElementById('country').value;

    displayData(fullName, email, phone, gender, country);
  });
});

function validateForm(fullName, email, phone, password, confirmPassword, terms) {
  let isValid = true;

  if (fullName === '') {
    document.getElementById('nameError').textContent = 'Full Name is required.';
    isValid = false;
  } else {
    document.getElementById('nameError').textContent = '';
  }

  if (email === '') {
    document.getElementById('emailError').textContent = 'Email is required.';
    isValid = false;
  } else {
    document.getElementById('emailError').textContent = '';
  }

  if (phone === '') {
    document.getElementById('phoneError').textContent = 'Phone Number is required.';
    isValid = false;
  } else {
    document.getElementById('phoneError').textContent = '';
  }

  if (password === '') {
    document.getElementById('passwordError').textContent = 'Password is required.';
    isValid = false;
  } else {
    document.getElementById('passwordError').textContent = '';
  }

  if (confirmPassword === '') {
    document.getElementById('confirmPasswordError').textContent = 'Confirm Password is required.';
    isValid = false;
  } else if (password !== confirmPassword) {
    document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
    isValid = false;
  } else {
    document.getElementById('confirmPasswordError').textContent = '';
  }

  if (!terms) {
    alert('You must agree to the terms and conditions.');
    isValid = false;
  }

  return isValid;
}



