document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    let emailError = '';
    let passwordError = '';

    if (!validateEmail(email)) {
        emailError = 'Please enter a valid email.';
    }

    if (password === '') {
        passwordError = 'Please enter your password.';
    }

    document.getElementById('emailError').textContent = emailError;
    document.getElementById('passwordError').textContent = passwordError;

    if (emailError === '' && passwordError === '') {
        document.getElementById('loginMessage').textContent = 'Login successful!';
        document.getElementById('loginMessage').style.color = 'green';
    } else {
        document.getElementById('loginMessage').textContent = 'Please correct the errors and try again.';
        document.getElementById('loginMessage').style.color = 'red';
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Event listener for "Forgot Password"
document.getElementById('forgotPassword').addEventListener('click', function() {
    alert('Forgot Password functionality is not yet implemented.');
});
