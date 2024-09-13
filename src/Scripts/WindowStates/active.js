// Get all the window components
const windows = document.querySelectorAll('.window');

// Add click event listener to each window component
windows.forEach(window => {
    window.addEventListener('click', () => {
        // Remove active class from all windows
        windows.forEach(window => {
            window.classList.remove('active');
        });

        // Add active class to the clicked window
        window.classList.add('active');
    });
});