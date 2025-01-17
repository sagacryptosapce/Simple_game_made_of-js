const canvas = document.getElementById('canvas'); // Get the canvas element
const ctx = canvas.getContext('2d'); // Get the 2D context of the canvas
const canvasWidth = canvas.width = 600; // Get the width of the canvas
const canvasHeight = canvas.height = 600; // Get the height of the canvas
const playerImage = new Image(); // Create a new image object
playerImage.src = 'shadow_dog.png'; // Set the source of the image
let x = 0; // Set the x position of the image
function animate() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight); // Clear the canvas
    ctx.drawImage(playerImage, x, 0); // Draw the image
    x += 1; // Increment the x position
    if (x > canvasWidth) { // If the image is off the screen
        x = -playerImage.width; // Reset the x position
    }
    requestAnimationFrame(animate); // Call the animate function
    }
  
animate(); // Call the animate function
