// Define a cart object to store items and quantities
const cart = {};

// Get all the "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Add event listeners to the buttons
addToCartButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});

// Function to add items to the cart
function addToCart(event) {
  const itemId = event.target.id; // Get the id of the clicked button
  const itemInfo = getItemInfo(itemId); // Extract item information from the id
  if (!cart[itemId]) {
    cart[itemId] = { name: itemInfo.name, price: itemInfo.price, quantity: 1 };
  } else {
    cart[itemId].quantity++;
  }
  updateCartUI();
}

// Function to extract item information from the id
function getItemInfo(itemId) {
  // You need to implement this function to parse the item information from the id
  // For example, you can use regular expressions or split to extract relevant information
  // from the item id.
  // Return an object with name and price.
}

// Function to update the cart UI
function updateCartUI() {
  const tableBody = document.getElementById('table-body');
  tableBody.innerHTML = '';

  let totalAmount = 0;
  for (const itemId in cart) {
    const item = cart[itemId];
    totalAmount += item.price * item.quantity;

    const row = document.createElement('tr');
    row.innerHTML = `
      <td><img src="${getItemImage(itemId)}" alt=""></td>
      <td>${item.name}</td>
      <td>
        <button class="decrease-item" onclick="decreaseItem('${itemId}')">-</button>
        <span>${item.quantity}</span>
        <button class="increase-item" onclick="increaseItem('${itemId}')">+</button>
      </td>
      <td>${item.price * item.quantity}</td>
    `;
    tableBody.appendChild(row);
  }

  const mTotalAmount = document.getElementById('m-total-amount');
  mTotalAmount.textContent = `Total Amount: Rs ${totalAmount}`;
}

// Function to decrease item quantity
function decreaseItem(itemId) {
  if (cart[itemId] && cart[itemId].quantity > 1) {
    cart[itemId].quantity--;
    updateCartUI();
  }
}

// Function to increase item quantity
function increaseItem(itemId) {
  if (cart[itemId]) {
    cart[itemId].quantity++;
    updateCartUI();
  }
}

// Function to get item image URL based on itemId
function getItemImage(itemId) {
  // You need to implement this function to return the item image URL based on itemId
  // For example, you can have a map of itemIds to image URLs.
}

// Call the updateCartUI function initially to set up the UI
updateCartUI();

