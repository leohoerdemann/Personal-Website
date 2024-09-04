// Simple example using vanilla JavaScript for dragging elements
document.addEventListener('DOMContentLoaded', (event) => {
    const draggables = document.querySelectorAll('.draggable');
    draggables.forEach(draggable => {
        draggable.addEventListener('mousedown', function(e) {
            let offsetX = e.clientX - parseInt(window.getComputedStyle(this).left);
            let offsetY = e.clientY - parseInt(window.getComputedStyle(this).top);
            function mouseMoveHandler(e) {
                draggable.style.top = (e.clientY - offsetY) + 'px';
                draggable.style.left = (e.clientX - offsetX) + 'px';
            }
            function reset() {
                window.removeEventListener('mousemove', mouseMoveHandler);
                window.removeEventListener('mouseup', reset);
            }
            window.addEventListener('mousemove', mouseMoveHandler);
            window.addEventListener('mouseup', reset);
        });
    });
});
