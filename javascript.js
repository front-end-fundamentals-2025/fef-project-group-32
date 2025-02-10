document.addEventListener("DOMContentLoaded", function () {
  // Get the product ID from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");

  // Define the products
  const products = {
    123: {
      name: "Yellow Jordans",
      image: "images/yellowjordans.jpg",
      price: "$10.00",
    },
    124: {
      name: "Green Jordans",
      image: "images/greenjordans.jpg",
      price: "$15.00",
    },
    125: {
      name: "Colorful shoes",
      image: "images/colorfulshoes.jpg",
      price: "$15.00",
    },
    126: {
      name: "Black and white shoes",
      image: "images/bwshoes.jpg",
      price: "$15.00",
    },
  };

  // Find the product element and show it
  const product = products[productId];

  if (product) {
    // Set the product name, image, and price
    document.getElementById("product-name").innerText = product.name;
    document.getElementById("product-image").src = product.image;
    document.getElementById("product-price").innerText = product.price;
  } else {
    document.getElementById("product-details").innerHTML =
      "<p style='color: red;'>Product not found.</p>";
  }
});
