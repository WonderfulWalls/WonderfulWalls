function showCategory(category) {
    document.getElementById('dark').style.display = 'none';
    document.getElementById('light').style.display = 'none';
    document.getElementById(category).style.display = 'block';
}

function openModal(src) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
        <span class="close" onclick="closeModal()">&times;</span>
        <img id="modalImage" src="${src}" style="max-width: 90%; max-height: 90%;">
        <div class="download-container">
            <p style="color: yellow;">Download for ₹1</p>
            <a href="upi://pay?pa=8010688614@fam&pn=WonderfulWalls&mc=1234&tid=1234567890&am=1&tid=1234&url=https://yourwebsite.com" class="download-button">Pay Now</a>
        </div>
    `;
    document.body.appendChild(modal);
    modal.style.display = 'block';
}

function closeModal() {
    const modals = document.getElementsByClassName('modal');
    Array.from(modals).forEach(modal => {
        modal.style.display = 'none';
        document.body.removeChild(modal); // Remove modal from DOM
    });
}

// Close the modal when clicking outside the image
window.onclick = function(event) {
    const modals = document.getElementsByClassName('modal');
    if (event.target.className === 'modal') {
        closeModal();
    }
}

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
};

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

function rate(stars) {
    const message = document.getElementById('rating-message');
    const starElements = document.querySelectorAll('.star');

    // Remove filled class from all stars
    starElements.forEach((star, index) => {
        if (index < stars) {
            star.classList.add('filled'); // Add filled class for rated stars
        } else {
            star.classList.remove('filled'); // Remove filled class for un-rated stars
        }
    });

    message.textContent = `Thank you for rating us ${stars} star${stars > 1 ? 's' : ''}!`;
}
function submitFeedback() {
    const feedback = document.getElementById('feedback').value;
    const thankYouMessage = document.getElementById('thank-you-message');

    thankYouMessage.textContent = "Thank you for your feedback!";
    thankYouMessage.style.display = 'block';
    
    // Optionally, you can process the feedback here (e.g., send it to a server)
    console.log(feedback); // For demonstration purposes, logs to console
}