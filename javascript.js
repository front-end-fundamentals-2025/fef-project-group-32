// Get the product ID from the URL (got how to it it from chatGPT)
const productId = new URLSearchParams(window.location.search).get("id");

// Define the products
const products = {
  //sportshoes
  123: {
    name: "Yellow Jordans",
    image: "images/yellowjordans.jpg",
    price: "10.00",
    description:
      "vibrant yellow upper that not only catches the eye but also redefines street style.",
  },
  124: {
    name: "Green Jordans",
    image: "images/greenjordans.jpg",
    price: "15.00",
    description: "Stylish and comfortable green Jordans for everyday wear.",
  },
  125: {
    name: "Colorful shoes",
    image: "images/colorfulshoes.jpg",
    price: "15.00",
    description: "A mix of colors to brighten your outfit and your day!",
  },
  126: {
    name: "Black and white shoes",
    image: "images/bwshoes.jpg",
    price: "15.00",
    description: "Classic black and white shoes that go with everything.",
  },
  127: {
    name: "Converse",
    image: "images/converse.jpg",
    price: "15.00",
    description: "Timeless Converse design that never goes out of style.",
  },
  128: {
    name: "Red nikes",
    image: "images/redshoe.jpg",
    price: "15.00",
    description: "Bold red Nikes for a standout look on any occasion.",
  },
  129: {
    name: "white runner shoes",
    image: "images/whiterrunshoues.jpg",
    price: "15.00",
    description: "Lightweight and comfortable running shoes for everyday use.",
  },
  //boots
  201: {
    name: "Brown boots",
    image: "images/winter-boots-3867776_1280.jpg",
    price: "15.00",
    description: "Durable and stylish brown boots for any occasion.",
  },
  202: {
    name: "Mocha boots",
    image: "images/mostafa-mahmoudi-3OZr-hLbsq0-unsplash.jpg",
    price: "15.00",
    description: "Sleek mocha-colored boots for a modern look.",
  },
  203: {
    name: "Warm boots ",
    image: "Images/nathan-dumlao-qxcQG21m_qE-unsplash.jpg",
    price: "15.00",
    description:
      "Super cozy boots designed to keep your feet warm in cold weather.",
  },
  204: {
    name: "Unique boots",
    image: "Images/the-nix-company-m6mAYVEHlNs-unsplash.jpg",
    price: "15.00",
    description:
      "Stand out with these uniquely designed boots that make a statement.",
  },
  205: {
    name: "Pink boots",
    image: "images/pinkboots.jpg",
    price: "15.00",
    description: "Cute pink boots for children!",
  },
  //heels
  301: {
    name: "Beige Pumps",
    image: "images/heels1.jpg",
    price: "15.00",
    description: "Stylish and modern to pump up your life!",
  },
  302: {
    name: "Heels with bow",
    image: "images/heels2.jpg",
    price: "15.00",
    description: "Cute heels with bows as an extra touch!",
  },
  303: {
    name: "Brown Low heels ",
    image: "images/heels3.jpg",
    price: "15.00",
    description: "Traditional heel",
  },
  304: {
    name: "Bold Black heels ",
    image: "images/heels4.jpg",
    price: "$15.00",
    description: "Be bold, be brave, wear these stylish black heels",
  },
  305: {
    name: "Red heels",
    image: "images/redheels.jpg",
    price: "15.00",
    description: "They say red is the color of love...",
  },

  //sandals
  401: {
    name: "Summer sandals",
    image: "images/Sandal-reunion-natur.jpg",
    price: "15.00",
    description: "Summery sandals to enjoy your vacation",
  },
  402: {
    name: "Black sandals",
    image: "images/sandalblack.jpg",
    price: "15.00",
    description: "Bold sandals to make a statement",
  },
  403: {
    name: "Braided sandals",
    image: "images/sandalbraid.jpeg",
    price: "15.00",
    description: "Authentic Braided sandal that throws you back in time ",
  },
  404: {
    name: "Birckenstock ",
    image: "images/birkenstocksandal.jpeg",
    price: "15.00",
    description: "Original brikenstock",
  },
  405: {
    name: "White sandals",
    image: "images/sandalwhite.jpeg",
    price: "15.00",
    description: "Perfect for a day in the sun!",
  },
};

// Find the product element and show it
const product = products[productId];

if (product) {
  // Set the product name, image, and price
  document.getElementById("product-name").innerText = product.name;
  document.getElementById("product-image").src = product.image;
  document.getElementById("product-price").innerText = product.price;
  document.getElementById("product-description").innerText =
    product.description || "No description available.";
}

// Add product to cart
document.addEventListener("DOMContentLoaded", function () {
  let addToCartButton = document.getElementById("add-to-cart");

  if (addToCartButton && product) {
    addToCartButton.addEventListener("click", function () {
      console.log("🛒 Add to cart clicked!");

      // Get current cart from sessionStorage
      let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

      // Ensure product ID is stored as a string
      let existingProduct = cart.find((item) => item.id === String(productId));

      if (existingProduct) {
        // If product is already in cart, increase quantity
        existingProduct.quantity += 1;
      } else {
        // Add new product with quantity = 1
        let newProduct = {
          id: String(productId),
          name: product.name,
          price: parseFloat(product.price), // Convert price to number
          image: product.image,
          quantity: 1,
        };
        cart.push(newProduct);
      }

      // Save updated cart to sessionStorage
      sessionStorage.setItem("cart", JSON.stringify(cart));

      alert("✅ The product has been added to the cart!");
      console.log("Updated cart:", cart);
    });
  }
});

const sizeOptions = document.querySelectorAll(".size-option");

sizeOptions.forEach((option) => {
  option.addEventListener("click", () => {
    sizeOptions.forEach((opt) => opt.classList.remove("selected"));
    option.classList.add("selected");
  });
});
if (existingProduct) {
  existingProduct.quantity += 1;
} else {
  let newProduct = {
    id: String(productId),
    name: product.name,
    price: product.price,
    image: product.image,
    quantity: 1,
  };
  cart.push(newProduct);
}
