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