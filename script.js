// Array of background colors to cycle through
const colors = ["#2c003e", "#4a0c84", "#3a105a", "#5f1782", "#8e44ad", "#a8ffdb"];
let colorIndex = 0;

// Function to change the background color
function changeBackgroundColor() {
    document.body.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length; // Cycle through colors
}

// Change color every 5 seconds
setInterval(changeBackgroundColor, 5000);
