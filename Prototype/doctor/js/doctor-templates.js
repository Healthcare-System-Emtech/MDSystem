/* ===================================
   TIP MDS EMR - Doctor Templates JS
   =================================== */

// Handle certificate form submission
function handleCertificateSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    
    if (!data.studentId) {
        showNotification('Please enter Student ID', 'error');
        return;
    }
    
    console.log('Generating certificate:', data);
    showNotification('Certificate generated successfully!', 'success');
}

// Preview certificate
function previewCertificate() {
    const studentId = document.querySelector('input[name="studentId"]').value;
    const templateType = document.querySelector('select[name="templateType"]').value;
    
    if (!studentId) {
        showNotification('Please enter Student ID', 'error');
        return;
    }
    
    console.log('Previewing certificate for:', studentId, 'Type:', templateType);
    showNotification('Certificate preview (Feature to be implemented)', 'info');
}

// Print/Save certificate as PDF
function printCertificate() {
    const studentId = document.querySelector('input[name="studentId"]').value;
    const templateType = document.querySelector('select[name="templateType"]').value;
    
    if (!studentId) {
        showNotification('Please enter Student ID', 'error');
        return;
    }
    
    console.log('Printing certificate for:', studentId, 'Type:', templateType);
    showNotification('Certificate ready for print/download (Feature to be implemented)', 'info');
}

// Create medical certificate
function createMedicalCertificate() {
    showNotification('Create Medical Certificate (Feature to be implemented)', 'info');
}

// Create prescription
function createPrescription() {
    showNotification('Create E-Prescription (Feature to be implemented)', 'info');
}

// Create medical clearance
function createMedicalClearance() {
    showNotification('Create Medical Clearance (Feature to be implemented)', 'info');
}

// Create dental certificate
function createDentalCertificate() {
    showNotification('Create Dental Certificate (Feature to be implemented)', 'info');
}

// Initialize templates page
document.addEventListener('DOMContentLoaded', function() {
    const certificateForm = document.getElementById('certificateForm');
    if (certificateForm) {
        certificateForm.addEventListener('submit', handleCertificateSubmit);
    }
    
    // Add event listeners to preview and print buttons
    const previewButton = document.querySelector('button[type="button"]');
    if (previewButton) {
        previewButton.addEventListener('click', previewCertificate);
    }
});