document.addEventListener('DOMContentLoaded', (event) => {
    const windows = document.querySelectorAll('.window');
    windows.forEach(Window => {
      const closeButton = Window.querySelector('.close-button');
      closeButton.addEventListener('click', () => {
        window.close(Window.id);
      });
        
    });
});

window.close = function(windowId) {
    const windowElement = document.getElementById(windowId);

    if (!windowElement) {
        console.error(`No window found with ID: ${windowId}`);
        return;
    }
    // Close the window with the close animation
    windowElement.classList.remove('open-animation');
    windowElement.classList.add('close-animation');
    
    // Delay the hiding to let the animation finish
    setTimeout(() => {
    windowElement.classList.add('hidden');
    windowElement.classList.remove('close-animation');
    }, 300); // Match the duration of the close animation
};