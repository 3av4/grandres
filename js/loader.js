// تحميل الأقسام الديناميكية
document.addEventListener('DOMContentLoaded', () => {
    loadSection('nav', 'nav-placeholder');
    loadSection('home', 'home');
    loadSection('members', 'members');
    loadSection('memories', 'memories');
    loadSection('power', 'power');
    loadSection('social', 'social');
    loadSection('footer', 'footer-placeholder');
});

async function loadSection(sectionName, placeholderId) {
    try {
        const response = await fetch(`sections/${sectionName}.html`);
        const html = await response.text();
        document.getElementById(placeholderId).innerHTML = html;
        
        // تحميل البيانات بعد تحميل الهيكل
        if(sectionName === 'members') loadMembers();
        if(sectionName === 'memories') loadMemories();
        if(sectionName === 'power') loadPowerMembers();
    } catch (error) {
        console.error(`Error loading ${sectionName}:`, error);
    }
}