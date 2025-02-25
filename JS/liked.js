let likedContainer = document.getElementById("liked-container");

if (likedContainer) {
  let liked = JSON.parse(sessionStorage.getItem("liked")) || [];

  // Remove any `null` values from cart
  liked = liked.filter(
    (item) => item !== null && item !== undefined && item.name
  );
  //got help from chat GPT
  if (liked.length > 0) {
    likedContainer.innerHTML = liked
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
  let totalCartPrice = liked
    .reduce((sum, item) => sum + parseFloat(item.price) * item.quantity, 0)
    .toFixed(2);
  likedContainer.innerHTML += `<h3>Total Cart Price: ${totalCartPrice} euros</h3>`;
} else {
  likedContainer.innerHTML = "<p>🛍️ The cart is empty.</p>";
}

function updateQuantity(index, change) {
  let liked = JSON.parse(sessionStorage.getItem("liked")) || [];

  if (liked[index]) {
    liked[index].quantity += change;

    if (liked[index].quantity <= 0) {
      liked.splice(index, 1);
    }

    sessionStorage.setItem("liked", JSON.stringify(liked));
    location.reload();
  }
}

// Function to remove item from cart
function removeFromLiked(index) {
  let liked = JSON.parse(sessionStorage.getItem("liked")) || [];

  if (liked[index]) {
    liked.splice(index, 1);
    sessionStorage.setItem("liked", JSON.stringify(liked));
  }
}
