$(document).ready(function () {
    const cart = [];

    // Function to add an item to the cart
    $(".add-to-cart").on("click", function () {
        const itemName = $(this).closest(".menu-item").data("name");
        const itemPrice = parseFloat($(this).closest(".menu-item").data("price"));

        cart.push({ name: itemName, price: itemPrice });

        $("#cart-items").append(
            `<li>${itemName} - $${itemPrice.toFixed(2)} <button class='remove-item'>Remove</button></li>`
        );
    });

    // Function to remove an item from the cart
    $("#cart-items").on("click", ".remove-item", function () {
        const index = $(this).parent().index();
        cart.splice(index, 1);
        $(this).parent().remove();
    });

    // Function to generate a random order ID and customer name
    function generateOrderDetails() {
        const names = ["John Doe", "Jane Smith", "Alice Johnson", "Bob Brown", "Chris Davis"];
        const randomName = names[Math.floor(Math.random() * names.length)];
        const orderId = Math.floor(1000 + Math.random() * 9000);
        return { name: randomName, id: orderId };
    }

    // Function to calculate the total cost of the cart
    function calculateTotal() {
        return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
    }

    // Handle the order button click
    $("#order-button").on("click", function () {
        if (cart.length === 0) {
            alert("Your cart is empty! Add items to the cart before ordering.");
            return;
        }

        const { name, id } = generateOrderDetails();
        const totalCost = calculateTotal();

        alert(`Thank you for your order!\n\nOrder ID: ${id}\nName: ${name}\nTotal: $${totalCost}\n\nYour food will arrive in 20-30 minutes.`);

        // Clear the cart after ordering
        cart.length = 0;
        $("#cart-items").empty();
    });

    // Tab switching for menu categories
    $(".tab-button").on("click", function () {
        $(".tab-button").removeClass("active");
        $(this).addClass("active");

        const category = $(this).data("category");
        $(".menu-content").hide();
        $(`#${category}`).fadeIn();
    });
});
