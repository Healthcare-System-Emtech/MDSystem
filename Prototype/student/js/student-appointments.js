/* ===================================
   TIP MDS EMR - Student Appointments JS
   =================================== */

// Handle appointment form submission
function handleAppointmentSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    
    // Validate appointment data
    if (!validateAppointmentForm(data)) {
        return;
    }
    
    // Submit appointment request (replace with actual API call)
    console.log('Appointment data:', data);
    showNotification('Appointment request submitted successfully! Pending approval.', 'success');
    
    // Reset form
    event.target.reset();
    
    // Reload appointments list
    loadAppointments();
}

// Validate appointment form
function validateAppointmentForm(data) {
    if (!data.serviceType || !data.preferredDate || !data.timeSlot) {
        showNotification('Please fill in all required fields', 'error');
        return false;
    }
    
    // Check if date is in the future
    const selectedDate = new Date(data.preferredDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (selectedDate < today) {
        showNotification('Please select a future date', 'error');
        return false;
    }
    
    return true;
}

// Load appointments list
function loadAppointments() {
    // This would normally fetch from API
    console.log('Loading appointments...');
    // Update table dynamically if needed
}

// View appointment details
function viewAppointment(appointmentId) {
    console.log('Viewing appointment:', appointmentId);
    showNotification('View appointment details (Feature to be implemented)', 'info');
}

// Cancel appointment
function cancelAppointment(appointmentId) {
    if (confirm('Are you sure you want to cancel this appointment?')) {
        console.log('Cancelling appointment:', appointmentId);
        showNotification('Appointment cancelled successfully', 'success');
        loadAppointments();
    }
}

// Initialize appointments page
document.addEventListener('DOMContentLoaded', function() {
    const appointmentForm = document.getElementById('appointmentForm');
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', handleAppointmentSubmit);
    }
    
    // Add event listeners to action buttons
    const viewButtons = document.querySelectorAll('.btn-view');
    viewButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            viewAppointment(this.dataset.id);
        });
    });
    
    loadAppointments();
});