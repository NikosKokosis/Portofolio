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


// Ensure EmailJS is initialized
(function() {
    emailjs.init("rh43RLHZM7lOG6VEf"); // Replace with your EmailJS public key
 })();
 
 // Handle form submission
 document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
 
    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
 
    // Send email using EmailJS
    emailjs.send("service_39alby9", "template_bimg1xa", {
       from_name: name,
       from_email: email,
       message: message
    }).then(function(response) {
       alert("Message sent successfully!");
    }, function(error) {
       alert("Failed to send message. Please try again later.");
    });
 });


function showSection(sectionId) {
    const sections = ['analysisprojects', 'scienceprojects'];
    const btnDataAnalysis = document.getElementById('btn-dataanalysis');
    const btnDataScience = document.getElementById('btn-datascience');

    sections.forEach(id => {
        document.getElementById(id).style.display = (id === sectionId) ? 'block' : 'none';
    });

    if(sectionId === 'analysisprojects') {
        btnDataAnalysis.classList.add('active-outline');
        btnDataScience.classList.remove('active-outline');
    } else if(sectionId === 'scienceprojects') {
        btnDataScience.classList.add('active-outline');
        btnDataAnalysis.classList.remove('active-outline');
    }
}

window.onload = () => showSection('analysisprojects');


