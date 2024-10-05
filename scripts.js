let cartCount = 0;
let cartItems = [];

function addToCart(button) {
    const productItem = button.parentElement;
    const productName = productItem.querySelector('.product-name').innerText;
    const productPrice = productItem.querySelector('.product-price').innerText;

    cartCount++;
    cartItems.push({ name: productName, price: productPrice });

    document.getElementById('cart-count').innerText = cartCount;
    document.getElementById('cart-count-display').innerText = cartCount;
    
    // Hide "Add to Cart" button and show "Remove from Cart" button
    button.style.display = 'none';
    button.nextElementSibling.style.display = 'inline-block';
}

function removeFromCart(button) {
    const productItem = button.parentElement;
    const productName = productItem.querySelector('.product-name').innerText;

    cartCount--;
    cartItems = cartItems.filter(item => item.name !== productName);

    document.getElementById('cart-count').innerText = cartCount;
    document.getElementById('cart-count-display').innerText = cartCount;
    
    // Hide "Remove from Cart" button and show "Add to Cart" button
    button.style.display = 'none';
    button.previousElementSibling.style.display = 'inline-block';
}

function proceedToPayment() {
    if (cartItems.length > 0) {
        // Create a message with item details
        let message = 'Hello, I would like to proceed with payment for the following item(s):\n\n';
        cartItems.forEach(item => {
            message += `${item.name} - ${item.price}\n`;
        });
        message += `\nTotal items: ${cartCount}`;

        // Encode the message for use in the WhatsApp URL
        const encodedMessage = encodeURIComponent(message);

        // Redirect to WhatsApp with the message
        const url = `https://wa.me/256761399903?text=${encodedMessage}`;
        window.open(url, '_blank');
    } else {
        alert('Your cart is empty!');
    }
}

