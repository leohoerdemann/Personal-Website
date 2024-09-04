// Get the element that you want to resize
const element = document.getElementById('your-element-id');

// Variables to store the initial mouse position and element dimensions
let initialX;
let initialY;
let initialWidth;
let initialHeight;

// Function to handle the mouse down event
function handleMouseDown(event) {
    // Store the initial mouse position
    initialX = event.clientX;
    initialY = event.clientY;

    // Store the initial element dimensions
    initialWidth = element.offsetWidth;
    initialHeight = element.offsetHeight;

    // Attach the mouse move and mouse up event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
}

// Function to handle the mouse move event
function handleMouseMove(event) {
    // Calculate the distance moved by the mouse
    const deltaX = event.clientX - initialX;
    const deltaY = event.clientY - initialY;

    // Calculate the new element dimensions
    const newWidth = initialWidth + deltaX;
    const newHeight = initialHeight + deltaY;

    // Update the element dimensions
    element.style.width = newWidth + 'px';
    element.style.height = newHeight + 'px';
}

// Function to handle the mouse up event
function handleMouseUp() {
    // Remove the mouse move and mouse up event listeners
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
}

// Attach the mouse down event listener to the element
element.addEventListener('mousedown', handleMouseDown);