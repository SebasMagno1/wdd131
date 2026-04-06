const products = [
  { id: "p1", name: "Smart Watch" },
  { id: "p2", name: "Wireless Headphones" },
  { id: "p3", name: "Laptop Stand" },
  { id: "p4", name: "Bluetooth Speaker" }
];

// Populate select options
const select = document.getElementById("product");

products.forEach(product => {
  const option = document.createElement("option");
  option.value = product.id;
  option.textContent = product.name;
  select.appendChild(option);
});

// ✅ Current Year
const yearElement = document.getElementById("year");
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;

// ✅ Last Modified Date
const modifiedElement = document.getElementById("lastModified");
modifiedElement.textContent = document.lastModified;