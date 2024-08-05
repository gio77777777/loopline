document.getElementById('signUpForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Simple validation
    if (username === '' || email === '' || password === '') {
        errorMessage.textContent = 'All fields are required.';
        return;
    }

    if (!validateEmail(email)) {
        errorMessage.textContent = 'Invalid email address.';
        return;
    }

    errorMessage.textContent = '';

    // Simulate form submission
    console.log('Form submitted:', { username, email, password });
    alert('Sign up successful!');

    // Redirect to another HTML page
    window.location.href = 'reel.html'; // Change 'welcome.html' to the target HTML file
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
