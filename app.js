document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.getElementById('search-btn');
    // Get the input field
    const searchInput = document.getElementById('superhero-search'); 
    // Get the result display area 
    const resultDiv = document.getElementById('result');         

    searchButton.addEventListener('click', function() {
        
        // Get the value from the search input field
        const queryValue = searchInput.value.trim(); 
        
        // Construct the endpoint URL with the query parameter 
        // If queryValue is empty, the URL is just 'superheroes.php' (no query param)
        const endpoint = `superheroes.php?query=${encodeURIComponent(queryValue)}`;
        
        fetch(endpoint)
            .then(response => {
                if (!response.ok) {
                    // This handles network errors, not 'Superhero not found'
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();
            })
            .then(htmlContent => {
                // Show the result inside a div with id of "result" 
                resultDiv.innerHTML = htmlContent; 
            })
            .catch(error => {
                console.error('Fetch error:', error);
                // Display a user-friendly error message in the result div
                resultDiv.innerHTML = "<p style='color: red;'>An error occurred while fetching data.</p>";
            });

    });
});