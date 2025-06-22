// إدارة الوضع الليلي
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    // تحقق من الوضع المحفوظ
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
        if(themeToggle) themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }

    if(themeToggle) {
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            
            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('darkMode', 'enabled');
                themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            } else {
                localStorage.removeItem('darkMode');
                themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            }
        });
    }
});