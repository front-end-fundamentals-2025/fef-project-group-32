let cartContainer = document.getElementById("cart-container");

if (cartContainer) {
  let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

  // Remove any `null` values from cart
  cart = cart.filter(
    (item) => item !== null && item !== undefined && item.name
  );
  //got help from chat GPT
  if (cart.length > 0) {
    cartContainer.innerHTML = cart
      .map((item, index) => {
        return `
                    <div>
                        <img src="${item.image}" width="50" alt="Produktbild">
                        <p>${item.name} - ${item.price} euros</p>
                        <p>Antal: 
                            <button onclick="updateQuantity(${index}, -1)">➖</button> 
                            ${item.quantity} 
                            <button onclick="updateQuantity(${index}, 1)">➕</button>
                        </p>
                    
                    </div>
                    <hr>
                `;
      })
      .join("");
  }
  //got this from chatGPT
  let totalCartPrice = cart
    .reduce((sum, item) => sum + parseFloat(item.price) * item.quantity, 0)
    .toFixed(2);
  cartContainer.innerHTML += `<h3>Total Cart Price: ${totalCartPrice} euros</h3>`;
} else {
  cartContainer.innerHTML = "<p>🛍️ The cart is empty.</p>";
}

function updateQuantity(index, change) {
  let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

  if (cart[index]) {
    cart[index].quantity += change;

    if (cart[index].quantity <= 0) {
      cart.splice(index, 1);
    }

    sessionStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
  }
}

// Function to remove item from cart
function removeFromCart(index) {
  let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

  if (cart[index]) {
    cart.splice(index, 1);
    sessionStorage.setItem("cart", JSON.stringify(cart));
  }
}
