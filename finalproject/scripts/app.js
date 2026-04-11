const products = [
  { id: 1, name: "Aviator Glasses", type: "glasses", price: 25, img: "images/glasses1.webp" },
  { id: 2, name: "Round Glasses", type: "glasses", price: 20, img: "images/glasses2.webp" },
  { id: 3, name: "Modern Wall Clock", type: "clocks", price: 40, img: "images/clock1.webp" },
  { id: 4, name: "Digital Clock", type: "clocks", price: 35, img: "images/clock2.webp" }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];


// =====================
// DISPLAY PRODUCTS
// =====================
function displayProducts(list) {
  const container = document.getElementById("product-list");
  if (!container) return;

  container.innerHTML = "";

  list.forEach(product => {
    container.innerHTML += `
      <div class="card">
        <img src="${product.img}" alt="${product.name}" loading="lazy">
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      </div>
    `;
  });
}


// =====================
// FILTER PRODUCTS
// =====================
function filterProducts(type) {
  if (type === "all") {
    displayProducts(products);
  } else {
    const filtered = products.filter(p => p.type === type);
    displayProducts(filtered);
  }
}


// =====================
// ADD TO CART
// =====================
function addToCart(id) {
  const item = products.find(p => p.id === id);

  cart.push(item);

  localStorage.setItem("cart", JSON.stringify(cart));

  alert(`${item.name} added to cart`);
}


// =====================
// DISPLAY CART
// =====================
function displayCart() {
  const container = document.getElementById("cart-items");
  const totalEl = document.getElementById("total");

  if (!container) return;

  container.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    container.innerHTML += `
      <div class="card">
        <img src="${item.img}" alt="${item.name}" loading="lazy">
        <h3>${item.name}</h3>
        <p>$${item.price}</p>
        <button onclick="removeItem(${index})">Remove</button>
      </div>
    `;
  });

  if (totalEl) {
    totalEl.textContent = `Total: $${total}`;
  }
}


// =====================
// REMOVE ITEM
// =====================
function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}


// =====================
// FEATURED PRODUCTS
// =====================
function displayFeatured() {
  const container = document.getElementById("featured");
  if (!container) return;

  container.innerHTML = "";

  const featured = products.slice(0, 2);

  featured.forEach(product => {
    container.innerHTML += `
      <div class="card">
        <img src="${product.img}" alt="${product.name}" loading="lazy">
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
      </div>
    `;
  });
}


// =====================
// INIT (RUN ON LOAD)
// =====================
window.onload = () => {
  displayProducts(products);
  displayCart();
  displayFeatured();
};