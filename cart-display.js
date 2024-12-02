document.addEventListener("DOMContentLoaded", () => {
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotalContainer = document.getElementById("cart-total");

    // Retrieve the cart from localStorage
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `<tr><td colspan="4">Your cart is empty.</td></tr>`;
        return;
    }

    let totalCost = 0;

    // Display each product in the cart
    cart.forEach((item) => {
        const itemTotal = item.price * item.quantity;
        totalCost += itemTotal;

        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.name}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td>${item.quantity}</td>
            <td>$${itemTotal.toFixed(2)}</td>
        `;
        cartItemsContainer.appendChild(row);
    });

    // Display the total cost
    cartTotalContainer.textContent = `Total: $${totalCost.toFixed(2)}`;
});
