const loginForm = document.getElementById('login-form');
const loginButton = document.getElementById('login-form-submit');
const loginErrorMsg = document.getElementById('login-error-msg');
loginButton.addEventListener('click', (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginform.password.value;

    if (ussername === "user" && password === "web-dev") {
        alert(" Logged in successful.");
        location.reload();
    } else {
        loginErrorMas.style.opacity = 1;
    }

})