function login() {
    if (inputUsername.value === "" || inputPassword.value === "") {
        alert("Please enter username or password!");
    } else {
        // Retrieve user data from localStorage
        const user = JSON.parse(localStorage.getItem(inputUsername.value));
        if (user && user.password === inputPassword.value) {
            // Store logged-in user's details
            localStorage.setItem(
                "loggedInUser",
                JSON.stringify({
                    name: user.name,
                    email: user.email,
                    username: user.username
                })
            );
            alert("Successful Login!");
            window.location.href = "profile.html"; // Redirect to profile page
        } else {
            alert("Invalid username or password!");
        }
    }
}
