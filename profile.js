document.addEventListener("DOMContentLoaded", () => {
    const profileInfo = document.getElementById("profile-info");
    const editProfileForm = document.getElementById("edit-profile-form");
    const logoutButton = document.getElementById("logout-button");
    const homeButton = document.getElementById("home-button");

    // Retrieve logged-in user data from localStorage
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (loggedInUser) {
        // Dynamically populate the profile page with user details
        profileInfo.innerHTML = `
     
            <p><span class="profile-field">Username:</span> ${loggedInUser.username}</p>
        `;
    } else {
        // Redirect to login page if no user is logged in
        alert("No user is logged in. Redirecting to login page...");
        window.location.href = "login.html";
    }

    // Handle Profile Update Form Submission
    editProfileForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form from refreshing the page

        const newUsername = document.getElementById("new-username").value;
        const newPassword = document.getElementById("new-password").value;

        if (!newUsername.endsWith("@gmail.com")) {
            alert("The username must end with @gmail.com.");
            return;
        }

        if (!newUsername || !newPassword) {
            alert("Please fill out both fields.");
            return;
        }

        // Update user data in localStorage
        const updatedUser = {
            ...loggedInUser,
            username: newUsername,
            password: newPassword
        };

        // Update both loggedInUser and the original stored user data
        localStorage.setItem("loggedInUser", JSON.stringify(updatedUser));
        localStorage.setItem(updatedUser.username, JSON.stringify(updatedUser));

        alert("Profile updated successfully!");
        location.reload(); // Reload the page to reflect changes
    });

    // Redirect to Home page
    homeButton.addEventListener("click", () => {
        window.location.href = "Home.html";
    });

    // Handle Logout
    logoutButton.addEventListener("click", () => {
        localStorage.removeItem("loggedInUser"); // Clear logged-in user session
        alert("You have been logged out.");
        window.location.href = "login.html"; // Redirect to login page
    });
});