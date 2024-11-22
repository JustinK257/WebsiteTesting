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

function addToList(productName, productPrice, productApproval) {
    // Retrieve the existing list from localStorage
    let shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];

    // Add the new item to the list
    shoppingList.push({ name: productName, price: productPrice, approval: productApproval });

    // Save the updated list back to localStorage
    localStorage.setItem('shoppingList', JSON.stringify(shoppingList));

    alert(`${productName} has been added to your list!`);
}

// Function to load the list on newlist.html
function loadShoppingList() {
    // Retrieve the shopping list from localStorage
    const shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];

    // Target the container where the list will be displayed
    const listContainer = document.getElementById('shopping-list');

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
}