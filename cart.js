let cartContainer = document.getElementById("cart-container");

if (cartContainer) {
  let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
  //remvoe null item from cart
  cart = cart.filter(
    (item) => item !== null && item !== undefined && item.name
  );
  //got help from chat GPT
  //shows how the cart will look like when you put something to the cart
  if (cart.length > 0) {
    cartContainer.innerHTML = cart
      .map((item, index) => {
        return `
                    <div>
                        <img src="${item.image}" width="50" alt="Productimage">
                        <p>${item.name} - ${item.price} euros</p>
                        <p>Quantity: 
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
}
//Updated the quantity
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
