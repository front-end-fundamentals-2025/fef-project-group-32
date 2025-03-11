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

function changeImage() {
  let img = document.getElementById("liked-container");
  if (!img) {
    console.log("Image not found!");
    return;
  }

  if (img.src.endsWith("whiteheart.svg")) {
    img.src = "Images/redheart.svg";
    console.log("Heart changed to red");
  } else {
    img.src = "Images/whiteheart.svg";
    console.log("Heart changed to white");
  }
}
