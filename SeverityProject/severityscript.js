// Auto-scrolling for the carousel
const carousel = document.querySelector('.carousel');
let scrollInterval;
let isUserInteracting = false;

// Function to start auto-scrolling
function startAutoScroll() {
    scrollInterval = setInterval(() => {
        if (!isUserInteracting) {
            carousel.scrollBy({ left: 1, behavior: 'smooth' });
        }
    }, 20); // Adjust the time interval as needed (20ms)
}

// Start the auto-scrolling when the page loads
startAutoScroll();

// Stop the auto-scrolling if the user interacts with the carousel
carousel.addEventListener('mouseenter', () => {
    isUserInteracting = true;
    clearInterval(scrollInterval); // Stop auto-scrolling
});

carousel.addEventListener('mouseleave', () => {
    // No need to start auto-scrolling again after leaving
    // Just keep it disabled once user interacted
});

// Stop auto-scrolling when the user clicks or touches the carousel
carousel.addEventListener('mousedown', () => {
    isUserInteracting = true;
    clearInterval(scrollInterval);
});

carousel.addEventListener('mouseup', () => {
    // Prevent auto-scrolling from restarting
    // Auto-scroll remains stopped
});

carousel.addEventListener('touchstart', () => {
    isUserInteracting = true;
    clearInterval(scrollInterval);
});

carousel.addEventListener('touchend', () => {
    // Prevent auto-scrolling from restarting
    // Auto-scroll remains stopped
});

// Disable auto-scrolling when the user moves the mouse or drags the scrollbar
carousel.addEventListener('mousemove', () => {
    if (isUserInteracting) {
        clearInterval(scrollInterval); // Stop auto-scrolling
    }
});

// If the user starts scrolling manually, stop auto-scrolling entirely
carousel.addEventListener('scroll', () => {
    if (!isUserInteracting) {
        isUserInteracting = true; // Treat this as an interaction
        clearInterval(scrollInterval); // Stop auto-scrolling
    }
});
