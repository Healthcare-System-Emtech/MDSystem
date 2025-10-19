/* ===================================
   TIP MDS EMR - Doctor Appointments JS
   =================================== */

// Load appointments
function loadDoctorAppointments() {
    console.log('Loading appointments...');
    // This would normally fetch from API
}

// View appointment details
function viewAppointmentDetails(appointmentId) {
    console.log('Viewing appointment:', appointmentId);
    showNotification('View appointment details (Feature to be implemented)', 'info');
}

// Mark appointment as complete
function completeAppointment(appointmentId) {
    if (confirm('Mark this appointment as completed?')) {
        console.log('Completing appointment:', appointmentId);
        showNotification('Appointment marked as completed', 'success');
        loadDoctorAppointments();
    }
}

// Cancel appointment
function cancelAppointmentDoctor(appointmentId) {
    const reason = prompt('Please enter reason for cancellation:');
    if (reason) {
        console.log('Cancelling appointment:', appointmentId, 'Reason:', reason);
        showNotification('Appointment cancelled', 'success');
        loadDoctorAppointments();
    }
}

// Add new appointment
function addNewAppointment() {
    showNotification('Add new appointment (Feature to be implemented)', 'info');
}

// Initialize appointments page
document.addEventListener('DOMContentLoaded', function() {
    loadDoctorAppointments();
    
    // Add event listeners to action buttons
    const viewButtons = document.querySelectorAll('.btn-view');
    viewButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            viewAppointmentDetails(this.dataset.id);
        });
    });
    
    const completeButtons = document.querySelectorAll('.btn-approve');
    completeButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            completeAppointment(this.dataset.id);
        });
    });
    
    const cancelButtons = document.querySelectorAll('.btn-reject');
    cancelButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            cancelAppointmentDoctor(this.dataset.id);
        });
    });
});