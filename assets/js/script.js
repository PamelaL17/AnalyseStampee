document.addEventListener("DOMContentLoaded", function() {
    // Recupere tous les liens de navigation
    const navLinks = document.querySelectorAll('header nav a');
    
    navLinks.forEach(link => {
        link.addEventListener("click", function(evenement) {
            // Empeche le comportement par defaut
            evenement.preventDefault();
            
            // Masque toutes les sections
            const sections = document.querySelectorAll('main section');
            sections.forEach(section => section.classList.add('hidden'));

            // Affiche la section correspondant au lien cliquer
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.remove('hidden');
            }
        });
    });
});