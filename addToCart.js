document.addEventListener("DOMContentLoaded", () => {
    const cartButtons = document.querySelectorAll(".add-to-cart");

    cartButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const productId = button.getAttribute("data-id");
            const productName = button.getAttribute("data-name");
            const productPrice = parseFloat(button.getAttribute("data-price"));

            const product = {
                id: productId,
                name: productName,
                price: productPrice,
                quantity: 1,
            };

            let cart = JSON.parse(localStorage.getItem("cart")) || [];

            const existingProduct = cart.find((item) => item.id === productId);

            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                cart.push(product);
            }

            localStorage.setItem("cart", JSON.stringify(cart));
            alert(`${productName} has been added to your cart!`);
        });
    });
});
