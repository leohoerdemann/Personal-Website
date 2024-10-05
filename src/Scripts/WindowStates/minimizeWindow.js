document.addEventListener('DOMContentLoaded', () => {
  const windows = document.querySelectorAll('.window');
  windows.forEach(win => {
    const minimizeButton = win.querySelector('.minimize-button');
    minimizeButton?.addEventListener('click', () => {
      minimizeWindow(win.id, win.dataset.number);
    });
  });
});

function minimizeWindow(windowId, windowNumber) {
  const windowElement = document.querySelector(`#${windowId}[data-number="${windowNumber}"]`);

  if (!windowElement) {
    console.error(`No window found with ID: ${windowId}`);
    return;
  }

  // Minimize the window with the minimize animation
  windowElement.classList.remove('open-animation');
  windowElement.classList.remove('unMini-animation');
  windowElement.classList.add('minimize-animation');

  // Delay the hiding to let the animation finish
  setTimeout(() => {
    windowElement.classList.add('minimized');
    windowElement.classList.remove('minimize-animation');

    // Keep the taskbar icon active
    const taskbarIcon = document.querySelector(`.taskbar .icon[data-id="${windowId}"]`);
    if (taskbarIcon) {
      taskbarIcon.classList.add('active');
    } else {
      // If the icon is not on the taskbar, add it
      createTaskbarIcon(windowId).classList.add('active');
    }
  }, 300); // Match the duration of the minimize animation
}
