document.addEventListener('DOMContentLoaded', function() {
    // Add loading animation to download buttons
    const downloadButtons = document.querySelectorAll('a[href^="/download/"]');
    
    downloadButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const icon = this.querySelector('i');
            const originalIcon = icon.className;
            const originalText = this.innerHTML;
            
            // Show loading state
            icon.className = 'fas fa-spinner fa-spin';
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Downloading...';
            this.disabled = true;
            
            // Reset after 3 seconds (enough time for download to start)
            setTimeout(() => {
                icon.className = originalIcon;
                this.innerHTML = originalText;
                this.disabled = false;
            }, 3000);
        });
    });
    
    // Add smooth scrolling to anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add animation delay to module cards
    const moduleCards = document.querySelectorAll('.module-card');
    moduleCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
    
    // Progress tracking (localStorage)
    const currentModule = window.location.pathname.match(/\/module\/(\d+)/);
    if (currentModule) {
        const moduleId = parseInt(currentModule[1]);
        localStorage.setItem('lastVisitedModule', moduleId);
        
        // Update progress
        let completedModules = JSON.parse(localStorage.getItem('completedModules') || '[]');
        if (!completedModules.includes(moduleId)) {
            completedModules.push(moduleId);
            localStorage.setItem('completedModules', JSON.stringify(completedModules));
        }
    }
    
    // Show completion badges
    const completedModules = JSON.parse(localStorage.getItem('completedModules') || '[]');
    completedModules.forEach(moduleId => {
        const moduleCard = document.querySelector(`a[href="/module/${moduleId}"]`);
        if (moduleCard && !moduleCard.querySelector('.completed-badge')) {
            const badge = document.createElement('span');
            badge.className = 'badge bg-success ms-2 completed-badge';
            badge.innerHTML = '<i class="fas fa-check"></i> Visited';
            moduleCard.appendChild(badge);
        }
    });
    
    // Search functionality (if needed later)
    const searchInput = document.getElementById('moduleSearch');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const moduleCards = document.querySelectorAll('.module-card');
            
            moduleCards.forEach(card => {
                const title = card.querySelector('.card-title').textContent.toLowerCase();
                const description = card.querySelector('.card-text').textContent.toLowerCase();
                
                if (title.includes(searchTerm) || description.includes(searchTerm)) {
                    card.closest('.col-md-6').style.display = 'block';
                } else {
                    card.closest('.col-md-6').style.display = 'none';
                }
            });
        });
    }
});

// API helper functions
class JavaScriptLearningAPI {
    static async getModules() {
        try {
            const response = await fetch('/api/modules');
            return await response.json();
        } catch (error) {
            console.error('Error fetching modules:', error);
            return [];
        }
    }
    
    static async getModule(id) {
        try {
            const response = await fetch(`/api/module/${id}`);
            return await response.json();
        } catch (error) {
            console.error('Error fetching module:', error);
            return null;
        }
    }
}

// Export for use in other scripts
window.JavaScriptLearningAPI = JavaScriptLearningAPI;