function goBack() {
    if (window.history.length > 1) {
        window.history.back(); // Go to the previous page in the history
    } else {
        window.location.href = 'index.html'; // Redirect to a default page if no history exists
    }
}

function search(){
    window.location.href = 'itemsearch.html';
}

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