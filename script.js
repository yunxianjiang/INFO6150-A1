const ageInput = document.getElementById('age-input');
const submitBtn = document.getElementById('submit-btn');
const message = document.getElementById('message');
const ageVerification = document.getElementById('age-verification');
const productPage = document.getElementById('product-page');


function checkAge() {
    // Get age from input
    const ageText = ageInput.value;
    const age = Number.parseInt(ageText, 10);
    
    // Check if it's a valid number
    if (isNaN(age)) {
        message.textContent = 'Please enter a valid number!';
        return;
    }
    
    // Check if user is underage (under 18)
    if (age < 18) {
        message.textContent = 'You must be 18 or older to enter this page!';
    } else {
        // Hide age verification and show product page
        ageVerification.classList.add('hidden');
        productPage.classList.remove('hidden');
    }
}

// When button is clicked, check the age
submitBtn.addEventListener('click', checkAge);
