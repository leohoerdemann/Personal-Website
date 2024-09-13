// Simple example using vanilla JavaScript for dragging elements
document.addEventListener('DOMContentLoaded', (event) => {
    const draggables = document.querySelectorAll('.draggable');
    draggables.forEach(draggable => {

        const handle = draggable.querySelector('.title-bar');
        handle.addEventListener('mousedown', function(e) {
            // Apply user-select: none to the entire document to prevent text selection during dragging
            if (!this.parentElement.classList.contains('draggable')) {
                return;
            }
            document.body.style.userSelect = 'none';
            document.body.style.webkitUserSelect = 'none';
            document.body.style.msUserSelect = 'none';

            let offsetX = e.clientX - parseInt(window.getComputedStyle(this.parentElement).left);
            let offsetY = e.clientY - parseInt(window.getComputedStyle(this.parentElement).top);
            function mouseMoveHandler(e) {
                draggable.style.top = (e.clientY - offsetY) + 'px';
                draggable.style.left = (e.clientX - offsetX) + 'px';
            }
            function reset() {
                // Remove user-select styles when drag ends
                document.body.style.userSelect = '';
                document.body.style.webkitUserSelect = '';
                document.body.style.msUserSelect = '';

                window.removeEventListener('mousemove', mouseMoveHandler);
                window.removeEventListener('mouseup', reset);
            }
            window.addEventListener('mousemove', mouseMoveHandler);
            window.addEventListener('mouseup', reset);
        });
    });
});