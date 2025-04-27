// Dark Mode Functionality
function initializeDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    
    // Check for saved user preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
        if(darkModeToggle) darkModeToggle.textContent = '🌞';
    }
    
    // Toggle function
    if(darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            const isDark = body.classList.contains('dark-mode');
            
            darkModeToggle.textContent = isDark ? '🌞' : '🌙';
            localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
        });
    }
}

// Initialize when DOM loads
document.addEventListener('DOMContentLoaded', initializeDarkMode);