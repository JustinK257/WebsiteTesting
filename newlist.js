function goBack() {
    if (window.history.length > 1) {
        window.history.back(); // Go to the previous page in the history
    } else {
        window.location.href = 'index.html'; // Redirect to a default page if no history exists
    }
}

function search() {
    window.location.href = 'itemsearch.html';
}

function loadShoppingList() {
    // Retrieve the shopping list from localStorage
    const shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];

    // Target the container where the list will be displayed
    const listContainer = document.getElementById('shopping-list');

    // Clear the container first (in case of reloading)
    listContainer.innerHTML = '';

    // Generate the list dynamically
    shoppingList.forEach((item, index) => {
        const listItem = document.createElement('div');
        listItem.classList.add('product-card');

        listItem.innerHTML = `
            <div class="product-info">
                <p><strong>${item.price}</strong></p>
                <p>${item.name}</p>
                <p>${item.approval} Approved</p>
                <p>Quantity: ${item.quantity}</p>
            </div>
            <div class="product-actions">
                <button class="remove-button" onclick="removeItem(${index})">Remove</button>
                <button class="decrement-button" onclick="decrementItem(${index})">-</button>
            </div>
        `;

        listContainer.appendChild(listItem);
    });

    // If no items exist, display a message
    if (shoppingList.length === 0) {
        listContainer.innerHTML = '<p>Your shopping list is empty.</p>';
    }
}

function removeItem(index) {
    // Retrieve the current shopping list from localStorage
    const shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];

    // Remove the item at the specified index
    shoppingList.splice(index, 1);

    // Save the updated list back to localStorage
    localStorage.setItem('shoppingList', JSON.stringify(shoppingList));

    // Reload the list to reflect the changes
    loadShoppingList();
}

// Load the shopping list on page load
document.addEventListener('DOMContentLoaded', loadShoppingList);

function decrementItem(index) {
    // Retrieve the current shopping list from localStorage
    const shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];

    // Decrease the quantity of the item
    shoppingList[index].quantity -= 1;

    // Remove the item if the quantity reaches zero
    if (shoppingList[index].quantity <= 0) {
        shoppingList.splice(index, 1);
    }

    // Save the updated list back to localStorage
    localStorage.setItem('shoppingList', JSON.stringify(shoppingList));

    // Reload the list to reflect the changes
    loadShoppingList();
}