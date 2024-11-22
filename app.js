document.addEventListener("DOMContentLoaded", function() {
    const searchButton = document.querySelector('.search-button');

    // Search button click event
    searchButton.addEventListener('click', function() {
        alert('Search button clicked! Implement search functionality here.');
    });

    const addToListButtons = document.querySelectorAll('.add-to-list');

    // Add to list button click event
    addToListButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Added to list!');
        });
    });
});

function goBack() {
    if (window.history.length > 1) {
        window.history.back(); // Go to the previous page in the history
    } else {
        window.location.href = 'index.html'; // Redirect to a default page if no history exists
    }
}

function addToList(item) {
    // Retrieve the current shopping list from localStorage
    let shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];

    // Check if the item already exists in the list (by name, or another unique identifier)
    const existingItemIndex = shoppingList.findIndex(existingItem => existingItem.name === item.name);

    if (existingItemIndex !== -1) {
        // If item exists, increment its quantity
        shoppingList[existingItemIndex].quantity += 1;
    } else {
        // If item doesn't exist, add it to the list with quantity 1
        item.quantity = 1;
        shoppingList.push(item);
    }

    // Save the updated list back to localStorage
    localStorage.setItem('shoppingList', JSON.stringify(shoppingList));

    // Optionally, refresh the list on the page
    loadShoppingList();
}
