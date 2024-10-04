document.addEventListener('DOMContentLoaded', () => {
  // For desktop icons
  const desktopIcons = document.querySelectorAll('.desktop-icon');
  desktopIcons.forEach(icon => {
    icon.addEventListener('dblclick', () => {
      if (icon.classList.contains('override')) {
        window.open(icon.dataset.link, '_blank');
      } else {
        openWindow(icon.dataset.id);
      }
      icon.blur();
    });
  });

  // For taskbar icons
  const taskbarIcons = document.querySelectorAll('.taskbar .icon');
  taskbarIcons.forEach(icon => {
    icon.addEventListener('click', () => {
      if (icon.classList.contains('override')) {
        window.open(icon.dataset.link, '_blank');
      } else {
      openWindow(icon.dataset.id);
      icon.classList.add('window-open');
      }
    });
  });
});

function openWindow(windowId) {
  const windowElements = document.querySelectorAll(`#${windowId}`);

  windowElements.forEach(windowElement => {
    if (!windowElement) {
      console.error(`No window found with ID: ${windowId}`);
      return;
    }
  
    // **Clear any text selection**
    if (window.getSelection) {
      window.getSelection().removeAllRanges();
    } else if (document.selection) {
      // For older browsers (IE)
      document.selection.empty();
    }
  
    var hidden = windowElement.classList.contains('hidden');
    var minimized = windowElement.classList.contains('minimized');
    if (hidden || minimized) {
      // Open the window with the Windows 7-style animation
      windowElement.classList.remove('hidden', 'minimized', 'close-animation', 'minimize-animation');
  
      if(hidden)
      {
        windowElement.classList.add('open-animation');
      }
      else
      {
        windowElement.classList.add('unMini-animation');
      }
      
  
      // Add 'active' class to the corresponding taskbar icon
      let taskbarIcon = document.querySelector(`.taskbar .icon[data-id="${windowId}"]`);
      if (!taskbarIcon) {
        // Icon is not on the taskbar, so add it with an animation
        taskbarIcon = createTaskbarIcon(windowId);
      }
      taskbarIcon.classList.add('active');
    }
      const windows = document.querySelectorAll('.window');
      windows.forEach(win => win.classList.remove('active'));
      windowElement.classList.add('active');

    // Bring the window to the top
    windowElement.style.zIndex = Math.max(...Array.from(windowElements, w => parseInt(w.style.zIndex) || 0)) + 1;
  }); 
}

function createTaskbarIcon(windowId) {
  // Create a new taskbar icon
  const taskbarIconsContainer = document.querySelector('.taskbar .taskbar-icons');
  const newIcon = document.createElement('div');
  newIcon.classList.add('icon');
  newIcon.dataset.id = windowId;

  // Set the icon image (you may need to map windowId to icon src)
  const img = document.createElement('img');
  img.src = getIconSrc(windowId); // Implement this function based on your logic
  img.alt = windowId;

  newIcon.appendChild(img);
  taskbarIconsContainer.appendChild(newIcon);

  // Add click event listener
  newIcon.addEventListener('click', () => {
    openWindow(windowId);
  });

  // Add Windows 7-style animation class
  newIcon.classList.add('taskbar-icon-add-animation');

  return newIcon;
}

function getIconSrc(windowId) {
  // Map window IDs to icon sources
  switch (windowId) {
    case 'Start':
      return '/Icons/world.png';
    case 'User':
      return '/Icons/user.png';
    case 'App':
      return '/Icons/document.png';
    // Add more cases as needed
    default:
      return '/Icons/default.png';
  }
}
