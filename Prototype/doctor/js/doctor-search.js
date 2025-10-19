/* ===================================
   TIP MDS EMR - Doctor Search JS
   =================================== */

// Handle search form submission
function handleSearchSubmit(event) {
    event.preventDefault();
    
    const studentId = document.getElementById('searchStudentId').value;
    
    if (!studentId) {
        showNotification('Please enter a Student ID', 'error');
        return;
    }
    
    // Search for student (replace with actual API call)
    searchStudent(studentId);
}

// Search student by ID
function searchStudent(studentId) {
    console.log('Searching for student:', studentId);
    
    // Simulate API call
    setTimeout(() => {
        // Show student info section
        const studentInfo = document.getElementById('studentInfo');
        if (studentInfo) {
            studentInfo.style.display = 'block';
            showNotification('Student record found', 'success');
        }
    }, 500);
}

// View record details
function viewRecord(recordId) {
    console.log('Viewing record:', recordId);
    showNotification('View record details (Feature to be implemented)', 'info');
}

// Edit record
function editRecord(recordId) {
    console.log('Editing record:', recordId);
    showNotification('Edit record (Feature to be implemented)', 'info');
}

// Approve pending update
function approvePendingUpdate(updateId) {
    if (confirm('Are you sure you want to approve this update?')) {
        console.log('Approving update:', updateId);
        showNotification('Update approved successfully', 'success');
    }
}

// Reject pending update
function rejectPendingUpdate(updateId) {
    if (confirm('Are you sure you want to reject this update?')) {
        console.log('Rejecting update:', updateId);
        showNotification('Update rejected', 'success');
    }
}

// Initialize search page
document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('searchForm');
    if (searchForm) {
        searchForm.addEventListener('submit', handleSearchSubmit);
    }
    
    // Add event listeners to action buttons
    const viewButtons = document.querySelectorAll('.btn-view');
    viewButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            viewRecord(this.dataset.id);
        });
    });
    
    const approveButtons = document.querySelectorAll('.btn-approve');
    approveButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            approvePendingUpdate(this.dataset.id);
        });
    });
    
    const rejectButtons = document.querySelectorAll('.btn-reject');
    rejectButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            rejectPendingUpdate(this.dataset.id);
        });
    });
});