// Simple JS for Bart Gamez
console.log("Bart Gamez website loaded!");

// Example: alert on feature click
document.addEventListener("DOMContentLoaded", () => {
    const features = document.querySelectorAll('.feature-box');
    features.forEach(box => {
        box.addEventListener('click', () => {
            alert(`You clicked on: ${box.textContent}`);
        });
    });
});
