document.addEventListener('DOMContentLoaded', () => {

    const MIN_Height= 50;

    function minHeight(size){
        return size < MIN_Height ? MIN_Height : size;
    }

    const MIN_Width= 200;

    function minWidth(size){
        return size < MIN_Width ? MIN_Width : size;
    }

    const resizableElements = document.querySelectorAll('.resize-handle');
  
    resizableElements.forEach(handle => {
      handle.addEventListener('mousedown', (e) => {
        const windowElement = handle.closest('.window');

        // Apply user-select: none to prevent text selection during resizing
        document.body.style.userSelect = 'none';
        document.body.style.webkitUserSelect = 'none';
        document.body.style.msUserSelect = 'none';

        let initialX = e.clientX;
        let initialY = e.clientY;
        let initialWidth = parseInt(window.getComputedStyle(windowElement).width, 10);
        let initialHeight = parseInt(window.getComputedStyle(windowElement).height, 10);
  
        function resize(e) {
          if (handle.classList.contains('right')) {
            windowElement.style.width = minWidth(initialWidth + (e.clientX - initialX)) + 'px';
          } else if (handle.classList.contains('left')) {
            windowElement.style.width = minWidth(initialWidth - (e.clientX - initialX)) + 'px';
            if (parseInt(windowElement.style.width) > MIN_Width) {
                windowElement.style.left = e.clientX + 'px';
            }
          } else if (handle.classList.contains('bottom')) {
            windowElement.style.height = minHeight(initialHeight + (e.clientY - initialY)) + 'px';
          } else if (handle.classList.contains('top')) {
            windowElement.style.height = minHeight(initialHeight - (e.clientY - initialY)) + 'px';
            if (parseInt(windowElement.style.height) > MIN_Height) {
              windowElement.style.top = e.clientY + 'px';
            }
          }

           // Handle diagonal resizing
            if (handle.classList.contains('bottom-right')) {
                windowElement.style.width = minWidth(initialWidth + (e.clientX - initialX)) + 'px';
                windowElement.style.height = minHeight(initialHeight + (e.clientY - initialY)) + 'px';
            } else if (handle.classList.contains('bottom-left')) {
                windowElement.style.width = minWidth(initialWidth - (e.clientX - initialX)) + 'px';
                windowElement.style.height = minHeight(initialHeight + (e.clientY - initialY)) + 'px';
                if (parseInt(windowElement.style.width) > MIN_Width) {
                    windowElement.style.left = e.clientX + 'px';
                }
            } else if (handle.classList.contains('top-right')) {
                windowElement.style.width = minWidth(initialWidth + (e.clientX - initialX)) + 'px';
                windowElement.style.height = minHeight(initialHeight - (e.clientY - initialY)) + 'px';
                if (parseInt(windowElement.style.height) > MIN_Height) {
                  windowElement.style.top = e.clientY + 'px';
                }
            } else if (handle.classList.contains('top-left')) {
                windowElement.style.width = minWidth(initialWidth - (e.clientX - initialX)) + 'px';
                windowElement.style.height = minHeight(initialHeight - (e.clientY - initialY)) + 'px';
                if (parseInt(windowElement.style.width) > MIN_Width) {
                    windowElement.style.left = e.clientX + 'px';
                }
                if (parseInt(windowElement.style.height) > MIN_Height) {
                  windowElement.style.top = e.clientY + 'px';
                }
            }
        }
  
        function stopResize() {
           // Remove user-select styles when resizing ends
            document.body.style.userSelect = '';
            document.body.style.webkitUserSelect = '';
            document.body.style.msUserSelect = '';

            window.removeEventListener('mousemove', resize);
            window.removeEventListener('mouseup', stopResize);
        }
  
        window.addEventListener('mousemove', resize);
        window.addEventListener('mouseup', stopResize);
      });
    });
  });
  