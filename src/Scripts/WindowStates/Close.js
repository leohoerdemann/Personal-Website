document.addEventListener('DOMContentLoaded', () => {
  const windows = document.querySelectorAll('.window');
  windows.forEach(win => {
    const closeButton = win.querySelector('.close-button');
    closeButton?.addEventListener('click', () => {
      closeWindow(win.id);
    });
  });
});

function closeWindow(windowId) {
  const windowElements = document.querySelectorAll(`#${windowId}`);

  windowElements.forEach(windowElement => {

  if (!windowElement) {
    console.error(`No window found with ID: ${windowId}`);
    return;
  }

  // Close the window with the close animation 
  windowElement.classList.remove('open-animation');
  windowElement.classList.remove('unMini-animation');
  windowElement.classList.add('close-animation');

  // Delay the hiding to let the animation finish
  setTimeout(() => {
    windowElement.classList.add('hidden');
    windowElement.classList.remove('close-animation');

    // Remove 'active' class from the taskbar icon
    const taskbarIcon = document.querySelector(`.taskbar .icon[data-id="${windowId}"]`);
    if (taskbarIcon) {
      taskbarIcon.classList.remove('active');

      // If the icon was not pinned (i.e., not originally on the taskbar), remove it
      if (!isIconPinned(windowId)) {
        taskbarIcon.classList.add('taskbar-icon-remove-animation');

        // Remove the icon after the animation
        setTimeout(() => {
          taskbarIcon.remove();
        }, 150); // Match the duration of the animation
      }
    }
  }, 150); // Match the duration of the close animation
}); 
}

function isIconPinned(windowId) {
  // Implement logic to check if an icon is pinned to the taskbar
  // For simplicity, let's assume icons with 'pinned' class are pinned
  const taskbarIcon = document.querySelector(`.taskbar .icon[data-id="${windowId}"]`);
  return taskbarIcon && taskbarIcon.classList.contains('pinned');
}
