document.addEventListener("DOMContentLoaded", function () {
  let cartContainer = document.getElementById("cart-container");

  if (cartContainer) {
    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

    // Fix: Remove any `null` values from cart
    cart = cart.filter(
      (item) => item !== null && item !== undefined && item.name
    );

    if (cart.length > 0) {
      cartContainer.innerHTML = cart
        .map((item) => {
          return `
                    <div>
                        <img src="${item.image}" width="50" alt="Produktbild">
                        <p>${item.name} - ${item.price} euros</p>
                    </div>
                `;
        })
        .join("");
    } else {
      cartContainer.innerHTML = "<p>🛍️ The cart is empty.</p>";
    }

    // Save cleaned cart to sessionStorage (prevents `null` values from persisting)
    sessionStorage.setItem("cart", JSON.stringify(cart));
  }
});
