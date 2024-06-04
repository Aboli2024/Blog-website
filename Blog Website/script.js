// Get the main container
var mainContainer = document.querySelector('.main_container');

// Add event listener for window resize
window.addEventListener('resize', function () {
    // Check the screen width
    if (window.innerWidth < 650) {
        // Adjust the grid layout for small screens
        mainContainer.style.gridTemplateColumns = '1fr';
    } else if (window.innerWidth < 1080) {
        // Adjust the grid layout for medium screens
        mainContainer.style.gridTemplateColumns = 'repeat(2, 1fr)';
    } else if (window.innerWidth < 1340) {
        // Adjust the grid layout for large screens
        mainContainer.style.gridTemplateColumns = 'repeat(3, 1fr)';
    } else {
        // Adjust the grid layout for extra large screens
        mainContainer.style.gridTemplateColumns = 'repeat(4, 1fr)';
    }
});