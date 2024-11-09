// Function to toggle visibility of sections
function showSection(sectionId) {
    const sections = ['analysisprojects', 'scienceprojects'];
    sections.forEach(id => {
        document.getElementById(id).style.display = (id === sectionId) ? 'block' : 'none';
    });
}

// Smooth Scroll Script for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({behavior: "smooth"});
    });
});