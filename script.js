// script.js

// Initialize EmailJS with your user ID (replace 'your-user-id' with your actual user ID from EmailJS)
emailjs.init('arbabb963@gmail.com');

// Function to handle form submission
function handleFormSubmission(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the form element
    const form = document.getElementById('contactForm');

    // Send the form data using EmailJS
    emailjs.sendForm('service_mczdq1u', 'template_ed6xwjp', form)
        .then(function(response) {
            // Display success message
            document.getElementById('responseMessage').textContent = 'Thank you for your message! We will get back to you shortly.';
            document.getElementById('responseMessage').style.color = 'green';
            form.reset(); // Clear the form fields
        }, function(error) {
            // Display error message
            document.getElementById('responseMessage').textContent = 'Oops! Something went wrong. Please try again.';
            document.getElementById('responseMessage').style.color = 'red';
        });
}

// Add event listener to the form
document.getElementById('contactForm').addEventListener('submit', handleFormSubmission);

// Function to toggle visibility of article content
function toggleArticleContent(event) {
    const article = event.currentTarget.nextElementSibling; // Get the article content
    const isVisible = article.style.display === 'block';

    // Toggle visibility
    article.style.display = isVisible ? 'none' : 'block';
}

// Add event listeners to article titles for toggling content
const articleTitles = document.querySelectorAll('.article h3');
articleTitles.forEach(title => {
    title.addEventListener('click', toggleArticleContent);
});

// Optional: Add smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
