// Hamburger menu function
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Project data for custom modal
const projectData = {
    'Call Centre': {
        title: 'Call Centre Performance Dashboard',
        description: 'A comprehensive Excel dashboard analyzing call center performance metrics to improve customer service efficiency and satisfaction. This project focuses on key performance indicators (KPIs) that drive customer satisfaction and operational efficiency.',
        imagePath: './assets/dashboard_snap.png',
        keyFindings: [
            'Average handling time reduced by 15% after implementing recommended changes',
            'Customer satisfaction scores improved from 75% to 88%',
            'Identified peak call hours and optimized staff scheduling',
            'Reduced call abandonment rate by 25%',
            'Improved first-call resolution rate to 82%'
        ],
        methodology: 'The dashboard was created using advanced Excel features including PivotTables, Power Query for data transformation, and dynamic charts. Data was collected over a 6-month period, covering over 50,000 customer interactions.',
        technologies: ['Excel', 'Power Query', 'PivotTables', 'DAX', 'Data Visualization']
    }
}

// Custom modal functions for project details
function openCustomModal(projectKey) {
    const modal = document.getElementById('customModal');
    const content = document.getElementById('modalContent');
    const project = projectData[projectKey];

    if (project) {
        content.innerHTML = `
            <div class="project-content">
                <h2>${project.title}</h2>
                <p>${project.description}</p>
                <img src="${project.imagePath}" alt="${project.title}" class="dashboard-image">
                
                <div class="key-findings">
                    <h3>Key Findings and Impact</h3>
                    <ul>
                        ${project.keyFindings.map(finding => `<li>${finding}</li>`).join('')}
                    </ul>
                </div>
                
                <p><strong>Methodology:</strong> ${project.methodology}</p>
                
                <div class="project-tech">
                    <h3>Technologies Used</h3>
                    <div class="tech-stack">
                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;
        modal.style.display = 'block';
    }
}

function closeCustomModal() {
    const modal = document.getElementById('customModal');
    modal.style.display = 'none';
}

// PowerBI modal functions
function openModal(projectId) {
    const modal = document.getElementById('projectModal');
    if (modal) {
        modal.style.display = 'block';
    }
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Global click handler for closing modals
window.onclick = function(event) {
    // Handle PowerBI modal
    const projectModal = document.getElementById('projectModal');
    if (event.target == projectModal) {
        projectModal.style.display = 'none';
    }
    
    // Handle custom modal
    const customModal = document.getElementById('customModal');
    if (event.target == customModal) {
        customModal.style.display = 'none';
    }
};