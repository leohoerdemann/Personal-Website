document.addEventListener('DOMContentLoaded', () => {
    // for the desktop icons
    const desktopIcons = document.querySelectorAll('.desktop-icon');
    desktopIcons.forEach(icon => {
      icon.addEventListener('dblclick', () => {
        window.open(icon.dataset.id);
      });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // for the taskbar icons
    const desktopIcons = document.querySelectorAll('.icon');
    desktopIcons.forEach(icon => {
      icon.addEventListener('click', () => {
        window.open(icon.dataset.id);
        icon.classList.add('window-open');
      });
    });
});

window.open = function(windowId) {
    const windowElement = document.getElementById(windowId);
  
    if (!windowElement) {
      console.error(`No window found with ID: ${windowId}`);
      return;
    }
  
    if (windowElement.classList.contains('hidden')) {
      // Open the window with the Windows 7-style animation
      windowElement.classList.remove('hidden');
      windowElement.classList.remove('close-animation');
      windowElement.classList.add('open-animation');
    } else {
        const windows = document.querySelectorAll('.window');
        windows.forEach(window1 => {
            window1.classList.remove('active');
        });

        // Add active class to the clicked window
        const window1 = document.getElementById(windowId);
        window1.classList.add('active');
    }
  };