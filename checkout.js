document.addEventListener("DOMContentLoaded", () => {
    const checkoutForm = document.getElementById("checkout-form");

    checkoutForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the form from submitting normally

        // Get user input
        const fullName = document.getElementById("full-name").value;
        const address = document.getElementById("address").value;
        const city = document.getElementById("city").value;
        const postalCode = document.getElementById("postal-code").value;
        const phone = document.getElementById("phone").value;

        // Validate input
        if (!fullName || !address || !city || !postalCode || !phone) {
            alert("Please fill out all fields.");
            return;
        }

        // Create an object with the user's address and phone number details
        const userAddress = {
            fullName,
            address,
            city,
            postalCode,
            phone
        };

        // Save the address to localStorage
        localStorage.setItem("userAddress", JSON.stringify(userAddress));

        // Confirm the address has been saved
        alert("Address saved successfully! Your order is now ready for processing. Please wait for the phone call from delivery.");

        // Clear the cart from localStorage
        localStorage.removeItem("cart");

        // Optionally, redirect to the Home page
        window.location.href = "Home.html"; // Redirect to Home page
    });
});
