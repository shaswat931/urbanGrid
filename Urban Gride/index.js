// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple form validation
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.querySelector('input[placeholder="Your Name"]').value.trim();
    const email = document.querySelector('input[placeholder="Your Email"]').value.trim();
    const message = document.querySelector('textarea[placeholder="Your Message"]').value.trim();
    
    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields.");
    } else if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
    } else {
        alert("Thank you for your message! We will get back to you shortly.");
        this.reset(); // Clear the form
    }
});

// Email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Form validation (you can extend this if needed)
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Please fill out all fields.');
        return;
    }

    // Simulate form submission
    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            access_key: '70c14918-81cb-4896-a629-9315dc1cbef0',
            name: name,
            email: email,
            message: message
        })
    }).then(response => {
        if (response.ok) {
            // Show the success message
            document.getElementById('formMessage').style.display = 'block';

            // Reset form fields
            document.getElementById('contactForm').reset();
        } else {
            alert('Error submitting the form. Please try again.');
        }
    }).catch(error => {
        alert('Something went wrong. Please try again later.');
    });
});

