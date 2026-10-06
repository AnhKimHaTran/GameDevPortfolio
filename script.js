document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.page-section');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            
            // 1. Reset all tabs to inactive status
            navLinks.forEach(nav => nav.classList.remove('active'));
            
            // 2. Set the clicked tab as active
            link.classList.add('active');

            // 3. Hide all page sections
            sections.forEach(section => section.classList.add('hidden'));

            // 4. Find the matching section ID and unhide it
            const targetId = link.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.classList.remove('hidden');
            }
        });
    });
});
