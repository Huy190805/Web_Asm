document.addEventListener("DOMContentLoaded", () => {
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const clearCartButton = document.getElementById("clear-cart");
    const checkoutButton = document.getElementById("checkout-button");

    // Load cart from localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const renderCart = () => {
        cartItemsContainer.innerHTML = ""; // Clear current cart table
        let total = 0;

        cart.forEach((item, index) => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;

            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${item.name}</td>
                <td>$${item.price.toFixed(2)}</td>
                <td>
                    <input type="number" class="form-control quantity-input" data-index="${index}" 
                           value="${item.quantity}" min="1">
                </td>
                <td>$${itemTotal.toFixed(2)}</td>
            `;
            cartItemsContainer.appendChild(row);
        });

        cartTotal.textContent = `Total: $${total.toFixed(2)}`;
    };

    // Render cart on page load
    renderCart();

    // Update quantity
    cartItemsContainer.addEventListener("input", (event) => {
        if (event.target.classList.contains("quantity-input")) {
            const index = event.target.dataset.index;
            const newQuantity = parseInt(event.target.value, 10);

            if (newQuantity >= 1) {
                cart[index].quantity = newQuantity;
                localStorage.setItem("cart", JSON.stringify(cart));
                renderCart(); // Re-render cart
            } else {
                alert("Quantity must be at least 1.");
                event.target.value = cart[index].quantity;
            }
        }
    });

    // Clear Cart
    clearCartButton.addEventListener("click", () => {
        if (confirm("Are you sure you want to clear the cart?")) {
            cart = [];
            localStorage.removeItem("cart");
            renderCart();
            alert("Your cart has been cleared.");
        }
    });

    // Checkout Button
    checkoutButton.addEventListener("click", () => {
        if (cart.length === 0) {
            alert("Your cart is empty!");
        } else {
            alert("Proceeding to checkout...");
            window.location.href = "checkout.html"; // Redirect to checkout page
        }
    });
});