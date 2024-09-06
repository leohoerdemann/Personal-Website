function openWindow(name, content, width, x, y) {
    // Create a new window component
    const windowComponent = document.createElement('Window');
    
    // Set the name of the window
    windowComponent.title = name;

    windowComponent.Width = width;

    windowComponent.x = x;

    windowComponent.y = y;
    
    // Set the content of the window
    windowComponent.innerHTML += content;
    
    // Set the position of the window
    windowComponent.style.position = position;
    
    // Add the window component to the document body
    document.body.appendChild(windowComponent);
}