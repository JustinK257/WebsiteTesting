function search() {
    // Navigate to the next HTML file
    window.location.href = 'orangejuice.html';
}

function goBack() {
    if (window.history.length > 1) {
        window.history.back(); // Go to the previous page in the history
    } else {
        window.location.href = 'index.html'; // Redirect to a default page if no history exists
    }
}