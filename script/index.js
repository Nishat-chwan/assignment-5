// console.log("this is js file");
const signupBtn = document.getElementById('signup-btn');

const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

signupBtn.addEventListener('click', function(event) {
    const usernameValue = usernameInput.value;
    const passwordValue = passwordInput.value;

    if (usernameValue === 'admin' && passwordValue === 'admin123') {
        window.location.href = "home.html";
    } else {
        alert("Invalid Username or Password. Please try again.");
    }
});

