const menu = document.getElementById("menu");
  const menuBar = document.getElementById("menu-bar");

  menuBar.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    menu.classList.toggle("flex");
  });



window.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("main-header");

    // trigger the drop animation
    setTimeout(() => {
      header.classList.add("drop");
    }, 100);
  });






   let cart = JSON.parse(localStorage.getItem("cart")) || []; // load saved cart

const cartDropdown = document.getElementById("cart");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const checkoutBtn = document.getElementById("checkout-btn");
const cartMenuBtn = document.getElementById("cart-menu-btn"); // your "Cart" menu link
const closeCartBtn = document.getElementById("close-cart");
const clearCartBtn = document.getElementById("clear-cart");

// Add to cart
document.querySelectorAll(".order-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const name = btn.dataset.name;
    const price = parseFloat(btn.dataset.price);

    // check if item exists in cart
    const existing = cart.find(item => item.name === name);
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ name, price, qty: 1 });
    }

    // save to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // show & update cart when order is hit
    updateCart(true);
  });
});

// Update cart UI
function updateCart(show = false) {
  if (show) cartDropdown.classList.remove("hidden"); // show cart only when triggered

  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price * item.qty;

    const li = document.createElement("li");
    li.className = "flex justify-between items-center text-sm mb-1";

    li.innerHTML = `
      <div>
        ${item.qty} × ${item.name} <span class="font-bold">$${item.price * item.qty}</span>
      </div>
      <button class="remove-btn text-red-600 ml-4" data-index="${index}">❌</button>
    `;

    cartItems.appendChild(li);
  });

  cartTotal.textContent = "Total: $" + total;

  // Build WhatsApp message
  let message = "Hello, I want to order:%0A";
  cart.forEach(item => {
    message += `- ${item.qty} × ${item.name} ($${item.price} each)%0A`;
  });
  message += `%0ATotal = $${total}`;

  // 👉 Put your WhatsApp number here
  checkoutBtn.href = `https://wa.me/2348134260378?text=${message}`;

  // keep localStorage updated
  localStorage.setItem("cart", JSON.stringify(cart));

  // Attach remove button events
  document.querySelectorAll(".remove-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const index = btn.dataset.index;
      cart.splice(index, 1); // remove the item
      localStorage.setItem("cart", JSON.stringify(cart));
      updateCart(true); // refresh cart
    });
  });
}

// Toggle cart when "Cart" menu is clicked
cartMenuBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  cartDropdown.classList.toggle("hidden");
});

// Hide cart if clicked outside
// 

// Close cart when X is clicked
closeCartBtn.addEventListener("click", () => {
  cartDropdown.classList.add("hidden");
});

// Clear cart items
clearCartBtn.addEventListener("click", () => {
  cart = []; // empty the array
  localStorage.removeItem("cart"); // clear localStorage
  updateCart(); // refresh cart UI
  cartDropdown.classList.add("hidden"); // hide after clearing
});

// Load existing cart from localStorage on page load
document.addEventListener("DOMContentLoaded", () => {
  if (cart.length > 0) {
    updateCart(false);
  }
});




const testimonialList = document.getElementById("testimonial-list");
const dots = document.querySelectorAll(".dot");

let currentIndex = 0;

// Function to update slide + active dot
function showSlide(index) {
  currentIndex = index;
  testimonialList.style.transform = `translateX(-${index * 100}%)`;
  
  dots.forEach((dot, i) => {
    dot.classList.toggle("bg-gray-800", i === index);
    dot.classList.toggle("bg-gray-400", i !== index);
  });
}

// Add click events to dots
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => showSlide(i));
});

// Show first slide by default
showSlide(0);




    // Format message for WhatsApp
    document.getElementById("sendBtn").addEventListener("click", function () {
    // Get input values
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // Build WhatsApp message
    let whatsappMessage = `Hello, my name is ${name}.
Phone: ${phone}
Email: ${email}
Message: ${message}`;

    // Encode message for URL
    let encodedMessage = encodeURIComponent(whatsappMessage);

    // Your WhatsApp number (no + or leading 0)
    let phoneNumber = "2348134260378";

    // Redirect to WhatsApp
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  });




  var showText = document.querySelector('.show-text')
var orderText = document.querySelector('.order-text')

showText.addEventListener('click', () => {
  if (orderText.style.display === 'block') {
    // Hide text
    orderText.style.display = 'none'
    showText.textContent = 'Read More'
  } else {
    // Show text
    orderText.style.display = 'block'
    showText.textContent = 'See Less'
  }
})
