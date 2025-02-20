// Get the product ID from the URL (got how to it it from chatGPT)
const productId = new URLSearchParams(window.location.search).get("id");

// Define the products
const products = {
  //sportshoes
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
  127: {
    name: "Converse",
    image: "images/converse.jpg",
    price: "$15.00",
  },
  128: {
    name: "Red nikes",
    image: "images/redshoe.jpg",
    price: "$15.00",
  },
  129: {
    name: "white runner shoes",
    image: "images/whiterrunshoues.jpg",
    price: "$15.00",
  },
  //boots
  201: {
    name: "Brown boots",
    image: "images/winter-boots-3867776_1280.jpg",
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
