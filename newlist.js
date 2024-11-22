function loadShoppingList() {
    // Retrieve the shopping list from localStorage
    const shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];

    // Target the container where the list will be displayed
    const listContainer = document.getElementById('shopping-list');

    // Clear the container first (in case of reloading)
    listContainer.innerHTML = '';

    // Generate the list dynamically
    shoppingList.forEach((item) => {
        const listItem = document.createElement('div');
        listItem.classList.add('product-card');

        listItem.innerHTML = `
            <p><strong>${item.price}</strong></p>
            <p>${item.name}</p>
            <p>${item.approval} Approved</p>
        `;

        listContainer.appendChild(listItem);
    });

    // If no items exist, display a message
    if (shoppingList.length === 0) {
        listContainer.innerHTML = '<p>Your shopping list is empty.</p>';
    }
}

// Redirect back to the previous page
function goBack() {
    if (window.history.length > 1) {
        window.history.back(); // Go to the previous page in the history
    } else {
        window.location.href = 'index.html'; // Redirect to a default page if no history exists
    }
}

// Navigate to item search page
function search() {
    window.location.href = 'itemsearch.html';
}

// Load the shopping list on page load
document.addEventListener('DOMContentLoaded', loadShoppingList);