document.addEventListener('DOMContentLoaded', (event) => {
    const windows = document.querySelectorAll('.window');
    windows.forEach(Window => {
      const minButton = Window.querySelector('.minimize-button');
      minButton.addEventListener('click', () => {
        window.minimizeWindow(Window.id);
      });
        
    });
});

// minimizeWindow.js
window.minimizeWindow = function(windowId) {
    const windowElement = document.getElementById(windowId);
  
    if (windowElement) {
      windowElement.classList.toggle('minimized');
    }
  };
  