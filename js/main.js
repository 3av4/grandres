// تنعيم التمرير للروابط
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// تحميل الأعضاء
async function loadMembers() {
    try {
        const response = await fetch('data/members.json');
        const members = await response.json();
        let html = '';
        
        members.forEach(member => {
            html += `
                <div class="member-card">
                    <img src="${member.image}" alt="${member.name}" class="member-img">
                    <div class="member-info">
                        <h3>${member.name}</h3>
                        <p>${member.role}</p>
                        <a href="${member.instagram}" class="social-link" target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-instagram"></i> ${member.instagram.split('/').pop()}
                        </a>
                    </div>
                </div>
            `;
        });
        
        document.getElementById('members-container').innerHTML = html;
    } catch (error) {
        console.error('Error loading members:', error);
    }
}

// تحميل الذكريات
async function loadMemories() {
    try {
        const response = await fetch('data/memories.json');
        const memories = await response.json();
        let html = '';
        
        memories.forEach(memory => {
            html += `
                <div class="memory-card">
                    <img src="${memory.image}" alt="${memory.date}" class="memory-img">
                    <div class="memory-overlay">
                        <p>${memory.date}</p>
                    </div>
                </div>
            `;
        });
        
        document.querySelector('.memories-grid').innerHTML = html;
    } catch (error) {
        console.error('Error loading memories:', error);
    }
}

// تحميل أقوى الأعضاء
async function loadPowerMembers() {
    try {
        const response = await fetch('data/power.json');
        const powerMembers = await response.json();
        let html = '';
        
        powerMembers.forEach(member => {
            html += `
                <div class="power-member">
                    <span class="member-name">${member.name}</span>
                    <div class="power-bar-bg">
                        <div class="power-bar" data-percent="${member.percent}"></div>
                    </div>
                    <span class="power-percent">${member.percent}%</span>
                </div>
            `;
        });
        
        document.querySelector('.power-members').innerHTML = html;
        
        // تشغيل تأثير أشرطة القوة
        document.querySelectorAll('.power-bar').forEach(bar => {
            const percent = bar.getAttribute('data-percent');
            bar.style.width = percent + '%';
        });
    } catch (error) {
        console.error('Error loading power members:', error);
    }
}