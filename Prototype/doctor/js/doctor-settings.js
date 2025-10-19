/* ===================================
   TIP MDS EMR - Doctor Settings JS
   =================================== */

// Handle profile update
function handleProfileSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    
    // Validate password if changing
    if (data.newPassword) {
        if (data.newPassword !== data.confirmPassword) {
            showNotification('Passwords do not match', 'error');
            return;
        }
        
        if (!data.currentPassword) {
            showNotification('Please enter current password', 'error');
            return;
        }
    }
    
    console.log('Updating profile:', data);
    showNotification('Profile updated successfully!', 'success');
}

// Handle system configuration update
function handleSystemConfigSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    
    console.log('Updating system configuration:', data);
    showNotification('System configuration updated successfully!', 'success');
}

// Add new user
function addNewUser() {
    showNotification('Add new user (Feature to be implemented)', 'info');
}

// Edit user
function editUser(userId) {
    console.log('Editing user:', userId);
    showNotification('Edit user (Feature to be implemented)', 'info');
}

// Deactivate user
function deactivateUser(userId) {
    if (confirm('Are you sure you want to deactivate this user?')) {
        console.log('Deactivating user:', userId);
        showNotification('User deactivated successfully', 'success');
    }
}

// Create backup
function createBackup() {
    if (confirm('Create database backup now?')) {
        console.log('Creating backup...');
        showNotification('Creating backup... Please wait.', 'info');
        
        setTimeout(() => {
            showNotification('Backup created successfully!', 'success');
        }, 3000);
    }
}

// Load settings
function loadSettings() {
    console.log('Loading settings...');
    // This would normally fetch from API
}

// Initialize settings page
document.addEventListener('DOMContentLoaded', function() {
    loadSettings();
    
    const profileForm = document.getElementById('profileForm');
    if (profileForm) {
        profileForm.addEventListener('submit', handleProfileSubmit);
    }
    
    const systemConfigForm = document.getElementById('systemConfigForm');
    if (systemConfigForm) {
        systemConfigForm.addEventListener('submit', handleSystemConfigSubmit);
    }
    
    // Add event listeners to user management buttons
    const editButtons = document.querySelectorAll('.btn-view');
    editButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            editUser(this.dataset.id);
        });
    });
    
    const deactivateButtons = document.querySelectorAll('.btn-reject');
    deactivateButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            deactivateUser(this.dataset.id);
        });
    });
    
    // Backup button
    const backupButton = document.querySelector('button[type="button"]');
    if (backupButton && backupButton.textContent.includes('Backup')) {
        backupButton.addEventListener('click', createBackup);
    }
});