document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.page-section');

    // Function to handle tab switching logic
    function switchTab(targetId) {
        // 1. Reset all tabs to inactive status
        navLinks.forEach(nav => nav.classList.remove('active'));
        
        // 2. Hide all page sections
        sections.forEach(section => section.classList.add('hidden'));

        // 3. Find the matching link and section, then activate them
        const activeLink = document.querySelector(`.nav-link[data-target="${targetId}"]`);
        const targetSection = document.getElementById(targetId);
        
        if (activeLink) {
            activeLink.classList.add('active');
        }
        if (targetSection) {
            targetSection.classList.remove('hidden');
        }
    }

    // Add click listeners to all nav links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const targetId = link.getAttribute('data-target');
            if (targetId) {
                switchTab(targetId);
                // Update the URL hash without scrolling the page instantly
                history.pushState(null, null, `#${targetId}`);
            }
        });
    });

    // Check if there is a hash in the URL when the page loads (e.g., "#about")
    if (window.location.hash) {
        // Remove the "#" symbol to get just the word
        const initialTab = window.location.hash.substring(1);
        switchTab(initialTab);
    }
});
