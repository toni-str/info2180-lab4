// Wait for the DOM content to fully load before running the script
document.addEventListener('DOMContentLoaded', function() {
    // 1. Get a reference to the search button using its ID
    const searchButton = document.getElementById('search-btn');

    // 2. Add a 'click' event listener to the button
    searchButton.addEventListener('click', function() {
        
        // Define the URL of the PHP endpoint
        const endpoint = 'superheroes.php';
        
        // Use the Fetch API to make the AJAX request
        fetch(endpoint)
            .then(response => {
                // Check if the response was successful (status 200)
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                // Convert the response body (which is the HTML list) to text
                return response.text();
            })
            .then(htmlList => {
                // 3. Display the HTML list content in a JavaScript alert
                alert(htmlList);
            })
            .catch(error => {
                // Handle any errors that occur during the fetch operation
                console.error('Fetch error:', error);
                alert('An error occurred while fetching the superheroes.');
            });

    });
});