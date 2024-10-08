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

    window.addEventListener('mousedown', () => {
        // Bring the clicked window to the top
        window.style.zIndex = Math.max(...Array.from(windows, w => parseInt(w.style.zIndex) || 0)) + 1;
    });
});