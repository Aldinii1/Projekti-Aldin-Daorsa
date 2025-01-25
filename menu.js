function showCategory(category) {
    document.querySelectorAll(".category").forEach((cat) => {
      cat.style.display = "none";
    });
    document.querySelector(`.${category}`).style.display = "flex";
  }
  
  let cart = [];
  
  function addToCart(name, price) {
    cart.push({ name, price });
    showNotification(`${name} has been added to your cart!`);
  }
  
  function showNotification(message) {
    const notification = document.getElementById("notification");
    notification.textContent = message;
    notification.style.display = "block";
    setTimeout(() => {
      notification.style.display = "none";
    }, 3000);
  }
  
  function openCart() {
    const cartModal = document.getElementById("cart-modal");
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = cart.map((item) => `<p>${item.name} - $${item.price}</p>`).join("");
    cartModal.style.display = "block";
  }
  
  function closeCart() {
    document.getElementById("cart-modal").style.display = "none";
  }
  
  function openOrderForm() {
    document.getElementById("cart-modal").style.display = "none";
    document.getElementById("order-form-modal").style.display = "block";
  }
  
  function closeOrderForm() {
    document.getElementById("order-form-modal").style.display = "none";
  }
  
  document.getElementById("order-form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Your order has been placed and will arrive in 40 minutes!");
    closeOrderForm();
  });
  