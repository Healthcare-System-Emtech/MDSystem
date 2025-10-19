/* ===================================
   TIP MDS EMR - Student Forms JS
   =================================== */

// Handle registration form submission
function handleRegistrationSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    
    // Validate form data
    if (!validateRegistrationForm(data)) {
        return;
    }
    
    // Submit data (replace with actual API call)
    console.log('Registration data:', data);
    showNotification('Registration submitted successfully! Pending review.', 'success');
    
    // Redirect to dashboard
    setTimeout(() => {
        navigateTo('student-dashboard.html');
    }, 2000);
}

// Validate registration form
function validateRegistrationForm(data) {
    // Check required fields
    if (!data.studentId || !data.fullName) {
        showNotification('Please fill in all required fields', 'error');
        return false;
    }
    
    // Validate email
    if (data.email && !isValidEmail(data.email)) {
        showNotification('Please enter a valid email address', 'error');
        return false;
    }
    
    // Validate phone
    if (data.contact && !isValidPhone(data.contact)) {
        showNotification('Please enter a valid phone number', 'error');
        return false;
    }
    
    return true;
}

// Handle update form submission
function handleUpdateSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    
    // Submit update (replace with actual API call)
    console.log('Update data:', data);
    showNotification('Update submitted successfully! Pending review.', 'success');
    
    // Redirect to dashboard
    setTimeout(() => {
        navigateTo('student-dashboard.html');
    }, 2000);
}

// Initialize forms
document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registrationForm');
    if (registrationForm) {
        registrationForm.addEventListener('submit', handleRegistrationSubmit);
    }
    
    const updateForm = document.getElementById('updateForm');
    if (updateForm) {
        updateForm.addEventListener('submit', handleUpdateSubmit);
    }
    
    // Prevent actual form submission for prototype
    const allForms = document.querySelectorAll('form');
    allForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            showNotification('Form submitted successfully! (Prototype - no data saved)', 'success');
        });
    });
});