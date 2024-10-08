document.addEventListener('DOMContentLoaded', (event) => {
    const windows = document.querySelectorAll('.window');
    windows.forEach(Window => {
      const maxButton = Window.querySelector('.maximize-button');
      maxButton?.addEventListener('click', () => {
        window.maximizeWindow(Window.id, Window.dataset.number);
      });
        
    });
});
  

window.maximizeWindow = function(windowId, windowNumber) {
  const windowElement = document.querySelector(`#${windowId}[data-number="${windowNumber}"]`);
  
    if (windowElement) {
        if(windowElement.dataset.maximized === 'true') {
            windowElement.style.width = windowElement.dataset.prevwidth;
            windowElement.style.height = windowElement.dataset.prevheight;
            windowElement.style.top = windowElement.dataset.prevtop;
            windowElement.style.left = windowElement.dataset.prevleft;
            windowElement.dataset.maximized = 'false';
        } else {
            windowElement.dataset.prevwidth = windowElement.style.width;
            windowElement.dataset.prevheight = windowElement.style.height;
            windowElement.dataset.prevleft = windowElement.style.left;
            windowElement.dataset.prevtop = windowElement.style.top;


            windowElement.style.width = '100%';
            windowElement.style.height = '100%';
            windowElement.style.top = '0';
            windowElement.style.left = '0';
            windowElement.dataset.maximized = 'true';
        }
        
    }
  };
  