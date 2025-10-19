/* ===================================
   TIP MDS EMR - Doctor Pending Requests JS
   =================================== */

// Load pending requests
function loadPendingRequests() {
    console.log('Loading pending requests...');
    // This would normally fetch from API
}

// View pending request details
function viewPendingRequest(requestId) {
    console.log('Viewing request:', requestId);
    showNotification('View request details (Feature to be implemented)', 'info');
}

// Approve form request
function approveFormRequest(requestId) {
    if (confirm('Are you sure you want to approve this request?')) {
        console.log('Approving form request:', requestId);
        showNotification('Form request approved successfully', 'success');
        loadPendingRequests();
    }
}

// Reject form request
function rejectFormRequest(requestId) {
    const reason = prompt('Please enter reason for rejection:');
    if (reason) {
        console.log('Rejecting form request:', requestId, 'Reason:', reason);
        showNotification('Form request rejected', 'success');
        loadPendingRequests();
    }
}

// Approve appointment request
function approveAppointmentRequest(appointmentId) {
    if (confirm('Are you sure you want to approve this appointment?')) {
        console.log('Approving appointment:', appointmentId);
        showNotification('Appointment approved successfully', 'success');
        loadPendingRequests();
    }
}

// Decline appointment request
function declineAppointmentRequest(appointmentId) {
    const reason = prompt('Please enter reason for declining:');
    if (reason) {
        console.log('Declining appointment:', appointmentId, 'Reason:', reason);
        showNotification('Appointment declined', 'success');
        loadPendingRequests();
    }
}

// Initialize pending page
document.addEventListener('DOMContentLoaded', function() {
    loadPendingRequests();
    
    // Add event listeners to action buttons
    const viewButtons = document.querySelectorAll('.btn-view');
    viewButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            viewPendingRequest(this.dataset.id);
        });
    });
    
    const approveButtons = document.querySelectorAll('.btn-approve');
    approveButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const parentRow = this.closest('tr');
            const type = parentRow.querySelector('td:nth-child(4)')?.textContent || 
                        parentRow.querySelector('td:nth-child(5)')?.textContent;
            
            if (type && type.includes('Appointment')) {
                approveAppointmentRequest(this.dataset.id);
            } else {
                approveFormRequest(this.dataset.id);
            }
        });
    });
    
    const rejectButtons = document.querySelectorAll('.btn-reject');
    rejectButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const parentRow = this.closest('tr');
            const type = parentRow.querySelector('td:nth-child(4)')?.textContent || 
                        parentRow.querySelector('td:nth-child(5)')?.textContent;
            
            if (type && type.includes('Appointment')) {
                declineAppointmentRequest(this.dataset.id);
            } else {
                rejectFormRequest(this.dataset.id);
            }
        });
    });
});